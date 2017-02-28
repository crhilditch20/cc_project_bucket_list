class BucketlistcountriesController < ApplicationController

  before_action :authenticate_user!

  def index
    countries = current_user.bucket_list_countries
    render  :json => countries.as_json({
        include: :country
        })
  end

  def show
    bucketListCountry = BucketListCountry.find(params[:id])
    render  :json => bucketListCountry.as_json({
        include: :country
        })
  end

  def update
      object = params
      bucketListCountry = BucketListCountry.find(params[:id])
        if bucketListCountry.update_attributes({
          visitLength: object['visitLength'],
          season: object['season']
          })
          render({json: bucketListCountry})
        else
          render({json: :update_failed})
        end
  end

end