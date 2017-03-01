class CreateArchivedExperiences < ActiveRecord::Migration[5.0]
  def change
    create_table :archived_experiences do |t|
      t.integer :experience_id
      t.integer :user_id
      t.text :best_memory
      t.string :best_photo

      t.timestamps
    end
  end
end
