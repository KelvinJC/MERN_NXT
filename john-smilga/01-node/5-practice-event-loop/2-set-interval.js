console.log('first')
setInterval(()=> {
    console.log("Hey!");
}, 2000);
console.log("send message");
// process stays alive unless 
// killed by CTRL + C
// or unexpected error