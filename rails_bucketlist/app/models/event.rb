class Event < ApplicationRecord
  has_many :bucket_list_events
  has_many :listed_by, through: :bucket_list_events, source: :user

  has_many :archived_events
  has_many :archived_by, through: :archived_events, source: :user
end
