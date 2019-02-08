class AddUserIdToApartments < ActiveRecord::Migration[5.2]
  def change
        add_column :apartments, :user_id, :integer
  end
end
