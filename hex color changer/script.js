function change(){
  let hex="#";
  hex+=Math.round((Math.random()*16777215)).toString(16);
  document.body.style.backgroundColor=hex;
}
