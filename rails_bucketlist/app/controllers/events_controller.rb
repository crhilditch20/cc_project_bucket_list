class EventsController < ApplicationController

  before_action :authenticate_user!

  def index
    events = current_user.bucket_list_events
    render  :json => events.as_json({
        include: :event
        })
  end

end