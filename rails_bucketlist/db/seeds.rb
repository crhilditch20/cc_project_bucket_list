Country.delete_all()
Experience.delete_all()
Event.delete_all()
BucketListCountry.delete_all()
BucketListExperience.delete_all()
BucketListEvent.delete_all()
User.delete_all()

country1 = Country.create({ 
  name: "Japan",
  region: "Asia",
  season: "autumn",
  visitLength: 2,
  mapURL: "",
  imageURL: "http://volcano.oregonstate.edu/sites/default/files/VWNews/2014-06-12-httpi.telegraph.co_.ukmultimediaarchive02551fuji_2551323b.jpg"
})
country2 = Country.create({ 
  name: "Cuba",
  region: "Central America",
  season: "any",
  visitLength: 2,
  mapURL: "",
  imageURL: "http://images.goaheadtours.com/banner/21292/downtown-havana-cuba-with-vintage-cars.jpg"
})

experience1 = Experience.create({
  title: "Scuba diving",
  description: "Swimming with the fishes",
  season: "summer"
  })
experience2 = Experience.create({
  title: "Kodo drumming",
  description: "Watch a kodo drumming show",
  season: "any"
  })

  event1 = Event.create({
    title: "Rio Carnivale",
    description: "World's biggest carnivale celebrations",
    venue: "All over Rio"
    })

user1 = User.create({
  email: "claire@myemail.com",
  password: "password",
  password_confirmation: "password"
  })

listCountry1 = BucketListCountry.create({
  country: country1,
  user: user1
  })

listCountry2 = BucketListCountry.create({
  country: country2,
  user: user1
  })

listExperience1 = BucketListExperience.create({
  experience: experience1,
  user: user1
  })

listEvent1 = BucketListEvent.create({
  event: event1,
  user: user1
  })
