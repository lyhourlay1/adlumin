Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :event_logs, only:[:create, :index, :show, :destroy] do
    resources :comments, only:[:create, :index, :update]
  end

  resources :comments, only:[:destroy]
  
  root to: "static_pages#root"

end
