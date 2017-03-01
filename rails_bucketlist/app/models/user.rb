class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
         
  has_many :bucket_list_countries
  has_many :countries, through: :bucket_list_countries, source: :country

  has_many :bucket_list_experiences
  has_many :experiences, through: :bucket_list_experiences, source: :experience

  has_many :bucket_list_events
  has_many :events, through: :bucket_list_events, source: :event

  has_many :archived_countries
  has_many :countries, through: :archived_countries, source: :country
end
