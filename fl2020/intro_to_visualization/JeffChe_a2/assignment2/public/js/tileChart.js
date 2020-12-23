/**
 * Constructor for the TileChart
 */
function TileChart(){

    var self = this;
    self.init();
};

/**
 * Initializes the svg elements required to lay the tiles
 * and to populate the legend.
 */
TileChart.prototype.init = function(){
    var self = this;

    //Gets access to the div element created for this chart and legend element from HTML
    var divTileChart = d3.select("#tiles").classed("content", true);
    var legend = d3.select("#legend").classed("content",true);
    self.margin = {top: 30, right: 20, bottom: 30, left: 50};

    var svgBounds = divTileChart.node().getBoundingClientRect();
    self.svgWidth = svgBounds.width - self.margin.left - self.margin.right;
    self.svgHeight = self.svgWidth/2;
    var legendHeight = 150;

    //creates svg elements within the div
    self.legendSvg = legend.append("svg")
        .attr("width",self.svgWidth)
        .attr("height",legendHeight)
        .attr("transform", "translate(" + self.margin.left + ",0)")

    self.svg = divTileChart.append("svg")
                        .attr("width",self.svgWidth)
                        .attr("height",self.svgHeight)
                        .attr("transform", "translate(" + self.margin.left + ",0)")
                        .style("bgcolor","green")

};

/**
 * Returns the class that needs to be assigned to an element.
 *
 * @param party an ID for the party that is being referred to.
 */
TileChart.prototype.chooseClass = function (party) {
    var self = this;
    if (party == "R"){
        return "republican";
    }
    else if (party== "D"){
        return "democrat";
    }
    else if (party == "I"){
        return "independent";
    }
}

/**
 * Renders the HTML content for tool tip.
 *
 * @param tooltip_data information that needs to be populated in the tool tip
 * @return text HTML content for tool tip
 */
TileChart.prototype.tooltip_render = function (tooltip_data) {
    var self = this;
    var text = "<h2 class ="  + self.chooseClass(tooltip_data.winner) + " >" + tooltip_data.state + "</h2>";
    text +=  "Electoral Votes: " + tooltip_data.electoralVotes;
    text += "<ul>"
    tooltip_data.result.forEach(function(row){
        text += "<li class = " + self.chooseClass(row.party)+ ">" + row.nominee+":\t\t"+row.votecount+"("+row.percentage+"%)" + "</li>"
    });
    text += "</ul>";
    return text;
}

/**
 * Creates tiles and tool tip for each state, legend for encoding the color scale information.
 *
 * @param electionResult election data for the year selected
 * @param colorScale global quantile scale based on the winning margin between republicans and democrats
 */
TileChart.prototype.update = function(electionResult, colorScale){
    var self = this;

    //Calculates the maximum number of columns to be laid out on the svg
    self.maxColumns = d3.max(electionResult,function(d){
                                return parseInt(d["Space"]);
                            });

    //Calculates the maximum number of rows to be laid out on the svg
    self.maxRows = d3.max(electionResult,function(d){
                                return parseInt(d["Row"]);
                        });

    //Creates a legend element and assigns a scale that needs to be visualized
    self.legendSvg.select(".legendQuantile").remove();
    
    let legendSvg = self.legendSvg.append("g")
        .attr("class", "legendQuantile")
        .attr("transform", "translate(110, 50)");

    let legendQuantile = d3.legendColor()
        .shapeWidth(self.svgWidth/15)
        .cells(10)
        .orient('horizontal')
        .scale(colorScale);

    legendSvg.call(legendQuantile);

    // ******* TODO: PART IV *******
    //Transform the legend element to appear in the center and make a call to this element for it to display.

    //Lay rectangles corresponding to each state according to the 'row' and 'column' information in the data.

    //Display the state abbreviation and number of electoral votes on each of these rectangles

    //Use global color scale to color code the tiles.

    //HINT: Use .tile class to style your tiles;
    // .tilestext to style the text corresponding to tiles

    //Call the tool tip on hover over the tiles to display stateName, count of electoral votes
    //then, vote percentage and number of votes won by each party.
    //HINT: Use the .republican, .democrat and .independent classes to style your elements.
    
    let svg = self.svg;

    let data = electionResult;

    // tile mappings for each state
    // [ row, column ]
    let coordinates = {
        AK: [0, 0],
        ME: [0, 11],
        VT: [1, 10],
        NH: [1, 11],
        WA: [2, 1],
        ID: [2, 2],
        MT: [2, 3],
        ND: [2, 4],
        MN: [2, 5],
        IL: [2, 6],
        WI: [2, 7],
        MI: [2, 8],
        NY: [2, 9],
        RI: [2, 10],
        MA: [2, 11],
        OR: [3, 1],
        NV: [3, 2],
        WY: [3, 3],
        SD: [3, 4],
        IA: [3, 5],
        IN: [3, 6],
        OH: [3, 7],
        PA: [3, 8],
        NJ: [3, 9],
        CT: [3, 10],
        CA: [4, 1],
        UT: [4, 2],
        CO: [4, 3],
        NE: [4, 4],
        MO: [4, 5],
        KY: [4, 6],
        WV: [4, 7],
        VA: [4, 8],
        MD: [4, 9],
        DC: [4, 10],
        AZ: [5, 2],
        NM: [5, 3],
        KS: [5, 4],
        AR: [5, 5],
        TN: [5, 6],
        NC: [5, 7],
        SC: [5, 8],
        DE: [5, 9],
        OK: [6, 4],
        LA: [6, 5],
        MS: [6, 6],
        AL: [6, 7],
        GA: [6, 8],
        HI: [7, 1],
        TX: [7, 4],
        FL: [7, 9]
    };

    for (let i = 0; i<data.length; i++) {
        let state = data[i].Abbreviation;
        let mapping = coordinates[state];
        data[i].row = mapping[0];
        data[i].column = mapping[1];
    }

    // the tile chart is an 8 by 12 matrix

    let demStates = [];
    let repStates = [];
    let indStates = [];

    for (let i = 0; i < data.length; i++) {
        // if no info, set to 0
        if (data[i].D_Percentage === '') {
            data[i].D_Percentage = 0;
        }
        if (data[i].R_Percentage === '') {
            data[i].R_Percentage = 0;
        }
        if (data[i].I_Percentage === '') {
            data[i].I_Percentage = 0;
        }

        let dp = +data[i].D_Percentage;
        let rp = +data[i].R_Percentage;
        let ip = +data[i].I_Percentage;

        if (dp > rp && dp > ip) {
            data[i].D_MarginOfVictory = dp - rp;
            data[i].State_Winner = data[i].D_Nominee;
            demStates.push(data[i]);
        } else if (rp > dp && rp > ip) {
            data[i].R_MarginOfVictory = rp - dp;
            data[i].State_Winner = data[i].R_Nominee;
            repStates.push(data[i]);
        } else if (ip > dp && ip > rp) {
            // console.log(ip + ">" + dp + " && " + ip + ">" + rp);
            let IMoV;
            if (dp > rp) {
                IMoV = ip - dp;
            } else {
                IMoV = ip - rp;
            }
            data[i].I_MarginOfVictory = IMoV;
            data[i].State_Winner = data[i].I_Nominee;
            indStates.push(data[i]);
        }
    }

    let indVotes = 0;
    let demVotes = 0;
    let repVotes = 0;

    for (let i = 0; i < indStates.length; i++) {
        indVotes = indVotes + parseFloat(indStates[i].I_Votes);
    }
    for (let i = 0; i < demStates.length; i++) {
        demVotes = demVotes + parseFloat(demStates[i].D_Votes);
    }
    for (let i = 0; i < repStates.length; i++) {
        repVotes = repVotes + parseFloat(repStates[i].R_Votes);
    }

    let totalVotes = indVotes + demVotes + repVotes;

    // console.log("# of ind votes: " + indVotes);
    // console.log("# of dem votes: " + demVotes);
    // console.log("# of rep votes: " + repVotes);
    // console.log("# total: " + totalVotes);

    let indPercent = Math.round(((indVotes/totalVotes)*100)*10)/10;
    let demPercent = Math.round(((demVotes/totalVotes)*100)*10)/10;
    let repPercent = Math.round(((repVotes/totalVotes)*100)*10)/10;

    // console.log(indStates);

    let indNominee = "none"; 
    if (indStates.length > 0) {
        indNominee = indStates[0].I_Nominee;
    }
    let demNominee = demStates[0].D_Nominee;
    let repNominee = repStates[0].R_Nominee;

    // sorted from largest margin of victory to smallest for dem (left to right)
    let sortedDem = demStates.sort((a, b) => (b.D_MarginOfVictory - a.D_MarginOfVictory));
    // right to left for rep
    let sortedRep = repStates.sort((a, b) => (a.R_MarginOfVictory - b.R_MarginOfVictory));
    let sortedInd = indStates.sort((a, b) => (b.I_MarginOfVictory - a.I_MarginOfVictory));

    let combinedSorted = sortedInd.concat(sortedDem, sortedRep);

    // console.log(combinedSorted);

    let tileXScale = d3.scaleLinear()
        .domain([0, 11])
        .range([0, (self.svgWidth - (self.svgWidth/12))]);

    let tileYScale = d3.scaleLinear()
        .domain([0, 7])
        .range([0, (self.svgHeight - (self.svgHeight/8))]);

    for (let i = 0; i<combinedSorted.length; i++) {
        let row = combinedSorted[i].row;
        let column = combinedSorted[i].column;
        let x = tileXScale(column);
        let y = tileYScale(row);
        combinedSorted[i].X_Position = x;
        combinedSorted[i].Y_Position = y;
    }

    console.log(combinedSorted);

    tip = d3.tip().attr('class', 'd3-tip')
        .direction('se')
        .offset(function() {
            return [0,0];
        })
        .html(function(event, d) {
            let tooltip_data = {
                "state": d.State,
                "winner": d.State_Winner,
                "electoralVotes" : d.Total_EV,
                "result":[
                    {"nominee": demNominee, "votecount": d.D_Votes, "percentage": d.D_Percentage, "party":"D"},
                    {"nominee": repNominee, "votecount": d.R_Votes, "percentage": d.R_Percentage, "party":"R"},
                    {"nominee": indNominee, "votecount": d.I_Votes, "percentage": d.I_Percentage, "party":"I"}
            ]};
            return self.tooltip_render(tooltip_data);
        });

    svg.call(tip);

    let tiles = svg.selectAll(".tile")
        .data(combinedSorted)
        .attr("x", function(d) {
            return d.X_Position;
        })
        .attr("y", function(d) {
            return d.Y_Position;
        })
        .attr("height", self.svgHeight/8)
        .attr("width", self.svgWidth/12)
        .attr("class", "tile")
        .style("stroke", "white")
        .style("stroke-width", 1)
        .style("fill", function(d) {
            if (!d.I_MarginOfVictory) {
                return colorScale(d.R_Percentage - d.D_Percentage);
            } else {
                return "#45AD6A";
            }
        })
        .on("mouseover", tip.show)
        .on("mouseout", tip.hide);
        
    tiles.enter()
        .append("rect")
        .attr("x", function(d) {
            return d.X_Position;
        })
        .attr("y", function(d) {
            return d.Y_Position;
        })
        .attr("height", self.svgHeight/8)
        .attr("width", self.svgWidth/12)
        .attr("class", "tile")
        .style("stroke", "white")
        .style("stroke-width", 1)
        .style("fill", function(d) {
            if (!d.I_MarginOfVictory) {
                return colorScale(d.R_Percentage - d.D_Percentage);
            } else {
                return "#45AD6A";
            }
        })
        .on("mouseover", tip.show)
        .on("mouseout", tip.hide);

    tiles.exit().remove();

    let abbr = svg.selectAll(".tilesTextabbr")
        .data(combinedSorted)
        .attr("class", "tilesTextabbr")
        .attr("x", function(d) {
            return d.X_Position + self.svgWidth/24;
        })
        .attr("y", function(d) {
            return d.Y_Position + self.svgHeight/16;
        })
        .text(function(d) {
            return d.Abbreviation;
        });

    abbr.enter()
        .append("text")
        .attr("class", "tilesTextabbr")
        .attr("x", function(d) {
            return d.X_Position + self.svgWidth/24;
        })
        .attr("y", function(d) {
            return d.Y_Position + self.svgHeight/16;
        })
        .text(function(d) {
            return d.Abbreviation;
        });
    
    abbr.exit().remove();

    let ev = svg.selectAll(".tilesTextev")
        .data(combinedSorted)
        .attr("class", "tilesTextev")
        .attr("x", function(d) {
            return d.X_Position + self.svgWidth/24;
        })
        .attr("y", function(d) {
            return d.Y_Position + self.svgHeight/16 + 20;
        })
        .text(function(d) {
            return d.Total_EV;
        });

    ev.enter()
        .append("text")
        .attr("class", "tilesTextev")
        .attr("x", function(d) {
            return d.X_Position + self.svgWidth/24;
        })
        .attr("y", function(d) {
            return d.Y_Position + self.svgHeight/16 + 20;
        })
        .text(function(d) {
            return d.Total_EV;
        });
    
    ev.exit().remove();
};