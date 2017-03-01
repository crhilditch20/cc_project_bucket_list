class CreateArchivedEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :archived_events do |t|
      t.integer :event_id
      t.integer :user_id
      t.text :best_memory
      t.string :best_photo

      t.timestamps
    end
  end
end
