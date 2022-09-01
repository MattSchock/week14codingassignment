import React from 'react';
import Movie from './Movie';





export default class MovieList extends React.Component {
    render() {
        return (
            <div>
                <h3 className="bg-success text-white">Rate a Movie!</h3>
                <div>
                <Movie name="Goodfellas" stars='0' id='0'/>
                </div>
                <div>
                <Movie name="The God Father" stars='0' id='1'/>
                </div>
                <div>
                <Movie name="Casino" stars='0' id='2'/>
                </div>
            </div>
            
            )
        
    };
}