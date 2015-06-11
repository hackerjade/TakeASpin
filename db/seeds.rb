# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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
  location: '37.775, -122.425',
  make: 'Surly',
  model: 'CrossCheck',
  year: 2012,
  description: 'A great bike!',
  day_rate: 3,
  hour_rate: 25
})

bike2 = Bike.create({
  owner_id: 1,
  feature_id: 1,
  image_url: 'http://mashido.com/wp-content/uploads/2009/12/aristotle_build_02_image.jpg',
  location: '37.775, -122.420',
  make: 'Trek',
  model: 'CrossCheck',
  year: 2000,
  description: 'A great bike!',
  day_rate: 3,
  hour_rate: 25
})

bike3 = Bike.create({
  owner_id: 1,
  feature_id: 1,
  image_url: 'http://mashido.com/wp-content/uploads/2009/12/bb_015.jpg',
  location: '37.775, -122.415',
  make: 'Bianchi',
  model: 'Other',
  year: 2015,
  description: 'Happy Trails!',
  day_rate: 4,
  hour_rate: 30
})
