function openOrClosenav() {
    var w = document.getElementById("subLevelNav");
    var x = document.getElementById("main-header");
    var y = document.getElementById("topLevelNav");
    var z = document.getElementById("mainNav");

    if (w.className === "sub-level") { /*open Menue - add the responsive class*/
        w.className += " openNav";
    } else {
        w.className = "sub-level"; /*close menue: remove the responsive class*/
    }

    if (x.className === "main-header") { /*open Menue - add the responsive class*/
        x.className += " openNav";
    } else {
        x.className = "main-header"; /*close menue: remove the responsive class*/
    }

    if (y.className === "top-level") { /*open Menue - add the responsive class*/
        y.className += " openNav";
    } else {
        y.className = "top-level"; /*close menue: remove the responsive class*/
    }

    if (z.className === "main-nav") { /*open Menue - add the responsive class*/
        z.className += " openNav";
    } else {
        z.className = "main-nav"; /*close menue: remove the responsive class*/
    }
}
