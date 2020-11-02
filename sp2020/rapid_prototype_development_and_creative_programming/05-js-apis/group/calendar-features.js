// FIXME: make this comment have the correct line numbers Lines 143 - 189 from: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time#Using_time_inputs
// TODO: properly show features depending on whether user is signed in

/* ------------------------------------------------------------------------------------------------------------------------------------

                                                        Variables
 
------------------------------------------------------------------------------------------------------------------------------------ */
let userToken;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const today = new Date(); // TODO: deal with checking about 23:59 then 12:00!!!!!
let currentMonth = new Month(today.getFullYear(), today.getMonth());

/* ------------------------------------------------------------------------------------------------------------------------------------

                                                        Populate Events in Calendar
 
------------------------------------------------------------------------------------------------------------------------------------ */

// TODO: only get relevant events (this is really inefficient)
document.addEventListener("DOMContentLoaded", populateEvents, false);
document.addEventListener("DOMContentLoaded", displayCorrectView, false);
document.getElementById("prev_month_btn").addEventListener("click", populateEvents, false);
document.getElementById("next_month_btn").addEventListener("click", populateEvents, false);

function displayCorrectView() {
    fetch('check-user-logged-in.php', {
        method: "POST"
    })
    .then(res => res.json())
    .then(response => {
        console.log(response);
        if(response["userExists"] == true) {
            $( ".logged-out" ).hide();
            $( ".logged-in" ).show();
            userToken = response['token'];
        } else {
            $( ".logged-out" ).show();
            $( ".logged-in" ).hide();
        }
    })

    fetch('fetch-theme.php', {
        method: "POST"
    })
    .then(res => res.json())
    .then(response => {
        console.log("fetch theme response", response);

        let theme = response['theme'];
        setThemeColor(theme);
    })
}

// Set the theme of the site
function setThemeColor(theme) {
    console.log("theme", theme)
    let colorCode;
    // let backGroundColorCode;
    // let dayColorCode;
    // let viewedMonthDayColorCode;

    if (theme == "light_blue") {
        colorCode = "#66e2f2";
        // backGroundColorCode = "#66e2f2";
        // dayColorCode = "#5dcad8";
        // viewedMonthDayColorCode = "#439ba7";
    } else if (theme == "nude_orange") {
        colorCode = "#fab66e";
    } else if (theme == "pasty_green") {
        colorCode = "#7ee6a6";
    } else if (theme == "muted_red") {
        colorCode = "#f58989";
    } else if (theme == "sad_yellow") {
        colorCode = "#e6e391";
    } else {
        theme = "default";
        colorCode = "#fdf1e0";
    }

    let x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = colorCode;
    document.getElementById("theme").value = theme; // have the correct option selected
}

function populateEvents() {
    const debugString = "module5-group.calendar-features.populateEvents"
    console.log(debugString, "populateEvents")
    fetch('query-events.php', {
        method: "POST"
    })
    .then(res => res.json())
    .then(response => {
        // console.log(debugString, 'Success:', JSON.stringify(response));
        console.log(debugString, 'Success (query events):', response);

        $('#days li').remove(); // Get rid of all day event elements from calendar before adding events
        $('#event-list li').remove(); // Get rid of all events in event-list

        // Only run if user signed in
        if (response.user_id != null) {
            // Add event listeners for each day in calendar. If user double clicks a day, they can edit events there
            let daysShownTdElements = document.getElementsByTagName("td");
            console.log(debugString, "daysShowTdElements", daysShownTdElements)
            for (let i = 0; i<daysShownTdElements.length; i++) {
                // console.log(debugString, "daysShownTdElements[i]", daysShownTdElements[i]);
                daysShownTdElements[i].addEventListener("dblclick", function (event) {    // Open the add event dialog box when dblclick

                    console.log(debugString, 'document.getElementById("edit-day-events")', document.getElementById("edit-day-events").title)
                    console.log(debugString, "event id", event.target.id);
                
                    // Set a hidden field with the date
                    let temp = document.getElementsByClassName("newEventDate");

                    while (temp[0]) { // Remove all hidden fields of class newEventDate
                        temp[0].parentNode.removeChild(temp[0])
                    }
                    let newHidden = document.createElement("input");
                    newHidden.setAttribute("class", "newEventDate");
                    newHidden.setAttribute("type", "hidden");
                    newHidden.setAttribute("value", event.target.id);
                    // newHidden.appendChild(document.createTextNode(event.target.id))
                    document.getElementById("edit-day-events").prepend(newHidden)
                
                    const dialogBoxTitle = "Add Event: " + event.target.id;
                    $( "#edit-day-events" ).dialog(  { title: dialogBoxTitle } );
                    $( "#edit-day-events" ).dialog( "open" );
                }, false);
            }

            for (let userEvent in response.data) {
                let userEventDate = response.data[userEvent].event_datetime.split(' ')[0];
                let userEventTime = response.data[userEvent].event_datetime.split(' ')[1];

                // Add the event's unique id as a hidden field
                let eventIdHidden = document.createElement("input");
                eventIdHidden.setAttribute("type", "hidden");
                eventIdHidden.setAttribute("value", response.data[userEvent].event_id);

                // Add events to event list
                    let newLISidebar = document.createElement("li");
                    newLISidebar.appendChild(document.createTextNode(userEventDate + " " + userEventTime.substring(0,5) + " - " + response.data[userEvent].title));
                    newLISidebar.appendChild(eventIdHidden)

                    newLISidebar.addEventListener("click", displayEventContent, false);
                    document.getElementById("event-list").appendChild(newLISidebar)

                    if (!response.data[userEvent].own_event){
                        newLISidebar.setAttribute("class", "shared-with-me");
                    }

                // Add events to calendar view
                if (document.getElementById(userEventDate)) { // only add elements for the current calendar view
                    let newLI = document.createElement("li");
                    // Display event time and title
                    newLI.appendChild(document.createTextNode(userEventTime.substring(0,5) + " - " + response.data[userEvent].title));
                    newLI.appendChild(eventIdHidden);

                    newLI.addEventListener("click", displayEventContent, false);
                    document.getElementById(userEventDate).getElementsByTagName("ul")[0].appendChild(newLI);

                    if (!response.data[userEvent].own_event){
                        newLI.setAttribute("class", "shared-with-me");
                    }
                }

                

                function displayEventContent(event) {
                    console.log(debugString, "event", event);
                    console.log(debugString, "hidden value", event.target.lastChild.value);

                    // Display and hide correct things
                    $( ".edit-event-display" ).show();
                    $( ".edit-event-editer" ).hide()

                    // Remove old title and content
                    document.getElementById("event-title").innerHTML = "";
                    document.getElementById("event-time").innerHTML = "";
                    document.getElementById("event-content").innerHTML = "";

                    $( "#edit-event" ).dialog( "open" );
                    document.getElementById("event-title").appendChild(document.createTextNode(response.data[userEvent].title))
                    document.getElementById("event-time").appendChild(document.createTextNode(userEventDate + " " + userEventTime.substring(0,5)))
                    document.getElementById("event-content").appendChild(document.createTextNode(response.data[userEvent].content))

                    $("#event-date").attr("value", userEventDate)
                    $("#event-id").attr("value", response.data[userEvent].event_id)

                    if (response.data[userEvent].own_event){
                        $("#edit-event-btn").click(function(){
                            $( ".edit-event-display" ).hide();
                            $( ".edit-event-editer" ).show()
                        
                            $("#edit-event-title").attr('value', response.data[userEvent].title);
                            $('#edit-event-content').text(response.data[userEvent].content);
                            document.getElementById("edit-event-hour").value = userEventTime.split(":")[0];
                            document.getElementById("edit-event-minute").value = userEventTime.split(":")[1];
                        });
                    } else {
                        $(".functionality-buttons").hide(); // User cannot edit, delete, or share shared files
                    }             
                }
            }
        }
    })
    .catch(error => console.error('Error:',error))
}

$( "#submit-event-changes" ).click(function() {
    const debugString = "calendar-features.submit-event-changes.click(function() {"
    let eventTitle = document.getElementById("edit-event-title").value;
    let eventContent = document.getElementById("edit-event-content").value
                
    // Put time into format for MySQL query in php file
    let formattedTime = document.getElementById("event-date").value + " " + document.getElementById("edit-event-hour").value + ":" + document.getElementById("edit-event-minute").value;
    console.log(debugString, "formattedTime", formattedTime);

    console.log(debugString, "event after submit edit", event)
    console.log(debugString, "event.target.lastChild", event.target.lastChild)
    const data = {
        'event_id': document.getElementById("event-id").value,
        'title': eventTitle,
        'content': eventContent,
        'event_datetime': formattedTime,
        'token': userToken
    };
    console.log(debugString, "edited data 2", data)
    console.log(userToken);
    fetch('edit-event.php', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'content-type': 'application/json' }
    })
    .then(res => res.json())
    .then(response => {
        console.log(debugString,'Success:', response);
        // Reload Calendar with the new event!
        populateEvents();
        $( "#edit-event" ).dialog( "close" );
    })
    .catch(error => console.error('Error:',error))
})

$( "#delete-event-btn" ).click(function() {
    const debugString = "calendar-features.delete-event-changes.click(function() {"
    const data = {
        'event_id': document.getElementById("event-id").value,
        'token': userToken
    };
    console.log(debugString, "data", data)
    console.log("delete: " + userToken);

    fetch('delete-event.php', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'content-type': 'application/json' }
    })
    .then(res => res.json())
    .then(response => {
        console.log(debugString,'Success:', response);
        // Reload Calendar with the new event!
        populateEvents();
    })
    .catch(error => console.error('Error:',error))
    $( "#edit-event" ).dialog("close");
});

$( "#share-event-btn" ).click(function() {
    const debugString = "calendar-features.share-event-btn.click(function() {"
    // let eventTitle = document.getElementById("day-event-title").value;
    // let eventContent = document.getElementById("day-event-content").value
                
    // Put time into format for MySQL query in php file
    // let formattedTime = document.getElementById("day-event-date").value + " " + document.getElementById("day-event-hour").value + ":" + document.getElementById("day-event-minute").value;
    // console.log(debugString, "formattedTime", formattedTime);
    console.log(debugString, document.getElementById("event-id").value,);
    const data = {
        'event_id': document.getElementById("event-id").value,
        'recipient_username': document.getElementById("share-with").value,
        'token': userToken
    };

    fetch('share.php', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'content-type': 'application/json' }
    })
    .then(res => res.json())
    .then(response => {
        console.log(debugString, response);
        document.getElementById("share-with").value = "";
        if (response["status"] == "failure") {
            alert(response["failure_response"]["message"])
        }
    })
    .catch(error => console.error('Error:',error))

})

/* ------------------------------------------------------------------------------------------------------------------------------------

                                                        View Event List
 
------------------------------------------------------------------------------------------------------------------------------------ */

// got solution from https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
$( "#view-event-list-btn" ).click(function() {
    if (document.getElementById("sidebar").style.width == "0px") {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("main-content").style.marginLeft = "250px";
    } else {
        document.getElementById("sidebar").style.width = "0px";
        document.getElementById("main-content").style.marginLeft = "0px";
    }
})

/* ------------------------------------------------------------------------------------------------------------------------------------

                                                        Move Between Months
 
------------------------------------------------------------------------------------------------------------------------------------ */

// call updateCalendar on page load
document.addEventListener("DOMContentLoaded", updateCalendar, false);

// Change the month when the "prev" button is pressed
document.getElementById("prev_month_btn").addEventListener("click", function(event){
    currentMonth = currentMonth.prevMonth();
    updateCalendar(); // Whenever the month is updated, we'll need to re-render the calendar in HTML
}, false);

// Change the month when the "next" button is pressed
document.getElementById("next_month_btn").addEventListener("click", function(event){
    currentMonth = currentMonth.nextMonth();
    updateCalendar(); // Whenever the month is updated, we'll need to re-render the calendar in HTML
}, false);

// Get the dates for the current month of the calendar
// I got this from the wiki
function updateCalendar(){
    const debugString = "module5-group.calendar-features.updateCalendar"

    // Remove the title of the month (if it exists)
    let currMonthTitle = document.getElementsByClassName("viewed-month")[0];
    console.log(debugString, "currMonthTitle",currMonthTitle)
    if (currMonthTitle) { // Remove month title if there currently is one
        currMonthTitle.parentNode.removeChild(currMonthTitle);
    }

    // Display month and year at top of calendar
    let calendarNode = document.getElementById("calendar");
    let monthTitle = document.createElement("h2");
    monthTitle.setAttribute("class", "viewed-month")
    monthTitle.appendChild(document.createTextNode(months[currentMonth.month] + " " + currentMonth.year));
    calendarNode.prepend(monthTitle);

    const daysNode = document.getElementById("days");
    while (daysNode.firstChild) {
        daysNode.removeChild(daysNode.lastChild);
    }

    let weeks = currentMonth.getWeeks();

    for(let w in weeks){
        let days = weeks[w].getDates(); // array with JavaScript Date objects
        let newTR = document.createElement("tr");

        for(let d in days){
            let newTD = document.createElement("td");
            let newDiv = document.createElement("div");
            let newH4 = document.createElement("h4");
            let newUL = document.createElement("ul");

            newH4.appendChild(document.createTextNode(days[d].getDate()));
            newDiv.appendChild(newH4);

            if (today.getDate() == days[d].getDate() && today.getMonth() == days[d].getMonth()) { //FIXME: direct access way instead of constantly checking
                newDiv.setAttribute("class", "day viewed-month-day today");
            } else if (currentMonth.month == days[d].getMonth()) {
                newDiv.setAttribute("class", "day viewed-month-day")
            } else {
                newDiv.setAttribute("class", "day")
            }

            // Set unique id for element in form yyyy-mm-dd
            let newTDID = days[d].getFullYear() + '-' + (days[d].getMonth() < 10 ? '0' : '') + (days[d].getMonth() + 1) + "-" + (days[d].getDate() < 10 ? '0' : '') + days[d].getDate();
            newDiv.setAttribute("id", newTDID);
            newDiv.appendChild(newUL);
            newTD.appendChild(newDiv);
            newTR.appendChild(newTD);
        }
    document.getElementById("days").appendChild(newTR);
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------------

                                                        Add Events to Calendar
 
------------------------------------------------------------------------------------------------------------------------------------ */

// Event listener to add an event to the user's calendar after button click
// FIXME: clean input!
document.getElementById("add-event").addEventListener("click", function(event) {
    const debugString = "module5-group.calendar-features.add-event.eventListener";

    console.log(debugString, "event", event)
    console.log(debugString, "newEventDate", document.getElementsByClassName("newEventDate")[0].value)
    const eventTitle = document.getElementById("day-event-title").value;
    const eventContent = document.getElementById("day-event-content").value
    console.log(debugString, "Event Title:", eventTitle)
    console.log(debugString, "Event Content:", eventContent)

    // FIXME: ADD fallback option!!
    const yearMonthDay = document.getElementsByClassName("newEventDate")[0].value.split("-"); // Array of Strings in form of [year, month, day]. newEventDate is a hidden input year-month-day
    console.log(debugString, "yearMonthDay", yearMonthDay)

    // const userTimePeriodSelection = document.getElementById("timePeriod").value; // either a.m. or p.m.

    let hour = '';

    const timeDateObject = new Date(yearMonthDay[0], (parseInt(yearMonthDay[1]) - 1), yearMonthDay[2], document.getElementById("new-event-hour").value, document.getElementById("new-event-minute").value );

    console.log(timeDateObject);

    // Put time into format for MySQL query in php file
    const formatedTime = timeDateObject.getFullYear() + "-" + (timeDateObject.getMonth() + 1) + "-" + timeDateObject.getDate() + " " + timeDateObject.getHours() + ":" + timeDateObject.getMinutes();
    console.log(debugString, "formattedTime", formatedTime);

    // FIXME: Deal with multiple events at same time!!

    const data = {
        'title': eventTitle,
        'content': eventContent,
        'event_datetime': formatedTime,
        'token': userToken
    };
    fetch('add-event.php', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'content-type': 'application/json' }
    })
    .then(res => res.json())
    .then(response => {
        console.log('Success:', JSON.stringify(response));
        console.log('Success:', response);
        // Reload Calendar with the new event!
        populateEvents();

        // Reset all the values
        // TODO: deal w/ alternative!!!! do I want alternative???
        document.getElementById('day-event-title').value = '';
        document.getElementById('day-event-content').value = '';
        populateHours();
        populateMinutes();
    })
    .catch(error => console.error('Error:',error))

    $( "#edit-day-events" ).dialog( "close" );
}, false)

/* ------------------------------------------------------------------------------------------------------------------------------------

                                                    Restrict Elements From Showing
 
------------------------------------------------------------------------------------------------------------------------------------ */

// The dialog boxes should not open automatically
$( "#edit-day-events" ).dialog({ autoOpen: false }); // FIXME: make better name!
$( "#edit-event" ).dialog({ autoOpen: false });

/* ------------------------------------------------------------------------------------------------------------------------------------

                                                        Time Selection Feature
Got solution from: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time#Using_time_inputs
 
------------------------------------------------------------------------------------------------------------------------------------ */

let fallbackLabel = document.querySelector('.select-event-time-fallback-label');
let fallbackSelection = document.querySelector('.select-event-time-fallback-selection');

let hourSelect = document.getElementsByClassName('hour');
let minuteSelect = document.getElementsByClassName('minute');


populateHours();
populateMinutes();

function populateHours() {
    for (let i=0; i<hourSelect.length; i++) {
        while (hourSelect[i].firstChild) {
            hourSelect[i].removeChild(hourSelect[i].firstChild);
        }
    
        for (let j = 0; j <= 23; j++) {
            let option = document.createElement('option');
            option.textContent = (j < 10) ? ("0" + j) : j;
            hourSelect[i].appendChild(option);
        }
    }
}

function populateMinutes() {
    for (let i=0; i<minuteSelect.length; i++) {
        while (minuteSelect[i].firstChild) {
            minuteSelect[i].removeChild(minuteSelect[i].firstChild);
        }
        for (let j = 0; j <= 59; j++) {
            let option = document.createElement('option');
            option.textContent = (j < 10) ? ("0" + j) : j;
            minuteSelect[i].appendChild(option);
        }
    }
}

// ------------------------------------------------------------------------------------------------------------------------------------
