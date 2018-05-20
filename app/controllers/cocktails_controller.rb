class CocktailsController < ApplicationController
  before_action :find_cocktail, only: [ :show, :destroy ]

  def index
    @cocktails = Cocktail.all
    @cocktail = Cocktail.new
    @search_value = ""
  end

  def show
    @dose = Dose.new
    @review = Review.new
  end

  def new
    @cocktail = Cocktail.new
  end

  def create
    @cocktail = Cocktail.new(cocktail_params)
    if @cocktail.save
      redirect_to cocktails_path
    else
      @cocktails = Cocktail.all
      render :index
    end
  end

  def destroy
    @cocktail.destroy
    redirect_to cocktails_path
  end

  def search
    @search_value = params[:query][:name]
    @search = "%#{@search_value}%"
    @cocktails = Cocktail.where("name ILIKE '#{@search}'")
    @cocktail = Cocktail.new
    render :index
  end

  private

  def find_cocktail
    @cocktail = Cocktail.find(params[:id])
  end

  def cocktail_params
    params.require(:cocktail).permit(:name, :url_img)
  end
end
