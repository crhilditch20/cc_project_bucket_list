class AddImageToEvent < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :imageURL, :string
  end
end
