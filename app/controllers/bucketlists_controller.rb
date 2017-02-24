class BucketlistsController < ApplicationController

  before_action :authenticate_user!

  def index
    countries = current_user.bucket_list_countries
    experiences = current_user.bucket_list_experiences
    render  :json => [
      countries.as_json({
        include: :country
        }),
      experiences.as_json({
        include: :experience
        })
    ]
    
  end


end