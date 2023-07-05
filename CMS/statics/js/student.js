document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 


  $ = function(id) {
    return document.getElementById(id);
  }

  var show = function(id) {

      if(id == 'library'){
        $('accountDisplay').style.display = 'none';
        $('main').style.display = 'none';
      }
      if(id == 'main'){
        $('accountDisplay').style.display = 'none';
        $('library').style.display = 'none';
      }
      else{
        $('library').style.display = 'none';
        $('main').style.display = 'none';
      }
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }
