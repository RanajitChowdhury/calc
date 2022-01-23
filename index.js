document.getElementById('toggle-btn').onclick= function(){
 if(document.getElementById("history").style.zIndex==0){
  document.getElementById("history").style.zIndex="2"
  }
  else{
    document.getElementById("history").style.zIndex="0"
  }
}

function blink (obj){
  obj.style.backgroundColor ="lightgreen"
  obj.style.color ="black"
  setTimeout(function() {
    obj.style.backgroundColor ="green"
    obj.style.color ="white"
  }, 100);
}

//calculation script start ---

var srval=document.getElementById('screen')

console.log(srval)
var btn = document. querySelectorAll("button")
var btval=""
for (item of btn) {
  item.addEventListener("click", function(e){
    var btext= e.target.innerText
    
    if (btext=="×") {
        btext = "*"
        srval.innerText += btext
    } else if(btext=="="){
      srval.innerText=eval(srval.innerText)
    }else if(btext=="C"){
      srval.innerText=""
    }else if (btext=="B") {
      srval.innerText=srval.innerText.slice(0,-1)
    }
    else {
      srval.innerText += btext
    }
  })
}
