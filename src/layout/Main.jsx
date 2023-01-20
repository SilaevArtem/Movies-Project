import React from 'react';
import {Movies} from '../components/Movies';
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';

class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=2553592&s=Attack on Titan')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    searchMovie = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=2553592&s=${str}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    };


    render() {
        const {movies} = this.state
        return <main className="container content">
            <Search searchMovie = {this.searchMovie}/>
            {
                movies.length ? (
                <Movies movies = {this.state.movies} />
                ) : <Preloader />
            }
        </main>

    }

};

export {Main};