class CreateBucketListCountries < ActiveRecord::Migration[5.0]
  def change
    create_table :bucket_list_countries do |t|
      t.integer :country_id
      t.integer :user_id

      t.timestamps
    end
  end
end
