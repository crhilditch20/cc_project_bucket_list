class ExperiencesController < ApplicationController

  before_action :authenticate_user!

  def getExperienceObject(id)
    listExperience = BucketListExperience.find(id)
    actualExperience = Experience.find(listExperience.experience_id)
    return actualExperience
  end

  def index
    experiences = current_user.bucket_list_experiences
    render  :json => experiences.as_json({
        include: :experience
        })
  end

  def show
    experience = getExperienceObject(params[:id])
    render({json: experience})
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

    def update
      experience = getExperienceObject(params[:id])
        if experience.update_attributes(experience_params())
          render({json: experience})
        else
          render({json: :update_failed})
        end
    end

#this might not be complete - need to delete BucketListExperience?
    def destroy
      experience = getExperienceObject(params[:id])
        if experience.destroy!
          render({json: {status: :success}})
        else
          render({json: {status: :delete_failed}})
        end
    end

  private
  def experience_params
    params.require(:experience).permit([:title, :description, :season])
  end

end