# take-a-spin

[take-a-spin- live link][heroku]

[heroku]: http://www.take-a-spin.com

## Minimum Viable Product
take-a-spin is a clone of getAround build on Rails and Backbone. Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Search for bikes by pick-up and return dates
- [ ] Search for bikes by location
- [ ] Create trips (rent bikes)
- [ ] View bikes
- [ ] List bikes for rent
- [ ] Filter search by price
- [ ] Filter search by features (rack, type, size)

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication (~1/2 a day)
Implement user authentication in Rails using bcrypt. Users will be able to sign up, sign in and sign out.  The app will be pushed to Heroku and functional before moving to phase II.

[Details][phase-one]

### Phase 2: Searching Bikes (~3 days)
Add API routes to format bikes and rental data as JSON.  Add Backbone models and collections to fetch JSON data.  Integrate GoogleMaps for interactive searches.  Users will be able to search for bikes by dates and location within a single Backbone app. 

[Details][phase-two]

### Phase 3: Renting and Displaying Bikes (~2 day)
Add Bike Show and Trip Show Backbone composite views containing Bike Rental Form and Bike Rental Item subviews, respectively.  Users will be able to view bikes and create or cancel  'trips'.

[Details][phase-three]

### Phase 4: Listing Bikes for Rent (~1-2 day)
Integrate the third-party library, Filepicker, for file upload so users can add profile and bicycle images.  Users will be able to upload their bikes for rent and edit their bike on the Bike Show view.  

[Details][phase-four]

### Phase 5: Search Filters (~1 day)
Add a filter button to the SearchShow Backbone view.  The filter button will toggle a FilterItem View on and off the page, as well as filter bikes in the search results.  Users will be able to filter searches based on bike size, price and features.

[Details][phase-five]

### Bonus Features 
- [ ] Bicycle availability view
- [ ] Add payment methods
- [ ] Change bike index path to 'bike name'
- [ ] User list many bikes for rent
- [ ] How it works/About pages
- [ ] Multiple sessions/session management
- [ ] User avatars


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md


