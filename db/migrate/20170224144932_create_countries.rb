class CreateCountries < ActiveRecord::Migration[5.0]
  def change
    create_table :countries do |t|
      t.string :name
      t.string :region
      t.string :season
      t.integer :visitLength
      t.string :mapURL
      t.string :imageURL

      t.timestamps
    end
  end
end
