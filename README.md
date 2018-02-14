# ember-code-challenge

This is a simple Ember application which allows the user to create and modify 4 components of a database - Record Labels, Artists, Albums, and Songs.

The ralational scheme follows in that order: every song belongs to an album, every album to an artist, and every artist to a record label.

When loading the landing page (http://localhost:4200), the database gets populated with mock data found in routes/index.js

## Installation

* `git clone <repository-url>` this repository
* `cd ember-play`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Tests

Tests have been generated but not populated for this assignment

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Development

A few brainstorming ideas about taking this application beyond original scope-

* Generating tests
* Styling the application
* Separate details from the update page into individual view pages for each component

