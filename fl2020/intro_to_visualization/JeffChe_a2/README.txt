Extra resources used:
    1. http://bl.ocks.org/caged/6476579
    2. https://stackoverflow.com/questions/7342957/how-do-you-round-to-1-decimal-place-in-javascript
    3. https://stackoverflow.com/questions/22382984/deleting-d3-svg-elements-for-redraw
    4. lots of help on slack.

Notes:
    - So far, assignment's main components are done. Just still has a strange rendering behaviour with all charts. They don't render properly until a second click
        on the corresponding year. Prof. Ottley says that this is ok (fixed, see below).
    - HTML Validator warning: "The type attribute is unnecessary for JavaScript resources."
        - I did not write any of the code that is being flagged, so I left it alone.


RENDERING FIX:

//we join the data to the DOM elements and position them
let selection = d3.select("#chart")
    .selectAll(".bar").data(numbers)
    //@@ IMPORTANT!
    //@@ you need to position the initial DOM elements
    .style("height", function(d){ 
      return d + "px"; 
    })
    .style("margin-top", function(d){ 
      return (100 - d) + "px"; 
    });
selection.enter()
    .append("div").attr("class", "bar")
    //@@ IMPORTANT!
    //@@ I know it seems redundant
    //@@ We have copied and pasted the same code as above
    //@@ You need to position the new DOM elements
    .style("height", function(d){ 
      return d + "px"; 
    })
    .style("margin-top", function(d){ 
      return (100 - d) + "px"; 
    })
    .on("click", function(e, i){
      numbers.splice(i, 1);
      update();
    });
  selection.exit().remove();