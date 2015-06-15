guest = User.create({
  email: 'guest@gmail.com',
  fname: 'Jade',
  lname: 'McPherson',
  password: 'password'
})

bike1 = Bike.create({
  owner_id: 1,
  feature_id: 1,
  image_url: 'http://mashido.com/wp-content/uploads/2009/12/aristotle_build_07_image.jpg',
  lat: 37.775,
  lng: -122.425,
  make: 'Surly',
  model: 'CrossCheck',
  year: 2012,
  description: 'A great bike!',
  day_rate: 25,
  hour_rate: 3
})

bike2 = Bike.create({
  owner_id: 1,
  feature_id: 1,
  image_url: 'http://mashido.com/wp-content/uploads/2009/12/aristotle_build_02_image.jpg',
  lat: 37.775,
  lng: -122.420,
  make: 'Trek',
  model: 'CrossCheck',
  year: 2000,
  description: 'A great bike!',
  day_rate: 20,
  hour_rate: 2
})

bike3 = Bike.create({
  owner_id: 1,
  feature_id: 1,
  image_url: 'http://mashido.com/wp-content/uploads/2009/12/bb_015.jpg',
  lat: 37.775,
  lng: -122.430,
  make: 'Bianchi',
  model: 'Other',
  year: 2015,
  description: 'Happy Trails!',
  day_rate: 30,
  hour_rate: 5
})

tuesday = BikeRentalRequest.create({
  bike_id: 1,
  user_id: 1,
  start_date: '2015-06-23',
  start_time: "0:00 AM",
  end_date: '2015-06-23',
  end_time: "12:00 PM"
})

wednesday = BikeRentalRequest.create({
  bike_id: 2,
  user_id: 1,
  start_date: '2015-06-24',
  start_time: "0:00 AM",
  end_date: '2015-06-24',
  end_time: "12:00 PM"
})

thursday = BikeRentalRequest.create({
  bike_id: 3,
  user_id: 1,
  start_date: '2015-06-25',
  start_time: "0:00 AM",
  end_date: '2015-06-25',
  end_time: "12:00 PM"
})
