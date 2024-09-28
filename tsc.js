function tsc(){
  console.log("hello, world");
}
if(typeof tsc === 'function'){
        global.tsc = tsc;
}
const tsc = function(){
        global.tsc();
};
