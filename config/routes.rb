Rails.application.routes.draw do
  devise_for :users

  get 'bucketlists' => 'bucketlists#index'

end
