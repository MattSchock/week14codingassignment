import React from 'react';
import Movie from './Movie';



export default class MovieList extends React.Component {
    render() {
        return (
            <div>
                <h3 className="bg-success text-white">Rate a Movie!</h3>
                <div>
                <Movie name="Goodfellas"/>
                </div>
                <div>
                <Movie name="The God Father"/>
                </div>
                <div>
                <Movie name="Casino"/>
                </div>
            </div>
            
            )
        
    };
}