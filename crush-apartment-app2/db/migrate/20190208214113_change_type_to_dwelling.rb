class ChangeTypeToDwelling < ActiveRecord::Migration[5.2]
  def self.up
    rename_column :apartments, :type, :dwelling
  end

  def self.down
  end
end
