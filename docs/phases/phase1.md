# Phase 1: User Authentication

## Rails
| Models            | Details                                     |
|-------------------|---------------------------------------------|
| User              | has_many :bikes                             |
| Bike              | belongs_to :owner, has_many :rental_request |
| BikeRentalRequest | belongs_to :user, belongs_to :bike          |

| Controllers        | Details              |
|--------------------|----------------------|
| UsersController    | create, new          |
| SessionsController | create, new, destroy |

| Views                |
|----------------------|
| users/new.html.erb   |
| session/new.html.erb |

| Routes  | Details                    |
|---------|----------------------------|
| session | only: create, destroy, new |
| user    | only: create, new          |

## Backbone
### Models

### Collections

### Views

## Gems/Libraries
* bcrypt
* backbone-on-rails
* Filepicker
* newrelic_rpm
* ejs
* jbuilder

development
* better_errors
* binding_of_caller
* pry-rails
* byebug