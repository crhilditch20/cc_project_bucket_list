class AddArchiveColumnToBucketListCountry < ActiveRecord::Migration[5.0]
  def change
    add_column :bucket_list_countries, :archived, :boolean
  end
end
