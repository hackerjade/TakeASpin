Rails.application.routes.draw do
  root :to => 'site#root'

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :destroy, :new]

  namespace :api, defaults: { format: :json } do
    get 'bikes/search', to: 'bikes#search'
    resources :bikes, only: [:index, :show]
  end
end
