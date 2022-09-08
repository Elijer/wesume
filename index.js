window.addEventListener('load', (event) => {

    document.getElementById("name").addEventListener("click", (e) => {
        window.location.replace("https://elijahkennedy.com");
    })

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

/*     for (var i = 0; i < mobileIcons.length; i++){
        let index = i;
        current = mobileIcons[i];
        current.addEventListener("click", function(){

            disp.innerHTML = contact[index];
            disp.style.fontSize = "20px";
            disp.style.color = "white";

        })
        
    } */

    filterBar();

    document.getElementById("dev-click").click();

})

function filterBar(){
    var filters = document.querySelectorAll(".filter-option");

    var selected;

    filters.forEach((e) => {
        e.addEventListener("click", function(){

            e.style.background = "#d0c3dc";
            e.style.color = "#b4acbc";

            var jobs = document.querySelectorAll(".job");

            if (selected === e.innerHTML){
                jobs.forEach((e) => {
                    e.style.display = "block";
                })

                selected = "";

            } else {

                filters.forEach((e) => {
                    e.style.background = "#d0c3dc";
                    e.style.color = "#b4acbc";
                })

                e.style.background = "#ec6b6b"
                e.style.color = "white"

                jobs.forEach((e) => {
                    e.style.display = "none";
                })

                var showThese = document.querySelectorAll("." + e.innerHTML);
    
                showThese.forEach((e) => {
                    e.style.display = "block";
                })

                selected = e.innerHTML;

            }
        })
    })
}