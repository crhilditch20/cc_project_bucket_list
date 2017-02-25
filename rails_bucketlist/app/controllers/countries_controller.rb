class CountriesController < ApplicationController

  before_action :authenticate_user!

  def getCountryObject(id)
    listCountry = BucketListCountry.find(id)
    actualCountry = Country.find(listCountry.country_id)
    return actualCountry
  end

  def index
    countries = current_user.bucket_list_countries
    render  :json => countries.as_json({
        include: :country
        })
  end

  def show
    country = getCountryObject(params[:id])
    render({json: country})
  end

  def create
    newCountry = Country.create(country_params())
    listCountry = BucketListCountry.create({
      country: newCountry,
      user: current_user
      })
    render({json: listCountry.as_json({
      include: :country
      })
    })
  end

#need to test this to make sure the original country in the database is being updated and the bucketlistcountry object will still point to it
  def update
    country = getCountryObject(params[:id])
      if country.update_attributes(country_params())
        render({json: country})
      else
        render({json: :update_failed})
      end
  end

#do I need to also delete the BucketListCountry?
  def destroy
    country = getCountryObject(params[:id])
      if country.destroy!
        render({json: {status: :success}})
      else
        render({json: {status: :delete_failed}})
      end
  end

  private
  def country_params
    params.require(:country).permit([:name, :region, :season, :visitLength, :mapURL, :imageURL])
  end

end