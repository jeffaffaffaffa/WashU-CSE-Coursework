Process Book:

What do you want to achieve with the visualization?
    I want to explore how "positive" and "negative" certain stories are using sentiment analysis of ANIFF words in
    each story. I think that this would be really interesting to see, especially if a viewer has read some of the 
    stories and can see how the data results match up against their own "sense" of the story from reading it. I want to display 
    relevant stats using bar charts for this part.

    I also want to see if there is any meaningful trends/correlations within the data. Notably, between each story's overall 
    score determined by ANIFF word scores and its comparative score, which is calculated according to the formula I outlined 
    in the html file (on the web page intro). Since the overall score is determined by just the words that are ANIFF-compatible, 
    I think that it is reasonable to expect that the sentiment analysis performed using ANIFF is not a complete picture for each 
    story. The comparative score is a much more "general" score that takes into accound the entire size of the story. The comparative 
    scores are still relative to the sentiment score, but "averaged" out over each story (all words) to present a metric that is better for showing 
    just how positive or negative a story is (I think that it can also be seen as a metric that shows the story's tendency towards 
    negative or positive. -5 and 5 are the extremes, and something like -0.05 can mean that it has a slight negative tendency). 
    I think that it would be really interesting to see (visually and mathematically) how the 
    two variables correlate with each other. I want to show this part using a scatterplot and possibly a regression line.

    Overall, I want to show the good/bad word stats breakdown for each story, their respective scores, and how each story's 
    sentiment score corresponds with its comparative score. I also want to show that a lot of sentiment analysis, etc. may 
    really not be representative of what a story truly conveys (positive or negative vibes) when compared to a reader's 
    personal experience or idea of a story. Some results may be expected and some may be surprising. Maybe using the overall 
    sentiment score to determine a comparative score results in more "acceptable" data in the sense that it is more "equalized" 
    and can be less jarring (i.e. -52 vs. -0.006).

What tasks do you want to support?
    I want to allow the user to select from all of the stories and look at the stats for each individual story, displayed using 
    barplots, etc. I also want to display all of the stories' data on a scatterplot/related visualization. Tooltips would be nice to 
    include too in the overall design (mouse-over interations).

What designs with help you achieve these designs?
    1. Bar chart
        a) Stacked bar chart
    2. Scatterplot
        a) Regression line

Justifications:

    I ended up discarding the relative size of circles idea and opted for all bar charts in the first part. I think 
    it displays the idea better and is more easily understood. Two circles side-by-side can be a bit 
    challenging to look at, especially when the sizes are very similar. I also implemented tool tips for the scatterplot and 
    "on hover" effects for the bar charts. I think these also add to the overall presentation. Overall, everything turned out well and I think I was 
    able to get everything I had sketched out into code and onto the web page. It certainly looks much better than what 
    I can draw &#128517;.

Using browserify to enable node packages in the browser and npm sentiment for sentiment analysis. I used Python's sklearn package to 
run the linear regression on my data (using Google Colab).

Browserify command (generates bundle.js file based off of required packages in a3.js): browserify a3.js -o bundle.js

Starting python server: python3 -m http.server

Resources:
    1. https://github.com/d3/d3-fetch
    2. https://www.npmjs.com/package/sentiment
    3. https://www.npmjs.com/package/browserify
    4. https://stackoverflow.com/questions/21842384/importing-data-from-multiple-csv-files-in-d3
    5. https://stackoverflow.com/questions/10396074/remove-specific-characters-from-a-string-in-javascript
    6. W3 Schools

Passed HTML validator.