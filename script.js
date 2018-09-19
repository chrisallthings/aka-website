function openOrClosenav() {
    var v = document.getElementById("menueSwitch");
    var w = document.getElementById("subLevelNav");
    var x = document.getElementById("main-header");
    var y = document.getElementById("topLevelNav");
    var z = document.getElementById("mainNav");

    if (v.className === "closed") { /*open Menue - add the responsive class*/
        v.className = "opened";
        v.src="images/closeX.svg";
    } else {
        v.className = "closed";
        v.src="images/burger.svg"; /*close menue: remove the responsive class*/
    }

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
