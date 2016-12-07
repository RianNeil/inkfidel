(function() {
  try {
    var option1_nodes = document.getElementById("option1_values").getElementsByTagName('li');
    var option2_nodes = document.getElementById("option2_values").getElementsByTagName('li');
    var option3_nodes = document.getElementById("option3_values").getElementsByTagName('li');
  }
  catch(err) {
    console.log(err.message);
  }
  
  //give top level options location attribute and callback
  for(i = 0; i<option1_nodes.length; i++){

    var _node = option1_nodes[i];
        _node.setAttribute("tree_option", "option1");
    
    var _data = _node.getAttribute('data-option-title');

    for(j = 0; j < tree.children.length; j++){

      if( _data == tree.children[j].data ){

          _node.setAttribute("location", tree.children[j].id);

      }

    }

    _node.addEventListener("click", updateOption2);

  }

  function updateOption2(element){

    //based on clicked button
    var location = this.getAttribute('location');

    //find associated tree node
    var _children = tree.find(location).children;
    var values = [];

    //make array of tree children values
    for(i = 0; i < _children.length; i++){
      var _value = _children[i].data;
      values.push(_value);
    }

    var first_node;
        first_node = option2_nodes[0];

    //for all option2 values
    for(i = 0; i<option2_nodes.length; i++){
      //get node
      var _node = option2_nodes[i];
          _node.setAttribute("tree_option", "option2");
      
      var _value = _node.getAttribute('data-option-title');

      //if also tree node suboption
      if(values.includes(_value)){
        
        //make visible
        _node.style.display = 'block';       
        
        //assign location
        for(j = 0; j < _children.length; j++){
          if(_value == _children[j].data)
          _node.setAttribute("location", _children[j].id);
        }
        
        //give callback
        _node.addEventListener('click', updateOption3);
                
      }else{
        
        //hide
        _node.style.display = 'none';
        //remove callback
        _node.removeEventListener('click', updateOption3);
        
      }

    }
    
    //get currently selected nodes
    var selected = document.getElementsByClassName('selected');
    
    //if there is a selected option 2
    for(h = 0; h < selected.length; h++){
      if(selected[h].getAttribute('tree_option') == 'option2'){
        first_node = selected[h];
      }
    }
    
    //click a node to update option 3 elements
    first_node.click();
    
  }
  
  function updateOption3(element){

    //based on clicked button
    var location = this.getAttribute('location');

    //find associated tree node
    var _children = tree.find(location).children;
    var values = [];

    //make array of tree children values
    for(i = 0; i < _children.length; i++){
      var _value = _children[i].data;
      values.push(_value);
    }

    var first_node;
        first_node = option3_nodes[0];
    
    //for all option3 nodes
    for(i = 0; i<option3_nodes.length; i++){

      //get node
      var _node = option3_nodes[i];
          _node.setAttribute("tree_option", "option3");
      
      var _value = _node.getAttribute('data-option-title');

      //if also tree node suboption
      if(values.includes(_value)){        
        //make visible
        _node.style.display = 'block';  

      }
      else{
        //hide
      _node.style.display = 'none';
      }

    }

    //get currently selected nodes
    var selected = document.getElementsByClassName('selected');
    
    //if there is a selected option 3
    for(h = 0; h < selected.length; h++){
      if(selected[h].getAttribute('tree_option') == 'option3'){
        first_node = selected[h];
      }
    }
        
    first_node.click();

}
  
  

})();