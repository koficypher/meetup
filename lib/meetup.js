'use strict';
const config = require('./config/config');
const Requestor = require('./Requestor');

class Meetup {
    
    constructor(){
      this.key = config.api_key;
      this.group = config.group_urlname;
      this.url = config.meetup_api;
    }
   
   async getUpcoming(){
    let url = `${this.url}/events`;
    const result = await Requestor.get(url,this.key,this.group);
    return result;
  }

}


module.exports = Meetup;