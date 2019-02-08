json.extract! apartment, :id, :price, :list_date, :avail_date, :address_1, :address_2, :city, :state, :zip, :dwelling, :beds, :baths, :pets, :manager, :phone, :email, :created_at, :updated_at
json.url apartment_url(apartment, format: :json)
