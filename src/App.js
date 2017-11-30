import React, { Component } from 'react';
import axios from 'axios';
import { Button, Container, Input } from 'reactbulma';
import Box from './component/box';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = { 
      value: '',
      msg: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  getDataFromAPI(q) {
    
    let self = this;
    let query = (q !== 'undefined') ? q : 'bandung';

    axios.get('http://localhost/api/twitter/?q=' + query)
    .then(function (response) {
      self.setState({
        msg: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  renderBoxResult(key) {
    return <Box key={key} index={key} details={this.state.msg} />
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.getDataFromAPI(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Twitter Search</h1>
        </header>
        <Container style={{ marginTop: 20 }}>
          <Input value={this.state.value} onChange={this.handleChange} placeholder="Masukan Keyword atau Hashtag" large id="large" />
          <Button onClick={this.handleSubmit.bind(this)} style={{ marginTop: 20 }} primary>Search!</Button>
        </Container>
        { Object.keys(this.state.msg).map(this.renderBoxResult.bind(this)) }
      </div>
    );
  }

}

export default App;
