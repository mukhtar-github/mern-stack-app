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

## MongoDB overview

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
    projects: "VimApp",
    employee_number: 5,
    location: [1.234, 56.789]
    }
```

We can see in here a variety of relationships an address a title here's the different data formats they're all in the document mongodb stores data in bson format or binary json this provides for a wide variety of
03:34
support for data types like strings or
03:36
integers
03:37
and in our code we're sometimes going to
03:39
have to do some converting between
03:41
json and binary json specifically for
03:44
the object id
03:46
okay let's get started creating our
03:47
database

## Setup MongoDB Atlas Cloud Database

03:52
you can host your mongodb database
03:54
locally but i found that it's easier to
03:56
host the database using mongodb
03:58
atlas so we can do everything in the
04:00
cloud and eventually
04:02
we will literally do everything in the
04:04
cloud
04:05
where our entire back end and front end
04:08
is in the cloud
04:09
and we can actually do it right all on
04:11
mongodb atlas
04:13
but for now we're just going to create
04:14
the database we'll be using the free
04:17
tier on mongodb
04:18
atlas in this tutorial so the first step
04:20
is to create an account
04:22
or you can just sign in so once you're
04:24
creating your account for the first time
04:26
you're going to have to set up the
04:27
account so you can create an
04:29
organization
04:30
everything's going to have to have an
04:32
organization i'll just call bose org
04:34
for the project name for our first
04:36
project i'm going to put
04:37
mern stack so i'm going to
04:40
call this the mirnstack project and
04:43
preferred language
04:45
well we'll be mainly working with
04:47
javascript and the mern stack
04:48
so let's go past this
04:53
and then i'm going to choose this free
04:55
tier
04:57
okay now we're going to be choosing
04:59
where our
05:01
our files are going to be stored at and
05:04
we can just
05:04
basically choose all these default
05:07
options if we
05:08
choose these default options it's going
05:09
to be on the free tier
05:11