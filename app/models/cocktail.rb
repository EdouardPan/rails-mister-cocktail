class Cocktail < ApplicationRecord
  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses
  has_many :reviews, dependent: :destroy
  validates :name, presence: true, uniqueness: true
  validates :url_img, presence: true

  def average_rating
    if self.reviews == []
      0
    else
      self.reviews.map { |review| review.rating }.sum / self.reviews.count
    end
  end

end
