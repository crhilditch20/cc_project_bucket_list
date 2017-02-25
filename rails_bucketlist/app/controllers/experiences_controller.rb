class ExperiencesController < ApplicationController

  before_action :authenticate_user!

  def index
    experiences = current_user.bucket_list_experiences
    render  :json => experiences.as_json({
        include: :experience
        })
  end

end