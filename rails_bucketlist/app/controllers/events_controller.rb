class EventsController < ApplicationController

  before_action :authenticate_user!

  def index
    events = current_user.bucket_list_events
    render  :json => events.as_json({
        include: :event
        })
  end

  def show
    event = BucketListEvent.find(params[:id])
    render({json: event.as_json({
      include: :event
      })
    })
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


  private
  def event_params
    params.require(:event).permit([:title, :description, :venue, :mapURL, :date])
  end

end