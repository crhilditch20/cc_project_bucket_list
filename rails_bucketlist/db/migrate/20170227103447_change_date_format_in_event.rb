class ChangeDateFormatInEvent < ActiveRecord::Migration[5.0]
  def change
    change_column :events, :date, :date
  end
end
