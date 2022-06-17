import React, { Component } from 'react';
import moment from 'moment';
import Header from './components/Header';
import AddWatches from './components/AddWatches';
import WatchesList from "./components/WatchesList";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      watchesList: [],
      timezoneUTC: null
    };
  }

  loadTime = () => {
    setInterval(() => {
      this.setState({
        timezoneUTC: moment().utc()
      });
    }, 1000);
  };

  componentDidMount() {
    this.loadTime();
  }

  handleAdd = watches => {
    this.setState(prevState => ({
      watchesList: [...prevState.watchesList, watches]
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      watchesList: prevState.watchesList.filter(watches => watches.id !== id)
    }));
  };

  componentWillUnmount() {
    clearInterval(this.loadTime);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <AddWatches handleAdd={this.handleAdd} />
          <WatchesList
            watchesList={this.state.watchesList}
            timezoneUTC={this.state.timezoneUTC}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
