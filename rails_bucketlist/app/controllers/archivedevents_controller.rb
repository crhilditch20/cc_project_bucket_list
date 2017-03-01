class ArchivedeventsController < ApplicationController

  before_action :authenticate_user!

  def create
    archiveEventData = archive_event_params()
    archiveEvent = ArchivedEvent.create({
      event_id: archiveEventData["event_id"],
      user: current_user,
      best_memory: archiveEventData["best_memory"],
      best_photo: archiveEventData["best_photo"]
      })
    render({json: archiveEvent.as_json
      })
  end

  private
  def archive_event_params
    params.require(:archivedEvent).permit([:event_id, :best_memory, :best_photo])
  end

end