class ArchivedCountry < ApplicationRecord
  belongs_to :country
  belongs_to :user
end
