import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {term: ''}
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          type="text"
          placeholder="search video"
          onChange={event => this.setState({term: event.target.value})}/>
      </div>
    )
  }
}

export default SearchBar;