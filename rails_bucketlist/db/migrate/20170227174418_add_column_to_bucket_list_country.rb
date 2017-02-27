class AddColumnToBucketListCountry < ActiveRecord::Migration[5.0]
  def change
    add_column :bucket_list_countries, :visitLength, :integer
  end
end
