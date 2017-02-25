class ExperiencesController < ApplicationController

  before_action :authenticate_user!

  def index
    experiences = current_user.bucket_list_experiences
    render  :json => experiences.as_json({
        include: :experience
        })
  end

  def show
    experience = BucketListExperience.find(params[:id])
    render({json: experience.as_json({
      include: :experience
      })
    })
  end

  def create
    newExperience = Experience.create(experience_params())
    listExperience = BucketListExperience.create({
      experience: newExperience,
      user: current_user
      })
    render({json: listExperience.as_json({
      include: :experience
      })
    })
  end

  private
  def experience_params
    params.require(:experience).permit([:title, :description, :season])
  end

end