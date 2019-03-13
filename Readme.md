[![Known Vulnerabilities](https://snyk.io/test/github/koficypher/meetup/badge.svg?targetFile=package.json)](https://snyk.io/test/github/koficypher/meetup?targetFile=package.json)

# Meetup NodeJS SDK
A NodeJS SDK for [Meetup](https://meetup.com)'s [API](https://www.meetup.com/meetup_api/) Version 2

Authentication as at this version only supports API key authentication. Future releases may support OAuth2
authentication.

>Not complete yet, more features to come..

## Features
1. Get all upcoming meetups for a specified `GROUP_URLNAME`

## Installation
- Run :
`npm install @koficypher/meetup --save`

- Create a `.env` file and specify your `API_KEY` ,  `GROUP_URLNAME` and specify the V2 api url
  `API_URL =https://api.meetup.com/2`
- Require it in your file like so: 
  ```js
  const meetup = require('@koficypher/meetup')

  //initialize meetup class

  const meetups = new Meetup()

  /** result returns a promise so console log it to see it */
  meetups.getUpcoming().then(data => {
     console.log(data);
  });
  ```



## Want to Collaborate ?
Kindly send me an email [koficypher](mailto:skcypher6@gmail.com)

## Licence
The project is licenced under the MIT licence

## Security Issues
Please email all security issues to [koficypher](mailto:skcypher6@gmail.com)