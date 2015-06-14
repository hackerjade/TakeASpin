Rails.application.routes.draw do
  root :to => 'site#root'

  resources :users, only: [:create, :new]
  get '/tour', to: 'users#tour'
  resource :session, only: [:create, :destroy, :new]

  namespace :api, defaults: { format: :json } do
    get 'bikes/search', to: 'bikes#search'
    resources :bikes, only: [:index, :show]
    resources :bike_rental_requests, only: [:index, :show, :create, :destroy]
  end
end
