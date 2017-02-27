class ChangeColumnsInCountry < ActiveRecord::Migration[5.0]
  def change
    remove_column :countries, :visitLength
  end
end
