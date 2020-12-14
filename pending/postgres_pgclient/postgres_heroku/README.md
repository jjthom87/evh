# Postgres Client Exercise/Boilerplate + Heroku Push

<h2>Heroku</h2>

* Run ```heroku create```
* Run ```heroku addons:create heroku-postgresql:hobby-dev```
* Run ```heroku config``` to see the jawsdb env variable just added
* Resource: https://devcenter.heroku.com/articles/heroku-postgresql

<h2>Other</h2>

* You can connect to this database through the credentials they give you
* You can see a breakdown of the credentials if you go to your app's page on heroku and find the database option
![postgres image one](./github_images/first.png?raw=true "Postgres Example")
![postgres image two](./github_images/second.png?raw=true "Postgres Example")
* When inserting the "database" into Postico, use the value at the end of the connection string after the "/"