class Experience < ApplicationRecord
  has_many :bucket_list_experiences
  has_many :listed_by, through: :bucket_list_experiences, source: :user

  has_many :archived_experiences
  has_many :archived_by, through: :archived_experiences, source: :user
end
