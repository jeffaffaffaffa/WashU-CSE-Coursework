I used external resources (in addition to the textbook):
    1. https://www.w3schools.com/html/html5_svg.asp
    2. https://css-tricks.com/how-to-make-charts-with-svg/
    3. https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g
    4. https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dy
    5. https://www.w3schools.com/graphics/svg_path.asp
    6. https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule

For Horizontal Bar Chart - X, I sorted them in ascending order, top to bottom. Each 
bar is made proportional to each other based on the y values from the table. In this 
chart, each x value from the table is a "category" with a corresponding y value. I 
interpreted this one as a value/measure of some sort for each category.

For Horizontal Bar Chart - Y, I also sorted them in ascending order, top to bottom. 
Each bar is made proportional to each other based on the x values from the table. In 
this chart, each y value from the table is a "category" with a corresponding x value. 
I interpreted this one as a "quantity count" of some sort for each category.

For Line Chart - X, the x-axis in terms of the x values from the table
and in increments of "one" unit (interval between each x value and 
in ascending order). Each point is "one x unit" apart along the x-axis.

For Line Chart - Y, the x-axis in in terms of the y values from the table 
and are spaced according to their "x" values (the y values from the table). 
So unlike Line Chart - X, these to do not have uniform intervals. Each point is 
"(y_i - y_(i-1)) y units" apart from the preceeding point.

I interpreted the instructions as literally do one chart as (x_i, y_i) 
and the other as (y_i, x_i) for the x and y coordinates.

For the Area Charts, I used the same idea from the Line Charts regarding point spacing.

For the Scatterplots, I also used the same idea from the Line Charts regarding point 
spacing.

Both HTML and CSS files passed the w3 validator.