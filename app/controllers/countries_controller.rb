class CountriesController < ApplicationController

  before_action :authenticate_user!

  def index
    countries = current_user.bucket_list_countries
    render :json => countries.as_json({
      include: :country
      })
  end

end