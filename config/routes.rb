Rails.application.routes.draw do
  root :to => 'site#root'

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :destroy, :new]

  namespace :api, defaults: { format: :json } do
    resources :bikes, only: [:index]
  end
end
