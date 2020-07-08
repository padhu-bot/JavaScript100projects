const colour=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","White","Silver","grey","black","red","maroon","yellow","lime","olive","green","teel","bule","navy","purple","pink","wine"];

function change(){
  num=Math.floor((Math.random()*colour.length));
  document.body.style.backgroundColor=colour[num];
}
