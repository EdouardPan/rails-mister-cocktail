class AddUrlImgToCocktails < ActiveRecord::Migration[5.2]
  def change
    add_column :cocktails, :url_img, :string
  end
end
