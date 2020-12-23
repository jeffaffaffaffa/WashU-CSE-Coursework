/*globals alert, document, d3, console*/
// These keep JSHint quiet if you're using it (highly recommended!)

function staircase() {
    // ****** TODO: PART II ******
    console.log("staircase pressed");

    let bars = document.getElementById("first_bar_chart").children;
    let widths = [];

    for (let i = 0; i < bars.length; i++) {
        widths.push(bars[i].getAttribute("width"));
    }

    widths.sort(((a, b) => a - b));

    for (let i = 0; i < bars.length; ++i) {
        bars[i].setAttribute("width", widths[i]);
    }

    // let bars = document.getElementById("first_bar_chart").children;
    // // console.log(bars);

    // let rectangles = []
    // for (let i = 0; i < bars.length; i++) {
    //     let rect = bars[i].children[0];
    //     rectangles.push(rect);
    // }
    // let sortedRectangles = rectangles.sort(function(a, b) {
    //     return a.width.baseVal.value - b.width.baseVal.value;
    // });

    // // console.log(sortedRectangles);

    // for (let i = 0; i < sortedRectangles.length; i++) {
    //     let rect = bars[i].children[0];
    //     let width = parseInt(sortedRectangles[i].width.baseVal.value);
    //     rect.style.width = width;
    //     // console.log(width);
    // }
}

function update(data) {
    // D3 loads all CSV data as strings;
    // while Javascript is pretty smart
    // about interpreting strings as
    // numbers when you do things like
    // multiplication, it will still
    // treat them as strings where it makes
    // sense (e.g. adding strings will
    // concatenate them, not add the values
    // together, or comparing strings
    // will do string comparison, not
    // numeric comparison).

    // We need to explicitly convert values
    // to numbers so that comparisons work
    // when we call d3.max()
    data.forEach(function (d) {
        d.a = parseInt(d.a);
        d.b = parseFloat(d.b);
    });

    // Set up the scales
    var aScale = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) {
            return d.a;
        })])
        .range([0, 150]);
    var bScale = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) {
            return d.b;
        })])
        .range([0, 150]);
    var iScale = d3.scaleLinear()
        .domain([0, data.length])
        .range([0, 110]);

    // ****** TODO: PART III (you will also edit in PART V) ******

    // TODO: Select and update the 'a' bar chart bars
    // TODO: Select and update the 'b' bar chart bars
    let aBars = d3.select("#first_bar_chart")
                    .selectAll("rect")
                    .remove()
                    .exit();

    let aBarsD3 = aBars.data(data)
        .enter()
        .append("rect")
        .attr("height", 15)
        .attr("width", function(d, i) {
            return aScale(d.a);
        })
        .attr("y", function(d, i) {
            return 16 + (16 * i)
        })
        .style("fill", "black");

    // aBarsD3.transition()
    //     .duration(5000);

    aBarsD3.on('mouseover', function(d, i) {
            d3.select(this).style("cursor", "pointer"); 
            d3.select(this).style("fill", "red");
        })
        .on('mouseout', function(d, i) {
            d3.select(this).style("cursor", "default"); 
            d3.select(this).style("fill", "black");
        });

    let bBars = d3.select("#second_bar_chart")
                    .selectAll("rect")
                    .remove()
                    .exit();

    bBarsD3 = bBars.data(data)
        .enter()
        .append("rect")
        .attr("height", 15)
        .attr("width", function(d, i) {
            return bScale(d.b);
        })
        .attr("y", function(d, i) {
            return 16 + (16 * i)
        })
        .style("fill", "black");

    // bBarsD3.transition()
    //     .duration(2000);

    bBarsD3.on('mouseover', function(d, i) {
            d3.select(this).style("cursor", "pointer"); 
            d3.select(this).style("fill", "red");
        })
        .on('mouseout', function(d, i) {
            d3.select(this).style("cursor", "default"); 
            d3.select(this).style("fill", "black");
        });

    // TODO: Select and update the 'a' line chart path using this line generator
    var aLineGenerator = d3.line()
        .x(function (d, i) {
            return iScale(i);
        })
        .y(function (d) {
            return aScale(d.a);
        });

    let aLine = document.getElementById("first_line_chart");
    let aScaledLineData = aLineGenerator(data);
    aLine.children[0].setAttribute('d', aScaledLineData);
    aLine.setAttribute('transform', 'scale(1, -1)');

    // TODO: Select and update the 'b' line chart path (create your own generator)
    var bLineGenerator = d3.line()
        .x(function (d, i) {
            return iScale(i);
        })
        .y(function (d) {
            return aScale(d.b);
        });

    let bLine = document.getElementById("second_line_chart");
    let bScaledLineData = bLineGenerator(data);
    bLine.children[0].setAttribute('d', bScaledLineData);
    bLine.setAttribute('transform', 'scale(1, -1)');

    // TODO: Select and update the 'a' area chart path using this line generator
    var aAreaGenerator = d3.area()
        .x(function (d, i) {
            return iScale(i);
        })
        .y0(0)
        .y1(function (d) {
            return aScale(d.a);
        });

    let aArea = document.getElementById("first_area_chart");
    let aScaledAreaData = aAreaGenerator(data);
    aArea.children[0].setAttribute('d', aScaledAreaData);
    aArea.setAttribute('transform', 'scale(1, -1)');

    // TODO: Select and update the 'b' area chart path (create your own generator)
    var bAreaGenerator = d3.area()
        .x(function (d, i) {
            return iScale(i);
        })
        .y0(0)
        .y1(function (d) {
            return aScale(d.b);
        });

    let bArea = document.getElementById("second_area_chart");
    let bScaledAreaData = bAreaGenerator(data);
    bArea.children[0].setAttribute('d', bScaledAreaData);
    bArea.setAttribute('transform', 'scale(1, -1)');

    // TODO: Select and update the scatterplot points
    let xCoords = [];
    let yCoords = [];

    for (let i = 0; i < data.length; i++) {
        let x = data[i].a;
        let y = data[i].b;
        let coord = [x, y];
        // dataset.push(coord);
        xCoords.push(x);
        yCoords.push(y);
    }

    // console.log("Max X: " + d3.max(xCoords));
    // console.log("Max Y: " + d3.max(yCoords));
    let maxX = d3.max(xCoords);
    let maxY = d3.max(yCoords);

    let xScale = d3.scaleLinear()
        .domain([0, maxX])
        .range([0, 180]);
        
    let yScale = d3.scaleLinear()
        .domain([0, maxY])
        .range([0, 180]);

    let xRevert = d3.scaleLinear()
        .domain([0, 180])
        .range([0, maxX]);

    let yRevert = d3.scaleLinear()
        .domain([0, 180])
        .range([0, maxY]);

    let coordinates = d3.select("#scatterplot")
                            .selectAll("circle")
                            .remove()
                            .exit();

    let tooltip = d3.select("#scatter_vis")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip");

    coordinates.data(data)
        .enter()
        .append("circle")
        .attr("r", 3)
        .attr("cx", function(d, i) {
            // console.log(d.a);
            return xScale(d.a);
        })
        .attr("cy", function(d, i) {
            // console.log(d.b);
            return yScale(d.b);
        })
        .style("fill", "black")
        .on('mouseover', function(d, i) {
            d3.select(this).style("cursor", "pointer"); 
            d3.select(this).style("fill", "red");
            tooltip.transition()
                .duration(200)
                .style("opacity", 1);
            //map cx/cy value back to original
            tooltip.html("(" + xRevert(d3.select(this).attr("cx")) + ", " + yRevert(d3.select(this).attr("cy")).toFixed(2) + ")");
        })
        .on('mouseout', function(d, i) {
            d3.select(this).style("cursor", "default"); 
            d3.select(this).style("fill", "black");
            tooltip.transition()
                .duration(200)
                .style("opacity", 0);
        })
        .on('click', function(d, i) {
            console.log("(" + xRevert(d3.select(this).attr("cx")) + ", " + yRevert(d3.select(this).attr("cy")).toFixed(2) + ")");
        });

    // coordsD3.transition()
    //     .duration(3000);

    // ****** TODO: PART IV ******
}

function changeData() {

    console.log("change data");

    // // Load the file indicated by the select menu
    var dataFile = document.getElementById('dataset').value;
    if (document.getElementById('random').checked) {
        randomSubset();
    }
    else{
        d3.csv('data/' + dataFile + '.csv').then(update);
    }
}

function randomSubset() {
    // Load the file indicated by the select menu,
    // and then slice out a random chunk before
    // passing the data to update()
    console.log("random subset");
    var dataFile = document.getElementById('dataset').value;
    if (document.getElementById('random').checked) {
        d3.csv('data/' + dataFile + '.csv').then(function(data) {
            var subset = [];
            data.forEach(function (d) {
                if (Math.random() > 0.5) {
                    subset.push(d);
                }
            });
            update(subset);
        });
    }
    else{
        changeData();
    }
}