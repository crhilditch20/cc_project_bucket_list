class Country < ApplicationRecord
  has_many :bucket_list_countries
  has_many :listed_by, through: :bucket_list_countries, source: :user

  has_many :archived_countries
  has_many :archived_by, through: :archived_countries, source: :user
  
end
