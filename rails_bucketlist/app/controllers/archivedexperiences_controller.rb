class ArchivedexperiencesController < ApplicationController

  before_action :authenticate_user!

  def create
    archiveExperienceData = archive_experience_params()
    archiveExperience = ArchivedExperience.create({
      experience_id: archiveExperienceData["experience_id"],
      user: current_user,
      best_memory: archiveExperienceData["best_memory"],
      best_photo: archiveExperienceData["best_photo"]
      })
    render({json: archiveExperience.as_json
      })
  end

  private
  def archive_experience_params
    params.require(:archivedexperience).permit([:experience_id, :best_memory, :best_photo])
  end

end