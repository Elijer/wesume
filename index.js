console.log('behavior.js');

window.addEventListener('load', (event) => {

    console.log('page is fully loaded');
    var def = 10;
    var blue = '#4aa1e0'

    document.onmousemove = function(e){
        console.log("hey")

        var w = window.innerWidth;
        var h = window.innerHeight;
        var x = e.x;
        var y = e.y;

        var xR = x/w;
        var yR = y/h;

        var els = document.getElementsByClassName("highlight");
        var els2 = document.getElementsByClassName("highlight2");
        var name = document.getElementById("name");
        name.style.textShadow = `${def * xR}px ${def * yR}px #e5deb5`;

        for (var i = 0; i < els.length; i++){
            els[i].style.textShadow = `${def * xR}px ${def * yR}px #4aa1e0`;
        }
        
        for (var i = 0; i < els2.length; i++){
            els2[i].style.textShadow = `${def * xR}px ${def * yR}px #cd4f4f`;
        }

    }
  });

  window.onbeforeprint = function(event) {

    var shadowColor = '#928a9a';
    var shad = `2px 2px ${shadowColor}`;

    var els = document.getElementsByClassName("highlight");
    var els2 = document.getElementsByClassName("highlight2");
    var name = document.getElementById("name");

    name.style.textShadow = shad;

    for (var i = 0; i < els.length; i++){
        els[i].style.textShadow = shad;
    }
    
    for (var i = 0; i < els2.length; i++){
        els2[i].style.textShadow = shad;
    }

  };