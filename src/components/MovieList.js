import React from 'react';
import Review from './Review';
import Movie from './Movie';





// movie list container to hold movies to be reviewed. Movie components passed names in as props.
export default class MovieList extends React.Component {
    render() {
        return (
            <div>
                <h3 className="bg-success text-white">Rate a Movie!</h3>
                <div>
                <Movie name="Goodfellas"  id='0'/>
                </div>
                <div>
                <Movie name="The God Father" id='1'/>
                </div>
                <div>
                <Movie name="Casino"  id='2'/>
                </div>
            </div>
            
            )
        
    };
}