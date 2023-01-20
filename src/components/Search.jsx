import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
    };

    handleKey = (event) => {
        if(event == "Enter") {
            this.props.searchMovie(this.state.search)
        }
    };

    render() {
        return <div className="input-field col s6">
                <input 
                type="search" 
                placeholder='Search'
                className="validate"
                value={this.state.search}
                onChange={(e) => this.setState({search: e.target.value})}
                onKeyDown={this.handleKey}
                />
                <button className='btn' onClick={() => {this.props.searchMovie(this.state.search)}}>Search</button>
            </div>
    }
};

export {Search};