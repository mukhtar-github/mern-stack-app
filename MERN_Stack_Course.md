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

We could switch to page two, so I'll show you how you would do that, we can see the first one right now is a *restaurant called angelica film center*, but if I do */restaurants?zipcode=10012&page=2*, and then I click send, okay now the *first restaurant is cafe gitane*, and if we go all the way to the bottom, we're now on *page 2*. There's still the same number of results, and we have *20 per page*.

We are also going to do a search by *cuisine* and then I'm going to do *localhost:6000/api/v1/restaurants?cuisine=American*. And now I'm going to search by *name*, this one actually is not going to work, cos we haven't got the set up yet. But let's search for a *restaurant name*, let's just search for *food*, *what restaurant has the word food in its name*. Okay not found this is the thing I said that we need to set up right within *Mongodb Atlas*.

Okay I'm on *Mongodb Atlas*, I'm in my *database under restaurants*, and I'm going to click *indexes*. So I'm going to *create an index*. Actually, I realized before we create it, we'll want to confirm that we know the exact *field* we want to *create an index* on. So we know the *only field we want to search for* is the *name field*. So let's go back to *indexes*, then click on the *create index* tab, and then we'll put *name in the field* , and for the *type it's going to be text*. I'll *review that and confirm*. And now it's going to *create our index*.

Now, let's go back and see if that *search* works. So I'm going to send the same *search -- localhost:6000/api/v1/restaurants?name=food*, and now it works, now that we *created that index*. And let's look at the *names of the restaurants*. Well, *this names all inludes food*, this one is *feel food*, this one is *king food*. So it's searching for the word *food*, this one is *all about indian food*, it's searching for the *keyword food in the name of the restaurants*. So we have this part of the *api* working.

Okay the whole point of this *app* is that *people can leave reviews for certain restaurants*. So let's go back to our *route file*, and we're going to create the *routes for people to post, put, and delete, reviews*. So *post is to create a new review*, *put is to edit a review*, and *delete is if you want to delete your review*. So let me add those *routes* right now. Okay, so already we have *router.route("/")*, and we just made a *single get request -- get(RestaurantsCtrl.apiGetRestaurants)* in the *route file*.

But now we are going to be able to make the *post, put, and delete*, all within *one router call to the router*. So for the *route review*, if it's a *post http request*, it's going to use the *post(ReviewsCtrl.apiPostReview)* method, *put* the *put(ReviewsCtrl.apiUpdateReview)* method, and *delete* the *delete(ReviewsCtrl.apiDeleteReview)* method. Now we still have to *create those methods*, and we actually have to *import the file* that we haven't created yet, but I'll do that -- *import ReviewsCtrl from "./reviews.controller.js"*.

Okay now, let's create these *methods* that will be called when people go to these different *routes*. So in the *api folder*, I'm going to create a new file and it's going to be called *reviews.controller.js*. Okay, so I've pasted in some code for the *reviews controller*. I'm just going to review it, so we start off by *import ReviewsDAO from "../dao/reviewsDAO.js"*, which we still have to create. So we'll do that right after this, and then we're going to create the *ReviewsController* class.

And then there's going to be three methods, we have the *apiPostReview* method, and then we are going to get some information from the *body*. Before, *we got information from the query parameter*, and now *we're going to get information right from the body of the request*. So we get the *restaurant_id -- const restaurantId = req.body.restaurant_id*, and we get the *text of the review -- const review = req.body.text*, and then for the *userInfo* we're going to get the *name and the user_id from the body -- const userInfo = { name: req.body.name, _id: req.body.user_id }*.

And you'll see how all this works, when we test it later, and I'll show you how you'll send this information through the body. We're going to get *a new date -- const date = new Date()*, and then we're going to put that all together, we're going to send that to the *ReviewsDAO.addReview* data, which we still have to create. It's going to send this information the *restaurantId, userInfo, review, date*.

And then in *this other file -- ReviewsDAO.addReview*, which we're going to create, we'll actually send that to the *database*. But it's going to *return success -- res.json({ status: "Success" })* if it worked, and then there'll be an *error message -- res.status(500).json({ error: e.message })* if it didn't work. Our next method is *apiUpdateReview*, and it's pretty similar with the former.

We're going to get the information from *the body, the review_id -- const reviewId = req.body.review_id*, *the text -- const text = req.body.text*. Those are the only things we need, they're just the *review_id and the text we're going to update*. We're going to automatically create a *new date -- const date = new Date()*. And then we're going to *update the review -- ReviewsDAO.updateReview*.

We also need the *user_id -- req.body.user_id*, we're going to get that in the *body* too, and we just send it all over. So we get the *user_id* because we want to *make sure the user who created the review is the same one who's trying to update the review*. And then we just check if there's *an error and return the error message*. If *(reviewResponse.modifiedCount === 0)*, that means that the *review was not updated*, and then we can *throw an error*.

Okay the final method is the *apiDeleteReview*, this is going to be a little different. This is going to actually have a *query parameter -- const reviewId = req.query.id*. In the body, instead of the *id* to be deleted, it's going to be a *query parameter right in the url*. And then we're going to get *the user_id right in the body -- const userId = req.body.user_id*. Now this is admittedly non-standard, for *http delete requests it's non-standard to have anything in the body*.

But for this example we're going to do it. This is just like a *simple version of authentication*. This is nothing that you would do in a *production environment*. But for this example, we're going to *check the user_id in the body to see if it's the same user_id that created the review before it's deleted*. In a production environment you're going to have a little more complex things. You're *not going to actually include anything in the body in the delete request*.

And then we are going to call the *ReviewsDAO.deleteReview*, and then send over the *reviewId, userId*. And if it says *success will respond with success -- res.json({ status: "Success"})*, or else we'll have an *error -- res.status(500).json({ error: e.message })*. Okay I've been talking about the *ReviewsDAO* a lot, so let's create that now. I'm going to create a new file and it's going to be called *reviewsDAO.js*.

Okay pasted in the code for the *reviewsDAO*, it's very similar to the *restaurants* one. First we're going to *import mongodb* mainly so we can get access to *ObjectId*, we're going to have to convert *a string--ObjectId to a mongodb ObjectId*. We're going to get the *reviews* which is going to just be an empty variable. But we're going to fill it with *a reference to the reviews collection*.

Just like before, we're going to have the *injectDB(conn)*, and we're going to see if the *reviews already exist then we're just going to return*, but if not, we are going to *access the database -- reviews = await conn.db(process.env.RESTREVIEWS_NS).collection("reviews")*, and then we're gonna access the *reviews collection*. And one great thing about *mongodb* is that, *it's okay if it doesn't exist already, it will just automatically be created whenever we try to insert a document into it*.

And then the first thing we're going to do is to *add a review -- addReview(restaurantId, user, review, date)*, and you can see it takes a *restaurantId, user, review, and date*. And then we're going to create the *review doc -- const reviewDoc = { name: user.name, user_id: user._id, date: date, text: review, restaurantId: ObjectId(restaurantId) }*, we are going to actually create an *ObjectId* from this. Then we are going to *just insert it right into the database -- return await reviews.insertOne(reviewDoc)*, with the *restaurantId converted to a mongodb ObjectId -- restaurantId: ObjectId(restaurantId)*. And then *if there's an error it'll return the error*.

And then, for the *update review -- updateReview(reviewId, userId, text, date)*, we're accepting *reviewId, userId, text, and the date*, and the *text*, is the *text of the review*. And you can see that we are *looking for a review that has the right review id and also has the right user id -- {user_id: userId, _id: ObjectId(reviewId)}*. We only want to *update a review, if it was created by the same user that's trying to update it*. And then we'll just *set the new text and the new date -- {$set: { text: text}, date: date}*. And then *return updateResponce, or return error*.

And then, for the *delete review -- deleteReview(reviewId, userId)*, we're looking for a *review that has the the id and also the user id*. So it's the *same user that created that review*, and if so we're going to *delete that review -- deleteOne*. And then *return the deleteResponce or to return the console.error*. Okay we're going to *test out adding review*. But first let's get a *list of restaurants*, because we're going to need the *restaurant id*, since we're going *to add the review to the restaurant id*.

So now I'm going to make a *post request to localhost:6000/api/v1/restaurants/review*. Now here's the body that we have to send over. So first, we have to send over the *restaurant id*, and then we need the *text of the review* which is going to be *Great Food!*. And then we need the *user_id*, which is going to be *1234*, that can be a string or a number and I will put *name*, so *the name of the person leaving the review which will be Mukhtar*. Now I'll just send that over. So *"status": "Success"*.

```javascript
// POST => http://localhost:6000/api/v1/restaurants/review
{
    "restaurant_id": "5eb3d669b31de5d588f45e8f",
    "text": "Great Food!",
    "user_id": "1234",
    "name": "Mukhtar"
}
// Insomnia Output
{
    "status": "Success"
}
// Atlas Output
{
    _id: 61e2b5aaec4f4a6826d4a2a3
    name: "Mukhtar"
    user_id: "1234"
    date: 2022-01-15T11:53:14.949+00:00
    text: "Great Food!"
    restaurant_id: 5eb3d669b31de5d588f45e8f
}
```

Let's go over to the *Mongodb Atlas interface*. I'm going to refresh, and this is how we're going to see if it got successfully put into our database. So we're on *reviews*, and here it is look we got *text: "Great Food!", we got the user_id: "1234", we got the name: "Mukhtar", we got the restaurant_id: 5eb3d669b31de5d588f45e8f*, and everything got entered correctly.

Now let's see if we can *edit it*. So *to edit it*, we are going to need the *objectId number*. So let me copy it, and we'll go back over *to Insomnia*. This is going to be a *put request*, instead of *restaurant id, it's going to be review id*, and then we'll paste the copied *review objectId number*. Now we can keep the *user id and the name in there because it has to check to see if the same user id is creating that review, and then we are going to change the text to Bad Food!*.

```javascript
// PUT => http://localhost:6000/api/v1/restaurants/review
{
    "review_id": "61e2b5aaec4f4a6826d4a2a3",
    "text": "Bad Food!",
    "user_id": "1234",
    "name": "Mukhtar"
}
// Insomnia Output
{
    "status": "Success"
}
// Atlas Output
{
    _id: 61e2b5aaec4f4a6826d4a2a3
    name: "Mukhtar"
    user_id: "1234"
    date: 2022-01-15T19:32:21.202+00:00
    text: "Bad Food!"
    restaurant_id: 5eb3d669b31de5d588f45e8f
}
```

So if I send that, success! Let's go back over to *Atlas*, Now this whole tutorial isn't really about like the most *secure user authentication methods*. So this is just all about *how to use Mongodb Atlas, how to set up the basic MERN Stack*. So, if you're really looking for *how to get the most secure database as far as user authentication, you're going to have to check out another tutorial*. So I'm just using some basic things as far *as sending the user id with the request and checking for that*. So, you can see, *it has changed to Bad Food!, so we've updated this item*.

Now let's see if we can *delete it*. So let's go back over to *Insomnia* again. And to *delete it*, we're going to make *the url into the delete query request, we put a question mark and then id equals, we paste then review_id*. That will just *delete the stuff*. It's okay if you send extra stuff in the body, just as long as it has the *required fields*. So I'm going to change this to a *delete and then click send, and success*. Okay, so let's go over to *Atlas and refresh, refresh zero result it's been deleted*.

```javascript
// DELETE http://localhost:6000/api/v1/restaurants/review?id=61e2b5aaec4f4a6826d4a2a3
{
    "user_id": "1234",
    "name": "Mukhtar"
}
// Insomnia Output
{
    "status": "Success"
}
// Atlas Output
QUERY RESULTS 0
```

So now we've *added a review, edited a review and deleted a review*. We are getting close to being done with the *backend*. There's just two more things we're going to add. We're actually going to *add two more routes to the route file for the restaurants*. So I'm just going to *paste in the code and I'll explain them*. So now we're going to instead of *getting the list of all restaurants with the route -- router.route("/").get(RestaurantsCtrl.apiGetRestaurants)*. We want to *get a list a specific restaurant with a specific id -- router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById)*. When you *get to that specific restaurant, not only is it going to give all the information that you get when you get all the restaurants, you're also going to get a list of all the reviews that are associated with that restaurant*.

And then we're *going to have a route for cuisines -- router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines)*. We want *to just return a list of cuisines*. The reason why we're going to do that is because, *on our frontend, we want a user to be able to select the cuisine from a drop down menu, instead of just having to have all the cuisines memorized*. And the way we're going to *populate that drop down menu is from the cuisines route*. So you can see, *these are both routes from the restaurants controller file, and so we have to make both of these from the restaurants controller*.

So right now we have *this method -- apiGetRestaurants*, we just have to *add two more methods for those other routes*. So I'm going to paste in some code, and then we'll look at it. So *apiGetRestaurantById*, we're just going to look for *a parameter, the id parameter, so a query is something that's after the question mark in the url, a parameter is something that's right after in the url after a slash, and then the body is in the body of the request*. So we're going to get *this item -- id = req.params.id || {}*, and then we are going to call the *restaurant = await RestaurantsDAO.getRestaurantByID(id)*, which we still have to create passing in the *id*. And we're going to get the restaurant back. If *there's no restaurant we return an error or we return the restaurant, and then if there's another error we can return that*.

So, also *apiGetRestaurantCuisines*. This time it's not going to need to accept any parameters or anything like that it's just going to *get -- cuisines = await RestaurantsDAO.getCuisines()*. And that's going to *return the cuisines or if there's going to be an error to catch*. Okay that was pretty straightforward. So now we have to go into the *restaurantsDAO file and finish that up*. This is where it gets a little more complicated.

Okay, so now let me just *paste in the new code in the restaurantsDAO file, and review it*. So *getRestaurantByID(id)*, so this is going to be more complicated, because we're trying to get the reviews from one collection and put it into the restaurant's collection. So first of all you see that we're using *_id: new ObjectId(id)*. We're going to have to *add the same code -- const ObjectId = mongodb.ObjectId*, that we had in the *reviewsDAO file*, to get access to the *ObjectId*.

Okay, so let's look at how this works. We are going to create a *pipeline*. So, one thing that's pretty cool about *Mongodb, is that you can create certain pipelines that help you match different collections together*. So, first of all  we're specifically trying to *match the id -- $match: {_id: new ObjectId(id)} of a certain restaurant*. But then we are going to *look up some other items which are going to be the reviews -- $lookup: {from: "reviews", ...} to add to the result*.

This is part of the *Mongodb Aggregation Pipeline*. *Lookup* is only one part of it. The *Aggregation Pipeline is a Framework for data aggregation, modeled on the concept of data processing pipelines*. *Documents enter a multi-stage pipeline that transforms the documents into aggregated results*. It's very powerful, and I'm only going to touch on a small part of it in this tutorial. *Mongodb Atlas data explorer and Compass can assist in creating pipelines*.

So from the *reviews collection -- $lookup: {from: "reviews", ...}*, we are going to *create the pipeline -- pipeline: [{$match: {$expr: {$eq: ["$restaurant_id", "$$id"]}}} ...]*, that's going to *match the restaurant_id, and then we're going to find all the reviews that match that restaurant_id*. And we are going to set that to be *reviews -- as: "reviews", and the result is going to be listed as reviews*.

We're going *to add a field of reviews -- $addFields: {reviews: "$reviews"}, and that's going to be a new thing in the results*. Okay, then we are going to *aggregate the pipeline -- restaurants.aggregate(pipeline).next(), which is to collect everything together, and we're going to return the next item which is the the restaurant with all the reviews connected*.

And then for *getCuisines()*, this is kind of the simplest one, we have an *empty array -- let cuisines = []*, and we're just going to *cuisines = await restaurants.distinct("cuisine")*, that means we're going to get all the *distinct cuisines*. One of each *cuisine*, because *a lot of restaurants have the same cuisine*, so we're going to *get each cuisine one time*, and we're just going to *return those cuisines*. And that's all. So we got that saved, it's time to test this out again.

So let's just look at our *routes file* again. So, now we're going to *test these two routes*. First we're going to test the *cuisines route*, so *localhost:6000/api/v1/restaurants/cuisines*, and then this is going to be a *get request*. If I *send* for that, and now here's all the cuisines, you can see it's just a list here, and later we can use this to populate the *drop down menu*.

```javascript
[
    "Afghan",
    "African",
    "American",
    "Armenian",
    "Asian",
    "Australian",
    "Bagels/Pretzels",
    "Bakery",
    "Bangladeshi",
    "Barbecue",
    "Bottled beverages, including water, sodas, juices, etc.",
    "Brazilian",
    "CafÃ©/Coffee/Tea",
    "Café/Coffee/Tea",
    "Cajun",
    "Californian",
    "Caribbean",
    "Chicken",
    "Chilean",
    "Chinese",
    "Chinese/Cuban",
    "Chinese/Japanese",
    "Continental", ...
]
```

Now, we're going to do the *id* one. So, first of all let's get a list, we need to get a *restaurant_id*, because when we get a specific *restaurant_id, we want the reviews to come back as well*. So I'm going to *get the list of restaurants, and get that restaurant_id -- GET - localhost:6000/api/v1/restaurants/ -- Output - {"restaurants": [{"_id": "5eb3d668b31de5d588f4293c", ...]}*.

Now, *in the url, I'm going to post review, and in the body, let's do restaurant_id and we'll paste that _id in there, and then we will do the review which is going to be text, it's going to say "Nice"*. And then let's try another one *that's going to say "Bad!", and this is going to be from a different person, I'm going to use a different user_id -- "user_id": "1236", and this is just going to say -- "name": "Major". Now I'll send that*.

```javascript
// POST http://localhost:6000/api/v1/restaurants/review
{
    "restaurant_id": "5eb3d668b31de5d588f4293c",
    "text": "Nice",
    "user_id": "1234",
    "name": "Mukhtar"
},
{
    "restaurant_id": "5eb3d668b31de5d588f4293c",
    "text": "Bad!",
    "user_id": "1236",
    "name": "Major"
}
// Insomnia Output
{
    "status": "Success"
}
```

Okay, now we have *two reviews, and we have the restaurant_id, so I'm going to copy that*. Then in *the url will be -- localhost:6000/api/v1/restaurants/id/5eb3d668b31de5d588f4293c, and this time I'm going to do a GET request and see what happens*.

```javascript
{
    "_id": "5eb3d668b31de5d588f4293c",
    "address": {
        "building": "284",
        "coord": [
            -73.9829239,
            40.6580753
        ],
        "street": "Prospect Park West",
        "zipcode": "11215"
    },
    "borough": "Brooklyn",
    "cuisine": "American",
    "grades": [
        {
            "date": "2014-11-19T00:00:00.000Z",
            "grade": "A",
            "score": 11
        },
        {
            "date": "2013-11-14T00:00:00.000Z",
            "grade": "A",
            "score": 2
        },
        {
            "date": "2012-12-05T00:00:00.000Z",
            "grade": "A",
            "score": 13
        },
        {
            "date": "2012-05-17T00:00:00.000Z",
            "grade": "A",
            "score": 11
        }
    ],
    "name": "The Movable Feast",
    "restaurant_id": "40361606",
    "reviews": [
        {
            "_id": "61e478108b470f83a0d7c277",
            "name": "Major",
            "user_id": "1236",
            "date": "2022-01-16T19:54:56.333Z",
            "text": "Bad!",
            "restaurant_id": "5eb3d668b31de5d588f4293c"
        },
        {
            "_id": "61e477d18b470f83a0d7c276",
            "name": "Mukhtar",
            "user_id": "1234",
            "date": "2022-01-16T19:53:53.269Z",
            "text": "Nice",
            "restaurant_id": "5eb3d668b31de5d588f4293c"
        }
    ]
}
```

Okay, so we just got the specific *restaurant_id, if we scroll down, now we have the reviews, look this is an array, so remember Major says "Bad!", and Mukhtar says "Nice"*. So it worked, we were able to get a list of the reviews for the restaurant that way. Now, *we never really need to get an individual review, so we don't actually have any route to get a review, because we'll never be getting just an individual review, we'll just be getting all of the reviews or just editing a review*. So we are done with our *backend server, all the routes worked, and now we're going to create our frontend and connect it to our backend*.

## Create React Frontend

Okay we got the *backend of our project created with Node and Express, now we're going to create the frontend*. So let's go back *to our root directory, our restaurant reviews directory*. And now we're going *to create the frontend*. So here I'm going to *use create React App*. So I'm going to use *npx, you may have to install it if you don't already have it installed*. And I'll do *create react app and then I'm just going to call it the frontend, because it's the frontend of our app -- npx create-react-app frontend*.

Now this is going to *create a basic React Project that we'll be able to update for our purposes*. Now before we start actually *editing our files and creating our frontend*, we're going to install one more thing, *npm install bootstrap*. This is a *CSS framework*, and it's just going to make designing our app much simpler, we're not going to do any custom CSS for this project, we're just going to use what's included in bootstrap.

and now we're going to install uh npm install react router dom we are going to be using react router to route different urls to different pages on our site so let's go over to visual studio code we're going to close the backend folder and open up the front end folder now in this src folder we have app.js this is the entry point for our react app so this is what we're going to start with modifying i'm not going to go over all the details about how react works so it's good to have some understanding about react but even if you're new to react you should still be able to follow along i'm going to be using some parts of react hooks but again we're not going to go into a lot of detail so if you like are really interested in react hooks there's some other tutorials for that but we will be using that and i'll be explaining them a little bit here so the first thing we're going to do is just do some imports so we're actually going to update pretty much everything in this file and we're not going to use this logo we're not going to use this css i'm going to actually paste in these new imports we're going to import react and we're going to from and then from react router dom switch route and link because we're using react router to create our different url routes that people are going to go to and route to the different react components and then we just have our bootstrap here this is what we're going to be using to style our whole app okay in this app i'm going to erase everything that's being returned here actually just inside this div and for now i'm just going to type in hello world we're going to make sure everything is working so far so if we go back over to our terminal i'm in the front end directory and i can just do npm start on it open up local 3000 in my browser says hello world so let me just zoom in more on that hello world okay let's go back to our code and we're going to start making this a little more complex so this file is going to have a header with some navigation on it and it's going to have a route where the main part of the page can switch between a few different routes so let's start with our component so we're going to start by creating some simple components that then our router will load the different components depending on which url that someone is going to or which route someone's going to so let's open up the file browser here and then under this src folder i'm going to create a new folder called components inside components i'm going to make three new files we're going to have a restaurants list file which will list the restaurants we're going to have a restaurants.js file which would be a single restaurant we are going to have an ad review which will obviously be used to add a new review and then a login.js which is the login page so now that we have that we're just going to make a a simple thing for each one right now so let me just copy what we have here and i'm going to go to add review we're just going to start off by making something really simple and i will call this ad review and we're going to export ad review and then we're basically going to do the same thing for each with one of these this is going to be login this is going to be restaurants list and then oh this is spelled wrong so let me rename this and this is just gonna be restaurants okay so now that we have all these created let me make sure they're all saved okay now we can start creating the rest of our main file that's going to be the link to those others so since we are going to be linking to those other components i made we have to import them at the top so that's what i'm doing here i just paste it in so we're going to import every view from component slash add review restaurant restaurants list and login and now let's see what we're going to return here okay i just pasted in some new code for what this is going to return and i'm going to go over it right now it's going to start with the nav bar now let me just highlight the nav bar here now this nav bar is just basically copy and pasted from the bootstrap documentation so bootstrap has all these different components and suggested ways of how to make them and so one way you can do if there's a component you want you go over to the bootstrap documentation you can copy the code for that and then you can update it for your purposes so this is just a basic bootstrap nav bar and it's going to have three different links the first link you can see is going to be so it it's all so this is how the navbar style that's going to be these different things are different bootstrap classes that are used to expand to style the navbar the first link is this one right here

73:05
