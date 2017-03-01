class ArchivedcountriesController < ApplicationController

  before_action :authenticate_user!

  def create


  end

  private
  def archive_country_params
    params.require(:country).permit([:country_id, :user_id, :best_memory, :best_photo])
  end

end