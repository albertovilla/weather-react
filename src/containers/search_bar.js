import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind (this);
    this.onFormSubmit = this.onFormSubmit.bind (this);
  }

  onInputChange (event) {
    this.setState ( { term: event.target.value } );
  }

  onFormSubmit (event) {
    event.preventDefault();

    // we need to go a fetch weather data
    this.props.fetchWeather (this.state.term);
    this.setState ( { term: '' });
  }

  render () {
    return (
      <form onSubmit = { this.onFormSubmit } className = 'input-group'>
        <input
          placeholder = 'Get a five days forecast in your favorite cities'
          className = 'form-control'
          value = { this.state.term }
          onChange = { this.onInputChange }
        />
        <span className = 'input-group-btn'>
          <button type = 'submit' className = 'btn btn-secondary'>Search</button>
        </span>
      </form>
    )
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators( { fetchWeather }, dispatch );
}

// we pass null as this container doesn't care about the state
export default connect (null, matchDispatchToProps)(SearchBar);
