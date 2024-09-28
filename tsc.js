function tsc(){
  console.log("hello, world");
}
if(typeof tsc === 'function'){
        global.tsc = tsc;
}
