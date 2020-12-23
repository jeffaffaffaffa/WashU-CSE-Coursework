/**
 * Constructor for the Vote Percentage Chart
 */
function VotePercentageChart(){

    var self = this;
    self.init();
};

/**
 * Initializes the svg elements required for this chart
 */
VotePercentageChart.prototype.init = function(){
    var self = this;
    self.margin = {top: 30, right: 20, bottom: 30, left: 50};
    var divvotesPercentage = d3.select("#votes-percentage").classed("content", true);

    //Gets access to the div element created for this chart from HTML
    self.svgBounds = divvotesPercentage.node().getBoundingClientRect();
    self.svgWidth = self.svgBounds.width - self.margin.left - self.margin.right;
    self.svgHeight = 200;

    //creates svg element within the div
    self.svg = divvotesPercentage.append("svg")
        .attr("width",self.svgWidth)
        .attr("height",self.svgHeight)
};

/**
 * Returns the class that needs to be assigned to an element.
 *
 * @param party an ID for the party that is being referred to.
 */
VotePercentageChart.prototype.chooseClass = function (party) {
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
 * Renders the HTML content for tool tip
 *
 * @param tooltip_data information that needs to be populated in the tool tip
 * @return text HTML content for toop tip
 */
VotePercentageChart.prototype.tooltip_render = function (tooltip_data) {
    var self = this;
    var text = "<ul>";
    tooltip_data.result.forEach(function(row){
        text += "<li class = " + self.chooseClass(row.party)+ ">" + row.nominee+":\t\t"+row.votecount+"("+row.percentage+"%)" + "</li>"
    });

    return text;
}

/**
 * Creates the stacked bar chart, text content and tool tips for Vote Percentage chart
 *
 * @param electionResult election data for the year selected
 */
VotePercentageChart.prototype.update = function(electionResult){
    var self = this;

    //for reference:https://github.com/Caged/d3-tip
    //Use this tool tip element to handle any hover over the chart
    // tip = d3.tip().attr('class', 'd3-tip')
    //     .direction('s')
    //     .offset(function() {
    //         return [0,0];
    //     })
    //     .html(function(d) {
    //         /* populate data in the following format
    //          * tooltip_data = {
    //          * "result":[
    //          * {"nominee": D_Nominee_prop,"votecount": D_Votes_Total,"percentage": D_PopularPercentage,"party":"D"} ,
    //          * {"nominee": R_Nominee_prop,"votecount": R_Votes_Total,"percentage": R_PopularPercentage,"party":"R"} ,
    //          * {"nominee": I_Nominee_prop,"votecount": I_Votes_Total,"percentage": I_PopularPercentage,"party":"I"}
    //          * ]
    //          * }
    //          * pass this as an argument to the tooltip_render function then,
    //          * return the HTML content returned from that method.
    //          * */
    //         return ;
    //     });


    // ******* TODO: PART III *******

    //Create the stacked bar chart.
    //Use the global color scale to color code the rectangles.
    //HINT: Use .votesPercentage class to style your bars.

    //Display the total percentage of votes won by each party
    //on top of the corresponding groups of bars.
    //HINT: Use the .votesPercentageText class to style your text elements;  Use this in combination with
    // chooseClass to get a color based on the party wherever necessary

    //Display a bar with minimal width in the center of the bar chart to indicate the 50% mark
    //HINT: Use .middlePoint class to style this bar.

    //Just above this, display the text mentioning details about this mark on top of this bar
    //HINT: Use .votesPercentageNote class to style this text element

    //Call the tool tip on hover over the bars to display stateName, count of electoral votes.
    //then, vote percentage and number of votes won by each party.

    //HINT: Use the chooseClass method to style your elements based on party wherever necessary.

    // console.log(electionResult);

    let data = electionResult;

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
            demStates.push(data[i]);
        } else if (rp > dp && rp > ip) {
            repStates.push(data[i]);
        } else if (ip > dp && ip > rp) {
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

    // console.log(indPercent);
    // console.log(demPercent);
    // console.log(repPercent);

    let percentageData = [];

    if (indPercent !== 0 && indNominee !== "none") {
        percentageData.push({
            type: "I",
            percent: indPercent,
            x_pos: 0,
            nominee: indNominee
        });
        percentageData.push({
            type: "D",
            percent: demPercent,
            x_pos: 0,
            nominee: demNominee
        }); 
        percentageData.push({
            type: "R",
            percent: repPercent,
            x_pos: 0,
            nominee: repNominee
        });
    } else {
        percentageData.push({
            type: "D",
            percent: demPercent,
            x_pos: 0,
            nominee: demNominee
        }); 
        percentageData.push({
            type: "R",
            percent: repPercent,
            x_pos: 0,
            nominee: repNominee
        });
    }

    let barScale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, self.svgWidth]);

    let x_position = 0;
    for (let i = 0; i<percentageData.length; i++) {
        let percentage = percentageData[i].percent;
        let x = barScale(percentage);
        percentageData[i].x_pos = x_position;
        x_position = x_position + x;
    }

    // console.log(percentageData);

    //tooltip stuff
    tip = d3.tip().attr('class', 'd3-tip')
        .direction('s')
        .offset(function() {
            return [0,0];
        })
        .html(function(event, d) {
            let tooltip_data = {
                "result":[
                    {"nominee": demNominee,"votecount": demVotes,"percentage": demPercent,"party":"D"} ,
                    {"nominee": repNominee,"votecount": repVotes,"percentage": repPercent,"party":"R"} ,
                    {"nominee": indNominee,"votecount": indVotes,"percentage": indPercent,"party":"I"}
                ]};
            return self.tooltip_render(tooltip_data);
        });

    let svg = self.svg;

    svg.call(tip);

    let bars = svg.selectAll(".votesPercentage")
        .data(percentageData)
        .attr("height", 30)
        .attr("width", function(d) {
            return barScale(d.percent);
        })
        .attr("x", function(d) {
            return d.x_pos;
        })
        .attr("y", 30)
        .attr("class", "votesPercentage")
        .style("stroke", "white")
        .style("stroke-width", 1)
        .style("fill", function(d) {
            if (d.type === "I") {
                return "#45AD6A";
            } else if (d.type === "D") {
                return "#3182bd";
            } else if (d.type === "R") {
                return "#de2d26";
            }
        })
        .on("mouseover", tip.show)
        .on("mouseout", tip.hide);

    bars.enter()
        .append("rect")
        .attr("height", 30)
        .attr("width", function(d) {
            return barScale(d.percent);
        })
        .attr("x", function(d) {
            return d.x_pos;
        })
        .attr("y", 30)
        .attr("class", "votesPercentage")
        .style("stroke", "white")
        .style("stroke-width", 1)
        .style("fill", function(d) {
            if (d.type === "I") {
                return "#45AD6A";
            } else if (d.type === "D") {
                return "#3182bd";
            } else if (d.type === "R") {
                return "#de2d26";
            }
        })
        .on("mouseover", tip.show)
        .on("mouseout", tip.hide);

    // changing location of exit and remove makes no noticeable change
    bars.exit().remove();

    //middle bar stuff
    svg.select(".middleBar").remove();

    let middleBar = svg.append("rect")
        .attr("class", "middleBar")
        .attr("y", 26)
        .attr("x", self.svgWidth/2)
        .attr("width", 1)
        .attr("height", 40)
        .style("fill", "black");

    // % labels
    svg.select(".votesPercentageNote").remove();
    svg.selectAll(".votesPercentageText").remove();

    let middleLabel = svg.append("text")
        .attr("class", "votesPercentageNote")
        .attr("y", 20)
        .attr("x", self.svgWidth/2)
        .attr("text-anchor", "middle")
        .text("Popular Vote (50%)");
    
    let indCounter = 0;
    if (indPercent !== 0) {
        let IPer_label = svg.append("text")
            .attr("class", "votesPercentageText independent")
            .attr("y", 85)
            .attr("x", 0)
            .text(indPercent + "%");

        let INom_label = svg.append("text")
            .attr("class", "votesPercentageText independent")
            .attr("y", 85)
            .attr("x", 70)
            .text(indNominee);

        indCounter = 1;
    }

    let DPer_label = svg.append("text")
        .attr("class", "votesPercentageText democrat")
        .attr("y", 25)
        .attr("x", percentageData[indCounter].x_pos)
        .text(demPercent + "%");

    let DNom_label = svg.append("text")
        .attr("class", "votesPercentageText democrat")
        .attr("y", 25)
        .attr("x", percentageData[indCounter].x_pos + 70)
        .text(demNominee);

    let RPer_label = svg.append("text")
        .attr("class", "votesPercentageText republican")
        .attr("y", 25)
        .attr("x", self.svgWidth)
        .text(repPercent + "%");

    let RNom_label = svg.append("text")
        .attr("class", "votesPercentageText republican")
        .attr("y", 25)
        .attr("x", self.svgWidth - 70)
        .text(repNominee);
};  
