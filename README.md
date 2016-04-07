# fcc-quote_machine
Random quote machine project for Free Code Camp.

## Description
It's time to begin the intermediate front end development projects for [Free Code Camp](https://www.freecodecamp.com).  This task is to [build a random quote machine](https://www.freecodecamp.com/challenges/build-a-random-quote-machine).
The task doesn't specify how the quotes are to be retrieved but some remote API access via ajax fits with the spirit of the challenge.

## Objective:
Build a [CodePen.io](https://codepen.io) app that is functional similar to [the example](http://codepen.io/FreeCodeCamp/full/bELoPJ).

### Rules:
1. Don't look at the example project's code.  Figure it out for yourself.
2. Fulfill the below [user stories](http://en.wikipedia.org/wiki/User_story).  Use whichever libraries or APIs you need.  Give it your own personal style.

### User Stories:
* I can click a button to show me a new random quote.
* I can press a button to tweet out a quote.

### Technology and Libraries:
* jQuery for ajax and DOM manipulation.
* [David Lane's fork](https://github.com/davelane/wikiquotes-api) of [Nate Tyler's wikiquotes-api](https://github.com/natetyler/wikiquotes-api).  I use David's fork for the added ability to pull quotes from a random page.

### Notes:
Wikiquotes isn't the best place to pull quotes from as you have to access it through the mediawiki api and the quote page layout doesn't always match one another.  This means that occasionally blank quotes and other various errors slip through.
Hosted at: http://codepen.io/xipxoom/pen/dMJGyR

### Todo:
* This app is quirky enough that animations might be fun.
* Do some sanity checks on the quotes we receive.
