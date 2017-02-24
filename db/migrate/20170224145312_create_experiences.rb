class CreateExperiences < ActiveRecord::Migration[5.0]
  def change
    create_table :experiences do |t|
      t.string :title
      t.text :description
      t.string :season

      t.timestamps
    end
  end
end
