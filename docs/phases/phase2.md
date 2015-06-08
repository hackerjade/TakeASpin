# Phase 2: Searching Bikes

## Rails
### Models

| Controllers          | Details                                      |
|----------------------|----------------------------------------------|
| Api::BikesController | create, destroy, index, show, update, search |

| Views                         |
|-------------------------------|
| api/bikes/show.json.jbuilder  |
| api/bikes/index.json.jbuilder |

| Routes     | Details                                         |
|------------|-------------------------------------------------|
| api::bikes | only: :create, :destroy, :index, :show, :update |

## Backbone
### Models
* Bike 

### Collections
* Bikes

### Views
* SearchShow (composite view, BikeItemShow subviews )       
* BikeItem
* MapItem

## Gems/Libraries
* backbone.googlemaps