class BucketListCountry < ApplicationRecord
  belongs_to :country
  belongs_to :user
end
