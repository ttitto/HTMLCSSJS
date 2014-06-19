document.addEventListener('DOMContentLoaded', domloaded, false);
function domloaded() {
    var c = document.getElementById("myCnvs");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#F1DA4E";
    ctx.fillRect(50, 80, 134, 134);

    ctx.fillStyle = "#000000";
    ctx.font = "30px tahoma";
    ctx.fillText("I love JavaScript", 10, 50);

    ctx.fillStyle = "#323431";
    ctx.font = "75px Geometr212 BkCn BT Heavy";
    ctx.fontWeight = "bold";
    ctx.fillText("JS", 90, 200);
}