Rails.application.routes.draw do
  
  resources :posts, only: [:index, :show, :destroy, :update, :create]
  resources :users, only: [:index, :show, :destroy, :update]
  
  post "/signup", to: "users#create"
  get "/auth", to: "users#auth_show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/sidebarinfo", to: "sessions#show"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
