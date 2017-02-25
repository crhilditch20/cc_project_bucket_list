class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
      t.string :venue
      t.string :mapURL

      t.timestamps
    end
  end
end
