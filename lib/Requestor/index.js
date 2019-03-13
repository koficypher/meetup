const request = require('request');

module.exports = {

    get : (url,key,group) => {
        //initialize the promise object
     return new Promise((resolve,reject) => {
         //set query string parameters
         let params = {
                key : key,
                group_urlname: group,
                sign:true
            }
        request({url:url, qs: params, json:true }, (err, res, body) => {
           resolve(body)

           if(err){
             reject(new Error("Error :",err));
           }
        });
     });   
    }
     
}