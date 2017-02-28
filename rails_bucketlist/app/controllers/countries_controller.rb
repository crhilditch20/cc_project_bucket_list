class CountriesController < ApplicationController

  before_action :authenticate_user!

  def index
    countries = current_user.bucket_list_countries
    render  :json => countries.as_json({
        include: :country
        })
  end

  def show
    bucketListCountry = BucketListCountry.find(params[:id])
    # country = getCountryObject(params[:id])
    render  :json => bucketListCountry.as_json({
        include: :country
        })
  end

  def create
    object = country_params()
    visitLength = object["visitLength"]
    season = object["season"]
    countryObject = {
      name: object["name"],
      region: object["region"],
      imageURL: object["imageURL"],
      mapURL: object["mapURL"]
    }
    newCountry = Country.create(countryObject)
    listCountry = BucketListCountry.create({
      country: newCountry,
      user: current_user,
      visitLength: visitLength,
      season: season
      })
    render({json: listCountry.as_json({
      include: :country
      })
    })
  end

  # def update
  #   bucketListCountry = BucketListCountry.find(params[:id]);
  #     if bucketListcountry.update_attributes(country_params())
  #       render({json: bucketListCountry})
  #     else
  #       render({json: :update_failed})
  #     end
  # end

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

  def getCountryObject(id)
    listCountry = BucketListCountry.find(id)
    actualCountry = Country.find(listCountry.country_id)
    return actualCountry
  end

end