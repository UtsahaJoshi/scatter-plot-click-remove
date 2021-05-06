var points = [
    {x: 40, y: 40},
    {x: 60, y: 20},
    {x: 60, y: 40},
    {x: 80, y: 20},
    {x: 100, y: 30},
    {x: 50, y: 50},
    {x: 60, y: 100},
    {x: 20, y: 200},
    {x: 400, y: 200},
    {x: 160, y: 120},
    {x: 60, y: 220},
    {x: 360, y: 120},
    {x: 10, y: 20},
];
var scatter_plot = document.getElementById("scatter-plot");

scatter_plot.addEventListener("click", removePoint);

scatterPlot()
function scatterPlot(){
    scatter_plot.innerHTML = '';
    points.forEach(function(value, index){
        scatter_plot.innerHTML += '<div class="dot" id="dot' + index + '"></div>';
        dot = document.getElementById("dot"+ index);
        dot.style.left = value.x+'px';
        dot.style.top = value.y+'px';
    })
}

function removePoint(event) {
    var deleteID = parseInt(event.target.id.replace('dot', ''));
    points.forEach(function(value, index){
        if (deleteID == index){
            points.splice(deleteID, 1);
            console.log(points)
        }
    })
    scatterPlot();
}