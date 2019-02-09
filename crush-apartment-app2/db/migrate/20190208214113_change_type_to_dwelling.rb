class ChangeTypeToDwelling < ActiveRecord::Migration[5.2]
  def self.up
    rename_column :apartments, :type, :dwelling
  end

  def self.down
    rename_column :apartments, :dwelling, :type
  end
end
