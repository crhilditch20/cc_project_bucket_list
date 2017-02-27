class ChangeDateAgainInEvent < ActiveRecord::Migration[5.0]
  def change
    change_column :events, :date, :string
  end
end
