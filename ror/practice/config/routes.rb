Rails.application.routes.draw do
  resources :people
  resources :events do
    resources :attendees, :controller => 'event_attendees'
    resource :location, :controller => 'event_locations'
    collection do
      get :latest
      post :bulk_delete
    end
    member do
      get :dashboard
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "welcome/say_hello" => "welcome#say"
  get "welcome" => "welcome#index"
  root :to => "welcome#index"
end
