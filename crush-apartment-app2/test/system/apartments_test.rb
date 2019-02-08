require "application_system_test_case"

class ApartmentsTest < ApplicationSystemTestCase
  setup do
    @apartment = apartments(:one)
  end

  test "visiting the index" do
    visit apartments_url
    assert_selector "h1", text: "Apartments"
  end

  test "creating a Apartment" do
    visit apartments_url
    click_on "New Apartment"

    fill_in "Address 1", with: @apartment.address_1
    fill_in "Address 2", with: @apartment.address_2
    fill_in "Avail date", with: @apartment.avail_date
    fill_in "Baths", with: @apartment.baths
    fill_in "Beds", with: @apartment.beds
    fill_in "City", with: @apartment.city
    fill_in "Email", with: @apartment.email
    fill_in "List date", with: @apartment.list_date
    fill_in "Manager", with: @apartment.manager
    fill_in "Pets", with: @apartment.pets
    fill_in "Phone", with: @apartment.phone
    fill_in "Price", with: @apartment.price
    fill_in "State", with: @apartment.state
    fill_in "Dwelling", with: @apartment.dwelling
    fill_in "Zip", with: @apartment.zip
    click_on "Create Apartment"

    assert_text "Apartment was successfully created"
    click_on "Back"
  end

  test "updating a Apartment" do
    visit apartments_url
    click_on "Edit", match: :first

    fill_in "Address 1", with: @apartment.address_1
    fill_in "Address 2", with: @apartment.address_2
    fill_in "Avail date", with: @apartment.avail_date
    fill_in "Baths", with: @apartment.baths
    fill_in "Beds", with: @apartment.beds
    fill_in "City", with: @apartment.city
    fill_in "Email", with: @apartment.email
    fill_in "List date", with: @apartment.list_date
    fill_in "Manager", with: @apartment.manager
    fill_in "Pets", with: @apartment.pets
    fill_in "Phone", with: @apartment.phone
    fill_in "Price", with: @apartment.price
    fill_in "State", with: @apartment.state
    fill_in "Dwelling", with: @apartment.dwelling
    fill_in "Zip", with: @apartment.zip
    click_on "Update Apartment"

    assert_text "Apartment was successfully updated"
    click_on "Back"
  end

  test "destroying a Apartment" do
    visit apartments_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Apartment was successfully destroyed"
  end
end
