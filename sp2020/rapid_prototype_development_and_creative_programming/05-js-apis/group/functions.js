function loginAjax(event){

    let username = document.getElementById("user").value; // Get the username from the form
    let password = document.getElementById("pass").value;// Get the password from the form
    let dataString = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);

    let xmlHttp = new XMLHttpRequest(); // Initialize XMLHttpRequest
    xmlHttp.open("POST", "login.php", true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xmlHttp.addEventListener("load", function(event){

        let jsonData = JSON.parse(event.target.responseText); // parse the JSON into a JavaScript object
        console.log(jsonData);
        if(jsonData.success == true){ 
            // Hide and or show events on successful login
            displayCorrectView();
            //set token
            document.getElementById("token").value = jsonData.token;
            userToken = jsonData.token;
            console.log("functions: " + userToken);

            updateCalendar();
            populateEvents();
            alert("Logged in successfully!");
            console.log("logged in");
        }
        else{
            document.getElementById("user").value="";
            document.getElementById("pass").value="";
            alert("Logging in failed: " + jsonData.message);
        }
    }, false); // Bind the callback to the load event
    xmlHttp.send(dataString); // Send the data
}
document.getElementById("login_btn").addEventListener("click", loginAjax, false); // Bind the AJAX call to button click

function registerAjax(event) {
    let newuser = document.getElementById('new_user').value;
    let newpass1 = document.getElementById('new_pass1').value;
    //let newpass2 = document.getElementById('new_pass2').value;

    let dataString = "username=" + encodeURIComponent(newuser) + "&password1=" + encodeURIComponent(newpass1); //feeds these variable names into register.php, + "&password2=" + encodeURIComponent(newpass2)

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "register.php", true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // It's easy to forget this line for POST requests
    
    xmlHttp.addEventListener("load", function(event){

        let jsonData = JSON.parse(event.target.responseText);
        if (jsonData.success == true) {
            console.log("trying to hide register");
            alert("Registration success!");
        }
        else {
            alert("Registration Failed: " + jsonData.message);
        }
        document.getElementById("new_user").value="";
        document.getElementById("new_pass1").value="";
    }, false);
    xmlHttp.send(dataString);
}

document.getElementById('register_btn').addEventListener('click', registerAjax, false);

function logoutAjax(event) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "logout.php", true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // It's easy to forget this line for POST requests
    xmlHttp.addEventListener("load", function(event){
        let jsonData = JSON.parse(event.target.responseText);
        if (jsonData.success == true) {
            updateCalendar();
            populateEvents();

            alert("Logout success");

            displayCorrectView();
            document.getElementById("user").value="";
            document.getElementById("pass").value="";
        }
        else {
            alert("Logout Failed. "+jsonData.message);
        }
    }, false);
    document.getElementById("new_user").value="";
    document.getElementById("new_pass1").value="";
    //document.getElementById("new_pass2").value="";
    xmlHttp.send(null);
    setThemeColor();
}

document.getElementById("logout_btn").addEventListener("click", logoutAjax, false);

//change theme for user
function changeTheme(event) {
    fetch('check-user-logged-in.php', {
        method: "POST" //maybe GET
    })
    .then(res => res.json())
    .then(response => {
        console.log(response);
        if(response["userExists"] == true) {
            let newTheme = document.getElementById('theme').value;
            
            let themeData = encodeURIComponent(newTheme); //feeds variable name into theme.php

            data = {
                'theme': themeData
            };
            fetch('theme.php', {
                method: "POST",
                body: JSON.stringify(data),
                headers: { 'content-type': 'application/json' }
            })
            .then(res => res.json())
            .then(response => {
                console.log("asdfasdf", response);
                setThemeColor(newTheme); // Set the proper theme colors;
            })
        }
    })
}

document.getElementById("theme").addEventListener("change", changeTheme, false);