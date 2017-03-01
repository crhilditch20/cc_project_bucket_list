Country.delete_all()
Experience.delete_all()
Event.delete_all()
BucketListCountry.delete_all()
BucketListExperience.delete_all()
BucketListEvent.delete_all()
User.delete_all()
ArchivedCountry.delete_all()

country1 = Country.create({ 
  name: "Japan",
  region: "Asia",
  mapURL: "",
  imageURL: "http://volcano.oregonstate.edu/sites/default/files/VWNews/2014-06-12-httpi.telegraph.co_.ukmultimediaarchive02551fuji_2551323b.jpg"
})
country2 = Country.create({ 
  name: "Cuba",
  region: "Central America",
  mapURL: "",
  imageURL: "http://images.goaheadtours.com/banner/21292/downtown-havana-cuba-with-vintage-cars.jpg"
})

country3 = Country.create({ 
  name: "Guatemala",
  region: "Central America",
  mapURL: "",
  imageURL: "http://images.nationalgeographic.com/wpf/media-live/photos/000/177/cache/guatemala-pyramid_17779_600x450.jpg"
})

experience1 = Experience.create({
  title: "Scuba diving",
  description: "Swimming with the fishes",
  season: "summer",
  imageURL: "http://www.seachallengers.com/wp-content/uploads/2016/05/scuba-diving.jpg"
  })
experience2 = Experience.create({
  title: "Kodo drumming",
  description: "Watch a kodo drumming show",
  season: "any",
  imageURL: "https://connectere.files.wordpress.com/2013/02/kodo-_credit_shinji_minami_.jpg"
  })

  event1 = Event.create({
    title: "Rio Carnivale",
    description: "World's biggest carnivale celebrations",
    venue: "All over Rio",
    date: "February",
    imageURL: "http://www.finisterra.ca/wp-content/uploads/2016/08/Sambadrome-Parade-Rio-Carnaval.jpg"
    })

  event2 = Event.create({
    title: "Glastonbury Festival",
    description: "UK's biggest music festival",
    venue: "Worthy Farm, Somerset",
    date: "June",
    imageURL: "http://cdn.glastonburyfestivals.co.uk/wp-content/uploads/2016/09/81-Glastofest-AndrewAllcock-160625-1701.jpg"
    })

user1 = User.create({
  email: "claire@myemail.com",
  password: "password",
  password_confirmation: "password"
  })

listCountry1 = BucketListCountry.create({
  country: country1,
  user: user1,
  visitLength: 2,
  season: "autumn",
  archived: false
  })

listCountry2 = BucketListCountry.create({
  country: country2,
  user: user1,
  visitLength: 3,
  season: "spring",
  archived: false
  })

listCountry3 = BucketListCountry.create({
  country: country3,
  user: user1,
  visitLength: 4,
  season: "autumn",
  archived: false
  })

listExperience1 = BucketListExperience.create({
  experience: experience1,
  user: user1
  })

listExperience2 = BucketListExperience.create({
  experience: experience2,
  user: user1
  })

listEvent1 = BucketListEvent.create({
  event: event1,
  user: user1
  })

listEvent2 = BucketListEvent.create({
  event: event2,
  user: user1
  })
