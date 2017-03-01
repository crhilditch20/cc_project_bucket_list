class BucketlisteventsController < ApplicationController

  before_action :authenticate_user!

  def index
    events = current_user.bucket_list_events
    render  :json => events.as_json({
        include: :event
        })
  end

  def show
    bucketListEvent = BucketListEvent.find(params[:id])
    render  :json => bucketListEvent.as_json({
        include: :event
        })
  end

  def destroy
      archivedEvent = Event.find(params[:id])
      entryToDelete = BucketListEvent.where({event: archivedEvent})

        if BucketListEvent.destroy(entryToDelete)
          render({json: {status: :success}})
        else
          render({json: {status: :delete_failed}})
        end
  end

end