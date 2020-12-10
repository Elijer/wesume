window.addEventListener('load', (event) => {

    const print = document.getElementById("printme");
    print.addEventListener("click", function(){
        window.print();
    })

    var contact = [
        "eliahclimbs@gmail.com",
        "+1 (571) 302 4423",
        "https://elijahkennedy.com",
        "https://github.com/Elijer"
    ];

    var mobileIcons = document.getElementById("mobile-contact").children;
    console.log(mobileIcons);
    
    var disp = document.getElementById("name");
    var current;
    for (var i = 0; i < mobileIcons.length; i++){
        let index = i;
        current = mobileIcons[i];
        current.addEventListener("click", function(){

            disp.innerHTML = contact[index];
            disp.style.fontSize = "20px";
            disp.style.color = "white";

        })
        
    }

})



/* window.addEventListener('load', (event) => {

    console.log('page is fully loaded');
    var def = 100;
    var blue = '#4aa1e0'

    document.onmousemove = function(e){
        console.log("hey")

        var w = window.innerWidth;
        var h = window.innerHeight;
        var x = e.x;
        var y = e.y;

        var xR = x/w;
        var yR = y/h;

        var newPosition = `${def * xR}px ${def * yR}px`;

        var els = document.getElementsByClassName("highlight");
        var els2 = document.getElementsByClassName("highlight2");
        var name = document.getElementById("name");
        name.style.textShadow = newPosition + ' #e5deb5';

        for (var i = 0; i < els.length; i++){
            els[i].style.textShadow = newPosition + ' #58b3f4';
        }
        
        for (var i = 0; i < els2.length; i++){
            els2[i].style.textShadow = newPosition + ' #ec6b6b';
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

  }; */