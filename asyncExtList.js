/*
How to run...
ex:  node asyncExtList.js user/whatever/desktop .pdf
-------------------------------------------
this is going to look for all the pdf files
in the desktop directory and display in the console... 
*/


var fs = require('fs');
var path = require('path');

var fileName = process.argv[2];
var fileExtension = process.argv[3];


fs.readdir(fileName, function(err, list) {
  if(err){
    return console.log(err);
  }//end of if
  else{
    for(var i = 0; i < list.length; i++){
      if(list[i].includes(fileExtension)){
        console.log(list[i]);
      }//end of if
    }//enf of loop
  }//enf of else
});
