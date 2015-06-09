Rails.application.routes.draw do
  root :to => 'site#root'

  resources :users, only: [:create, :new]
  resources :bikes, only: [:index]
  resource :session, only: [:create, :destroy, :new]
end
