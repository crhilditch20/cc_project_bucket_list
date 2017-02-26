class EventsController < ApplicationController

  before_action :authenticate_user!

  def getEventObject(id)
    listEvent = BucketListEvent.find(id)
    actualEvent = Event.find(listEvent.event_id)
    return actualEvent
  end

  def index
    events = current_user.bucket_list_events
    render  :json => events.as_json({
        include: :event
        })
  end

  def show
    event = getEventObject(params[:id])
    render({json: event})
  end

  def create
    newEvent = Event.create(event_params())
    listEvent = BucketListEvent.create({
      event: newEvent,
      user: current_user
      })
    render({json: listEvent.as_json({
      include: :event
      })
    })
  end

  def update
     event = getEventObject(params[:id])
        if event.update_attributes(event_params())
           render({json: event})
        else
           render({json: :update_failed})
        end
  end

 #this might not be complete - need to delete BucketListevent?
    def destroy
      event = getEventObject(params[:id])
        if event.destroy!
          render({json: {status: :success}})
        else
          render({json: {status: :delete_failed}})
        end
     end


  private
  def event_params
    params.require(:event).permit([:title, :description, :venue, :mapURL, :date, :imageURL])
  end

end