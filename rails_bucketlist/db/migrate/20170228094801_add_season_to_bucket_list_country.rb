class AddSeasonToBucketListCountry < ActiveRecord::Migration[5.0]
  def change
    add_column :bucket_list_countries, :season, :string
  end
end
