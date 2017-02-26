class AddImageToExperience < ActiveRecord::Migration[5.0]
  def change
    add_column :experiences, :imageURL, :string
  end
end
