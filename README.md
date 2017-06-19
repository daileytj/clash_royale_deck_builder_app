This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Clash Royale Deck Builder

Thinkful Final Capstone - Full Stack application using React/Redux.

![Screenshots](https://user-images.githubusercontent.com/13989985/27306693-98a8edf6-5514-11e7-9cdc-bcd0e2e54cb8.png)

## Overview

The Clash Royale Deck Builder App is an app that caters to Clash Royale players. The landing page has a nice UX design and explains how the app works. The app allows players from all over the world to create a custom deck and add their current strategies to a database of custom decks. These custom decks and strategies are then made available on the 'decks' page, allowing users to browse various decks and strategies to see what might work for them to advance in the game.

##Use Case

Why is this app useful? As a player of the game Clash Royale there have been countless times where I am stuck and in need of a better deck and strategy. This app allows players from around the world to create and share their custom decks and strategies, creating a database of ultimate decks to stomp out the competition with when a user cannot come up with a deck and strategy of their own.

##UX

The app has been designed with a focus on the fun and playfulness of the original game. This page has been themed around the original game allowing users to interact with content straight from the Clash Royale game.

##Working Prototype

You can access a working prototype of the app here:
http://purchasing-officer-bruce-81384.netlify.com/

##Technical

* The app is built using the full stack. The front-end is built using html, css, javascript, react, and redux. The back-end using NodeJS with ExpressJS as the web server and MongoDB as the database.
* The app draws data a custom mongo database created specifically for this app as well as a public Clash Royale API.
* An API to access the database has been constructed in ExpressJS with 2 key endpoints at this moment, returning all user decks.
* This app also uses an unnoficial clash royale API (https://github.com/martincarrera/clash-royale-api)
* The prototype app is deployed as a Netlify app.
* The app was built to be mobile responsive.

##Development Roadmap

This is v1.0 of the app, but future enhancements are expected to include:

* Zooming in on individual cards for card stats.
* Zooming in on individual decks for more information and cleaner reading.
* User login to keep a list of a users personal decks.
* More form information on the custom decks to better share strategies.
