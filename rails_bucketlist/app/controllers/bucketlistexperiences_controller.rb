class BucketlistexperiencesController < ApplicationController

  before_action :authenticate_user!

  def index
    experiences = current_user.bucket_list_experiences
    render  :json => experiences.as_json({
        include: :experience
        })
  end

  def show
    bucketListExperience = BucketListExperience.find(params[:id])
    render  :json => bucketListExperience.as_json({
        include: :experience
        })
  end

  def destroy
      archivedExperience = Experience.find(params[:id])
      entryToDelete = BucketListExperience.where({experience: archivedExperience})

        if BucketListExperience.destroy(entryToDelete)
          render({json: {status: :success}})
        else
          render({json: {status: :delete_failed}})
        end
  end

end