
window.onload = function () {
    var a = document.getElementById("svgObject");
    var svgDoc = a.contentDocument;

    var i = 0;
    var classes = ["Industrial", "Parks", "Center", "Port", "Hills", "Residential"];

    classes.forEach(myFunction);
    function myFunction(item, i) {
        var mapElement = svgDoc.getElementById(item);
        var idName = '';
        var textElement = document.getElementById(idName.concat("key-", item));

        mapElement.onmouseover = function () { show(this, textElement); }
        mapElement.onmouseout = function () { hide(this, textElement); }
        textElement.onmouseover = function () { show(mapElement, this); }
        textElement.onmouseout = function () { hide(mapElement, this); }

    }

    function show(mapElt, textElt) {
        textElt.style.fontWeight = "bold";
        textElt.style.textDecoration = "underline";
        mapElt.setAttribute("class", "hover");
    }

    function hide(mapElt, textElt) {
        textElt.style.fontWeight = "normal";
        textElt.style.textDecoration = "none";
        mapElt.classList.remove("hover");
    }
};