Rails.application.routes.draw do
  resources :apartments, constraints: ->(request){ !request.format.html? }
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/apartment_list', to: 'pages#unprotected'
  get '*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
  root to: 'pages#unprotected'
end
