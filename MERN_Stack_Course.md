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

Now this is going to *create a basic React Project that we'll be able to update for our purposes*. Now before we start actually *editing our files and creating our frontend*, we're going to install one more thing, *npm install bootstrap*. This is a *CSS framework*, and it's just going to make designing our app much simpler, we're not going to do any custom CSS for this project, we're just going to use what's included in the *bootstrap*.

And now, we're going to *install, npm install react-router-dom*. We are going to be *using react router, to route different urls to different pages on our site*. So let's go over to *Visual Studio Code*. We're going to close the backend folder and open up the frontend folder. Now in this *src folder we have app.js, this is the entry point for our react app*, so this is what we're going to start with modifying.

I'm not going to go over all the details about how *react* works. So it's good to have some understanding about *react*, but even if you're new to *react*, you should still be able to follow along. I'm going to be using some parts of *react hooks*, but again we're not going to go into a lot of detail. So if you are really interested in *react hooks*, there's some other tutorials for that. We will be using that and I'll be explaining them a little bit here.

So the first thing we're going to do is just do some *imports*. So we're actually going to update pretty much everything in this file, and we're not going to use the logo import, and we're also not going to use the css import. I'm going to actually paste in these new imports. We're going to *import React from "react"*, and we're also going to *import { Switch, Route, Link } from "react-router-dom"*, because we're using *react router to create our different url routes that people are going to go to and route to the different react components*.

And then we have our *bootstrap*. This is what we're going to be using *to style our whole app*. Okay in this app I'm going *to erase everything that's being returned, actually just inside the div*. And for now I'm just going to type in *Hello World!*. We're going to make sure everything is working so far. So if we go back over to our terminal, I'm in the *frontend directory, and I can just do npm start, and it open up localhost 3000 in my browser says Hello World!*

Okay let's go back to our code -- App.js. And we're going to start making this a little more complex. So the file is going *to have a header with some navigation on it, and it's going to have a route, where the main part of the page can switch between a few different routes*. So let's start with our *component*, so we're going to start by *creating some simple components that then our router will load the different components depending on which url that someone is going to or which route someone's going to*.

So let's open up the file browser, and then under the *src folder*, I'm going to *create a new folder called components*. Inside *components*, I'm going to make *four new files*. We're going to have a *restaurants-list.js* file, which will list the *restaurants*. We're going to have a *restaurants.js* file, which would be a *single restaurant*. We are going to have an *add-review.js*, which will obviously be used to *add a new review*. And then a *login.js*, which is the *login page*.

So now that we have that, we're just going to make a simple thing for each one right now. So let me just copy what we have in *App.js*, and I'm going to go to *add-review.js* and paste it. We're just going to start off by making something really simple. And I will call the function *AddReview*, and we're going to *export AddReview*. And then we're basically going to do the same thing for each with one of these files.

This is going to be *Login*. This is going to be *RestaurantsList*. And then this is just going to be *Restaurants*. Okay, so now that we have all the files in the components folder created, let's make sure they're all saved. Okay now we can start creating the rest of our main file the *App.js*, that's going to be the linked to those others. So since we are going to be linking to those other components I made, we have to import them at the top.

So we're going to *import AddReview from "./components/add-review", Restaurant, RestaurantsList, and Login*. And now let's see what we're going to *return in the App.js function*. Okay I just pasted in some new code for what the function is going to return, and I'm going to go over it right now. It's going to start with the *navbar*. Now let me just highlight the *navbar*. Now this *navbar is just basically copied and pasted from the bootstrap documentation*. So *bootstrap has all these different components and suggested ways of how to make them*.

So one way you can do it is, if there's a component you want, *just go over to the bootstrap documentation, you can copy the code for that and then you can update it for your purposes*. So this is just a *basic bootstrap navbar*, and it's going to have *three different links*. This is how the *navbar style is going to be, -- nav className="navbar navbar-expand navbar-dark bg-dark"*. These *different names are different bootstrap classes that are used to style the navbar*.

The *first link is the Restaurant Reviews, which is going to be almost like a logo, the main brand or href="/restaurants" className="navbar-brand", which is the name of the website, -- Restaurant Reviews*. Sometimes this would be an *image or logo, this is just a text*. And it's just going to go to *"/restaurants", and you'll see soon that "/restaurants" and just "/", are going to the same url, the same component*.

And then there'll be *two other buttons in the navbar*, and they're going to be styled a little different. They're the *div className="navbar-nav mr-auto"*. So the *first, is the brand part of the navbar -- className="navbar-brand", and the second is the navigation part of the navbar -- className="navbar-nav mr-auto"*. And the first item is just going to be to *link to restaurants, as shown below*.

```javascript
<li className="nav-item">
    <Link to={"/restaurants"} className="nav-link">
        Restaurants
    </Link>
</li>
```

Now this *link part*, that's *imported right from "react-router-dom", and that will route to a different url which is going to load a different component*. So if you click on the word *Restaurants, it's going to link to "/restaurants"*.
And then we have the next section.

```javascript
<li className="nav-item" >
    { user ? (
        <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
            Logout {user.name}
        </a>
    ) : (            
        <Link to={"/login"} className="nav-link">
            Login
        </Link>
    )}
</li>
```

Now, the above *link is going to be one link*, but it's going to look different depending on our variable. So it can either look like saying *Login, which will link to the login page -- "/login"*. Or it can say *Logout {user.name}*, so it's like it could say, *Logout {Mukhtar}*, and if it says so, *onClick={logout} is going to run a function, the logout function*. And we still have to create the logout function, it's going to *determine whether it's going to show Logout or Login, because of whether the user exists*.

So this is a *ternary statement*. Now in *react, we can use the curly braces shown above to put in some code*. So these curly braces are putting in some code, and the code is a *ternary statement*, where we're going to say - *user*, if that's true or false. It's true if there is a *user*, it's false if it is null. The first item after the question mark is what happens if it's true, and then we have a colon, the second section after the colon is going to be if it's false.

So if there is a *user*, we're going to return the code after the question mark, if there's not a *user*, we're going to return the code after the colon, which is to *login*. So while we're talking about the *logout function*, we're going to implement the *login - logout function*. We're also going to make a *user variable state - a state variable*. So right up the beginning of the *App function*, actually the first line is we are going to create a *user variable in the state*.

```javascript
function App() {
    const [user, setUser] = React.useState(null);
}
```

Now, in the first line of the *App function*, we are going to use *react hooks*, and the method is just like this - *const [user, setUser] = React.useState(null);*. Okay so the *React.useState*, is a way to create a *state variable that you can use in your react app*. And it's initial value is going to be *null*. So it's going to set *null to the user variable*. And then, we also have a *setter, which is setUser*, this is a *function that we can use to update the user variable later in our program*.

So now we have the *user variable*, we're then going to *create two functions, the login function and the logout function*. We'll create these as *async functions*. So *async function login*, and we're going to pass in the *user*, but we'll default it to *null*, and then we're going to *setUser to user*. So now, if you call the *login function and pass in the user, the user variable will be updated with the user that you passed to that function*.

```javascript
function App() {
    const [user, setUser] = React.useState(null);

    async function login(user = null) {
    setUser(user);
  }
}
```

And then we can also do a similar thing with the *logout function, so async function logout setUser(null)*. Okay so when you *logout, it's just making the user null, there is no user, you've been logged out*. Just so you know, for this App, I'm not going to be implementing a *full login system*. I'm going to be basically implementing a *dummy login system*, a *full login system* is a little outside the scope of what I want to teach in this tutorial.

```javascript
function App() {
    const [user, setUser] = React.useState(null);

    async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }
}
```

So we're just making a *dummy login system*, which is basically a *form, that when someone fills out the form, they click login*, it's just going to *set the user with those details*. And it's not even going to *save the user to the database*. This is just kind of a *dummy login system* that you can easily update with a more fully full-fledged login system. You can even set it up to use google sign-in or some sort of authentication provider.

But for now, we're just having a *dummy system* just for this example. But we have the *login and logout function*, so if *someone clicks logout, it's going to logout the user, and if they click login it's going to go to the "/login" url, and this is going to be a page we can login, that we still have to create*. So, let's keep scrolling down the code, we're done with the *navbar section*. And now we're going to have basically the *route section or the rest of the page*.

So in the rest of the page, we are going to use a *switch, to switch between a few different routes*. So the *first route is either going to be ["/", "/restaurants"]*, and that's going to load the *component={RestaurantsList}*. So the *next route is "/restaurants/:id/review"*. So in the first route, we do a *component={RestaurantsList}, here instead of doing components we're going to do render*. The reason why we're using *render instead of components is because this allows us to pass in the props to the component that we're loading*.

```javascript
<Switch>
    <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
    <Route 
        path="/restaurants/:id/review"
        render={(props) => (
            <AddReview {...props} user={user} />
        )}
    />
    ...
```

So in the *component we're loading RestaurantsList, and in the render we're loading the AddReview component*. And we're passing in the *user -- {...props} user={user}, to the AddReview component*. Also, we'll be able to *access the id variable in path="/restaurants/:id/review" from that component*. And then, we also have the *route of the "/restaurants/:id"*. So this is going to *load the the Restaurant component*. And then we have the *"/login" route and that's going to load the Login component*.

```javascript
    <Route 
        path="/restaurants/:id"
        render={(props) => (
            <Restaurant {...props} user={user} />
        )}
    />

    <Route 
        path="/login"
        render={(props) => (
            <Login {...props} login={login} />
        )}
    />
</Switch>
```

So those are *all the routes*. We have *the RestaurantsList route, the AddReview, the Restaurant route, and the Login route*. Okay, let's start with *creating the RestaurantsList component*, which is going to list all the restaurants. Now, a key part of *listing all the restaurants, is getting the restaurants from the database*. We have to get a *list of restaurants from the backend server that's connected to our Mongodb database, and then we're going to need to display those in the restaurants list*.

Okay I'm just checking over on the browser to see how it's looking, and I see an error. So it's obviously, it's really good to check things and test things frequently to see if you have an error. And then it reminded me of something that we forgot to do, it says *you should not use a link outside a router*. So we had *updated the App.js file*, but there's a file that we need *to update also, that is actually even loaded right before App.js, which is the index.js*. And this is really what kind of loads everything else and react.

So most of this stuff we don't even need, so we don't need the */index.css* file, because we're just using bootstrap. We don't need this */reportWebVitals*. But we are going to need something from *react-router-dom*. So we're going to *import {BrowserRouter} from "react-router-dom";*. Okay, and instead of the *React.StrictMode*, we are going to be using *BrowserRouter*. So we're going to put *BrowserRouter*, and I'm going to save that, and then let's go over to *localhost:3000, and see how it's looking now. It says Hello World!*.

So let's *test all of our routes* actually. So that's the *Restaurant*, we have the *Login*. That also says *Hello World!*. I guess, I could have made each *route* say different things, so you would know that they're working. So like for instance if we switch to login file, we could actually just type in *Login*, if I save that, and then now if we click on *Restaurants, and then Login*. So those *routes are working*.

Okay, let's update our *RestaurantsList*. We're going to need to get a *list of restaurants, and the list of restaurants has to come from the database*. So we have to implement some code that's going to get information from our backend server. We're going to create a separate file for that. So this is going to be under a *new directory in the src folder called services*.

So underneath *src folder, we have components and services*. And underneath services we're going to create a new file called *restaurant.js*. And we are going to use a *library called axios for the get request, the post request, the put request, and the delete requests*. And we're going to create some helper file that's going to kind of set up axios, how we want it to work, and we're going to import that into this file.

So in the source directory again, we're going to create a *new file called http-common.js*. This will be our *helper file*. Okay in this *http-common* file, I just pasted in some code, we're *importing axios*, let's make sure we install that. So let's go over to the terminal, we're going to *stop the frontend server*. and do *npm install axios*. Okay got it, *axios installed*. Now we'll just *restart the server*.

Okay back to this *http-common* file. So we're just setting two things, the *baseURL, which is the url of our backend server, localhost:6000/api/v1/restaurants*. So this is the *baseURL, and all the other routes for our backend server come after this*. And then we're just going to set the *headers*. And now we're going to be able to *import from the database, and make our http post, get, and delete requests, more easily with all these things being set automatically*.

I'm going to go back into the *services folder -- restaurant.js*, and then I'm just going to import the file that we just created, *import http from "../http-common"*. And then I'm going to make a class called *RestaurantDataService*. This is where we're going to make all the functions that are going to make *api calls and return the information from the api calls*. Okay I'm going to just paste in all of these functions that we're going to use for the different *http requests*.

So the first request is going to be for *getAll*. So if you call *getAll*, it's going to have a *default page number of zero -- getAll(page = 0)*, and it's going to do a *http.get of this url -- (`restaurants?page=${page}`)*. Now this *url* is what's added to the end of the *baseURL in the http-common file*. So the *baseURL* is already the *url* for doing the *getAll*. And then you can add the *page number -- ?page=${page}*, also what what page you want.

And then if you want to *get a specific id -- get(id), a restaurant of a specific id*. The *url is the baseURL with `/restaurant?id=${id}` added*. And then *find, the find is going to take three things the query, which is the actual search term or number, the number if it's a zip code or search term, if it's a cuisine or a name, and what you're searching by, you're either going to be searching by a name, by a zip code, or by a cuisine, and the actual search is the query, and then what page number you want -- find(query, by = "name", page = 0)*.

So it's going to do a *get request -- http.get(`restaurants?${by}=${query}&page=${page}`), and this is what it's going to add to the end of the baseURL*. And it's going to be *like zip code, by, equals, and then the query is going to be what the zip code is and the page number*. *createReview(data), is just going to do a post request -- http.post("/review-new", data), the "/review-new" with the data*. *updateReview(data), put request with the data -- http.put("/review-edit", data)*.

*deleteReview(id, userId) -- http.delete(`/review-delete?id=${id}`, {data:{user_id: userId}}), but you're going to have the id on the end*. Or *getCuisines(id)*. Okay, now we can start creating our *RestaurantsList component*. First of all, let's import a little more things. So we are also going to be using the *useState and useEffec, from react hooks*. We're going to import our *RestaurantDataService*, which is the thing that we just created. And then we're also going to get a *Link from react-router-dom*.

I'm just going to update the *RestaurantsList function*, so it's a different type of function. So it's going to be *const RestaurantsList = props => {}*. So this is how it's going to be able to take the *props*, and use the *props*, as part of the function, or component. So we're going to use *react hooks* to create a bunch of *State variables*. So here, we're creating the *restaurants variable*, which is going to start as an *empty array -- [], and then the searchName, searchZip and searchCuisine*.

So we're going to keep track of what someone's searching for on the *RestaurantsList, and then also the cuisines*. The reason why we have all these is because, right on the *RestaurantsList* page, people are going to be able to search for these all these items. So we need to have variables for all the items that people are searching for. Okay I just put in some more code that I'm going to review. We have the *useEffect*, this is the way you tell *react that your component needs to do something after render*.

```javascript
useEffect(() => {
    retrieveRestaurants();
    retrieveCuisines();
  }, []);

  const retrieveRestaurants = () => {
    RestaurantDataService.getAll()
    .then(response => {
        console.log(response.data);
        setRestaurants(response.data.restaurants);   
    })
    .catch(e => {
        console.log(e);
    });
  };

  const retrieveCuisines = () => {
    RestaurantDataService.getCuisines()
    .then(response => {
        console.log(response.data);
        setCuisines(["All Cuisines"].concat(response.data));
    })
    .catch(e => {
        console.log(e);
    });
  };
```

So after rendering it's going to *retrieveRestaurants and retrieveCuisines*. And these are functions we can look at those functions right now so here's one of them retrieve restaurants so we're doing the *RestaurantDataService* dot get all and that's something that we just created in the data services and then it's going to log the data but more importantly it's going to set the restaurants to be the response that restaurant data.restaurants and so this is going to go into the restaurants state and we're also going to retrieveCuisines

very similar we're going to use the data service to get cuisines and we are going to log them and then we're going to set the cuisines now we're going to add so this is going to be in the drop down menu so instead of just putting the response dot data into the cuisines variable first we're going to start with an all cuisine element and then we're going to concat to this array the rest of the data so the first element in the data is going to be all cuisines so that's going to be the first item in the drop down menu if you don't want to select a specific cuisine but you want to show all the cuisines so if we go back up here you'll see soon that there's going to be a form at the top of the page and people can search for by name zip code or cuisine so if someone searches for a name a zip code or a cuisine these three functions are going to when someone types into the search box we're going to take the value of the search box and we're going to set the name or set the zip or set the cuisine to whatever thing that the person typed in or in the case of the cuisine if they selected it so let's keep going down here here's a function to refresh the list of restaurants if that's needed one of the times is if someone searches for all cuisines it will retrieve all the restaurants okay now if someone tries to find something now this function is actually going to be called from these functions so someone's going to type in the name that they're going to search for and they're going to click the button to search once the button is is clicked then we're going to call this function find by name and they want to call the find and pass in the search name and the name if they're finding my zip we're going to pass in the search zip and zip code if they're refining by cuisine we're gonna find by we're gonna pass in the search cuisine that they selected and the word cuisine or if they have selected all cuisine we're just gonna refresh the list so then it goes to this find function the find function is going to pass in the query and the buy so for example here the search name and the buy is the name so we're going to call the restaurant data service with the query and the buy if we go back to the data services we can see the query and the buy so buy would be name so let's say the name we're looking for all restaurants that have the word food and the name so by would say name and then query would say food or by could say zip code and then query could be the number of the zip code so after we get the result of the find we're going to console log the data and then we're going to set restaurants to be whatever comes back from the the backend server okay those are all the functions so let's go really quick over the html that we're creating now we're making heavy use of bootstrap so most of these classes are directly from bootstrap to help style things and we can see that we have an input group because at the top of the page we're going to have three input boxes or or three ways that people can search the first one is searching by name and impop input box which is going to say search by name and the value is gonna be the search name and on change is gonna be on change search name to so as soon as someone types something it gets set as the name and then we have the second one or well then we have the button so if someone clicks this button and on click it's going to find by name then we have this next section which is the search by zip is going to be just like the one we just saw for name but it's going to be for the zip so someone can change the search dip and they click the button it's going to find my zip and then the final one is going to be a little different it's going to be a drop down menu for the cuisines we're going to see all this in just a second on the page but we're going to select unchange so on change it's going to do on change search cuisine it's going to set the cuisine variable to the cuisine that the person selected and to get the cuisines in the list we're going to use this react function this map function cuisines remember cuisines is the list of cuisines and we're going to map it and for each cuisine in that array we're going to return an option for the select box and the value is going to be the cuisine and then the reason why it's substring 0 20 because some cuisines are very very long and we want to make sure the search box isn't too long so we're going to just have it just the first 20 characters or is that 21 characters just the first little bit of the cuisine and so people and search the cuisine and they click the button it'll find my cuisine okay now the next section is we have another row here a row is from bootstrap and we're going to use another map function to map through the restaurants array we're in react this curly braces means that it's going to be some sort of javascript code and for each restaurant we're going to first get the address so we're going to be putting the address of each restaurant and the address in the database is actually three different fields we have the building which is like the number then we have the street then we have the zip code so we're just going to put that on to one string that we can use and so for each restaurant we're returning this whole thing right here which again is directly from bootstrap and there are different cards and each card is going to have the name of the restaurant the cuisine the address and then there is going to be a link to view reviews and if you click this rank link it's going to go to this new route ralph restaurant slash and then it's going to have the restaurant id and then also there's going to be a link here to link to google maps so the reason why we have one of the reasons we got this variable up here so we can use it both here and we can use it for this link to google maps so it's going to use this link from google maps and it's just going to put the address on the end which is actually going to create a link to a google maps of that exact address and then we have a bunch of classes from bootstraps and it's going to be called view map et's test this out and see what it looks like i'm going to save this okay and here's our page so here are the three different search boxes i was talking about and here we can select a cuisine if we want and you can see it's cut off like we mentioned but most of the cuisines are are less than those characters and then we can see all the restaurants and it cuts off at 20. so we can search by cuisine if i click search here now it's just going to show the african cuisine restaurants or i can search by name and put food click search and now all the restaurants have the word food in them or i can search by zip code let's do one zero zero one four and click search and now all the restaurants have the zip code of one zero zero one four and if i click on view map let's see what opens here the google map opens if i zoom in let's see if it even shows the name of that restaurant i zoom in look it says one if by land two if by sea right there and that is actually the name of the restaurant from our database one if by land 2 if by c
99:26
so that actually took us to the map
99:30
so let's say we want to go back to all
99:32
cuisines
99:33
and all cuisines is also means that
99:37
you can only search for one thing at a
99:38
time so if i click all cuisines it's
99:40
going to go back to every restaurant
99:43
another thing really quick right now i
99:45
do not have any pagination and i don't
99:47
plan to add any pagination
99:49
but because of how the api is set up it
99:51
would be pretty simple to add the
99:53
pagination yourself
99:54
so you could make something at the end
99:56
where you can maybe you would make
99:58
something at the be
99:58
the end of the data or maybe the
100:00
beginning of the data
100:02
where you could click next page previous
100:04
page and then go through the different
100:05
pages
100:06
for the front end we do not current i do
100:08
not currently have that
100:09
in the code but that's just like an
100:11
extra thing you could try to
100:13
add in but let's go to view reviews
100:16
well right now it just says hello world
100:18
because so we the route is restaurant
100:20
slash the id
100:21
and we have not created anything for the
100:24
reviews yet
100:26
that's what we need to create now we
100:27
need to create
100:29
what it looks like when you're viewing
100:30
an individual restaurant with the
100:32
reviews
100:33
so let's go back over to our code we are
100:37
going to open up
100:38
the restaurants file
100:42
and let's update the import so we're
100:44
going to also import used
100:46
stay in use effect and the restaurant
100:48
data
100:49
service and i'm going to change this to
100:52
the other kind of function where
100:57
props
101:01
now i'm just going to paste in some code
101:03
again and we'll review it but we're
101:04
going to create the initial
101:06
restaurant state which has all the
101:08
fields but they're just set to empty or
101:11
null and then we're going to create a
101:14
restaurant
101:15
we're going to use the initial
101:16
restaurant state to set up the
101:18
restaurant which is just
101:20
all these null and empty fields and then
101:24
the use effect okay when the use effect
101:27
is going to be called
101:28
when the page when the component first
101:30
renders and
101:32
how it has the this array here
101:35
with just this the id in the end in the
101:38
array
101:39
that means this use effect is only going
101:41
to be called
101:43
if this id is updated so if this
101:46
component is called multiple times it's
101:48
only going to call the get restaurants
101:50
again if this id is updated
101:54
so it's going to call get restaurants
101:56
with the id
101:57
and that's where it's going to load the
102:00
restaurant
102:02
through the data service restaurant data
102:04
service and they get the id
102:05
and then it's going to set the
102:07
restaurant as response.data
102:10
and it's going to log that or else if
102:12
there's an error it will log the error
102:16
and one thing you're going to be able to
102:17
do in here is
102:19
delete a review now this will only
102:23
you'll only be able to delete if you are
102:25
logged in as the user who created that
102:27
review
102:29
but when you do delete a review it's
102:32
going to need
102:32
a review id and the index
102:36
of the review from the review
102:39
array which is the state the reviews
102:43
the review variable from the state
102:46
so we're going to delete call delete
102:48
review with the review id
102:50
and then with the response we are going
102:53
to set
102:54
the restaurant with to be that array
102:57
the restaurant array without the
102:59
restaurant that was deleted
103:01
so we're going to take the previous
103:02
state of the restaurant array
103:04
and we're going to splice
103:08
the index of the one that was deleted so
103:10
whatever review is deleted we're going
103:11
to delete from the reviews
103:13
array and then we're going to return
103:15
that previous state with this
103:17
spliced array with with the array that
103:19
was deleted removed
103:20
back into the restaurants array
103:25
else or i'm not else but if there's an
103:27
error we're going to log the error
103:29
now let's update the actual html that's
103:32
returned from here
103:36
so we're going to check to see if there
103:38
is a restaurant
103:39
so remember whenever you see the
103:40
squiggly brace we're just about to put
103:42
in some code
103:43
and the code is a ternary operator okay
103:46
so if there is a restaurant
103:48
well first let's look what happens if
103:49
there's no restaurant if we go down this
103:51
line here
103:52
with the ternary operator if there's no
103:55
restaurant
103:56
it will say no restaurant selected
103:59
so if somehow you get to this
104:02
you are this route and there's no
104:04
restaurant i'll say no restaurant
104:05
selected
104:07
but most of the time there's going to be
104:08
a restaurant and it's gonna
104:11
that's what the so the first thing after
104:13
the question mark is if it's true if
104:14
there is a restaurant
104:16
we're gonna we're gonna put the
104:18
restaurant name
104:19
we're going to say what the cuisine is
104:22
say what the address is what the
104:24
building
104:25
the street the zip code
104:29
and there's also going to be a button
104:31
add review
104:33
which will link to this route
104:34
restaurants
104:36
slash the restaurant id slash
104:40
review so that's the route to add a
104:43
review to that restaurant
104:46
now we're going to list the reviews so
104:48
first there's this new heading of the
104:50
reviews
104:53
and if restaurant reviews that length is
104:57
more than zero that means there's some
104:59
reviews we're going to do something
105:00
if not it's going to show you what if
105:02
not it's going to say no reviews yet
105:05
but if there are reviews we're going to
105:08
map over the reviews and for each review
105:11
and then also we're going to get the
105:13
index of each item in that reviews array
105:17
for each review now we always have to
105:20
have a key so the key is going to be the
105:21
index
105:22
for each review we're going to put the
105:25
text now these are going to be cards
105:27
this is just part of bootstrap to show
105:28
cards we're going to put the review text
105:31
and they're going to have the user which
105:32
is the name the name of the user
105:34
and then the date and now
105:37
this is where we are going to show
105:40
buttons
105:41
depending on what user is logged in
105:45
so let's look at this so first of all we
105:48
check to see
105:49
if there is a user if there's a user
105:52
logged in
105:53
so if there's a user logged in and
105:56
if the user id equals the same
106:00
as the review dot user id so if the
106:03
logged in user has the same id
106:05
as the user id of the review
106:08
then now it just says and and again
106:11
that's just like a
106:12
a fancy way uh having the these
106:15
ands is a fancy way of saying if these
106:19
are true
106:20
then we're going to put this code in
106:21
here it
106:23
so as far as what what javascript you
106:26
can put
106:27
inside a react like this this is kind of
106:30
the best way to do it
106:32
you put and so it only gets to this last
106:34
part of adding this last part if the
106:35
things before
106:36
are true so if both these are true then
106:39
it's going
106:40
to put two different buttons we're going
106:43
to have this
106:44
delete review button which see it's
106:47
going to be delete
106:48
and on click when you
106:51
when you click it it's going to call the
106:53
delete review function
106:54
with the review id and the index and
106:57
also
106:58
we are going to have
107:01
a link here and this link is going to be
107:04
an
107:05
edit button if you click the edit button
107:08
it's going to
107:09
call the restaurants it's going to go to
107:13
the restaurants path the restaurant
107:15
slash
107:15
restaurant id slash review so that's the
107:18
place to edit a review and it's going to
107:21
pass
107:22
in the state of the current review
107:26
so we're going to if we're editing this
107:29
review
107:30
we're going to pass in the state of that
107:32
review so we can
107:33
fill in the fields with the actual text
107:36
of the current review
107:37
on the review page and that's
107:40
pretty much it because this is going to
107:43
create a
107:44
card for each element of the reviews
107:46
array
107:47
okay we can test that out so let me save
107:50
that
107:51
go back to the all the restaurants and
107:54
remember
107:55
we had already added some reviews to
107:56
this one just from
107:59
from insomnia so if we view reviews we
108:01
can see
108:03
nice so these are the two reviews
108:06
now we can't delete or edit them because
108:09
we're not logged in we have to log in as
108:11
one of these users to be able to delete
108:12
or
108:13
edit them so let's click login and we
108:16
can't because we haven't implemented
108:18
that page yet
108:19
so that's what we'll do now okay let's
108:21
go back to the login.js page
108:24
this is going to be a simple page with
108:26
just two text fields
108:28
for the user and the user id that you
108:30
submit and then it logs in with that
108:32
user and user id
108:33
remember what i said we're not doing a
108:35
full featured
108:37
authentication system this is just like
108:39
a dummy authentication system
108:41
and you would update this page with
108:43
something more complex if you wanted to
108:45
actually
108:46
use this in anything like production but
108:48
we're just going to make something
108:49
simple really quick
108:50
and i'm just going to update all this
108:52
with this new page and just go over it
108:55
so we're going to you we're going to
108:56
have the use date
108:58
and then we're going to create the login
109:02
component so the initial user state is
109:04
just going to be a blank name and a
109:06
blank id
109:07
and then we're going to create the user
109:09
variable which is the initial user state
109:11
which is just the blank name and
109:13
blank id and we're going to handle
109:16
input change because we we have this
109:19
form down down here and the form is just
109:20
going to have
109:21
two input fields we have this first
109:23
input field which is the username
109:26
and you can see we have the id of name a
109:28
name here
109:29
uh the value is user.name if you click
109:31
on it on change handle input change
109:34
and then this is also handle input
109:36
change on the id
109:38
which has the value of user.id and
109:41
so no matter whether you
109:45
it's doing a handle input change for
109:47
both of these for the username and id
109:49
event.target is going to get the name
109:52
and the value from the target
109:54
so so the name is going to be this so if
109:56
it gets the
109:57
it knows whether it's the name or the id
110:02
and then it's going to get the value
110:05
and then it's just going to set the set
110:07
the is it going to update the user state
110:10
with the new name or the new id and then
110:13
the only other thing would be
110:15
if you click the login button on click
110:18
login it's going to
110:22
call props dot login user and then
110:26
props dot history dot push slash means
110:28
it's going to
110:30
update the url so it just goes through
110:33
this other route it's going to this
110:34
route the slash route
110:36
so it's going to log in the user and
110:39
then it's just going to go to the home
110:41
page again
110:42
now you may be thinking wait where is
110:44
this login coming from is it calling
110:46
this login
110:46
no it's it's actually different this is
110:48
props.login
110:50
so if we go back to
110:53
what pages i think app.js
110:57
so if you see when we created the
111:01
the route the route for the login page
111:05
one thing we passed in as one of the
111:08
props we passed in as login
111:10
was login equals login and this login
111:14
is actually this login
111:18
so we're passing this function
111:21
to the login page so
111:25
on the login page when we do
111:29
props dot login and pass in the user
111:32
this is actually the function
111:35
from from the other page from from the
111:38
other file
111:40
so it's actually passing in the user
111:44
to this we're setting the user into this
111:46
file and to this
111:47
into this user variable and then that
111:50
user variable
111:53
through these routes see are
111:56
passed in to the other routes
112:01
so that's how we get the user from the
112:03
login page
112:05
to these other routes so let me go
112:08
and save this
112:13
and we'll go try this out so we're on
112:16
the login page now so click it log
112:18
in i'll put bo one two three
112:22
four and click log in now it goes back
112:25
to the main page if i click
112:26
view reviews here well look we can now
112:29
edit and delete this one
112:30
because the user and user id was bo1234
112:34
for this review
112:35
now i can delete or edit let's try
112:38
editing
112:39
oh we haven't made that page yet the
112:42
editing page and the add page are the
112:45
same
112:45
page so add review
112:49
we can try out the delete though let's
112:51
see if the delete works
112:52
yep that works and let's see if i
112:53
refresh if it's still deleted
112:55
and it's not so that did not work
112:59
okay so that delete didn't work and it
113:01
was because we're not
113:02
sending the the user id here
113:06
so the server is expecting a user id to
113:10
be sent with this
113:12
and a delete can't send
113:16
data in the normal way because normally
113:19
most people don't use a body with a
113:21
delete request
113:22
it's not necessarily best practice but
113:25
again
113:25
i'm not really focusing on
113:27
authentication here but what we're going
113:29
to do
113:30
to make sure this
113:33
to pass in the username is this we're
113:36
going to have to use
113:43
user id
113:49
id and when i get this user id here
113:55
this should be user id and now we have
113:58
to make sure we
113:58
call this with the user id
114:02
so if we go over to
114:06
where we delete something
114:12
we're going to pass in the user id
114:18
so delete reviews review id and then
114:22
comma props dot user.id
114:26
okay let's see if that works
114:29
i'm going to log in with bo1234
114:36
view reviews and let's see if i delete
114:38
enough i refresh it let's see if it
114:40
stays deleted
114:41
and it stays deleted so we successfully
114:44
deleted that review and it's deleted
114:45
from the database
114:47
now we have to create the ad review page
114:50
so let's go to add review here
114:53
now i'm going to update this code and
114:55
then we'll go over it
114:58
so it starts off like the other ones
115:00
react review state
115:01
the restaurant data service link from
115:03
react dom
115:04
and the initial review state is just
115:07
going to be an empty string
115:08
because someone's just going to type in
115:10
a string for the review
115:11
and then we're going to keep track of
115:13
whether this is a new review
115:15
or if we're editing the review like
115:18
i could have titled this something
115:19
besides ad review because we're using
115:21
the same page to add reviews
115:23
and edit reviews but the default is
115:25
false
115:26
false we are not editing the review
115:28
we're defaulting to adding the review if
115:30
we go to this page
115:31
so now we have to figure out if this
115:34
editing should become true if we are
115:36
editing the review the way to find out
115:39
if we're editing this review
115:40
is to see if a current review was passed
115:42
in
115:43
to this component
115:46
so if we go back to here if someone
115:49
clicks the edit review
115:53
it passes in this state of current
115:56
review
115:57
so we're seeing if this state has been
115:59
passed in
116:01
so first we need to see if the state
116:03
even exists and if it does
116:05
we have to check if the current review
116:08
is part of that state
116:09
if so then we'll set editing to true and
116:12
then we'll set the initial review state
116:15
to props at location state that current
116:17
review
116:18
text so that's the text of the review
116:20
that we're editing
116:24
and then we are going to create this
116:25
review variable
116:27
using the initial review state which is
116:28
either going to be an empty string
116:30
or it's going to be the text here and
116:32
then we're going to keep track of
116:33
whether the review was submitted or not
116:36
starting with false it hasn't been
116:37
submitted and this is our handle input
116:40
change function so when someone types
116:42
into the text box
116:43
it will change it'll set the review to
116:45
whatever the person typed in
116:48
and i can just i'll just i'll just go
116:50
and look at that right now
116:52
so first we check to see if there's a
116:55
user if there's no user you can't
116:57
actually add a review because you have
116:58
to be
116:59
logged in to add review then we're gonna
117:02
ch so this
117:03
is a ternary function if so we're gonna
117:06
do this
117:07
if not so if there is no user it's going
117:09
to say please log
117:10
in see anything after this colon here
117:12
it's going to say please log
117:14
in but if we are logged in now we're
117:16
going to check if it's submitted yet
117:18
so if it is already submitted it's going
117:21
to
117:22
do this so question mark is it submitted
117:25
right after this question mark is the
117:26
yes answer yes i'll say you submitted
117:29
successfully
117:30
and then there's going to be a link to
117:32
go back to the restaurant
117:35
so the restaurant that you started on if
117:38
it's not submitted yet
117:40
then there's going to be a form here so
117:43
this form
117:44
is going to have a description it's
117:47
either going to say
117:48
edit review or create review depending
117:51
on whether we're currently editing the
117:52
review or
117:54
if it's we're adding a new review so if
117:56
editing is
117:57
true it's going to say edit review if
117:59
editing is false that means writing a
118:01
new review it's going to say create
118:02
review
118:04
then the input form is going to
118:08
have the value of the review and then if
118:10
you type
118:11
it will update that value and then if
118:14
you click
118:15
it's going to save review if you click
118:17
submit
118:19
so this let's look at the save review
118:21
function
118:22
the save review function is going to
118:25
create this data
118:26
with the text of the review the name
118:29
which is the props that user.name
118:31
the user id props user id and the
118:34
restaurant id props.match.params id
118:37
the mass.pram's id means it's going to
118:40
be right from the url we're getting the
118:42
restaurant id
118:43
right from the url here and then
118:46
if we're editing
118:50
there's also going to be one more part
118:52
of the data
118:53
if we're editing the review then
118:56
we are going to get the review id
119:00
and add it to it the current review id
119:03
so if you're not editing there's not the
119:06
review doesn't have an id because it
119:07
doesn't
119:08
get an id until you create the new
119:09
review review but if you're already
119:11
editing it
119:12
you need the review id to say what
119:14
review is going to be
119:16
edited and then so if you're editing a
119:18
review
119:20
it's going to call update review and
119:23
it's going to set submitted to true
119:25
if you create a new review else it's
119:28
going to create a review
119:30
in both cases passing in the data in
119:32
both cases it's setting
119:34
submit to true it's logging the data
119:38
and that's pretty much it for the ad
119:40
review
119:41
so let's save that and then we'll test
119:44
it out
119:45
so click on restaurants we'll go to
119:48
happy garden this time
119:50
there's no reviews yet let's see if we
119:52
can add one well wait to log in first so
119:54
click login i'll click i'll do bow
119:58
one two three four log in and then we'll
120:01
go to view reviews again
120:03
add review and i'll say
120:06
worst
120:07
[Music]
120:10
restaurant ever
120:14
submit you submit successfully back to
120:16
restaurant
120:17
and you can see here's the review here
120:20
also
120:21
let's just confirm we haven't been to
120:23
mongodb atlas for a while so let's go
120:24
check to see if
120:25
it's in there so let me go back to that
120:27
page
120:30
and then we'll go to reviews here
120:36
loading which are refreshing
120:46
and let's see if we can find the review
120:48
i just added
120:51
worst restaurant ever here it is
120:55
so bo1234 worst restaurant ever
120:58
so let's go back over
121:01
and we can edit actually now it is the
121:04
best restaurant i went to it again and
121:06
realized i was wrong the first time
121:08
submit that and now it's best restaurant
121:11
ever
121:11
if i log out i can still see the review
121:13
but i cannot edit it and i cannot delete
121:15
it
121:16
so we can see the list of restaurants we
121:19
can
121:19
search we can search by kitchen
121:24
let's try that word all the kitchens we
121:27
can search by zip code 1001
121:32
we can search by cuisine
121:35
do brazilian
121:38
we can view maps
121:46
this one seems to be closed
121:50
and we can log in
121:53
and i'll try different name
121:57
how about abby and we'll do four three
121:59
two one
122:02
now i can view reviews but i can't edit
122:04
that one but i can add another review
122:08
not amazing
122:12
if you go back to restaurant i can
122:14
delete a review
122:16
and this is basically done
122:19
we've created a fully functional mern
122:22
stack
122:23
app okay we're going to do one
122:26
final thing we're going to update the
122:29
title
122:30
that will be on the tab or in the top
122:32
bar on your web browser
122:34
so let's go to the public tab here
122:37
and then we're going to or the public
122:39
folder i mean we go to index.html
122:42
and we'll keep most of this as is but we
122:45
will update this instead of react
122:48
app this is going to now say
122:51
restaurant reviews
122:55
okay we're done

(2:02:58) Setup MongoDB Realm and replace backend
123:01
so we finished creating our entire app
123:04
using
123:05
the mern stack using mongodb express
123:08
react and node.js well
123:12
now i'm going to show you that you don't
123:13
even need node.js
123:15
or express because you can do all of the
123:17
backend
123:18
right from mongodb realm mongodb realm
123:21
is a serverless application backend
123:23
that streamlines implementation of
123:25
features like user authentication
123:27
data validation and business logic with
123:30
configurable functions and services
123:32
that integrate realms data access and
123:34
security rules
123:36
so this is the structure of our app so
123:38
far
123:39
but we're now going to replace this e in
123:42
the n
123:43
this whole section with mongodb realm
123:46
and we're also going to replace this
123:49
section
123:50
and instead of hosting it locally we are
123:52
going to host it
123:53
in the cloud so this is what the new
123:56
structure of the app is going to look
123:57
like
123:58
see the back end is now realm and it's a
124:01
back end as a service
124:03
because it's all hosted in the cloud at
124:05
realm and then the front end is also
124:07
going to be hosted
124:08
through realm and it's going to be the
124:10
same react front-end you see the client
124:12
is going to look exactly the same
124:14
now you can see these little lock icons
124:16
after we get everything set up on realm
124:19
we're going to have a lot more security
124:21
between
124:22
the backend and the front end of the
124:23
database and the client
124:25
so let's start setting this up so we are
124:28
going to
124:29
completely remove the backend that we
124:31
made with node.js in express
124:33
and i'm going to show you how to
124:35
implement that all with realm
124:37
and it's way easier and way faster than
124:40
creating that whole back end with no
124:42
node in express so we'll still be using
124:44
the same
124:45
react front end but i'm going to show
124:47
you how to just use that front end
124:50
with the realm back end and after that
124:53
i'm going to show you how you can use
124:54
mongodb realm to host the front end as
124:58
well
124:58
so the front end and back end will be
125:01
all hosted in the cloud
125:03
on mongodb realm so let's get started
125:07
first i'm going to show you how to use
125:09
realm to create an api that exposes data
125:12
and then i'll show you how to update
125:13
data in a mongodb database
125:15
inside mongodb atlas so first let's go
125:19
we're we're starting in our mongodb
125:20
atlas cluster
125:22
and then we'll go to the realm tab right
125:24
here
125:26
okay it automatically goes into the
125:28
create a new application
125:30
section but if you have already been
125:33
to if you already have an application
125:35
you may just have to click the create
125:36
new application button to get to the
125:38
screen
125:39
but we're going to call this
125:42
restaurant reviews
125:50
and then i'll just click create realm
125:51
application and i don't need any of
125:54
these guides here
125:56
okay we got this set up and
125:59
realm has a bunch of features and we're
126:02
only going to scratch the surface of
126:04
what it can do
126:05
so you can look through all these things
126:07
over here
126:09
we're actually going to mainly focus on
126:11
third-party services
126:12
and then later when we want to host our
126:14
front end we're going to go to
126:16
hosting but you can kind of play or just
126:19
look around in here and see the
126:20
different
126:21
things that it can do but we're going to
126:23
start off by just going to third party
126:25
services here
126:27
exposing data through third party
126:28
services is at the heart of creating a
126:30
realm back in service
126:31
so that's what we're going to create now
126:33
this is going to allow us to update the
126:35
data outside of this website
126:37
we'll basically be creating the the
126:38
wrapper for an api
126:40
so let's add a service
126:43
we are going to create a service called
126:46
http
126:47
now there's some built-in you can choose
126:49
twilio github aws depending on
126:52
what type of api you're trying to
126:55
connect
126:55
or create or what type of service you're
126:57
going to create but for our purpose
126:59
we're just
126:59
doing an http service and i'm just going
127:02
to call this restaurants
127:06
and then i'll click add service
127:09
okay now i'm going to click add
127:12
incoming webhook this is what's going to
127:16
expose this service
127:17
to the outside world on the internet so
127:21
we're in the settings first we're going
127:22
to look at that first and this is going
127:24
to
127:25
this will specify the authentication
127:28
requirements and other behaviors
127:30
i'm just gonna call this restaurants and
127:33
this name
127:34
is basically going to be one of our api
127:37
endpoints so each
127:38
name the each web hook or wait each name
127:41
is going to be a different api
127:42
endpoint that our front end is going to
127:44
access
127:46
if you scroll down here a little bit you
127:48
can see that you can choose the http
127:50
method
127:51
we can we have to actually create a
127:53
different service for each type of http
127:55
method like get
127:56
post put delete so the most popular type
128:00
is a get request so this first one we're
128:01
going to make a get request
128:03
this is going to be so we have the
128:05
different apa endpoints
128:06
we're going to recreate all the api
128:09
endpoints from
128:10
our node express server right from realm
128:13
and the first one we're going to create
128:14
is the one that's going to return a list
128:17
of all the restaurants
128:19
you can also set up different types of
128:21
authentication here
128:23
or authorization for the request
128:26
but since this is a pretty uh basic
128:28
tutorial i'm just trying to show you how
128:30
to do the basics here so we're not going
128:31
to get into
128:32
authentication but one cool thing
128:35
is that mongodb realm can it
128:39
makes it easy to either create your own
128:42
authentication
128:43
or also hook up with the a google
128:46
authentication or facebook
128:47
authentication
128:49
and so you can use that those
128:51
authentication pages to authenticate
128:53
for your mongodb realm app we're not
128:56
going to
128:56
go get into that today but i just want
128:58
you to know that that's a possibility
129:00
for now we're not even going to
129:02
implement any authentication because i
129:04
just want to want you to see
129:05
the basics of how this works request
129:07
validation is important to verify
129:09
requests
129:10
it helps fight against bots that may
129:12
attempt to interact with your service
129:13
an easy way to implement this is to
129:16
require secret
129:17
this is just a git argument it's a
129:19
parameter that's appended to the call
129:21
then request will only be processed if
129:23
they include the secret
129:25
but for now we're just going to do no
129:27
additional authorization
129:29
and i'm going to click the save button
129:34
so now it brings us over to the function
129:36
editor by the way when you click the
129:37
save button it actually doesn't
129:39
deploy anything it doesn't make anything
129:41
live until you click the review and
129:43
deploy
129:44
a button so that's where you can save a
129:46
bunch of things and then deploy
129:47
everything all at once you may have
129:49
multiple changes and then you can deploy
129:51
all of them
129:52
but we're not going to deploy yet
129:54
because we have to create our
129:56
function so we're just on the settings
129:58
tab right here but now
129:59
once we click save it automatically went
130:01
over to this function editor so now
130:02
we're on the function editor
130:04
and this is the function that will be
130:06
run when someone
130:07
calls the api to call this api
130:11
or to send a message to this api
130:13
endpoint it's just this
130:14
url here so this url
130:18
is what we are going to use that our
130:20
front end
130:21
is going to send a get request to this
130:24
url
130:26
and then this function will be run so
130:28
this function
130:29
is basically just like the function from
130:32
our node express server or it will be
130:34
once we finish creating it
130:36
this is just an example when you when
130:39
you first create
130:40
one of these services it will
130:42
automatically put this code in
130:44
as a function as an example but we're
130:46
going to update all this
130:47
to create a function that's very similar
130:50
to our node express backend
130:52
okay so first i'll just show you how to
130:55
create
130:56
a very simple response and then we'll
130:58
make it a little more
130:59
complicated so we're going to actually
131:03
get rid of most of the stuff but let me
131:04
just show you this so this is how you
131:06
get
131:06
query parameters so payload.query is
131:10
going to be these arguments right here
131:12
and then you can
131:14
get the content types with
131:15
payload.headers you can get the body
131:17
with payload.body
131:19
and then this is just kind of showing
131:20
how you would log that information here
131:22
so these are all just examples here but
131:24
what we want to do
131:26
for now i'm going to just delete
131:30
all of this here
131:34
[Music]
131:36
and what we're going to do is just try
131:38
to
131:39
get remember we're we're trying to
131:40
return a list of restaurants
131:43
so what i want to do is just get that
131:46
collection we need to get access to
131:48
our collection our restaurants
131:50
collection right from this function
131:53
so let's make a variable const
131:54
collection
131:57
equals when you're creating a function
131:59
you're always going to have access to a
132:01
variable called
132:02
context and if you do context.services
132:08
we're going to get the get mongodb atlas
132:14
[Music]
132:16
now this is just how you're going to get
132:17
a your database on mongodb
132:20
d atlas and then we put db
132:24
sample restaurants
132:29
remember that's the name of our database
132:33
that collection and the collection is
132:35
just called restaurants
132:41
okay now let's get the list of
132:42
restaurants so let
132:44
restaurants list and this is going to be
132:47
very similar to the mongodb javascript
132:49
driver restaurants
132:53
list equals
132:57
now we're just going to do await
133:01
collection dot find
133:05
dot to array
133:08
[Music]
133:10
so this is just going to create an array
133:12
of our entire collection
133:14
for this example we don't want to return
133:16
the entire collection
133:18
let's limit so we're just going to limit
133:20
to 20
133:21
dot limit
133:25
limit and then i'll put 20.
133:30
and then i'm going to return the
133:32
restaurant list
133:34
[Music]
133:36
and since we're using a weight right
133:37
here we're going to make this in a sync
133:39
function
133:40
so async and then
133:44
we can just click the run button it's
133:46
going to open up the console
133:47
and then we have the results right here
133:50
and if i lift this up here
133:54
look we got it right here this is the
133:56
list of restaurants so if i just scroll
133:58
all the way up to the top
134:00
we can see riviera carter
134:04
so that's the first restaurant and so
134:06
this is the list of restaurants
134:08
just the first 20 because we've limited
134:11
it to 20.
134:13
so now we could actually just put
134:16
in this url right into our react
134:19
front end and if we call this url it'll
134:22
return that list of restaurants
134:23
but we're not going to update our react
134:25
code to use that url quite yet
134:27
what we're going to do is actually just
134:29
test this in insomnia
134:31
so make sure you save your own function
134:34
and then we can test this out so let's
134:35
click review and deploy
134:37
and the settings in atlas have a
134:40
configuration driven approach
134:42
so before we finalize this deploy you
134:44
can see the settings that we're about to
134:46
change
134:47
this is also the command you would use
134:48
in a terminal or a program so you can
134:51
avoid using this interface in this user
134:53
interface
134:54
but we're just going to use the user
134:55
interface so hit deploy here
134:59
okay deployment was successful so we'll
135:02
go over here
135:03
and then i already have the url in here
135:05
this is our url right from
135:06
our mongodb web hook in realm and if i
135:10
click send
135:12
it's going to see we have our list of
135:15
restaurants right here
135:17
so it worked now we're about to use that
135:20
same url in our react app
135:22
but before we do that let's improve this
135:25
function a little bit
135:26
we want this function to also be able to
135:29
be used for searches
135:30
so this api endpoint will be able to
135:32
return all the restaurants
135:34
but also if someone does a search for a
135:35
zip code or
135:37
a title or a
135:40
cuisine it will also return the search
135:42
results for that
135:43
so let's go back to our code now this is
135:46
our back-end code this is the
135:49
restaurants.controller
135:51
and we're just going to actually copy
135:53
this code
135:54
and then make a few changes
135:57
and then we'll go right back into our
136:00
function editor
136:02
and then i'm going to paste the code in
136:03
here
136:05
but we're going to make some changes so
136:06
it works for our purposes here
136:08
so first of all first of all let's move
136:11
this down a bit
136:15
i'm just going to move it just paste it
136:17
in right here
136:18
and then let's start at the top here you
136:20
can see we're getting the restaurants
136:22
per page and we're getting the page
136:24
from the query parameter well there's a
136:27
different way for to do this
136:28
in this function here we're going to be
136:30
using payload.query
136:32
we're going to have restaurants per page
136:34
and we're going to have the page
136:37
and let's do some destructuring here
136:44
equals payload dot query
136:48
okay so that's how we're gonna get the
136:50
restaurants for page in the page and
136:51
we'll have some default parameters
136:53
so default to 20 and
136:57
default to zero so if it doesn't have
137:00
resonance for page if it doesn't have
137:01
page
137:01
we'll just default to those numbers
137:05
and we're going to build up instead of
137:07
building up
137:08
the filters we're just going to build up
137:10
the query
137:11
the query that we're going to send when
137:14
we do our find here
137:16
so wreck that query we're going to use
137:19
payload.query
137:20
and then we're going to set the query
137:24
to equal well we can get the query
137:28
right from our other code so we just
137:30
have to go
137:31
over to the restaurants deo
137:36
and this is what the query looks like
137:39
for the cuisine query it's going to look
137:41
just like this
137:43
now bring that over and instead of
137:46
filters cuisine
137:48
this is just going to change to
137:52
payload.query.cuisine
137:54
so you can kind of see we are taking our
137:56
code from two different files
137:58
the restaurants controller and the
138:00
restaurants deo and we're combining them
138:02
all together
138:03
into our function so the next thing
138:06
we're going to be doing
138:07
is getting our search for the name
138:10
filter well let's do zip code let's the
138:13
next thing we're going to do is get the
138:14
zip code one i'll just copy this whole
138:16
thing from here
138:18
bring it over and then we'll use zip
138:21
code
138:22
and then this is just going to be
138:25
payload
138:26
dot query dot zip code
138:34
and then the final thing is just going
138:35
to be the name one
138:45
just paste that in there
138:51
so this is going to be payload dot
138:55
query dot name
138:59
and to make a text search look work like
139:02
this
139:02
we have to i already created a text
139:05
index
139:06
so if you just like skip right to this
139:08
part of this video you may not have seen
139:09
how i made that text index
139:11
but in mongodb atlas if you create you
139:14
can create an
139:15
index based on any field
139:18
where you could do a full text search
139:20
for any field
139:21
and i did the search for the name field
139:24
in our database i created an index for
139:26
the name field in our in our database
139:28
so we could do a text search of that
139:30
field okay so
139:31
we develop our query we're going to get
139:34
an access to our collection
139:36
and then we're going to get our
139:37
restaurants list but let's add a few
139:40
things here so find
139:42
out we're going to put the query in here
139:44
because we're going to find based on the
139:46
query
139:47
and we also want to get a certain page
139:50
number
139:50
okay because p we passed in the page
139:53
number
139:54
and to get the page number it's going to
139:56
be
139:58
skip and then we're going to do a
140:01
calculation here
140:02
page times restaurants
140:06
per page and then
140:10
we're going to limit that to we're not
140:12
going to limit that to 20 anymore we're
140:14
going to limit that to restaurants per
140:15
page
140:17
and then we keep we're keeping the two
140:19
array and then i don't need this anymore
140:22
before we send the response we are going
140:24
to have to update something
140:26
in the database all the ids are object
140:28
ids and we want to create
140:30
we want to return them as a string
140:32
instead of an object id
140:33
so we can just loop through the entire
140:36
restaurant list and update
140:38
all the ids to strings and se instead of
140:40
the object ids
140:42
so i'll do restaurants
140:46
dot 4 each and then for every restaurant
140:57
we're going to call this function
141:00
and the function is just going to be
141:02
restaurant
141:06
dot underscore id equals restaurant
141:12
dot underscore id dot to
141:15
string okay
141:18
and the final thing is that we're going
141:20
to create this response
141:22
but we're going to now call this
141:24
response
141:26
data and restaurants is still going to
141:30
be restaurants list
141:31
page will be paged and then we'll just
141:34
convert that to a string
141:39
the filters in this case we're just not
141:42
going to return anything for the filters
141:44
we'll just return
141:45
an empty object because in their front
141:49
end we don't even use the filters we
141:50
don't
141:51
we don't even keep track of the filters
141:52
on the front end and then for the
141:54
entries per page we'll do restaurants
141:56
per page and then convert that to a
141:58
string
142:01
and then for the total results we'll do
142:08
restaurants list dot
142:12
length dot to string
142:18
and then we'll return response data
142:26
okay let's save this
142:29
and then well let's just do a test we'll
142:32
run this
142:35
it says rec not define looks like we
142:37
must have made a mistake up here
142:40
somewhere
142:41
what do we still have
142:47
oh this should be i forgot to change
142:49
this payload
142:54
payload
142:55
[Music]
142:57
and then we'll try doing a test here
143:01
restaurants is not defined what do we
143:04
must have made a spelling error
143:06
oh okay restaurants
143:09
list for each okay so let's run that
143:14
and then we get the result now we can
143:17
actually
143:18
test sending the print the query
143:20
parameters right in here
143:21
so let's go to the console
143:25
and this is how you would test sending
143:27
the parameters you can actually
143:29
test sending parameters by using these
143:30
right here so it has an example here
143:32
so i'm going to send a page
143:38
and i'm going to send it to 2 and
143:41
i'm going to do name
143:45
and set that to
143:48
food so now we're going to be searching
143:51
for by name
143:52
and we're going to be searching doing
143:55
the page 2.
143:56
so let's try that
144:01
okay well first of all you can see that
144:03
it returned
144:04
page two and if i go back up here
144:09
let's see the restaurant names and let's
144:12
scroll up and look oh see
144:13
this restaurant name has the word food
144:15
in it let's see another restaurant name
144:17
this restaurant had the name food in it
144:20
so that worked
144:21
i did this is a good thing about testing
144:23
this we can see if there's any mistakes
144:25
and i need to notice this this total
144:27
result is 20
144:29
so it's not well i wanted to return the
144:32
total results of this
144:34
find of with the query but it's actually
144:37
giving us the total results
144:39
after we've limited to restaurants per
144:42
page
144:43
so there's a few ways we can do this
144:45
okay so what we're going to do
144:47
is just copy this here
144:50
come down here and then the total
144:53
results
144:54
is just going to be okay i'm going to
144:56
change this find to count
144:59
dot then
145:03
num num dot 2 string
145:08
run okay good we got the right
145:11
total results we'll make sure we're
145:14
saved
145:17
and then make sure we deploy
145:22
and we got that function done let's try
145:24
adding this to
145:25
our react app so let's go back into the
145:28
settings
145:29
so let's get our url go back to our code
145:33
and then i'm going to go back go into
145:36
our front end code
145:38
so our front end code we're going to
145:40
need to go into
145:41
our where is our
145:45
http common so here's our base
145:48
url we're going to update this base url
145:52
and i'm just gonna
145:52
paste in this url ascot
145:57
and i'm gonna take off this section here
146:00
where it says restaurants
146:02
okay i'm gonna say that and go into our
146:04
services
146:06
and then this file
146:10
are of all of our api calls so get
146:14
all i'm just going to put
146:17
restaurants here and then
146:20
the search should also work if i just
146:23
put restaurants here so those are the
146:25
two ones that we've updated
146:27
this the restaurants the thing where
146:31
you're going to get everything and we're
146:32
going
146:33
find specific restaurants so let me save
146:36
that
146:38
okay let's try it and it works in to
146:42
prove that it's working
146:43
i'm gonna open up my console i'm gonna
146:46
go to my
146:48
network i'm going to refresh here
146:53
let me zoom in on this if i go to
146:56
restaurants here and if i hover over
146:59
you can see it's our url it's our
147:01
mongodb realm
147:03
url and you can see the cuisines doesn't
147:06
work because we haven't implemented that
147:08
endpoint yet so let's implement the
147:11
cuisines
147:11
endpoint right now and by the way all
147:14
the other endpoints are going to be way
147:16
easier we started with the hardest one
147:18
with all the searches and stuff
147:19
well let's test that first so let's test
147:22
to see if that works
147:23
so let's type in food search
147:26
look all about food feel food now let's
147:29
try the zip code
147:30
search one zero zero one
147:33
four search and yep
147:36
all the zip codes are one zero zero one
147:38
four so that works
147:39
i assume the cuisine search is gonna
147:41
work but we're gonna have to implement
147:43
our cuisine's endpoint first so we'll
147:45
pull that in
147:46
so to implement a new api endpoint
147:50
i'm going to go back to here
147:53
and then i'm going to add an incoming
147:56
web book so we have the restaurants
147:57
webhook
147:59
now i'm going to add another one and
148:02
this one is going to
148:03
be called cuisines
148:06
and everything else is basically going
148:08
to be the same here
148:09
oh it's going to be a get request okay
148:13
let me go over to the function editor
148:16
now if you're in the github repository
148:18
there's actually a folder called realm
148:21
that has the code for all the functions
148:24
so the rest of these functions i'm just
148:25
going to paste in here
148:27
and then i can just go over it again
148:29
it's going to be way easier these are
148:30
all going to be way easier than the last
148:32
ones
148:33
but all this code is basically just a
148:36
modified version
148:37
of the code that was in our node express
148:40
backend
148:41
and i just modified it to use this thing
148:43
specific to
148:44
realm like the context.services
148:48
and basically this is pretty
148:50
straightforward we get the collection
148:52
and then a weight await
148:53
collection.distinct cuisine and return
148:55
the cuisines
148:56
so let me save that and then i'll review
149:00
and deploy that
149:03
and now let's just update back in our
149:06
react front end let's
149:08
update the get cuisines
149:13
and actually that should be right it's
149:15
just going to have slash cuisines
149:16
at the end if we go back to our settings
149:20
and we go to the url we can kind of
149:22
confirm that
149:23
see yeah it just ends with slash
149:25
cuisines our main url
149:27
ends at incoming web books and then has
149:29
cuisines at the end
149:30
so let's test that i'll refresh this
149:32
page here
149:34
and now we have all these cuisines it
149:36
comes in
149:37
and we can do a search yep we got the
149:41
chicken cuisine
149:42
and let me just make sure right from
149:45
our networks so if i refresh here
149:48
and we can see the cuisines is actually
149:51
coming
149:51
right from the mongodb round website so
149:54
that
149:55
that web hook is working okay let's
149:58
implement
149:58
all the rest of them so to see which
150:01
ones we still need to implement we can
150:02
go back over here
150:04
so we need the get one which is
150:07
slash id and then with the id
150:10
right in there we need the crate review
150:13
we need the update review
150:15
we need the delete review and then
150:18
we'll be done so let's do this one first
150:20
where we're going to get a
150:21
single review where we're going to get a
150:24
single restaurant with all of the
150:25
reviews
150:27
so click add incoming web hook this is
150:29
going to be just called restaurant
150:32
singular not plural and this is also
150:35
going to be a get request
150:37
pretty soon we're going to do a post one
150:38
but this one's a get request
150:40
go to the function editor let me save
150:42
that
150:45
you can see there's an asterisk there
150:46
now there's not because it's saved
150:48
and now i'm going to update this code
150:50
again you can just copy the code right
150:52
from the github repository if you're
150:54
trying to follow along here
150:56
so let's look at some of things that are
150:58
specific to
151:00
mongodb realm we have the
151:02
payload.query.id
151:04
so one thing tricky for this one this
151:07
one uses a
151:08
path parameter so right in the url as
151:11
part of the url there's this
151:13
parameter so it's id slash
151:16
and then it's the the id
151:20
the actual id then we get that path
151:22
parameter
151:23
to look up the id that's how it is in
151:25
the node express backend
151:27
so that's one thing kind of different on
151:30
realm is that it cannot do a path
151:33
parameter it cannot get a path parameter
151:34
it can only get a query parameter
151:36
so we're going to have to switch this to
151:38
a query parameter
151:39
so a query parameter is something that's
151:41
after a question mark
151:43
so it's in the url after a question
151:44
marks me a query parameter
151:46
if it's just after a slash just like
151:48
this it's going to be a path parameter
151:50
so we have to change the path parameter
151:52
to a query parameter
151:54
and it's going to be a query parameter
151:55
called id and so we're going to do
151:58
something else in react
151:59
to make it a query parameter instead of
152:02
a path parameter
152:03
but it'll be pretty simple i'll show you
152:05
when we get to that point and so we get
152:07
a list of the the restaurants just like
152:10
before
152:10
and then this pipeline this is basically
152:13
just copy and pasted right from our
152:15
express app
152:16
to get a list of all the reviews so you
152:19
know we're
152:20
we're sending it the rest a single
152:22
individual restaurant but then we have
152:23
to go to the reviews collection to get
152:25
all the reviews so that's what this
152:28
pipeline does and then
152:31
this is all this information is
152:33
basically very similar to our express
152:35
app
152:36
and then right here we're converting
152:39
we're going through each review
152:41
and we're converting the date to a
152:43
string
152:44
and we're converting the id to a string
152:47
if we don't do that
152:49
our react app won't work with it
152:51
correctly
152:52
okay i'll save that and then i'll just
152:56
do review and deploy
152:58
and then we have to deploy here
153:02
so if we go to our url it's just going
153:05
to end with
153:06
restaurant so let's see how we have to
153:08
change the path parameter
153:10
to a query parameter
153:14
so it no longer is going to be id here
153:18
this is going to be restaurant
153:22
and we're going to get rid of this slash
153:24
here because now it's going to be a
153:26
query parameter which is pretty simple
153:28
we're going to do
153:29
question mark id equals
153:33
and now we change the path parameter to
153:35
a query parameter
153:37
so save that and now let's
153:40
test it in our browser okay i'll just
153:43
use leave this network tab open
153:46
and i'll click view reviews
153:49
and let's see okay it's getting
153:53
our restaurant is coming right from our
153:54
mongodb realm
153:57
api so that worked and we even got the
153:59
review here
154:00
so that worked too so now the final
154:03
things are
154:05
adding reviews editing reviews and
154:07
deleting reviews
154:08
so let me go back to the list of all our
154:11
web hooks
154:12
i'm going to add an incoming web hook
154:15
i'll call
154:16
it review
154:20
new and we're finally going to be using
154:24
a post request here
154:26
instead of a get request go to the
154:28
function editor
154:32
and then i'm going to paste in some code
154:34
here and now we're finally using the
154:36
body
154:37
so the body of the request payload.body
154:41
if at first it checks if there is a body
154:43
and if there
154:44
is a body this is how we have to get it
154:47
from the payload body that was sent to
154:49
this web hook
154:50
we'll get the text and then we'll have
154:52
to convert it
154:53
from bson to an e json object
154:57
e json is basically json with a few
154:59
extra types
155:01
this body includes the name user id and
155:04
the other data sent to this web hook
155:06
so this is something kind of specific to
155:10
mongodb atlas for realm but we got the
155:13
body
155:14
and then we have to get a list of the
155:16
review or
155:17
not a list but we have to get the
155:18
reviews collection a reference reference
155:20
to the reviews collection
155:21
and then we have to create our document
155:23
that we're going to insert
155:24
with by name by.user.i user underscore
155:27
id
155:28
a new date body.txt and now we're
155:31
converting this
155:33
string to an object id with bson.object
155:37
id
155:38
and then we are just inserting it into
155:40
their database
155:41
await reviews.insert one review doc so
155:44
that's pretty straightforward
155:46
and i'll save that and deploy it
155:49
and we're not going to put into our
155:50
react app yet let's just create all of
155:52
these and then we'll put them all into
155:54
our react
155:54
app so add incoming web hook
155:58
this is going to be the editing one so
155:59
review edit
156:02
and then this is going to be a put
156:07
save that function editor
156:12
i'll paste that in and it's
156:15
pretty similar to the last one we check
156:17
to see if there's a body
156:19
and we get we get the body into this
156:21
variable here we get a reference to the
156:23
reviews
156:24
we create a new date and then
156:28
we update so reviews.update1
156:31
first we have to just like in our
156:34
express app
156:35
we're searching for the one to update by
156:38
the
156:38
id which we do have to convert to an
156:41
object id here
156:42
and we also are making sure that the
156:44
user id is the same as the id that
156:47
created
156:48
that review and then we just have to
156:51
update the
156:52
text and the date and then we return the
156:55
update response
156:56
so save that view and deploy
157:00
now i actually don't have to be
157:02
deploying this each time i can create
157:04
all of them
157:06
at once and then deploy it but it's good
157:08
to kind of get in the habit or you'll
157:10
just forget to deploy then you won't be
157:11
able to figure out what the error is
157:13
okay this is the final web hook that
157:15
we're creating and it's going to be
157:17
review delete
157:21
and this will be a delete request here
157:25
and then function editor i'm just going
157:27
to paste in the code again
157:30
keep in mind there's no authentication
157:32
on this function
157:33
so this is there's this is not for use
157:35
in a
157:36
production environment it's just an
157:38
example to see how
157:39
how this thing would work because you're
157:42
probably going to want to have some
157:43
authentication before someone's able to
157:45
delete
157:46
something obviously in a production
157:48
environment
157:49
but let's just let me just we'll just do
157:52
it this way for now and we can see if it
157:53
works
157:54
so we'll just save and we'll review and
157:58
deploy
158:00
okay let's update our react app with the
158:04
new urls
158:06
so this review is going to review
158:10
new and an update review is review
158:14
edit and then delete review
158:19
is review
158:26
delete
158:28
that should be done let's test it
158:32
okay let me log in here
158:38
view reviews and review
158:42
best ever today
158:47
okay submit back to restaurant
158:52
let's see if i can edit it and let me
158:54
just check the network tab so i can see
158:56
where the requests are going to so edit
158:58
and the best ever yesterday
159:03
submit and then you can see yep it uses
159:06
mongodb realm
159:09
okay let's see if it deletes right and
159:11
deleted
159:12
and yep it's at the restaurant view it's
159:15
it's the mongodb
159:16
realm url and we're able to successfully
159:18
delete
159:19
so we just created the entire
159:24
node express backend all in mongodb
159:27
realm and it was way quicker it didn't
159:30
really take that long to
159:32
to put it all together and now it's all
159:34
in the
159:35
cloud it's and it's connected right to
159:37
our mongodb database
159:39
it's just a lot simpler way to create a
159:42
merge stack app
159:43
basically a merge stack app without the
159:45
e and the n
159:50
and now i'm going to show you how you
159:52
can very simply and
159:54
quickly host your react front end
159:57
right from db realm and it's
160:00
completely free
160:03
okay if you still have your react app
160:05
running stop that
160:07
and i'm in the directory for the react
160:09
app the front end directory
160:11
and i'm just going to do npm run build
160:16
and this is going to create a build
160:18
directory that we can
160:20
upload directly to mongodb realm
160:24
okay back in realm let's see where we're
160:26
going to upload our frontend
160:28
well look at this section right here
160:30
hosting
160:31
so click hosting host your website here
160:35
enable hosting
160:39
now i just have to drag over my build
160:41
folder
160:42
right over to here okay so i'm just
160:45
gonna grab
160:46
select all the files in my build folder
160:49
not the folder itself just the files in
160:51
the build folder
160:52
i'm just going to drag them over here
160:54
and then they will upload
160:59
i can overwrite index.html
161:02
and then after they're uploaded i'll
161:04
just click review and deploy
161:07
deploy and it deployed was successful
161:12
and it says your site is in the process
161:14
of being created which may take up to 15
161:16
minutes
161:16
so it could take a little while before
161:18
you're able to access the site
161:20
but it has the url right here so we'll
161:23
just go right to this url
161:25
but first let's go into the settings and
161:26
look at some of the settings
161:28
so you can actually use a custom domain
161:31
so you can use any domain you like
161:33
i'm not going to go through those
161:35
instructions here but if you just click
161:36
view
161:37
instructions it's going to show you
161:39
everything you need to know
161:40
to how to use your custom domain
161:44
so i'm just going to copy this url here
161:49
and look it already works i just went to
161:51
the url and it's hosting
161:53
my react app right on here and let's see
161:56
if we can do a
161:58
search how about ice
162:02
okay everything that the names that have
162:05
ice
162:06
we can try a cuisine
162:09
that works let's see if we can do a
162:12
review
162:12
first of all i'm going to go to all
162:14
cuisines
162:17
and we'll do happy garden
162:20
add review oh login
162:24
oh one two three four oops
162:28
one two three four
162:40
and we can edit it
162:43
[Music]
162:47
and this is all working everything
162:50
that you're seeing including the front
162:52
end the back end
162:53
the database it's all through mongodb
162:56
and mongodb
162:57
realm and even delete works
163:01
it's done our entire app is hosted
163:05
for free in the cloud everything
163:09
about our mirnstack app is hosted for
163:11
free in the cloud through mongodb
163:12
and mongodb realm well thanks for
163:15
watching everybody
163:16
remember to use your code for good
