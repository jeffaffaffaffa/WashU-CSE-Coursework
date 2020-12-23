//using npm sentiment
let Sentiment = window.Sentiment;
let sentiment = new Sentiment();

let storyNames = [
    "the_three_heads_of_the_well.txt",
    "master_of_all_masters.txt",
    "the_well_of_worlds_end.txt",
    "fairy_ointment.txt",
    "the_ass_the_table_and_the_stick.txt",
    "the_cauld_lad_of_hilton.txt",
    "kate_crackernuts.txt",
    "the_magpies_nest.txt",
    "the_fish_and_the_ring.txt",
    "the_cat_and_the_mouse.txt",
    "the_laidly_worm_of_spindleston_heugh.txt",
    "the_strange_visitor.txt",
    "whittington_and_his_cat.txt",
    "mr_miacca.txt",
    "earl_mars_daughter.txt",
    "johnny_cake.txt",
    "lazy_jack.txt",
    "mr_fox.txt",
    "the_history_of_tom_thumb.txt",
    "the_golden_arm.txt",
    "the_red_ettin.txt",
    "molly_whuppie.txt",
    "childe_rowland.txt",
    "henny_penny.txt",
    "jack_the_giant_killer.txt",
    "the_story_of_the_three_bears.txt",
    "jack_and_his_golden_snuffbox.txt",
    "titty_mouse_and_tatty_mouse.txt",
    "the_master_and_his_pupil.txt",
    "the_story_of_the_three_little_pigs.txt",
    "jack_and_the_beanstalk.txt",
    "teeny_tiny.txt",
    "cap_o_rushes.txt",
    "mouse_and_mouser.txt",
    "binnorie.txt",
    "jack_hannaford.txt",
    "nix_nought_nothing.txt",
    "mr_vinegar.txt",
    "how_jack_went_to_seek_his_fortune.txt",
    "the_old_woman_and_her_pig.txt",
    "the_rose_tree.txt",
    "the_three_sillies.txt",
    "tom_tit_tot.txt"
];

let margin = { top: 20, right: 20, bottom: 40, left: 20 };

let scatterSvgWidth = 500 - margin.left - margin.right,
    scatterSvgHeight = 500 - margin.top - margin.bottom;

let scatterSvg = d3.select("#scatterplot").append("svg")
    .attr("width", scatterSvgWidth)
    .attr("height", scatterSvgHeight);

Promise.all([
    d3.text("data/stories/the_three_heads_of_the_well.txt"),
    d3.text("data/stories/master_of_all_masters.txt"),
    d3.text("data/stories/the_well_of_worlds_end.txt"),
    d3.text("data/stories/fairy_ointment.txt"),
    d3.text("data/stories/the_ass_the_table_and_the_stick.txt"),
    d3.text("data/stories/the_cauld_lad_of_hilton.txt"),
    d3.text("data/stories/kate_crackernuts.txt"),
    d3.text("data/stories/the_magpies_nest.txt"),
    d3.text("data/stories/the_fish_and_the_ring.txt"),
    d3.text("data/stories/the_cat_and_the_mouse.txt"),
    d3.text("data/stories/the_laidly_worm_of_spindleston_heugh.txt"),
    d3.text("data/stories/the_strange_visitor.txt"),
    d3.text("data/stories/whittington_and_his_cat.txt"),
    d3.text("data/stories/mr_miacca.txt"),
    d3.text("data/stories/earl_mars_daughter.txt"),
    d3.text("data/stories/johnny_cake.txt"),
    d3.text("data/stories/lazy_jack.txt"),
    d3.text("data/stories/mr_fox.txt"),
    d3.text("data/stories/the_history_of_tom_thumb.txt"),
    d3.text("data/stories/the_golden_arm.txt"),
    d3.text("data/stories/the_red_ettin.txt"),
    d3.text("data/stories/molly_whuppie.txt"),
    d3.text("data/stories/childe_rowland.txt"),
    d3.text("data/stories/henny_penny.txt"),
    d3.text("data/stories/jack_the_giant_killer.txt"),
    d3.text("data/stories/the_story_of_the_three_bears.txt"),
    d3.text("data/stories/jack_and_his_golden_snuffbox.txt"),
    d3.text("data/stories/titty_mouse_and_tatty_mouse.txt"),
    d3.text("data/stories/the_master_and_his_pupil.txt"),
    d3.text("data/stories/the_story_of_the_three_little_pigs.txt"),
    d3.text("data/stories/jack_and_the_beanstalk.txt"),
    d3.text("data/stories/teeny_tiny.txt"),
    d3.text("data/stories/cap_o_rushes.txt"),
    d3.text("data/stories/mouse_and_mouser.txt"),
    d3.text("data/stories/binnorie.txt"),
    d3.text("data/stories/jack_hannaford.txt"),
    d3.text("data/stories/nix_nought_nothing.txt"),
    d3.text("data/stories/mr_vinegar.txt"),
    d3.text("data/stories/how_jack_went_to_seek_his_fortune.txt"),
    d3.text("data/stories/the_old_woman_and_her_pig.txt"),
    d3.text("data/stories/the_rose_tree.txt"),
    d3.text("data/stories/the_three_sillies.txt"),
    d3.text("data/stories/tom_tit_tot.txt")
    ])
    .then(function(files) {
        let storyData = [];

        for (let i = 0; i < files.length; i++) {
            let result = sentiment.analyze(files[i]);    
            //overall sentiment score: sum of all sentiment values
            let score = result.score;
            //comparative score of story
            let compScore = result.comparative;
            // number of words in story
            let wordCount = result.tokens.length;
            //word-score mappings
            let wordsAndScores = result.calculation;

            let allScores = [];
            for (let i = 0; i < wordsAndScores.length; i++) {
                let value = Object.values(wordsAndScores[i]);
                allScores.push(value);
            }

            let negScores = allScores.filter(score => score < 0);
            let posScores = allScores.filter(score => score > 0);
            
            let totalNeg = negScores.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
            let totalPos = posScores.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

            // console.log(totalNeg);
            // console.log(totalPos);

            storyData.push({
                name: storyNames[i],
                score: score,
                posScore: totalPos,
                negScore: totalNeg,
                compScore: compScore,
                wordCount: wordCount
            });
        }

        // console.log(storyData);

        let allScores = storyData.map(story => story.score);
        let allCompScores = storyData.map(story => story.compScore);

        // score vs. comparative score scatter plot section //

        let x = d3.scaleLinear()
            .domain([d3.min(allScores), d3.max(allScores)])
            .range([(margin.left + 30), (scatterSvgWidth - margin.right)]);

        let y = d3.scaleLinear()
            .domain([d3.min(allCompScores), d3.max(allCompScores)])
            .range([(scatterSvgHeight - margin.bottom), margin.top]);

        let xAxis = d3.axisBottom()
            .scale(x);

        let yAxis = d3.axisLeft()
            .scale(y)

        let scatterXLabel = scatterSvg.append("text")
            .attr("x", (scatterSvgWidth/2 - 20))
            .attr("y", (scatterSvgHeight - 5))
            .attr("class", "axis-title")
            .text("ANIFF Total Score");

        let scatterYLabel = scatterSvg.append("text")
            .attr("x", margin.left-10)
            .attr("y", (scatterSvgHeight/2 + 50))
            .attr("class", "axis-title")
            .attr("transform", "rotate(270," + (margin.left-5) + "," + (scatterSvgHeight/2 + 50) + ")")
            .text("Comparative Score");
     
        scatterSvg.append("g")
            .attr("transform", "translate(0," + (scatterSvgHeight - margin.bottom) + ")")
            .call(xAxis);

        scatterSvg.append("g")
            .attr("transform", "translate(" + (margin.left + 30) + ",0)")
            .call(yAxis);

        let tooltip = d3.select("#scatterplot")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        let mouseover = function(event, d) {
            console.log(d);
            d3.select(this).attr("r", 4);
            d3.select(this).style("fill", "blue");

            tooltip.html("Story: <b>" + d.name + "</b></br>" + "Sentiment Score: <b>" + d.score + "</b></br>" + "Comparative Score: <b>" + d.compScore + "</b>")
                .style("top", d3.select(this).attr("cy") + "px")
                .style("left", d3.select(this).attr("cx") + "px")
                .style("opacity", 1);
        }

        let mouseout = function(event, d) {
            d3.select(this).attr("r", 3);
            d3.select(this).style("fill", "red");

            tooltip.style("opacity", 0);
        }

        // using sklearn with python, determined following regression results
        let intercept = -0.0003592178022885431;
        let slope = 0.00097649;
        let r2 = 0.4980013871946449;

        let best_fit = scatterSvg.append("line")
            .attr("x1", x(d3.min(allScores)))
            .attr("y1", function() {
                let x = d3.min(allScores);
                let y_ = x*slope + intercept;
                return y(y_);
            })
            .attr("x2", x(d3.max(allScores)))
            .attr("y2", function() {
                let x = d3.max(allScores);
                let y_ = x*slope + intercept;
                return y(y_);
            })
            .style("stroke-width", 2)
            .style("stroke", "black");

        let point = scatterSvg.selectAll(".points")
            .data(storyData)
            .enter()
            .append("circle")
                .attr("cx", function(d) {
                    return x(d.score);
                })
                .attr("cy", function(d) {
                    return y(d.compScore);
                })
                .attr("r", 3)
                .style("fill", "red")
                .style("stroke", "black")
                .style("stroke-width", 1)
                .on("mouseover", mouseover)
                .on("mouseout", mouseout);

        document.getElementById("reg-results").innerHTML = "<var>Y</var> = &beta;<sub>1</sub> + &beta;<sub>2</sub><var>x</var></br>&beta;<sub>1</sub>: "
            + intercept.toFixed(6) + ", <var>Y</var> intercept.</br>&beta;<sub>2</sub>: " + slope.toFixed(6) + ", &Delta;<var>Y</var> per unit change in <var>x</var>.</br><var>R</var><sup>2</sup>: " 
            + r2.toFixed(3) + "</br><var>Y</var>: predicted comparative score based on ANIFF total sentiment score.</br><var>x</var>: ANIFF total sentiment score.";
    })
    .catch(err => console.error(err));

// add all stories to selection box
for (let i = 0; i < storyNames.length; i++) {
    let form = document.getElementById("ranking-type");
    let option = document.createElement("option");

    option.appendChild(document.createTextNode(storyNames[i]));
    option.value = storyNames[i];

    form.appendChild(option);
}

let barSvgWidth = 125 - margin.left - margin.right,
    barSvgHeight = 300 - margin.top - margin.bottom;

let numWordsSvg = d3.select("#numWordsChart").append("svg")
    .attr("width", barSvgWidth + margin.left + margin.right)
    .attr("height", barSvgHeight + margin.top + margin.bottom);

let scoreSvg = d3.select("#scores").append("svg")
    .attr("width", 300)
    .attr("height", 400);

function updateChart(selection) {

    d3.text('data/stories/' + selection).then(function(text) {
        // console.log(text);
        let result = sentiment.analyze(text);
        console.log(result);

        //overall sentiment score: sum of all sentiment values
        let score = result.score;
        //comparative score of story
        let compScore = parseFloat(result.comparative);
        //array of negative sentiment score words
        let negWords = result.negative;
        //array of positive sentiment score words
        let posWords = result.positive;
        //array of all words and their AFINN scores (only if the word is found in the AFINN list)
        let wordsAndScores = result.calculation;

        let allScores = [];
        for (let i = 0; i < wordsAndScores.length; i++) {
            let value = Object.values(wordsAndScores[i]);
            allScores.push(value);
        }

        let negScores = allScores.filter(score => score < 0);
        let posScores = allScores.filter(score => score > 0);
        
        let totalNeg = negScores.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
        let totalPos = posScores.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

        let numPos = posScores.length;
        let numNeg = negScores.length;

        let numWordsBarData = [numPos, numNeg];

        let numWordsBarDataWithIds = [
            {
                wordCount: numPos,
                id: 1
            }, {
                wordCount: numNeg,
                id: 2
            }
        ];

        // formatting data for stacked bar //
        let totalPoints = (-1*totalNeg) + totalPos;
        let negPercent = ((-1*totalNeg)/totalPoints)*100;
        let posPercent = (totalPos/totalPoints)*100;
        
        let stackedXScale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, 180]);

        let stackedBarData = [
            {
                percent: posPercent,
                id: 1
            }, {
                percent: negPercent,
                id: 2
            }
        ];

        let x_position = 2;
        for (let i = 0; i < stackedBarData.length; i++) {
            let percentage = stackedBarData[i].percent;
            let x = stackedXScale(percentage);
            stackedBarData[i].x_pos = x_position;
            x_position = x_position + x;
        }
        
        ///////

        let xScale = d3.scaleOrdinal()
            .domain(["Positive", "Negative"])
            .range([(margin.left + 20), barSvgWidth]);

        let yScale = d3.scaleLinear()
            .domain([0, d3.max(numWordsBarData)])
            .range([barSvgHeight, margin.bottom]);

        let xAxis = d3.axisBottom()
            .scale(xScale);

        let yAxis = d3.axisLeft()
            .scale(yScale)

        numWordsSvg.selectAll(".axis-title").remove();

        let barYLabel = numWordsSvg.append("text")
            .attr("x", margin.left-10)
            .attr("y", barSvgHeight/2 + 50)
            .attr("class", "axis-title")
            .attr("transform", "rotate(270," + (margin.left-10) + "," + (barSvgHeight/2 + 52) + ")")
            .text("Number of Words");

        numWordsSvg.selectAll(".axis").remove();
     
        numWordsSvg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + margin.left + ", " + (barSvgHeight + 5) + ")")
            .call(xAxis);

        numWordsSvg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + (margin.left + 15) + ",-1)")
            .call(yAxis);

        let numWordsBar = numWordsSvg.selectAll(".posNegBars")
            .data(numWordsBarDataWithIds)
            .attr("class", "posNegBars")
            .attr("width", 40)
            .attr("height", function(d) {
                return barSvgHeight - yScale(d.wordCount);
            })
            .attr("x", function(d, i) {
                return xScale(i);
            })
            .attr("y", function(d) {
                return yScale(d.wordCount);
            })
            .style("fill", function(d) {
                if (d.id === 1) {
                    return "blue";
                } else {
                    return "red";
                }
            })
            .style("stroke", "black")
            .style("stroke-width", 1)
            .on("mouseover", function(event, d) {
                d3.select(this).style("stroke-width", 3);

                if (d.id === 1) {
                    numWordsSvg.append("text")
                        .attr("class", "posNegLabel")
                        .attr("y", yScale(numWordsBarData[0]) - 7)
                        .attr("x", 50)
                        .text(numWordsBarData[0]);
                } else if (d.id === 2) {
                    numWordsSvg.append("text")
                        .attr("class", "posNegLabel")
                        .attr("y", yScale(numWordsBarData[1]) - 7)
                        .attr("x", 95)
                        .text(numWordsBarData[1]);
                }
            })
            .on("mouseout", function(event, d) {
                d3.select(this).style("stroke-width", 1);

                numWordsSvg.selectAll(".posNegLabel").remove();
            });

        numWordsBar.enter()
            .append("rect")
            .attr("class", "posNegBars")
            .attr("width", 40)
            .attr("height", function(d) {
                return barSvgHeight - yScale(d.wordCount);
            })
            .attr("x", function(d, i) {
                return xScale(i);
            })
            .attr("y", function(d) {
                return yScale(d.wordCount);
            })
            .style("fill", function(d) {
                if (d.id === 1) {
                    return "blue";
                } else {
                    return "red";
                }
            })
            .style("stroke", "black")
            .style("stroke-width", 1)
            .on("mouseover", function(event, d) {
                d3.select(this).style("stroke-width", 3);

                if (d.id === 1) {
                    numWordsSvg.append("text")
                        .attr("class", "posNegLabel")
                        .attr("y", yScale(numWordsBarData[0]) - 7)
                        .attr("x", 50)
                        .text(numWordsBarData[0]);
                } else if (d.id === 2) {
                    numWordsSvg.append("text")
                        .attr("class", "posNegLabel")
                        .attr("y", yScale(numWordsBarData[1]) - 7)
                        .attr("x", 95)
                        .text(numWordsBarData[1]);
                }
            })
            .on("mouseout", function(event, d) {
                d3.select(this).style("stroke-width", 1);

                numWordsSvg.selectAll(".posNegLabel").remove();
            });

        numWordsBar.exit().remove();

        // numWordsSvg.selectAll(".posNegLabel").remove();
        scoreSvg.selectAll(".scoreLabel").remove();

        // score svg stuff //

        let sentScoreLabel = scoreSvg.append("text")
            .attr("class", "scoreLabel")
            .attr("y", 40)
            .attr("x", 20)
            .text("Overall sentiment score: " + score);

        let totalPosScoreLabel = scoreSvg.append("text")
            .attr("class", "scoreLabel")
            .attr("y", 60)
            .attr("x", 40)
            .text("Total positive score: " + totalPos);

        let totalNegScoreLabel = scoreSvg.append("text")
            .attr("class", "scoreLabel")
            .attr("y", 80)
            .attr("x", 40)
            .text("Total negative score: " + totalNeg);
        
        let compScoreLabel = scoreSvg.append("text")
            .attr("class", "scoreLabel")
            .attr("y", 100)
            .attr("x", 20)
            .text("Comparative score: " + compScore.toFixed(5));

        // stacked bars //

        let stackedScoreBars = scoreSvg.selectAll(".stackedScores")
            .data(stackedBarData)
            .attr("height", 30)
            .attr("width", function(d) {
                return stackedXScale(d.percent);
            })
            .attr("x", function(d) {
                return d.x_pos + 20;
            })
            .attr("y", 160)
            .attr("class", "stackedScores")
            .style("fill", function(d, i) {
                if (i === 0) {
                    return "blue";
                } else if (i === 1) {
                    return "red";
                }
            })
            .style("stroke", "black")
            .style("stroke-width", 1)
            .on("mouseover", function(event, d) {
                d3.select(this).style("stroke-width", 3);

                if (d.id === 1) {
                    scoreSvg.append("text")
                        .attr("class", "stackedBarPercents")
                        .attr("y", 150)
                        .attr("x", 10)
                        .text(d.percent.toFixed(2) + "%");
                } else if (d.id === 2) {
                    scoreSvg.append("text")
                        .attr("class", "stackedBarPercents")
                        .attr("y", 150)
                        .attr("x", 180)
                        .text(d.percent.toFixed(2) + "%");
                }
            })
            .on("mouseout", function(event, d) {
                d3.select(this).style("stroke-width", 1);

                scoreSvg.selectAll(".stackedBarPercents").remove();
            });

        stackedScoreBars.enter()
            .append("rect")
            .attr("height", 30)
            .attr("width", function(d) {
                return stackedXScale(d.percent);
            })
            .attr("x", function(d) {
                return d.x_pos + 20;
            })
            .attr("y", 160)
            .attr("class", "stackedScores")
            .style("fill", function(d, i) {
                if (i === 0) {
                    return "blue";
                } else if (i === 1) {
                    return "red";
                }
            })
            .style("stroke", "black")
            .style("stroke-width", 1)
            .on("mouseover", function(event, d) {
                d3.select(this).style("stroke-width", 3);

                if (d.id === 1) {
                    scoreSvg.append("text")
                        .attr("class", "stackedBarPercents")
                        .attr("y", 150)
                        .attr("x", 10)
                        .text(d.percent.toFixed(2) + "%");
                } else if (d.id === 2) {
                    scoreSvg.append("text")
                        .attr("class", "stackedBarPercents")
                        .attr("y", 150)
                        .attr("x", 180)
                        .text(d.percent.toFixed(2) + "%");
                }
            })
            .on("mouseout", function(event, d) {
                d3.select(this).style("stroke-width", 1);

                scoreSvg.selectAll(".stackedBarPercents").remove();
            });

        stackedScoreBars.exit().remove();

        scoreSvg.select(".middleBar").remove();

        let middleBar = scoreSvg.append("rect")
            .attr("class", "middleBar")
            .attr("y", 150)
            .attr("x", 112)
            .attr("width", 2)
            .attr("height", 50)
            .style("fill", "black");

        scoreSvg.selectAll(".stackedBarLabels").remove();
        
        let middleLabel = scoreSvg.append("text")
            .attr("class", "stackedBarLabels")
            .attr("y", 215)
            .attr("x", 112)
            .attr("text-anchor", "middle")
            .text("50%");

        let title = scoreSvg.append("text")
            .attr("class", "stackedBarLabels")
            .attr("y", 130)
            .attr("x", 112)
            .attr("text-anchor", "middle")
            .text("Total positive and negative score %")

        let positiveLabel = scoreSvg.append("text")
            .attr("class", "stackedBarLabels")
            .attr("y", 210)
            .attr("x", 12)
            .text("Positive");

        let negativeLabel = scoreSvg.append("text")
            .attr("class", "stackedBarLabels")
            .attr("y", 210)
            .attr("x", 172)
            .text("Negative");

    })
    .catch(err => console.error(err));
}

d3.select(".form-control").on("change", changeStory);

function changeStory() {
    let selection = d3.select(".form-control").property("value");

    let formattedSelection = selection.replaceAll('_', ' ');
    formattedSelection = formattedSelection.replaceAll('.txt', '');

    document.getElementById("barchart-label").innerHTML = "<u>" + formattedSelection + "</u>";
    updateChart(selection);
}