class CreateBucketListExperiences < ActiveRecord::Migration[5.0]
  def change
    create_table :bucket_list_experiences do |t|
      t.integer :experience_id
      t.integer :user_id

      t.timestamps
    end
  end
end
