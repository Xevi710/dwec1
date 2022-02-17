let cont = document.getElementById("cont").value;
let otcont = document.getElementById("otcont").value;
let email = document.getElementById("email").value;

window.onload = function() {
    var myCont = document.getElementById('cont');
    myCont.onpaste = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }
    
    myCont.oncopy = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }
  }

  window.onload = function() {
    var myCont = document.getElementById('otcont');
    myOtCont.onpaste = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }
    
    myOtCont.oncopy = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }
  }
