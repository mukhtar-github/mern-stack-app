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

Hi i'm Beau Carnes with freecodecamp.org. In this course i'm going to teach you how to make a *full stack web application* using the *Mern Stack*. But I'm going to teach you even more than other *Mern Stack* courses, I'm going to show you how to convert the Back-end of the app to Serverless, and how to host it for free in the cloud, so you don't even need *Node or Express*.

The *Mern Stack* is a popular stack of technologies for building a *modern single page application*. Mongodb is a document based open source database. Node.js allows javascript to run outside a browser in places like a web server. Express is a web application framework that makes it simpler to code a web server in javascript. And React is a Javascript front-end library for building user interfaces.

In this course we will be building a
00:49
restaurant review web app
00:51
first i will talk about mongodb and how
00:54
to host your database in the cloud
00:56
using mongodb atlas then i'll show you
00:58
how to create the back end of the app
01:00
using node.js and express our server
01:03
will interact with the database
01:05
using the native mongodb javascript
01:07
library
01:08
instead of the mongoose library used by
01:10
many other mirnstat courses
01:12
why use an extra library if you don't
01:14
have to next i will show how to create
01:16
the front end with react
01:18
and connect the front end to the back
01:20
end at that point the merge stack app
01:22
will be complete
01:24
but i'll have one more thing to show you
01:27
in the final part of this course
01:29
i will show you how to replace the node
01:31
express backend
01:32
with mongodb realm this is a serverless
01:35
platform that will allow us to do
01:37
everything in the cloud
01:38
without running our own server and with
01:40
a lot less code
01:42
then i'll show you how we can use
01:43
mongodb realm to host our react
01:46
front-end
01:46
so our entire web app will be hosted for
01:49
free on mongodb realm
01:51
if you already know a lot about the mern
01:52
stack just skip to this time code
01:55

and go straight to where i show how to
01:57
convert the node express back in to use
01:59
mongodb realm instead
02:01
let me show you an overview of the
02:03
structure of the app we're going to
02:04
build
02:06
over on this side we have the m of the
02:07
mirn stack mongodb
02:09
we'll be hosting this on mongodb atlas
02:12
we also and then we have the e in the
02:14
end this is the backend
02:16
node in express you'll see that express
02:19
is just part of node and this is where
02:21
we're going to be running the our
02:22
backend server here and then we have our
02:25
react
02:25
front end and we'll be running our react
02:29
on a local server too
02:30
inside node.js and then the client so
02:33
this is what people will see when they
02:35
go to the website
02:36
to our web app so let's start by talking
02:38
about mongodb
02:43
first a quick overview of the mongodb
02:45
database
02:47
in the tabular or relational world we
02:49
think of things like databases
02:51
tables rows etc mongodb has similar
02:54
concepts that use different terms
02:55
i'd like to make sure everyone is aware
02:57
of instead of a table we have
02:58
collections
02:59
instead of rows we have documents we can
03:01
do join operations with the lookup
03:03
operator
03:04
and instead of foreign keys we utilize
03:06
references mongodb is very well suited
03:08
for handling data with a wide variety of
03:10
relationships
03:12
let's have a quick look at the document
03:13
model to see
03:15
here's an example of a mongodb document
03:18
it looks very much like json
03:20
we can see in here a variety of
03:22
relationships an address a title
03:24
here's the different data formats
03:26
they're all in the document
03:27
mongodb stores data in bson format or
03:31
binary json
03:32