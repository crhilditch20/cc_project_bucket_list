class CreateArchivedCountries < ActiveRecord::Migration[5.0]
  def change
    create_table :archived_countries do |t|
      t.integer :user_id
      t.integer :country_id
      t.text :best_memory
      t.string :best_photo

      t.timestamps
    end
  end
end
