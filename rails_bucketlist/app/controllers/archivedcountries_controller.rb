class ArchivedcountriesController < ApplicationController

  before_action :authenticate_user!

  def create
    archiveCountryData = archive_country_params()
    archiveCountry = ArchiveCountry.create({
      country_id: archiveCountryData["country_id"],
      user: current_user,
      best_memory: archiveCountryData["best_memory"],
      best_photo: archiveCountryData["best_photo"]
      })
    render({json: archiveCountry.as_json
      })
  end

  private
  def archive_country_params
    params.require(:country).permit([:country_id, :best_memory, :best_photo])
  end

end