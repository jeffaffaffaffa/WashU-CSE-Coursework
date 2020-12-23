
/**
 * Constructor for the ElectoralVoteChart
 *
 * @param brushSelection an instance of the BrushSelection class
 */
function ElectoralVoteChart(){

    var self = this;
    self.init();
};

/**
 * Initializes the svg elements required for this chart
 */
ElectoralVoteChart.prototype.init = function(){
    var self = this;
    self.margin = {top: 30, right: 20, bottom: 30, left: 50};

    //Gets access to the div element created for this chart from HTML
    var divelectoralVotes = d3.select("#electoral-vote").classed("content", true);
    self.svgBounds = divelectoralVotes.node().getBoundingClientRect();
    self.svgWidth = self.svgBounds.width - self.margin.left - self.margin.right;
    self.svgHeight = 150;

    //creates svg element within the div
    self.svg = divelectoralVotes.append("svg")
        .attr("width",self.svgWidth)
        .attr("height",self.svgHeight)
};

/**
 * Returns the class that needs to be assigned to an element.
 *
 * @param party an ID for the party that is being referred to.
 */
ElectoralVoteChart.prototype.chooseClass = function (party) {
    var self = this;
    if (party == "R"){
        return "republican";
    }
    else if (party == "D"){
        return "democrat";
    }
    else if (party == "I"){
        return "independent";
    }
}

/**
 * Creates the stacked bar chart, text content and tool tips for electoral vote chart
 *
 * @param electionResult election data for the year selected
 * @param colorScale global quantile scale based on the winning margin between republicans and democrats
 */

ElectoralVoteChart.prototype.update = function(electionResult, colorScale){
    var self = this;

    // ******* TODO: PART II *******

    //Group the states based on the winning party for the state;
    //then sort them based on the margin of victory

    //Create the stacked bar chart.
    //Use the global color scale to color code the rectangles.
    //HINT: Use .electoralVotes class to style your bars.

    //Display total count of electoral votes won by the Democrat and Republican party
    //on top of the corresponding groups of bars.
    //HINT: Use the .electoralVoteText class to style your text elements;  Use this in combination with
    // chooseClass to get a color based on the party wherever necessary

    //Display a bar with minimal width in the center of the bar chart to indicate the 50% mark
    //HINT: Use .middlePoint class to style this bar.

    //Just above this, display the text mentioning the total number of electoral votes required
    // to win the elections throughout the country
    //HINT: Use .electoralVotesNote class to style this text element

    //HINT: Use the chooseClass method to style your elements based on party wherever necessary.

    let data = electionResult;
    // console.log(data);
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
            // console.log(dp + ">" + rp + " && " + dp + ">" + ip);
            data[i].D_MarginOfVictory = dp - rp;
            demStates.push(data[i]);
        } else if (rp > dp && rp > ip) {
            data[i].R_MarginOfVictory = rp - dp;
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
            indStates.push(data[i]);
        }
    }

    // sorted from largest margin of victory to smallest for dem (left to right)
    let sortedDem = demStates.sort((a, b) => (b.D_MarginOfVictory - a.D_MarginOfVictory));
    // right to left for rep
    let sortedRep = repStates.sort((a, b) => (a.R_MarginOfVictory - b.R_MarginOfVictory));
    let sortedInd = indStates.sort((a, b) => (b.I_MarginOfVictory - a.I_MarginOfVictory));

    // console.log(sortedDemEV);
    // console.log(sortedRepEV);
    // console.log(sortedIndEV);

    let combinedSorted = sortedInd.concat(sortedDem, sortedRep);
    // console.log(combinedSorted);

    let barScale = d3.scaleLinear()
        .domain([0, 538])
        .range([0, self.svgWidth]);

    let x_position = 0;
    for (let i = 0; i<combinedSorted.length; i++) {
        let ev = combinedSorted[i].Total_EV;
        let x = barScale(ev);
        combinedSorted[i].X_Position = x_position;
        x_position = x_position + x;
    }

    // console.log(combinedSorted);

    let svg = self.svg;

    // need to position everything first so it renders on initial click
    let bars = svg.selectAll("rect")
        .data(combinedSorted)
        .attr("height", 30)
        .attr("width", function(d) {
            return barScale(d.Total_EV);
        })
        .attr("y", 30)
        .attr("x", function(d) {
            return d.X_Position;
        })
        .attr("class", "electoralVotes")
        .style("stroke", "white")
        .style("stroke-width", 1)
        .style("fill", function(d) {
            if (!d.I_MarginOfVictory) {
                return colorScale(d.R_Percentage - d.D_Percentage);
            } else {
                return "#45AD6A";
            }
        });
        
    bars.enter()
        .append("rect")
        .attr("height", 30)
        .attr("width", function(d) {
            return barScale(d.Total_EV);
        })
        .attr("y", 30)
        .attr("x", function(d) {
            return d.X_Position;
        })
        .attr("class", "electoralVotes")
        .style("stroke", "white")
        .style("stroke-width", 1)
        .style("fill", function(d) {
            if (!d.I_MarginOfVictory) {
                return colorScale(d.R_Percentage - d.D_Percentage);
            } else {
                return "#45AD6A";
            }
        });

    bars.exit().remove();

    let totalDemEV = 0;
    let totalRepEV = 0;
    let totalIndEV = 0;
    let indCounter = 0;

    for (let i = 0; i<sortedDem.length; i++) {
        totalDemEV = totalDemEV + parseFloat(sortedDem[i].Total_EV);
    }
    for (let i = 0; i<sortedRep.length; i++) {
        totalRepEV = totalRepEV + parseFloat(sortedRep[i].Total_EV);
    }
    for (let i = 0; i<sortedInd.length; i++) {
        totalIndEV = totalIndEV + parseFloat(sortedInd[i].Total_EV);
        indCounter++;
    }

    // electoral votes labels (not data dependent elements, need to be cleared each time before drawing new)
    svg.selectAll(".electoralVoteText").remove();
    svg.select(".electoralVotesNote").remove();

    if (totalIndEV !== 0) {
        let I_label = svg.append("text")
        .attr("class", "electoralVoteText independent")
        .attr("y", 25)
        .attr("x", 0)
        .text(totalIndEV);
    }

    let D_label = svg.append("text")
        .attr("class", "electoralVoteText democrat")
        .attr("y", 25)
        .attr("x", combinedSorted[indCounter].X_Position)
        .text(totalDemEV);

    let R_label = svg.append("text")
        .attr("class", "electoralVoteText republican")
        .attr("y", 25)
        .attr("x", self.svgWidth)
        .text(totalRepEV);

    let middleLabel = svg.append("text")
        .attr("class", "electoralVotesNote")
        .attr("y", 20)
        .attr("x", self.svgWidth/2)
        .attr("text-anchor", "middle")
        .text("Electoral Vote (270 needed to win)");

    // 50% mark bar
    svg.select(".middleBar").remove();

    let middleBar = svg.append("rect")
        .attr("class", "middleBar")
        .attr("y", 26)
        .attr("x", self.svgWidth/2)
        .attr("width", 1)
        .attr("height", 40)
        .style("fill", "black");
    



    //******* TODO: PART V *******
    //Implement brush on the bar chart created above.
    //Implement a call back method to handle the brush end event.
    //Call the update method of brushSelection and pass the data corresponding to brush selection.
    //HINT: Use the .brush class to style the brush.
};
