Rails.application.routes.draw do
  devise_for :users

  get 'bucketlists' => 'bucketlists#index'

  resources(:countries)
  resources(:experiences)
  resources(:events)

end
