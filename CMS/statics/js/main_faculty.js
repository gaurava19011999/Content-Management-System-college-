$ = function(id) {
    return document.getElementById(id);
  }

  
  var show = function(id) {
    if(id=='library'){
        $('main').style.display='none'
    }
    else
    {
        $('library').style.display='none'
    }
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }


