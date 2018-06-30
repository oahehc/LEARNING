module EventsHelper
  def setup_event(event)
    event.build_location unless event.location
    event
  end
end
