class Country < ApplicationRecord
  has_many :bucket_list_countries
  has_many :listed_by, through: :bucket_list_countries, source: :user
  
end
