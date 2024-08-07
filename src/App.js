import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A software engineer from California.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer"
      },
      shows: false,
      mountedTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}
        <p>Time since component mounted: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;

