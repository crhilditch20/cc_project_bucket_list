Rails.application.routes.draw do
  devise_for :users

  get 'bucketlists' => 'bucketlists#index'

  resources (:users)
  resources(:countries)
  resources(:experiences)
  resources(:events)
  resources(:bucketlistcountries)
  resources(:archivedcountries)
  resources(:archivedexperiences)
  resources(:archivedevents)

end
