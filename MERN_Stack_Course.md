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

And then we're going to get a *cursor*, and then we're going to *await restaurants.find(query)*. So this is going to find *all the restaurants from the database that go along with the query that we passed in*. If there is no *query*, if we just had the *blank query that wasn't set to anything*, then it's just going to *return all restaurants*, and then we're going to *catch an error*, and then we'll just *return an empty list and 0 for the total number of restaurants -- return { restaurantsList: [], totalNumRestaurants: 0 }*.

If there's an error but if there's no error now we're going to limit the results because it return in the *cursor* is every single result

but we're going to limit to restaurants per page the default is 20 and then to get the actual page number we do a skip so we're going to skip from the beginning to whatever page number we're at so we're going to multiply restaurants per page times the page number to get to a specific page of the results then we just set this to an array the restaurants list to an array and then we return the array and this can actually be changed here to get the total number of restaurants we don't need all this here so to get the total number of restaurants we're just going to count the documents in the query and then we can return the restaurants list and the total number of restaurants or if there's an error we just return this okay let me save that now we'll use the methods that we just went over that we just added to this file to access the database from our other files so let's go to index.js and in this one we are going to add at the beginning that we're going to import that file so import restaurants deo from d a o slash restaurants d a o dot j s so we have gotten a reference to this file and i'll just copy that and then it's gonna be right down here so right after we've connected to the database right before we start our server we are going to call that inject db so await restaurants inject db and we're going to pass in the client so this is how we get our initial reference to the restaurants collection in the database okay now we're going to create the controller that the route file will use to access the deo file so let's go let's save this i'll go to restaurants.route.js and we will need to make it so it uses the controller file we are about to create so the controller file is going to to be what is what the route uses so i'm going to import restaurants controller from restaurants.controller.js and now instead of sending this instead of getting this i'm going to do restaurants.controller dot api get restaurants and that's something we still have to create so now we're going to get what's going to be returned at this route that's going to come from this file here the restaurants controller file and then this method which we're going to create right now so let me save that and then inside the api folder create a new file and this one's going to be called dot restaurants.controller.js now it looks like we've got some things in the wrong spot this dao directory should be in the back end directory okay yeah so in the backend directory we have the api directory and the dao directory okay in the restaurant.control.js file i will paste in some code and then we'll go over it like last time so first we're going to import the other file we created the restaurantsdeo.js and then we're creating this restaurant controller class and there's a few methods actually right now there's just one method which is the api get restaurants and when this is when this api call is is called through a url there can be a query string a query string is how we can specify certain parameters and you'll
36:12
