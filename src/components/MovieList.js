import React from 'react';
import Movie from './Movie';


export default class MovieList extends React.Component {
    render() {
        return (
            React.createElement('div',
            {class: 'container'},
            React.createElement(Movie, {}, null),
            React.createElement(Movie, {}, null),
            React.createElement(Movie, {}, null),
            )
        )
    }
}