import React from 'react';
import './App.css';
import './api' // Socket client side 
// import sendMessage from './api'
// import { setUsername, messageToAllServer, updateDMs } from './api'
import * as socketFunctions from './api'
import Button from './components/Button';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import DMForm from './components/DMForm';
import OpenDMForm from './components/OpenDMForm';
import DM from './components/DM';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { resolve } from 'dns';
import Clock from './components/Clock';
import CoolText from './components/CoolText';
import FunBackground from './components/FunBackground';

const api = "https://api.kanye.rest";
let quote;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);

    this.state = {
      connection: false,
      connectionMessage: '',
      username: '',
      feed: '',
      allDMs: [],
      showApp: false,
      showQuote: true
    };

    // learned from https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34
    socketFunctions.updateDMs((err, newData) => this.setState({
      allDMs: [...this.state.allDMs, newData] // update allDMs list (listening to socket)
    }));
  }
  //allows for child of app to display app when handler is passed as the action
  handler(newFeed, username, theme) {
    let newState = {
      feed: newFeed,
      username: username,
      showApp: true
    };

    if (theme) {
      newState.theme = theme
      setThemeColor(theme)
    }
    this.setState(newState)
  }

  componentDidMount() {
    fetch('/hello')
      .then(res => res.json())
      .then(response => {
        // console.log("response", response)
        if (!response.loggedIn) {
          console.log('hello response', response)
          this.setState({
            showApp: false
          })
        } else {
          if (response.theme) setThemeColor(response.theme)
          this.setState({
            showApp: true,
            connection: true,
            connectionMessage: response.message,
            username: response.username,
            feed: response.feed
          })
        }
      })
  }

  renderFeed = () => {
    console.log("renderFeed")
    // console.log('the stuff', this.state.feed)
    let feed = []
    if (this.state.feed.length > 0) {
      for (let i = this.state.feed.length - 1; i >= 0; i--) {
        feed.push(<Post action={this.handler} postId={this.state.feed[i].postId} myOwn={this.state.feed[i].myOwn} title={this.state.feed[i].title} creator={this.state.feed[i].creator} content={this.state.feed[i].content} postTimeStamp={this.state.feed[i].postTimeStamp} {...this.state.feed[i].reactions} />);
      }
    }
    return feed
  }

  sendMessage = () => {
    const message = document.getElementById("dm-message").value;
    console.log("message sent:", message);
    socketFunctions.messageToAllServer(message)
  }

  renderDMs = () => {
    console.log('renderDms state.allDMS', this.state.allDMs)
    let allDMs = [];
    console.log('username dm', this.state.username);
    let username = this.state.username;
    // socketio.emit("set_username", { username: this.state.username })
    socketFunctions.setUsername(username);

    if (this.state.allDMs.length > 0) {
      for (let i = 0; i < this.state.allDMs.length; i++) {
        allDMs.push(<DM from={this.state.allDMs[i].from} message={this.state.allDMs[i].message} postTimeStamp={this.state.allDMs[i].postTimeStamp} />);
        console.log(this.state.allDMs[i]);
      }
    }
    return allDMs
  }

  showApp = () => {
    console.log("show app invoked");
    this.setState({ showApp: true });
  }

  hideApp = () => {
    console.log("hide app invoked");
    this.setState({ showApp: false });
  }

  logoutUser = () => {
    alert("logged out");
    fetch("/logout")
      .then(res => res.json())
      .then(response => {
        this.setState({ showApp: false });
        socketFunctions.logoutSocket();
        console.log("logged out:", response)
      })
  }

  //calls setThemeColor function
  setTheme() {
    console.log('in settheme')
    setThemeColor(document.getElementById("theme").value);
    fetch('/setTheme', {
      method: "POST",
      body: JSON.stringify({ theme: document.getElementById("theme").value }),
      headers: { 'content-type': 'application/json' }
    })
      .then(res => res.json())
      .then(response => {
        console.log('settheme response', response)
      })
  }

  followUser = () => {
    fetch('/follow', {
      method: "POST",
      body: JSON.stringify({ newUserToFollow: document.getElementById("follow").value }),
      headers: { 'content-type': 'application/json' }
    })
      .then(res => res.json())
      .then(response => {
        console.log("following a new person!")
        fetch('/hello')
          .then(res => res.json())
          .then(response => {
            // console.log("response", response)


            this.setState({
              feed: response.feed
            })

          })
      })
      document.getElementById("follow").value = '';
  }

  getQuote = () => {
    let xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let kquoteObj = JSON.parse(this.responseText);
        quote = kquoteObj;
        let kquoteString = "'" + quote.quote + "'";
  
        console.log(quote);
  
        document.getElementById("quote").innerHTML = kquoteString;
      }
    }
  
    xhttp.open("GET", api, true);
  
    xhttp.send();
  }

  closeBox = () => {
    this.setState({ showQuote: false });
  }

  openBox = () => {
    this.setState({ showQuote: true });
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <header className="App-header">
          <h1>"Social Media"</h1>
        </header>

        <Clock />
        
        {!this.state.showApp ? <div>
          <div id="login_register">
            <CoolText />
            <hr className="lines"></hr>
            {/* button to toggle show app; login check will toggle this later */}
            {/* <Button someFunction={this.showApp} buttonName="show app for debugging use" /> */}

            <div className="lr">
              <LoginForm action={this.handler} />
            </div>

            <hr className="lines"></hr>

            <div className="lr">
              <RegisterForm />
            </div>

            <hr className="lines"></hr>
          </div>
          <FunBackground />
        </div> : null}

        {this.state.showApp ? <div className="everything">
          {/* button to hide app; if not logged in, should hide app */}

          {/* <Button someFunction={this.hideApp} buttonName="hide app for debugging use" /> */}
          <Button someFunction={this.logoutUser} buttonName="Logout" />
          <OpenDMForm />
          <hr className="molines"></hr>

          <CreatePost action={this.handler} />
          <hr className="molines"></hr>

          <input type="text" id="follow" placeholder="user" required />
          <Button someFunction={this.followUser} buttonName="follow" />
          <hr className="molines"></hr>

          {/* <p>{this.state.connectionMessage}</p> */}
          <div id="themes">
            <label htmlFor="theme">Choose a theme:</label>
            <select id="theme">
              <option value="default">Default</option>
              <option value="light_blue">Light Blue</option>
              <option value="nude_orange">Nude Orange</option>
              <option value="pasty_green">Pasty Green</option>
              <option value="muted_red">Muted Red</option>
              <option value="sad_yellow">Sad Yellow</option>
            </select>
            <Button someFunction={this.setTheme} buttonName="Change" />
          </div>
          <hr className="molines"></hr>
          <div id="columns">
            <div id="column1">
              <h2>Feed:</h2>
              <div id="feed">
                {this.renderFeed()}
              </div>
            </div>

            <div id="column2">
              { !this.state.showQuote ? <div>
                <Button someFunction={this.openBox} buttonName="Kanye Quotes, Yo."/>
              </div> : null}
              <h4>Messages:</h4>
              <div id="allDMs">
                {/* <input type="text" id="dm-message" placeholder="message" name="message" required />
                <Button someFunction={this.sendMessage} buttonName="Send" /> */}
                {this.renderDMs()}
              </div>
            </div>
          </div>
          
          {this.state.showQuote ? <div>
            <div id="kanye_footer">
              <Button someFunction={this.closeBox} buttonName="Close"/>
              <div className="kanyestuff">
                <p className="kayne">
                  Bored out of your mind because of #quarantine2020? Click the button for a quote from Kanye West!
                </p>
                <Button someFunction={this.getQuote} buttonName="CLICK MEEEE"/>
                <p id="quote"></p>
              </div>

              <div id="lordKayne">
                <img src="https://images.complex.com/complex/images/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/fj0bhvpjwa4czeugp6nj/kanye-west-not-smiling" alt="westbest" id="kanyewest"/>
              </div>
            </div>
          </div> : null}

        </div> : null}
      </div>
    );
  }
}

// Set the theme of the site (temporarily for now)
function setThemeColor(theme) {
  // let theme = document.getElementById("theme").value
  console.log('setThemeColor', theme)
  let colorCode;

  if (theme == "light_blue") {
    colorCode = "#66e2f2";
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
    colorCode = "white";
  }

  let x = document.getElementsByTagName("BODY")[0];
  x.style.backgroundColor = colorCode;
  if (document.getElementById("theme")) {
    document.getElementById("theme").value = theme; // have the correct option selected

  }
}

export default App;
