$ = function(id) {
    return document.getElementById(id);
  }

  var show = function(id) {

      if(id == 'mca'){
        $('mba').style.display = 'none';
        $('bca').style.display = 'none';
        $('bba').style.display = 'none';
        $('ballb').style.display = 'none';
        $('llb').style.display = 'none';
        $('bcom').style.display = 'none';
        $('bed').style.display = 'none';
        $('bpharma').style.display = 'none';
        $('dpharma').style.display = 'none';
       
      }
      else if(id == 'mba'){
        $('mca').style.display = 'none';
        $('bca').style.display = 'none';
        $('bba').style.display = 'none';
        $('ballb').style.display = 'none';
        $('llb').style.display = 'none';
        $('bcom').style.display = 'none';
        $('bed').style.display = 'none';
        $('bpharma').style.display = 'none';
        $('dpharma').style.display = 'none';
       
      }
      else if(id == 'bca'){
        $('mca').style.display = 'none';
        $('mba').style.display = 'none';
        $('bba').style.display = 'none';
        $('ballb').style.display = 'none';
        $('llb').style.display = 'none';
        $('bcom').style.display = 'none';
        $('bed').style.display = 'none';
        $('bpharma').style.display = 'none';
        $('dpharma').style.display = 'none';
       
      }
      
      else if(id == 'bba'){
        $('mca').style.display = 'none';
        $('bca').style.display = 'none';
        $('mba').style.display = 'none';
        $('ballb').style.display = 'none';
        $('llb').style.display = 'none';
        $('bcom').style.display = 'none';
        $('bed').style.display = 'none';
        $('bpharma').style.display = 'none';
        $('dpharma').style.display = 'none';
       
      }
      
      else if(id == 'ballb'){
        $('mca').style.display = 'none';
        $('bca').style.display = 'none';
        $('bba').style.display = 'none';
        $('mba').style.display = 'none';
        $('llb').style.display = 'none';
        $('bcom').style.display = 'none';
        $('bed').style.display = 'none';
        $('bpharma').style.display = 'none';
        $('dpharma').style.display = 'none';
       
      }
      
      else if(id == 'llb'){
        $('mca').style.display = 'none';
        $('bca').style.display = 'none';
        $('bba').style.display = 'none';
        $('ballb').style.display = 'none';
        $('mba').style.display = 'none';
        $('bcom').style.display = 'none';
        $('bed').style.display = 'none';
        $('bpharma').style.display = 'none';
        $('dpharma').style.display = 'none';
       
      }
      
      else if(id == 'bcom'){
        $('mca').style.display = 'none';
        $('bca').style.display = 'none';
        $('bba').style.display = 'none';
        $('ballb').style.display = 'none';
        $('llb').style.display = 'none';
        $('mba').style.display = 'none';
        $('bed').style.display = 'none';
        $('bpharma').style.display = 'none';
        $('dpharma').style.display = 'none';
       
      }
      
      else if(id == 'bed'){
        $('mca').style.display = 'none';
        $('bca').style.display = 'none';
        $('bba').style.display = 'none';
        $('ballb').style.display = 'none';
        $('llb').style.display = 'none';
        $('bcom').style.display = 'none';
        $('mba').style.display = 'none';
        $('bpharma').style.display = 'none';
        $('dpharma').style.display = 'none';
       
      }
      
      else if(id == 'bpharma'){
        $('mca').style.display = 'none';
        $('bca').style.display = 'none';
        $('bba').style.display = 'none';
        $('ballb').style.display = 'none';
        $('llb').style.display = 'none';
        $('bcom').style.display = 'none';
        $('bed').style.display = 'none';
        $('mba').style.display = 'none';
        $('dpharma').style.display = 'none';
       
      }
      else if(id == 'new-admission'){
        $('record').style.display = 'none';
        $('admission-fee').style.display = 'none';
      }
      else if(id == 'record'){
        $('new-admission').style.display = 'none';
        $('admission-fee').style.display = 'none';
      }
      else if(id == 'admission-fee'){
        $('new-admission').style.display = 'none';
        $('record').style.display = 'none';
      }
      else if(id == 'nav-mca'){
        $('nav-mba').style.display = 'none';
        $('nav-bca').style.display = 'none';
        $('nav-bba').style.display = 'none';
        $('nav-bcom').style.display = 'none';
        $('nav-bed').style.display = 'none';
        $('nav-llb').style.display = 'none';
        $('nav-ballb').style.display = 'none';
        $('nav-bpharma').style.display = 'none';
        $('nav-dpharma').style.display = 'none';
      }
      else if(id == 'nav-mba'){
        $('nav-mca').style.display = 'none';
        $('nav-bca').style.display = 'none';
        $('nav-bba').style.display = 'none';
        $('nav-bcom').style.display = 'none';
        $('nav-bed').style.display = 'none';
        $('nav-llb').style.display = 'none';
        $('nav-ballb').style.display = 'none';
        $('nav-bpharma').style.display = 'none';
        $('nav-dpharma').style.display = 'none';
      }
      else if(id == 'nav-bca'){
        $('nav-mba').style.display = 'none';
        $('nav-mca').style.display = 'none';
        $('nav-bba').style.display = 'none';
        $('nav-bcom').style.display = 'none';
        $('nav-bed').style.display = 'none';
        $('nav-llb').style.display = 'none';
        $('nav-ballb').style.display = 'none';
        $('nav-bpharma').style.display = 'none';
        $('nav-dpharma').style.display = 'none';
      }
      else if(id == 'nav-bba'){
        $('nav-mba').style.display = 'none';
        $('nav-bca').style.display = 'none';
        $('nav-mca').style.display = 'none';
        $('nav-bcom').style.display = 'none';
        $('nav-bed').style.display = 'none';
        $('nav-llb').style.display = 'none';
        $('nav-ballb').style.display = 'none';
        $('nav-bpharma').style.display = 'none';
        $('nav-dpharma').style.display = 'none';
      }
      else if(id == 'nav-bcom'){
        $('nav-mba').style.display = 'none';
        $('nav-bca').style.display = 'none';
        $('nav-bba').style.display = 'none';
        $('nav-mca').style.display = 'none';
        $('nav-bed').style.display = 'none';
        $('nav-llb').style.display = 'none';
        $('nav-ballb').style.display = 'none';
        $('nav-bpharma').style.display = 'none';
        $('nav-dpharma').style.display = 'none';
      }
      else if(id == 'nav-bed'){
        $('nav-mba').style.display = 'none';
        $('nav-bca').style.display = 'none';
        $('nav-bba').style.display = 'none';
        $('nav-bcom').style.display = 'none';
        $('nav-mca').style.display = 'none';
        $('nav-llb').style.display = 'none';
        $('nav-ballb').style.display = 'none';
        $('nav-bpharma').style.display = 'none';
        $('nav-dpharma').style.display = 'none';
      }
      else if(id == 'nav-llb'){
        $('nav-mba').style.display = 'none';
        $('nav-bca').style.display = 'none';
        $('nav-bba').style.display = 'none';
        $('nav-bcom').style.display = 'none';
        $('nav-bed').style.display = 'none';
        $('nav-mca').style.display = 'none';
        $('nav-ballb').style.display = 'none';
        $('nav-bpharma').style.display = 'none';
        $('nav-dpharma').style.display = 'none';
      }
      else if(id == 'nav-ballb'){
        $('nav-mba').style.display = 'none';
        $('nav-bca').style.display = 'none';
        $('nav-bba').style.display = 'none';
        $('nav-bcom').style.display = 'none';
        $('nav-bed').style.display = 'none';
        $('nav-llb').style.display = 'none';
        $('nav-mca').style.display = 'none';
        $('nav-bpharma').style.display = 'none';
        $('nav-dpharma').style.display = 'none';
      }
      else if(id == 'nav-bpharma'){
        $('nav-mba').style.display = 'none';
        $('nav-bca').style.display = 'none';
        $('nav-bba').style.display = 'none';
        $('nav-bcom').style.display = 'none';
        $('nav-bed').style.display = 'none';
        $('nav-llb').style.display = 'none';
        $('nav-ballb').style.display = 'none';
        $('nav-mca').style.display = 'none';
        $('nav-dpharma').style.display = 'none';
      }
      else if(id == 'nav-dpharma'){
        $('nav-mba').style.display = 'none';
        $('nav-bca').style.display = 'none';
        $('nav-bba').style.display = 'none';
        $('nav-bcom').style.display = 'none';
        $('nav-bed').style.display = 'none';
        $('nav-llb').style.display = 'none';
        $('nav-ballb').style.display = 'none';
        $('nav-bpharma').style.display = 'none';
        $('nav-mca').style.display = 'none';
      }
      else if(id == 'mca-1'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'mca-2'){
        $('mca-1').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'mba-1'){
        $('mca-2').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'mba-2'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bca-1'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bca-2'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bca-3'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bba-1'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bba-2'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bba-1'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bcom-1'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bcom-2'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bcom-3'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'llb-1'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'llb-2'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'llb-3'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'llb-4'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'ballb-1'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'ballb-2'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'ballb-3'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'ballb-4'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'ballb-5'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bed-1'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bed-2'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'dpharma-1'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'dpharma-2'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bpharma-1'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bpharma-2'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bpharma-3'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('mca-1').style.display = 'none';
        $('bpharma-4').style.display = 'none';
        
      }
      
      else if(id == 'bpharma-4'){
        $('mca-2').style.display = 'none';
        $('mba-1').style.display = 'none';
        $('mba-2').style.display = 'none';
        $('bca-1').style.display = 'none';
        $('bca-2').style.display = 'none';
        $('bca-3').style.display = 'none';
        $('bba-1').style.display = 'none';
        $('bba-2').style.display = 'none';
        $('bba-3').style.display = 'none';
        $('bcom-1').style.display = 'none';
        $('bcom-2').style.display = 'none';
        $('bcom-3').style.display = 'none';
        $('llb-1').style.display = 'none';
        $('llb-2').style.display = 'none';
        $('llb-3').style.display = 'none';
        $('llb-4').style.display = 'none';
        $('ballb-1').style.display = 'none';
        $('ballb-2').style.display = 'none';
        $('ballb-3').style.display = 'none';
        $('ballb-4').style.display = 'none';
        $('ballb-5').style.display = 'none';
        $('bed-1').style.display = 'none';
        $('bed-2').style.display = 'none';
        $('dpharma-1').style.display = 'none';
        $('dpharma-2').style.display = 'none';
        $('bpharma-1').style.display = 'none';
        $('bpharma-2').style.display = 'none';
        $('bpharma-3').style.display = 'none';
        $('mca-1').style.display = 'none';
        
      }
      

      else{
        $('mca').style.display = 'none';
        $('bca').style.display = 'none';
        $('bba').style.display = 'none';
        $('ballb').style.display = 'none';
        $('llb').style.display = 'none';
        $('bcom').style.display = 'none';
        $('bed').style.display = 'none';
        $('mba').style.display = 'none';
        $('bpharma').style.display = 'none';
      }
      
      
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }

var pay=function(x){
    console.log(x)
}

//   $(document).ready(function(e) {

//     setInterval(function() {
//         $.ajax({
//             type: 'GET',
//             url: "{% url 'admin_login' %}",
//             success: function(response) {
//                 console.log(response);
//                 $("#display").empty();
//                 for (var key in response.data) {
//                     var temp = "<div class='table-div'><div><h1>" + response.data[key].book_name + "</div></h1><div><h1>" + response.data[key].author + "</div></h1><div><h1>"+ response.data[key].quantity+"</div></h1></div>";
//                     $("#display").append(temp);
//                 }
//             },
//             error: function(response) {
//                 alert('An error occured')
//             }
//         }); 
//     }, 1000);
// })
