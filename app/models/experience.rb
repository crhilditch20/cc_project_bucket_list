class Experience < ApplicationRecord
  has_many :bucket_list_experiences
  has_many :listed_by, through: :bucket_list_experiences, source: :user
end
