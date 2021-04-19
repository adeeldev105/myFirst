var urlValue=require('url');
var address = 'https://javascript.plainenglish.io/node-js-developer-roadmap-for-2021-2ae9c057bff4h=march';
var p=urlValue.parse(address,true);
console.log("Protocol value :",p.protocol );
console.log("path name : ",p.pathname);
console.log("Search string : ",p.search);
console.log("Data : ",p.query);
console.log("Thankuuuu...ended ");