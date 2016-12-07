var buttons_container = document.getElementById("buttons_container");
var option1_buttons = document.getElementById("option1_buttons");
var option2_buttons = document.getElementById("option2_buttons");
var option3_buttons = document.getElementById("option3_buttons");


for(i = 0; i < tree.children.length; i++){
  
  
  var btn = document.createElement("BUTTON");
  
  btn.setAttribute("id", tree.children[i].id);
  btn.innerHTML = tree.children[i].data;
  btn.setAttribute("value", tree.children[i].data);
  
  (function(btn){
  btn.addEventListener("click", updateOption2);
  })(btn);
  
  option1_buttons.appendChild(btn);
}


//define button callbacks
function updateOption2(){
  
  option2_buttons.innerHTML = "";


  var id = this.id;
  
  var _children = tree.find(id).children;
  
  for(i = 0; i < _children.length; i++){
    
    var btn = document.createElement("BUTTON");

    btn.setAttribute("id", _children[i].id);
    btn.innerHTML = _children[i].data;
    btn.setAttribute("value", _children[i].data);
    
    btn.addEventListener("click", updateOption3);
  
    option2_buttons.appendChild(btn);
  }
  
}

function updateOption3(){
  
  option3_buttons.innerHTML = "";
 
  var id = this.id;
  
  var _children = tree.find(id).children;
  
  for(i = 0; i < _children.length; i++){
    
    var btn = document.createElement("BUTTON");

    btn.setAttribute("id", _children[i].id);
    btn.innerHTML = _children[i].data;
    btn.setAttribute("value", _children[i].data);
      
    option3_buttons.appendChild(btn);
  }
  
}