class RemoveSeasonFromCountry < ActiveRecord::Migration[5.0]
  def change
    remove_column :countries, :season
  end
end
