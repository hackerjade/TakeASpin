# Phase 3: Renting and Displaying Bikes

## Rails
### Models

| Controllers                      | Details                              |
|----------------------------------|--------------------------------------|
| Api::BikeRentalRequestController | create, destroy, index, show, update |

| Views                           |
|---------------------------------|
| api/rentals/show.json.jbuilder  |
| api/rentals/index.json.jbuilder |

| Routes                    | Details                                         |
|---------------------------|-------------------------------------------------|
| api::bike_rental_requests | only: :create, :destroy, :index, :show, :update |

## Backbone
### Models
* Rental

### Collections
* Rentals

### Views
* BikeShow (composite view, BikeRentalForm subviews )       
* BikeRentalForm
* TripShow (composite view, BikeRentalItem subviews )       
* BikeRentalItem

## Gems/Libraries
