/*
Author: Mike Brazier
*/

variants = document.getElementsByClassName("variant");

option1 = [];
option2 = [];
option3 = [];

//populate option arrays with option values
for(i = 0; i < variants.length; i++){

  var _variant = variants[i];
  
  var _option1 = _variant.getAttribute('option1');
  var _option2 = _variant.getAttribute('option2');
  var _option3 = _variant.getAttribute('option3');

  if(!option1.includes( _option1 ) ){
    if( _option1 != ""){
      option1.push( _option1 );
    }
  }
  if(!option2.includes( _option2 ) ){
    if( _option2 != ""){
      option2.push( _option2 );
    }
  }
  if(!option3.includes( _option3 ) ){
    if( _option3 != ""){
    option3.push( _option3 );
    }
  }
  
}

tree = new Arboreal();

//populate first layer with option 1 values
for(i = 0; i < option1.length; i++){
	tree.appendChild(option1[i]);
}

//populate second layer with option 2 values
for(i = 0; i < tree.children.length; i++){

  	var _child = tree.children[i];
	var _option = _child.data;
  	var added_values = [];
  
    for(j = 0; j < variants.length; j++){

      var current_variant = variants[j];

      if(current_variant.getAttribute('option1') == _option){
        
        _option2 = current_variant.getAttribute('option2');
              
        //if new suboption has not been added
        if(_option2 != ""){
          if(!added_values.includes(_option2)){
            _child.appendChild(_option2);
            added_values.push(_option2);
          } 
        }

      }
      //if given suboption contains all option2 suboptions, break
      if(added_values.length == option2.length){
      	break;
      }
    }
}

//populate third layer with option 3 values
for(i = 0; i < tree.children.length; i++){
    
  var _option1 = tree.children[i];

  	//for each underlying option2
    for(j = 0; j < _option1.children.length; j++){

      var _child = _option1.children[j];
      var _option = _child.data;
      var added_values = [];
     
      for(k = 0; k < variants.length; k++){

        var current_variant = variants[k];

        if(current_variant.getAttribute('option2') == _option){

          _option3 = current_variant.getAttribute('option3');

          //if new suboption has not been added
          if(_option3 != ""){
            if(!added_values.includes(_option3)){
              _child.appendChild(_option3);
              added_values.push(_option3);
            } 
          }
        }
        
        //if given suboption contains all option3 suboptions, break
        if(added_values.length == option3.length){
          break;
        }
        
      }
    
    }

}

