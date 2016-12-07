//jQuery.noConflict();     
$(document).ready(function() {

      // custom sort functions
    function compare_a_z(a, b){
	  var compA = $(a).data('alpha');
	  var compB = $(b).data('alpha');
	  return (compA < compB) ? -1 : (compA > compB ) ? 1 : 0;
	}
	
	function compare_z_a(a, b){
	  var compA = $(a).data('alpha');
	  var compB = $(b).data('alpha');
	  return (compA > compB) ? -1 : (compA < compB ) ? 1 : 0;
	}
	
	function compare_l_h(a, b){
	  var compA = $(a).data('price');
	  var compB = $(b).data('price');
	  return (compA < compB) ? -1 : (compA > compB ) ? 1 : 0;
	}
	
	function compare_h_l(a, b){
	  var compA = $(a).data('price');
	  var compB = $(b).data('price');
	  return (compA > compB) ? -1 : (compA < compB ) ? 1 : 0;
	}
    
    
	// vertical alignment of images
	
	// Lazy Loading of images on collectin page	
	function setLazy(){
	  $('.lazy').lazyload({
      effect: "fadeIn",
            threshold: 200
        });
setTimeout(function () {
  window.scrollTo(0, 1);
}, 500);
    }
  
    // call Lazy Load initially
    setLazy();
    
  // verticalAlignImages();
    	
	// on sortBox change collect the products
	$('select#sortBox').change(function(){
	  arr = [];
	  sort_func = $(this).children(':selected').val();

	  $('li.collectionitem').each(function(){
      arr.push(this);
    });
    // find which sort was selected and run the right sort function
    if (sort_func == "a_z"){
      arr.sort(compare_a_z);
    }
    else if (sort_func == "z_a"){
      arr.sort(compare_z_a);
    }
    if (sort_func == "l_h"){
      arr.sort(compare_l_h);
    }
    else if (sort_func == "h_l"){
      arr.sort(compare_h_l);
    }
    // push the arranged products back out
    $('#four-column-collectionlist').append(arr);

    // push the arranged products back out
    $('#three-column-collectionlist').append(arr);
    
    // push the arranged products back out
    $('#two-column-collectionlist').append(arr);
    
    // reset Lazy Loading just in case images sorted to top fail to show
    setLazy();
	});
    
});
  
