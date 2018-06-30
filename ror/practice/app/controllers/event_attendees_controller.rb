class EventAttendeesController < ApplicationController
  before_action :find_event
  
  def index
    @attendees = @event.attendees
  end
  
  def show
    @attendee = @event.attendees.find(params[:id])
  end
  
  def new
    @attendee = @event.attendees.build
  end
  
  def create
    @attendee = @event.attendees.build(attendee_params)
    if @attendee.save
      redirect_to event_attendees_url(@event)
    else
      render :action => :new
    end
  end
  
  def edit
    @attendee = @event.attendees.find( params[:id] )
  end
  
  def update
    @attendee = @event.attendees.find( params[:id] )
  
    if @attendee.update( attendee_params )
      redirect_to event_attendees_url( @event )
    else
      render :action => :edit
    end
  
  end
  
  def destroy
    @attendee = @event.attendees.find( params[:id] )
    @attendee.destroy
  
    redirect_to event_attendees_url( @event )
  end
  
  protected
  def find_event
    @event = Event.find(params[:event_id])
  end
  
  def attendee_params
    params.require(:attendee).permit(:name)
  end
end
