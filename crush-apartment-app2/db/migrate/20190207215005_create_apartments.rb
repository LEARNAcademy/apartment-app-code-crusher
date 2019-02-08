class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.integer :price
      t.timestamp :list_date
      t.date :avail_date
      t.string :address_1
      t.string :address_2
      t.string :city
      t.string :state
      t.integer :zip
      t.string :type
      t.integer :beds
      t.float :baths
      t.string :pets
      t.string :manager
      t.integer :phone
      t.string :email

      t.timestamps
    end
  end
end
