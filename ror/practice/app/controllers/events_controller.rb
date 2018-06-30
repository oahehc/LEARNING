class EventsController < ApplicationController
    before_action :set_event, :only => [ :show, :edit, :update, :destroy]

    def index
        if params[:keyword]
            @events = Event.where( [ "name like ?", "%#{params[:keyword]}%" ] )
        else
            @events = Event.all
        end
        @events = @events.page(params[:page]).per(5)
    end

    def new
        @event = Event.new
    end
    def create
        @event = Event.new(event_params)
        if @event.save
            flash[:notice] = "event was successfully created"
            redirect_to events_url
        else
            render :action => :new
        end
    end

    def show
        @page_title = 'Event: ' + @event.name
    end

    def edit
    end
    def update
        if @event.update(event_params)
            flash[:notice] = "event was successfully updated"
            redirect_to event_url(@event)
        else
            render :action => :edit
        end
    end

    def destroy
        @event = Event.find(params[:id])
        @event.destroy
        flash[:alert] = "event was successfully deleted"
        redirect_to events_url
    end

    def latest
        @events = Event.order("id DESC").limit(3)
    end
    def bulk_delete
        Event.destroy_all
        redirect_to events_path
    end
    def dashboard
        @event = Event.find(params[:id])
    end

    private
    def event_params
        params.require(:event).permit(:name, :description, :category_id, :location_attributes => [:id, :name, :_destroy], :group_ids => [])
    end
    def set_event
        @event = Event.find(params[:id])
    end
end