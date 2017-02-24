# cc_project_bucket_list

A web app that allows the user to store a wish list of places, experiences and events.

The user can select a category (eg country, experience, event), then enter details such as where, when, how long - depending on the category.

As an extension the user can link listings in different categories so for e.g. if they plan a trip somewhere, they can tag the experiences or events they want to do in that place to the country listing.

Once they have achieved the experience they can tick it off their list, but choose to store it in an archive and potentially add notes or photos to the listing as memories.

MVP:
User can add countries to visit, experiences to have, and events to attend using a form, and store them to a database. They can then call up their listings, edit them, and tick them off when achieved.

Extensions:
User authentication to allow different users to store different things
Listings of different categories can be linked together
User can archive listings once achieved and look them up again.

Further extensions:
User can add their own categories and customise the information they want to capture (this would be tricky with a SQL database)
Adding images/notes as memories
Linking to other applications e.g. calendar

Technology
Ruby/Rails with a SqlLite database, and a React front-end
Jest or Enzyme for front-end testing
