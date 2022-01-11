# MERN Stack Course

## Course Contents

* (0:00:00) Introduction

* (0:02:40) MongoDB overview

* (0:03:48) Setup MongoDB Atlas Cloud Database

* (0:06:44) Load sample data into database

* (0:08:16) Create Node / Express backend

* (1:05:38) Create React frontend

* (2:02:58) Setup MongoDB Realm and replace backend

* (2:39:46) Host frontend on MongoDB Realm

## Introduction

Hi i'm Beau Carnes with freecodecamp.org. In this course i'm going to teach you how to make a *full stack web application* using the *Mern Stack*. But I'm going to teach you even more than other *Mern Stack* courses, I'm going to show you how to convert the Back-end of the app to Serverless, and how to host it for free in the cloud, so you don't even need *Node or Express*. The *Mern Stack* is a popular stack of technologies for building a *modern single page application*. *Mongodb* is a *document based open source database*.

*Node.js* allows Javascript to run outside a browser in places like a web server. *Express* is a web application framework that makes it simpler to code a web server in javascript. And *React* is a Javascript front-end library for building *user interfaces*. In this course we will be building a *Restaurant Review Web App*. First I will talk about *Mongodb* and how to host your database in the cloud using Mongodb Atlas then I'll show you how to create the Back-end of the app using *Node.js and Express*.

Our Server will interact with the database using the native Mongodb Javascript library instead of the Mongoose library used by many other *Mern Stack* courses. Why use an extra library if you don't have to. Next I will show how to create the Front-end with React and connect the front-end to the back-end at that point the *Mern Stack* app will be complete. But I'll have one more thing to show you in the final part of this course.

I will show you how to replace the *Node-Express* backend with *Mongodb Realm*. This is a serverless platform that will allow us to do everything in the cloud without running our own server, and with a lot less code. Then I'll show you how we can use *Mongodb Realm* to host our React front-end, so our entire web app will be hosted for free on *Mongodb Realm*. If you already know a lot about the *Mern Stack*, just skip and go straight to where I show how to convert the *Node-Express* backend to use *Mongodb Realm* instead.

Let me show you an overview of the structure of the app we're going to build. Over on this side we have the *M* of the *Mern Stack -- Mongodb*. We'll be hosting this on Mongodb Atlas. We also, and then we have the *E* and the *N* this is the backend *Node and Express*. You'll see that *Express* is just part of *Node*, and this is where we're going to be running the our backend server. And then we have our *R* for *React -- front-end*. And we'll be running our *React* on a local server too, inside *Node.js*. And then the Client, which is what people will see when they go to the website, to our web app. So let's start by talking about *Mongodb*.

## MongoDB Overview

First, a quick overview of the *Mongodb database*. In the tabular or relational world, we think of things like databases, tables, rows, etc. *Mongodb* has similar concepts that use different terms. I'd like to make sure everyone is aware of, instead of a *Table*, we have *Collections*, instead of *Rows* we have *Documents*. We can do *join* operations with the *$lookup* operator. And instead of *foreign keys*, we utilize *references*. *Mongodb* is very well suited for handling data with a wide variety of relationships.

Let's have a quick look at the *document model* to see. Here's an example of a *Mongodb document*. It looks very much like *Json*.

```javascript
{
    name: "Mukhtar",
    title: "Developer",
    address: {
        addres 1: "123 Main Street",
        city: "Kano",
        postal_code: "90112"
    },
    projects: ["VimApp", "KasApp"],
    employee_number: 5,
    location: [1.234, 56.789]
    }
```

We can see in here a variety of relationships an *address*, a *title*. Here's the different *data formats* -- we've *string*, *nested document*, *array*, *integer*, and *geo-spatial coordinates*, they're all in the document. Mongodb stores data in *bson format* or *binary json*. This provides for a wide variety of support for data types like *strings or integers*, and in our code we're sometimes going to have to do some converting between *json and binary json*, specifically for the *object id*. Okay let's get started creating our *database*.

## Setup MongoDB Atlas Cloud Database

You can host your Mongodb database locally, but I found that it's easier to host the database using  *Mongodb Atlas*, so we can do everything in the cloud and eventually we will literally do everything in the cloud. Where our entire back-end and front-end is in the cloud. And we can actually do it right all on *Mongodb Atlas*. But for now we're just going to create the database. We'll be using the *free tier on Mongodb Atlas* in this tutorial.

So the first step is to create an account or you can just sign in. So once you're creating your account for the first time, you're going to have to set up the account, so you can create an organization everything's going to have to have an organization. I'll just call this -- *My Org*. For the project name, for our first project, I'm going to put *Mern Stack*. So I'm going to call this the *Mern Stack* project, and preferred language, well we'll be mainly working with Javascript in the *Mern Stack*, so let's go past this.

And then I'm going to choose this *free-tier*. Okay now we're going to be choosing where our our files are going to be stored at. And we can just basically choose all these default options, if we choose these default options it's going to be on the free-tier. You probably want to actually choose a location that's close to where you're at. So if none of these are really close, you can actually check some of these other cloud providers and just kind of pick the one that seems to be closest to where you're currently located.

I'll just keep on the default, and then I'll just do create *cluster*. And you can update the settings depending on what you need, you can actually pay more if you need a bigger *cluster*, but for now when we're just learning it's good to start with the free-version. Okay after the *cluster* is created, you'll have to configure it, so you can connect to it. So click the connect button, and then we're going to have to have a *white-list Ip*, so just add the *current Ip address*.

So, we'll be connecting to it right from our computer, because we're developing the back-end locally, so I'll just add my *current ip address*. And then we'll create a *database user*. So I'll just create it as *my name*, and the password is *mernstack*. We'll choose a connection method, and we'll be connecting through *Mongodb's native drivers*, so this is going to give us the *connection string* we're going to use to connect from *Mongodb and Node.js*.

Now eventually, we'll have to come back and copy this, but for now we'll just leave it, and we'll come back and get this when it's time. When we're doing our code in Node.js and I can just close this for now.

## Load Sample Data into Database

And now we'll add *sample data* to the database. One thing great about *Mongodb Atlas* is that, when you're creating a *demo app* or you're just trying to try things out, there's a lot of *sample data* you can just use so you don't have to do all this work of finding your own *sample data*. So I'm going to click these three dots here and go to load *sample data set*, and then load *sample data set*. And this is actually going to create a bunch of different data sets right within our cluster.

Okay after the *sample data* set is successfully loaded, we can actually use this interface to explore the data sets and see what's in it. So I'm going to click on *collections*, and then these are all the different data sets that are in here. There's *sample_airbnb, sample_analytics, geospatial, mflix, restaurants, supplies, training and weather-data*. For this tutorial we're going to be using the *sample_restaurants* data, and you can see there's the *neighborhoods* data and there's the *restaurants* data.

And if we look at the *restaurants*, we have a list of a bunch of *restaurants* in new york. So this one's called the riviera carrer, I guess I don't know how to pronounce it. So it's gonna show the *cuisine* and the *burrow*, and then there's also going to be an *address* for each *restaurant*. So we are going to be using this data in our app so let's start creating our app. We're going to start creating our *back-ends*.

## Create Node / Express Backend

So I'm going to go over to the terminal. I've already created a folder called *restaurant-reviews*. And I'm going to just make sure I have the right version of *node*, and so that's going to be a good version, *v14.18.2*. And now we are going to first start with our back-end. We're going to start by creating the back-end of the app with *nodejs and express*, and then we'll create the front-end with *react*, and then like I said in the final section, we'll switch out the *node.js-express backend with Mongodb Realm*.

So inside this root folder, I'm going to create a new folder called *backend*, and then I'll switch into it. Okay now that I'm in this folder, I'm going to create a *package.json* file inside this folder by running *npm init -y*. Okay we've initiated our *package.json* file, since we're going to be using *node* here. And now we're going to install a few dependencies. So we'll do *npm install*, we're going to do *express, cores, mongodb, and dotenv*. So let me tell you a little bit about these.

So *express* is going to be what we use for the the *web server*, it's going to help us make the *web server*. *Cores* stands for *cross-origin resource sharing*, and it allows *ajax requests* to skip the same origin policy and access resources from remote hosts. The *Cores* package provides an *express middleware* that can enable *Cores* with different options. Basically, it's going to make it so we can make the right connections on our network that we need to make, without that we could have some errors.

And then the *Mongodb dependency* allows us to interact with our *mongodb database*. The *dotenv dependency* loads *environmental variables* from a *dotenv* file in the *process.env*, so this makes development simpler. So instead of setting environment variables on our development machine they can be stored in a file. So that will all make more sense later once we actually create that file.

And I guess the last thing we'll do is, we'll install *nodemon*. So if I do *npm install -g nodemon* that means it's going to install globally, that's going to make development easier. It helps develop *node.js* based applications by automatically restarting the *node application* when file changes in the directory are detected, so we don't have to restart the server every time we make an update to our files.

Okay time to create our *backend server*. We're going to separate our *main server code* from the code that is accessing the *database*. Also the *routes* will be in a separate file, since we will be using *es6's import* statements, the first step is to update the *package.json* file. In that file after the line *main index.js*, we're going to add *type* and then we're going to set that to *module*. That's going to allow us to use the *import* statements from *es6*. Okay I'll just save that.

And then I'm going to create a new file in the *backend* folder, it's going to be called *server.js*. Now in the *server* file, we'll configure an *express server*, we'll attach the *cores and express.json middleware*, since we'll be receiving and sending *json*, and specify *routes*. So let's start by *importing* everything we need to import. Here we're going to *import express from express*, and then we're going to *import cores from cores*.

Now I'm going to *import* a file that we'll still have to create, it's just going to be called *restaurants* from the directory we're going to create it is */api/restaurants.route.js*. Okay because we're going to have our *routes* in a separate file, so that's the file we're going to have our *routes* in. So let's make our *express app*, so *const app = express()*, and that's what we're going to be using to make our *server*. And now we have to apply our middleware so *app.use(cors())*, so these are the things that *express* is going to *use* and that's going to *use our cors module*.

And then we are also going to *use express.json*. So this *app.use(express.json())* line, in old versions of *express* if you've ever seen other old tutorials, they use a something called *body parser*, but that's now included in *express*, so just doing *express.json* means that our *server* can accept *json in the body of a request*. So if someone sends a *get request or a post request* to our *server*, it'll be able to read *json*.

Okay now, let's specify some of the initial *routes*, so we're actually going to be putting most of our *routes* in another file, but we have to specify what our initial *url* is going to be. So since this is an *api*, the general procedure for *api urls* is to say it's an *api and then what version, version one and then this is the restaurants api - /api/v1/restaurants*. So this is going to be the *url* people go to. So basically, this is our main *url*, which is going to be *localhost* with the *port number*, and then the *routes - ("/api/v1/restaurants", restaurants)*, are all going to be in the *restaurants file*, which we still have to make.

But if someone tries to go to a different *route*, let's make a message that appears if anybody goes to a *route* that doesn't actually exist. So we'll put *an asterisk -- means wild card*, so if anybody goes to *an asterisk*, that's to a *route that's not in our route file*, then we're just going to return something. So we'll just return a *404 page* that just says *"not found"*.

Okay, and now I'm going to *export* this, we're going to *export app as a module*. We'll then be able to *import this module in the file that accesses the database*, which will be the file that you actually run to get the the *server* running. We just want to separate our *main server code* from our *database code*. But before we create that file that connects to the *database and starts the server*, we'll create a *.env file* to store our *environment variables*.

So I will create a new file, go to new file and then this is just going to be *.env*. So this is where we're going to set the the *uri* of our *database*. So we need to get the *uri*. To get the *uri*, we're actually going to have to go right back to *mongodb atlas*. So if I click *connect*, then we go to choose a connection method, connect your application and then we have the *node.js* already selected, so we just need to copy the *uri*.

So now let's go back to our *.env file*, in the *.env file*, we're going to create the variable for the the database *uri*. So I'm going to be calling this *RESTREVIEWS_DB_URI*, and then I'll just paste the *uri* in, and then I'm going to update some things. So we got the *username*, and the *password* to update. Then I'm also going to have to update this part where it says *my first database*, to the database we're going to access, which is the *sample_restaurants* database.

Then we have to create another variable called *RESTREVIEWS_NS*, and we're going to set this to the first database again, so this is going to be *sample_restaurants*. And now we have to set the *PORT*, this is going to be the the starting port that the server is going to start off, to *4000*. We're going to create a new file, and it's going to be called *index.js*. So in this file, we're going to *connect to the database and start the server*.

So first we're going to just *import* the file we already created from *server.js*. We're also going to *import mongodb*, because we're going to be accessing *mongodb*, and then we're going to *import dotenv*, this is what allows us to access our *environment variables*. Now we have to *configure dotenv -- dotenv.config()*, so we'll load in the *environment variables*. And then we have to get access to our *MongoClient from mongodb*.

Now we need to set our *port from our environment variable*. So to access an *environment variable*, we'll just do *process.env.PORT || 8000* and then we put whatever we specified in our *.env file*, which was *PORT*. So *PORT* is the port number and if somehow that cannot be accessed we will make it *8000*. Okay now, we will connect to the *database*, so we go to *MongoClient.connect()*.

And once we *connect to the database*, we're going to pass in some information, we're going to have to pass in the *database uri*, which is *process.env.RESTREVIEWS_DB_URI*, so this is our *environment variable* and the name we created for our *uri*. Now we'll pass in the options for accessing the *database*, and we want to make it so only *50 people* can connect at a time, so *maxPoolSize: 50*, and we'll set the *wtimeoutMS: 2500*. So after *2500 milliseconds*, the request will timeout.

And then *useNewUrlParser* is going to be set to *true*, that is added because the *mongodb node.js driver* rewrote the tool that it uses to *parse mongodb connection strings*, and because it's such a big change they put the *new connection string parser behind the flag*. So now we're going to *catch any errors*, so if there's an *error*, we're just going to *console.error*, or log the *err.stack*, and then we'll just *exit the process*. After we've *connected to the database and checked for errors*, now we can do something, we're gonna create a function:

```javascript
.then(async client => {
        await VehiclesDAO.injectDB(client)
        app.listen(port, () => {
                console.log(`listening on port ${port}`)
        })
})
```

Here, *app.listen* is how we start our *web server*, so we're finally starting our *web server* after the *database is connected to*. So we're going to *listen at the port*, okay we're just going to *log that listening on the port*, and we're done. So we've *connected to the database and we've started our web server*. It's almost time to test out the *backend server*, but first we need to make a *route*.

So let's create a new directory called *api*. Also, we create a new file inside the folder, and the new file is going to be called *restaurants.route.js*. This is a file that we've already referenced in one of our other files. Okay this time instead of typing everything i'll just paste in and kind of explain what the code does. First we're just going to *import express from express*, then we'll get access to the *express router -- const router = express.Router()*, because this is our *route file*, we're going to be creating the different *routes* that people can go to.

But then, right now it's just going to be *one route*, and this is just a *demonstration route*. So the *route* is just *slash*, so just if you go to the *root url*, then it's going to respond with *hello world*. So let's just save that, and now we can actually test our program. So you remember from the *server.js* is where we access the file that we just created, and it's going to have to start with this -- *"/api/v1/restaurants"*. So I'm actually going to copy this because every *route* is going to start with it, and then at the end of the *route* you'll add whatever's here -- *"/"* in the *route file*.

Okay let's try starting the *server*. Okay since we didn't get any errors that means we successfully connected to our *database*. So we're not accessing anything in the *database* yet but we're actually at least connected to the *database*. Let's go to our browser and check the the *url* that we created. So go to the *url bar*, I'll type in *<http://localhost:4000/api/v1/restaurants>*, and then I'll just go to that page, and you can see right here it says *Hello World*, so it worked. And if we go to any other *url*, like if I go to */9* or something, it'll say *error: "not found"*. Okay well everything is working.

Now we will make the *data access object*, that will allow our code to access *restaurants in the database*. So let's create a directory called *dao -- for data access object*, and inside this directory we'll create a new file *restaurantsDAO.js*. Now in this file I'm going to paste in some code and then I'll show you what it all means. Okay so first we're going to create a *variable* called *restaurants*, that we're going to use to store a *reference to our database*.

```javascript
let restaurants

export default class RestaurantsDAO {
    static async injectDB(conn) {
        if (restaurants) {
            return
        }
        try {
            restaurants = await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in restaurantsDAO: ${e}`
            )
        }
    }
```

So we're going to *export this class called RestaurantsDAO*, and we're going to have a *few methods* in it. The first *method*, and these are all going to be *async methods*, and this is the *injectDB method*. So basically this is how we *initially connect to our database*, and we're going to call the *method* as soon as our *server starts*. So as soon as our *server starts*, we're going to get a *reference to our restaurants database*.

So if there already is the *reference*, if the *reference* is already filled, we're just going to *return* it, but if it is not filled already, we're going to fill that *variable* with a *reference* to that *specific database*. So we're going to *try to connect*. So you can see we're going to *await* for the connection, we're trying to *connect to our database*, and we have the *name of our database*, then our *environmental variable* and we're specifically trying to get the *collection restaurants*.

So let's go back to the *mongodb atlas* interface, and I can show you where this *database* actually is right from the interface. So if I click on *collections*, we have *restaurants*, and see in this *sample restaurants* section of the *database*, we have *neighborhoods and restaurants*. So we're specifically trying to get the *restaurants* and not the *neighborhoods*. We're not even going to use the *neighborhoods* data in this project. So that's what this *collection restaurants* is, and if we're able to successfully get it, then great if not we're gonna send the *error message to the console*.

```javascript
static async getRestaurants({
        filters = null,
        page = 0,
        restaurantsPerPage = 20
    } = {}) {
        let query
        if (filters) {
            if ("name" in filters) {
                query = { $text: { $search: filters["name"] } }
            } else if ("cuisine" in filters) {
                query = { "cuisine": { $eq: filters["cuisine"] } }
            } else if ("zipcode" in filters) {
                query = { "zipcode": { $eq: filters["zipcode"] } }
            }
        }

        let cursor

        try {
            cursor = await restaurants
            .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { restaurantsList: [], totalNumRestaurants: 0 }
        }

        const displayCursor = cursor.limit(restaurantsPerPage).skip(restaurantsPerPage * page)

        try {
            const restaurantsList = await displayCursor.toArray()
            const totalNumrestaurants = await restaurants.countDocuments(query)

            return { restaurantsList, totalNumRestaurants }
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`
            )
            return { restaurantsList: [], totalNumRestaurants: 0 }
        }
    }
}
```

Okay, so we're going to *add the call to the method right when we connect to the database for the first time, right when the server runs*. And then the other function is the *getRestaurants*. So this is the only other *method* that I just added, *and it is what we'll call when we want to get a list of all the restaurants in the database*. So first of all there's some options. Now these are options that we just created that we just made up specifically for this *method*.

So when we *call the method*, you can put in what *filters* you want, if you want to *sort* things based on the *name of the restaurant*, the *zipcode*, or the *cuisine*, what *page number* you want, because there's going to be a lot of *restaurants*. So you may not want to get all of them at once, you're only going to get actually *20* at once with this default setting. So it's *default to page zero*, *it's default to 20 restaurants per page*. And then we're going to put together a *query*.

Now first, it's going to be *empty*, and it may stay *empty*, unless we've called the *getRestaurants method* with some *filters*, and there are *three different filters* that we've set up. There's the the *name filter*, so we can *search by name of the restaurant*, or we can *search by the cuisine of the restaurant*, or we can *search by the zipcode of the restaurant*. And these are *three different types of searches*. *Queries* are very powerful in *mongodb*, and there's a bunch of different things you can do with *queries*.

Now I'm just going to show you three of them right here, but if you want to learn more about how you can *query with mongodb*, check the resources available. First of all let's look at the the *cuisine and the zipcode*. So we're just saying, *if the cuisine from the database, from the entering in the database equals the cuisine that was passed in*, so *filters cuisine means that we've called the getRestaurants method, and we've passed in a filter of what the cuisine is going to be*. and so we're actually going to *search for that specific cuisine*.

Where we're going to *search for a an entry in the database where the zipcode equals the zipcode that was passed in*. And then this is a little different to a *text search*. Instead of *searching for something that's equal, we're going to search anywhere in that text for name*. So you can see that *cuisine is a database field, zipcode is a database field, but when we're searching for the name there's no database field in here*.

So how does it know which field to *search for the name* that was passed in? Well, we actually have to set that up in *Mongodb Atlas*. So we'll do that later, we're going to specify in *Mongodb Atlas*, that if someone does a *text search*, which *fields from the database* will be searched for that *specific string*. So we'll set that up later. So we're going to get the *filters*, we're going to set the *query* to be either one of these three *queries*, depending on *which filter was passed into this method*.

And then we're going to get a *cursor*, and then we're going to *await restaurants.find(query)*. So this is going to find *all the restaurants from the database that go along with the query that we passed in*. If there is no *query*, if we just had the *blank query that wasn't set to anything*, then it's just going to *return all restaurants*, and then we're going to *catch an error*, and then we'll just *return an empty list, and 0 for the total number of restaurants -- return { restaurantsList: [], totalNumRestaurants: 0 }*, if there's an *error*.

But if there's no *error*, we're going to *limit the results*, because what it *return in the cursor is every single result*. But we're going to *limit to restaurants per page, the default is 20*, and then to get the *actual page number we do a skip*. So we're going to *skip from the beginning to whatever page number we're at*, so we're going *to multiply restaurants per page times the page number to get to a specific page of the results*, -- const displayCursor = cursor.limit(restaurantsPerPage).skip(restaurantsPerPage * page).

Then we just set the *restaurants list to an array -- const restaurantsList = await displayCursor.toArray()*. And then we *return the array*. So to *get the total number of restaurants, we're just going to count the documents in the query and then we can return the restaurants list and the total number of restaurants -- return { restaurantsList, totalNumRestaurants }*. Or if there's *an error we just -- return { restaurantsList: [], totalNumRestaurants: 0 }*. Okay let me save that.

Now, we'll use these methods that we just went over, that we just added to this file, *to access the database* from our other files. So let's go to *index.js*, and in the file, we are going to add at the beginning that we're going to import that file. So *import RestaurantsDAO from "./dao/restaurantsDAO.js"*. So we have *gotten a reference to this file*.

```javascript
.then(async client => {
        await RestaurantsDAO.injectDB(client)
        app.listen(port, () => {
                console.log(`listening on port ${port}`)
        })
})
```

So right after we've *connected to the database*, right *before we start our server*, we are going to call that *injectDB*. So *await RestaurantsDAO.injectDB(client)*, and we're going to pass in the *client*. So this is *how we get our initial reference to the restaurants collection in the database*. Okay now we're going to create the *controller that the route file* will use to access the *dao file*. So let's go let's save this.

I'll go to *restaurants.route.js*, and we will need to make it so it uses the *controller file* we are about to create. So the *controller file* is going to be what the *route* uses. So I'm going to *import RestaurantsCtrl from "./restaurants.controller.js"*. And now, instead of getting -- *get(req, res) => res.send("Hello World"))*, I'm going to do -- *get(RestaurantsCtrl.apiGetRestaurants)*, and that's something we still have to create.

So now, we're going to *get* what's going to be *returned* at this *route -- router.route("/")* that's going to come from *RestaurantsCtrl file and then apiGetRestaurants method* which we're going to create right now. So let me save that, and then inside the *api folder*, create a new file and this one's going to be called *restaurants.controller.js*. So in the *backend directory*, we have the *api directory and the dao directory*.

Okay, in the *restaurants.controller.js file*, I will paste in some code and then we'll go over it like last time. So first we're going to import the other file we created the *restaurantsDAO.js*, and then we're creating the *RestaurantsController class*. And there's a few methods, actually right now there's just *one method* which is the *apiGetRestaurants*. And when this *api* call, it is called through a *url*. There can be a *query string*.

A *query string* is how we can specify certain *parameters*, and you'll see that when we do a test later, but when you're typing in the *url*, you type in *question mark*, and then the *key value pairs* that you want to pass in to the *api*. So one of the *query strings* that we have is called *restaurantsPerPage*, so we are going to set the variable *restaurantsPerPage* to equal whatever value is passed in through the *query in the url*.

So first, we're going to check if *req.query.restaurantsPerPage* even exists in the *url*. If it exists then we're going to get *req.query.restaurantsPerPage* and convert it to an *integer*. If not the default is *20*. Then we are going to do the same thing with the *page number -- req.query.page*, we're going to say, if we've passed in a *page number with the url -- req.query.page*, then we're going to convert it to an *integer*. And then if not then the page number is just going to be *zero*.

Now we're going to do the same thing with the *filters*. So the *filter* is going to start off with as an *empty object*. But if we see the *cuisine query string -- req.query.cuisine* then *filters.cuisine* is going to be set to the *query string*. If *zipcode is in the query -- req.query.zipcode*, then we'll set the *filter.zipcode* to the *zipcode query string*. If *name is in the query -- req.query.name* then we'll set the *filters.name* to the *name query string*.

Pretty soon, once I get this all set up to show an example, I'll show you exactly what those *query strings* look like and that will make a lot more sense if you're not familiar with what *query strings* are. Okay, now we are going to call the *RestaurantsDAO.getrestaurants*, that's the thing that we created before. So we are going to pass in the *filters, the page, and the restaurantsPerPage*, and it's going to *return* a *restaurantsList and then the totalNumRestaurants*, and that's what we specifically made it *return*.

Now we are going to create a *response* to send to the person, or to *respond* when the *api url* is is called. So we're going to *respond* with the *restaurantsList, the page number, the filters, the restaurantsPerPage, and then the totalNumRestaurants*. And then *res.json(response)*, is what we're going to send a *json response* with all this information to whoever called this *url.* Okay I'm going to save that, and now we can finally test to see if our *backend server* can actually access the *database*.

So let me go back to my *web browser* and then we're going to go to the */api/v1/restaurants*, and if I call that we can see it sends back all the *restaurants*. Now we can keep testing the *api* right within the browser, but it's better to use another tool when you're testing *api*. So over here I have a tool called *Insomnia*, another very popular one is called *Postman*. *Postman and Insomnia* basically do the same thing. So if you have *Postman* you can use it for this. I'm going to use *Insomnia*.

And then we're going to be making a *get request*, so go to *localhost:4000/api/v1/restaurants*. Now we can see all the *restaurants*, so you can see each one that has the *address*, it has the *burrow*, the *cuisine*, we're not going to do anything with these *grades* in this project, but we have the *name*. Now let's check using some of our *filters* that we created. So in our *api* that we create in our server we can *filter by zipcode*. So let's filter by this *zipcode 10012*.

So what I'm going to do is put a *localhost:4000/api/v1/restaurants?zipcode=10012*, and I'll *send* that. Okay look this *zipcode is 10012*. Let's see if that what the next one is one *10012, 10012*, so it's all filtered by that *zipcode*. If we scroll down to the bottom, we can see everything else that's returned. So we have the *page number* we have the *filters which is a zipcode*, and then we have the *entries_per_page 20*, and *total_results 407*. There's *407 restaurants with that zipcode*.

and we could switch to page two

so i'll show you how you would do that so we can see the first one right now is a restaurant called angelica film center but if i do and page equals two uh let's see i messed it up two and then i click send okay now the first restaurant is cafe and if we go all the way to the bottom we're now on page two there's still the same number of results and we have 20 per page so let me zoom in even more here and we are going to do a search by cuisine and then i'm going to do american okay so american cuisine american cuisine and now i'm going to search by name now this one actually is not going to work so we haven't got this set up yet but let's search for let's see a name let's see a restaurant name let's just search for um food what restaurant has the word food in its name okay not found this is the thing i said that we need to set up right within mongodb atlas so let's go and do that right now okay i'm on mongodb atlas i'm in my database under restaurants and i'm going to click indexes i'm going to create a new index let me see if i can make it so you can see this better here we go so i'm going to create an index actually i realized before we create it we want to confirm that we know the exact field so let's go go to see what the fields are so we know the only field we want to search for is the name field so let's go back to indexes create index and then we'll do name and for the type it's going to be text i'll review that confirm and now it's going to create our index now let's go back and see if that that search works so i'm going to send the same search and now it works now that we created that index and let's look at the names of the restaurants well this one's all about food this one's feel food this one's king food so it's searching for the word food all about indian food it's searching for the keyword food in the name of the restaurant so we have this part of the api working okay the whole point of this app is that people can leave reviews for certain restaurants so let's go back to our route file and we're going to create the routes for people to post put and delete reviews so post is to create a new review put is to edit a review and delete is if you want to delete your view so let me add those routes right now okay so we have router dot route and so up here we just made a single get request but now we are going to be able to make the post put and delete all within this one router call to the router so for the route review if it's a post acp request it's going to use this method here put this method and delete this method now we still have to create those methods and we actually have to import the file that we haven't created yet but i'll do that right now reviews and then this is going to be the reviews controller okay now let's create these methods that will be called when people go to these different routes so in the api i'm going to create a new file and it's going to be called reviews.controller.js okay so i've pasted in some code for the reviews controller i'm just going to review it so we start off by importing the reviews deo which we still have to create so we'll do that right after this and then we're going to create the reviews controller class and then there's going to be three methods we have the post review method and then we are going to get some information from the body before we got information from the query parameter and now we're going to get information right from the body of the request so we get the restaurant id and we get the text of the review and then for user info we're going to get the the name of the user id from the body and you'll see how all this works when we test it later and i'll show you how you send this information through the body we're going to get a new date and then we're going to put that all together we're going to send that to the ad review data which we still have to create it's going to send this information the restaurant id user info review and date and then in this other file which we're going to create will actually send that to the database but it's going to return success if it worked and then there'll be an error message if it didn't work and our next method is update review and it's pretty similar we're going to get the information from the body the review id the text those are the only things we need they're just the review id and the text we're going to update we're going to automatically create a new date and then we're going to update the review oh we also need the the user id we're going to get that in the body too and we just send it all all over and that's how we know if we're updating the so we get the user id because we want to make sure the user who created the review is the same one who's trying to update the review and then we just check if there's an error and return the error message if the modified count equals zero that means that the review was not updated and then we can throw an error here okay the final method is the delete review this is going to be a little different this is going to actually have a query parameter instead of the in the body the the id to be deleted is going to be a query parameter right in the url and then we're going to get the user id right in the body now this is admittedly non-standard for delete request for http delete requests it's non-standard to have anything in the body but for this example we're going to do it normally you would do this is this is just like a simple version of authentication this is nothing that you would do in a production environment but for this example we're going to check the user id in the body to see if it's the same user id that created the review before it's deleted in a production environment you're going to have a little more complex things you're not going to actually include anything in the body in the delete request and then we are going to call the delete review and then send over the review id and the user id and if it says success will respond with success or else we'll have an error okay i've been talking about the reviews dale a lot so let's create that now i'm going to create a new file and it's going to be called reviews deo dot js okay pasted in the code for the reviews deo it's very similar to the restaurants one first we're going to import this stuff up here mainly so we can get access to object id we're going to have to convert a string to a mongodb object id and that's what we're going to use this for we're going to get three views this is going to just be an empty variable but we're going to fill it with a reference to the reviews collection just like before we're going to have the injectdb and um we're going to see if if the reviews already exist then we're just gonna return but if not we are going to access the database and then we're gonna access the reviews collection and one great thing about mongodb is that it's okay if it doesn't exist already it will just automatically be created if it doesn't already exist whenever we try to insert a document into it and then the first thing we're going to do is to add a review and you can see it takes a restaurant id a user a review and a date and then we're going to create this review dock here and we are going to actually create a an object id from this and then we are going to insert it and then it'll just insert it right into the database with the the rest id converted to a mongodb object id and then if there's an error i'll return the error and then for the update review we're accepting review id a user id text and the date and the text is the text of the review and you can see that we are setting
51:52
well first of all you can see that we
51:54
are looking for a review
51:56
that has the right review id and also
51:59
has the right user id
52:01
we only want to update a review if it
52:03
was created by the same user that's
52:06
trying to update it
52:07
and then we'll just set the new text and
52:09
the new date
52:11
and then return the update response or
52:13
return error
52:14
and then delete review it's the same
52:15
we're going to
52:17
get the i we're looking for a review
52:20
that has
52:20
the the id and also the user id so it's
52:24
the same
52:25
user that created that review and if so
52:28
we're going to delete
52:29
that review and then return the delete
52:31
response or to
52:32
return the console.log here
52:36
okay we're going to test out adding
52:38
review but first let's get a list of
52:40
restaurants because
52:41
we're going to need this restaurant id
52:43
because we're going to add the review to
52:45
this
52:45
restaurant id so now i'm going to
52:48
make a post request
52:52
and then i make it to review at the end
52:54
now here's the body that we have to send
52:56
over
52:57
so first we have to send over the
53:00
restaurant
53:02
id and that's going to be this thing
53:05
that i just copied from over there
53:07
and then we need the text of the review
53:10
which is going to be
53:11
great food and then
53:16
we need the user
53:20
id
53:23
which is going to be one two three four
53:26
that can be a string or a number
53:28
and i will put name
53:31
so the name of the person leaving the
53:33
review
53:34
which will be oh now i'll just send that
53:38
over
53:39
success let's go over to
53:42
the mongodb atlas interface i'm going to
53:45
refresh and this is how we're going to
53:46
see
53:47
if it got successfully put into our
53:49
database
53:50
so we're on reviews and here it is look
53:54
we got text great food we got the user
53:56
id we got the name
53:58
we got the restaurant id
54:01
and everything got entered correctly now
54:04
let's see if we can
54:05
edit it so to edit it we are going to
54:08
need
54:09
the object id number
54:13
so let me copy this
54:18
and we'll go back over here this is
54:20
going to be a
54:22
put request instead of restaurant id
54:24
it's going to be
54:25
review id
54:31
and then we'll put that here now we can
54:34
keep the user id and the name in there
54:37
because it has to check to see if the
54:39
same user id is creating that review
54:42
and then we are going to change the text
54:45
to
54:46
[Music]
54:47
bad food bad food so
54:50
if i send that success let's go back
54:54
over here now
54:57
this whole uh tutorial isn't really
55:00
about
55:01
the like the most secure user
55:03
authentication methods
55:05
so this is just all about how to use
55:08
mongodb atlas how to set up
55:09
the basic mern stack so if you're really
55:12
looking for how to get the most secure
55:16
database as far as user authentication
55:19
you're going to have to check out
55:20
another tutorial so i'm just using some
55:22
basic things as far as sending the user
55:24
id
55:25
with this request and checking for that
55:27
so if you want to learn more about
55:29
security with mongodb and mongodb atlas
55:32
check the resources in the description
55:35
but you can see
55:36
it has changed to bad
55:39
food so we've updated this
55:42
item now let's see if we can delete it
55:45
so let's go back over here again
55:47
and to delete it we're going to to make
55:49
this into
55:51
the delete the query request we can do
55:53
question mark
55:54
and then review
56:00
or wait wait is id let me see it's just
56:03
id
56:05
id equals that we'll just delete the
56:09
stuff in here and it's okay if you send
56:11
extra stuff
56:12
in the body just as long as it has the
56:14
required fields
56:16
so i'm going to change this to a delete
56:18
and then
56:19
click send cannot read property id of
56:22
undefined
56:23
so let's see what that means
56:29
oh this user this one there shouldn't be
56:32
a dot there
56:34
okay now let's check this send
56:37
and success okay so let's go over here
56:41
we will refresh
56:49
zero result it's been deleted so now we
56:53
added a review editor review and
56:56
deleted a review we are getting
56:59
close to being done with the back end
57:01
there's just two more things we're going
57:03
to add
57:04
we want to be in the let's go see the
57:07
routes we're actually going to add
57:09
two more routes to the route file
57:12
for the restaurants
57:15
so i'm just going to paste these in here
57:16
and i'll explain them so
57:18
now we're going to instead of getting
57:20
this gets a list of all restaurants
57:21
we want to get a list a specific
57:24
restaurant
57:25
with a specific id when you get to that
57:29
specific
57:29
restaurant not only is it going to give
57:32
all the information that you get when
57:33
you get all the restaurants
57:35
you're also going to get a list of all
57:37
the reviews
57:38
that are associated with that restaurant
57:41
and then
57:42
we're going to have a route for cuisines
57:44
we want to get a list of all
57:46
just return a list of cuisines the
57:48
reason why we're going to do that
57:50
is because on our front end we want a
57:52
user to be able to select the cuisine
57:55
from a drop down menu
57:56
instead of just having to have all the
57:58
cuisines memorized
57:59
and the way we're going to populate that
58:01
drop down menu is from this route right
58:03
here
58:03
so you can see these are both routes
58:06
from the restaurants controller
58:08
file and so we have to make both of
58:11
these
58:12
from the restaurants controller so i'm
58:14
going to save this
58:15
i'm going to pop over to restaurants
58:16
controller and then we are going to add
58:20
so right now we have this method here we
58:22
just have to add two more
58:23
methods for those other routes so
58:26
i'm going to paste in some code here and
58:28
then we'll look at it so get restaurants
58:30
by
58:31
id we're just going to look for a
58:33
parameter the id parameter
58:36
so a query is is something that's after
58:39
the question mark in the url
58:41
a parameter is just write something
58:43
that's right after in the url
58:45
after a slash and then the body is
58:48
in the body of the request so we're
58:50
going to get
58:52
this this item this this id and then we
58:55
are going to call the restaurants
58:58
get restaurants by d which we still have
58:59
to create passing the id
59:01
and we're going to get the restaurant
59:02
back there's no restaurant we return an
59:05
error or we return the restaurant
59:08
and then we also if there's another air
59:09
we can return that
59:11
so also get restaurant cuisines
59:15
this time it's not going to need to
59:16
accept any parameters or anything like
59:18
that
59:19
it's just going to get get cuisines and
59:21
that's going to return
59:23
the cuisines or there's going to be an
59:24
error okay that was pretty
59:26
straightforward
59:28
so now we have to go into the
59:30
restaurants deo
59:31
and finish that up there this is where
59:34
it gets a
59:35
little more complicated okay so now let
59:38
me just
59:38
paste in this new code here and let me
59:41
review it so
59:42
get restaurants by id so this is going
59:45
to be more
59:46
complicated because we're com we're
59:48
going to be trying to get the reviews
59:50
from one collection and put it into the
59:52
the restaurant
59:54
so first of all you see that we're using
59:57
object id
59:58
we're going to have to add the same code
60:00
that we had in
60:02
the restaurants deo
60:05
to get access to the object id here so
60:08
let's go over here
60:11
add this at the top
60:16
okay so let's look at how this works
60:19
we are going to create a pipeline
60:22
so this is uh one thing that's pretty
60:25
cool about mongodb
60:27
db is that you can create certain
60:29
pipelines that help
60:31
um match different collections together
60:35
so we're first of all we are trying to
60:37
get
60:38
we're specifically trying to match the
60:40
id of a certain
60:42
restaurant but then
60:45
we are going to look up some other
60:48
items which are going to be the reviews
60:50
to add to the result
60:52
this is part of the mongodb aggregation
60:55
pipeline
60:56
lookup is only one part of it the
60:59
aggregation pipeline is a framework for
61:01
data aggregation
61:02
modeled on the concept of data
61:04
processing pipelines
61:06
documents enter a multi-stage pipeline
61:09
that transforms the documents
61:11
into aggregated results it's very
61:13
powerful and i'm only going to touch on
61:15
a small part of it in this tutorial
61:17
check out the resources in the
61:18
description if you want to learn more
61:20
about it
61:21
mongodb atlas data explorer and compass
61:24
can assist in creating pipelines
61:26
so from the reviews collection we are
61:30
going to create this
61:31
pipeline that's going to match
61:34
the the restaurant id and then we're
61:38
going to find
61:38
all the reviews that match that
61:40
restaurant id
61:42
and we are going to set that to be
61:45
reviews
61:45
and the result is going to be listed as
61:48
reviews we're going to add this
61:50
we're going to add a field of reviews
61:52
and that's going to be a new thing in
61:54
the results
61:55
now if you check the description i'm
61:57
going to link
61:58
to a a a guide that shows you how to
62:02
create these pipelines
62:04
so if it will give you all the
62:05
information about creating the exact
62:07
pipeline that you need if you're trying
62:08
to do something a little different than
62:09
this
62:11
okay then we are going to aggregate the
62:14
pipeline which is to
62:16
collect everything together and we're
62:18
going to return that we're going to
62:19
return
62:20
the the next item which is the the
62:24
restaurant with all the reviews
62:25
connected
62:27
and then for get cuisines this is kind
62:29
of the simplest thing here
62:30
we have an empty array here we're just
62:33
going
62:34
to await restaurants.distinct
62:37
cuisine that means we're going to get
62:39
all the distinct
62:40
cuisines one of each cuisine because a
62:42
lot of restaurants have the same cuisine
62:44
so you're going to get each cuisine one
62:47
time
62:47
and we're just gonna return those
62:48
cuisines and that's all
62:52
so we got that saved it's time to test
62:55
this out again
62:56
so let's just look at our routes file
62:59
again
63:01
that's not it here we go so we're going
63:05
to
63:05
test we've tested this route this route
63:08
this route this route
63:09
now we're going to test these two routes
63:11
first we're going to test the cuisines
63:13
route
63:13
so restaurant slash cuisines
63:17
and then this is going to be a get
63:18
request if i send for that
63:20
and now here's all the cuisines you can
63:22
see it's just a list here
63:24
and later we can use this to populate
63:26
the drop down menu
63:27
now we're going to do the id one so
63:30
we're gonna look for a
63:31
well first of all let's get a list we
63:33
need to get a restaurant id
63:35
so if i sent oh before that
63:39
let's make another review because we
63:41
when we get a specific restaurant id we
63:43
want the reviews to come back as well
63:46
so i'm going to make i'm going to
63:49
get the list of restaurants
63:52
and get that restaurant id now i'm going
63:56
to review
63:58
post and let's do
64:01
[Music]
64:03
restaurant
64:05
id and we'll put that id in there
64:12
and then we will do the review which is
64:14
going to be text
64:17
it's going to say nice
64:21
and then let's try another one that's
64:24
going to say
64:26
bad and this is going to be from a
64:28
different person i'm going to put one
64:29
two three
64:31
four six and this is just going to say
64:34
quincy
64:35
now i'll send that okay now we have two
64:38
reviews
64:39
and we have this restaurant id so i'm
64:41
gonna copy that id
64:43
slash and i'm gonna paste in the
64:44
restaurant id right there and this time
64:46
i'm gonna do a get request
64:48
and see what happens okay so we just got
64:51
this specific restaurant id
64:55
if we scroll down now we have the
64:57
reviews look this is
64:59
this is an array so remember quincy says
65:02
bad
65:03
bo says nice so it worked we were able
65:07
to get a list of the reviews for the
65:09
restaurant that way
65:10
now we never really need to get an
65:13
individual review so
65:15
we don't actually have any route we
65:17
don't have a get rid out around to get a
65:19
review because we'll we'll never be
65:21
getting just an
65:22
individual review we'll just be getting
65:24
all of the reviews
65:25
or just editing and editing a review so
65:29
we are done with our backend server
65:33
all the route to work and now we're
65:35
going to create our front end and
65:36
connect it to our back end
(1:05:38) Create React frontend
65:42
okay we got the back end of our project
65:44
created with node in express
65:47
now we're going to create the front end
65:49
so let's go back
65:51
to our root directory our restaurant
65:53
reviews directory
65:54
and now we're going to create the front
65:56
end so
65:58
here i'm going to use create react app
66:00
so
66:01
i'm going to use mpx you may have to
66:03
install if you don't already have it
66:04
installed
66:05
and i'll do create react
66:10
app and then i'm just going to call it
66:12
the front end
66:14
because it's the front end of our app
66:16
now this is going to create
66:18
a basic react project
66:21
that will be able to update for our
66:23
purposes
66:28
now before we start actually actually
66:30
editing our files and creating our front
66:32
end
66:33
we're going to install one more thing
66:35
npm install
66:36
bootstrap this is a css framework
66:41
and it's just going to make designing
66:43
our app much simpler
66:45
we're not going to do any custom css for
66:47
this project we're just going to
66:48
use what's included in bootstrap and now
66:52
we're going to install
66:54
uh npm install
66:57
react router dom
67:01
we are going to be using react router to
67:04
route
67:04
different urls to different pages on our
67:06
site
67:07
so let's go over to visual studio code
67:10
we're going to close the backend folder
67:12
and open up the front end folder
67:14
now in this src folder we have app.js
67:18
this is the entry point for our react
67:20
app
67:21
so this is what we're going to start
67:22
with modifying
67:25
i'm not going to go over all the details
67:27
about how react
67:28
works so it's good to have some
67:29
understanding about react
67:31
but even if you're new to react you
67:33
should still be able to follow along
67:35
i'm going to be using some parts of
67:36
react hooks but again we're not going to
67:38
go into a lot of detail
67:40
so if you like are really interested in
67:42
react hooks there's some other tutorials
67:43
for that but we will be using that and
67:45
i'll be explaining them a little bit
67:46
here
67:47
so the first thing we're going to do is
67:49
just do some imports
67:51
so we're actually going to update pretty
67:53
much everything in this file
67:54
and we're not going to use this logo
67:56
we're not going to use this css
67:57
i'm going to actually paste in these new
67:59
imports we're going to
68:00
import react and we're going to from and
68:03
then from react router dom
68:05
switch route and link because we're
68:07
using react router to
68:09
create our different url routes that
68:10
people are going to go to and route to
68:12
the different
68:13
react components and then we just have
68:15
our bootstrap here
68:17
this is what we're going to be using to
68:19
style our whole
68:20
app okay in this app i'm going to
68:24
erase everything that's being returned
68:26
here
68:27
actually just inside this div
68:31
and for now i'm just going to type in
68:33
hello
68:34
world we're going to make sure
68:37
everything is working so far
68:39
so if we go back over to our terminal
68:42
i'm in the front end directory and i can
68:44
just do npm start
68:49
on it open up local 3000 in my browser
68:51
says hello world
68:53
so let me just zoom in more on that
68:56
hello
68:57
world okay let's go back to our
69:01
code and we're going to start making
69:03
this a little more complex
69:07
so this file is going to have a header
69:11
with some navigation on it and it's
69:14
going to have a route
69:15
where the main part of the page can
69:17
switch between a few different routes
69:20
so let's start with our component so
69:23
we're going to start by creating some
69:24
simple
69:25
components that then our router will
69:27
load the different components depending
69:29
on
69:30
which url that someone is going to or
69:32
which route someone's going to
69:34
so let's open up the file browser here
69:36
and then
69:38
under this src folder i'm going to
69:41
create a new folder
69:42
called components
69:48
inside components i'm going to make
69:49
three new files we're going to have
69:52
a restaurants list file
69:59
which will list the restaurants we're
70:02
going to have a
70:04
[Music]
70:05
restaurants.js file which would be a
70:07
single restaurant
70:09
we are going to have an ad
70:12
review which will obviously
70:16
be used to add a new review and then a
70:19
login.js which is the login page
70:22
so now that we have that we're just
70:24
going to make a
70:26
a simple thing for each one right now so
70:29
let me just
70:30
copy what we have here and i'm going to
70:33
go to add review
70:34
we're just going to start off by making
70:35
something
70:37
really simple
70:41
and i will call this ad
70:44
review and we're going to
70:48
export ad review
70:52
and then we're basically going to do the
70:53
same thing for each with one of these
70:56
this is going to be login
70:59
this is going to be
71:05
restaurants list
71:08
and then oh this is spelled wrong so let
71:10
me
71:11
rename this
71:17
and this is just gonna be restaurants
71:27
okay so now that we have all these
71:30
created
71:33
let me make sure they're all saved okay
71:36
now we can start creating the rest of
71:39
our main
71:40
file that's going to be the link to
71:42
those others
71:45
so since we are going to be linking to
71:48
those
71:48
other components i made we have to
71:50
import them at the top
71:52
so that's what i'm doing here i just
71:54
paste it in so we're going to import
71:55
every view from component slash add
71:57
review
71:58
restaurant restaurants list and login
72:03
and now let's see what we're going to
72:04
return here
72:07
okay i just pasted in some new code for
72:10
what this is going to return
72:12
and i'm going to go over it right now
72:14
it's going to start with the nav bar
72:16
now let me just highlight the nav bar
72:18
here now this nav
72:20
bar is just basically copy and pasted
72:23
from the bootstrap documentation
72:26
so bootstrap has all these different
72:28
components and suggested ways of how to
72:30
make them
72:31
and so one way you can do if there's a
72:33
component you want you go over to the
72:34
bootstrap documentation
72:36
you can copy the code for that and then
72:39
you can update it for your purposes
72:41
so this is just a basic bootstrap nav
72:44
bar
72:44
and it's going to have three different
72:47
links
72:48
the first link you can see is going to
72:50
be
72:51
so it it's all so this is how the navbar
72:54
style that's going to be
72:56
these different things are different
72:57
bootstrap classes
72:59
that are used to expand to style the
73:02
navbar
73:03
the first link is this one right here
73:05
