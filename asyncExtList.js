/*
How to run...
ex:  node asyncExtList.js user/whatever/desktop .pdf
-------------------------------------------
this is going to search for pdf files in the desktop directory
and display them in the console...

you can use this to search for any file in a given directory..
just change .pdf to whatever file exttension you're searching for..
Examples....
node asyncExtList.js user/whatever/desktop .doc
node asyncExtList.js user/whatever/desktop .txt
node asyncExtList.js user/whatever/desktop .js
*/

var fs = require('fs');
var path = require('path');

var fileName = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(fileName, function(err, list){
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
