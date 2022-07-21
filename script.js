var mediaQuery = window.matchMedia("(max-width: 375px)");
media(mediaQuery);

function media(mediaQuery) {
    if(mediaQuery.matches) {

        document.querySelector(".bar").addEventListener("click" , function() {
            document.querySelector(".navigation").style.visibility = "visible";
            document.querySelector(".close").style.visibility = "visible";
        })

        document.querySelector(".close").addEventListener("click" , function() {
            document.querySelector(".navigation").style.visibility = "hidden";
            document.querySelector(".close").style.visibility = "hidden";
        })
    }
}