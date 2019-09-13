import React from 'react';

function Individual({data}) {
    return (
        <div>
            <span>{data.name} was born the year {data.birth_year}, has {data.eye_color} eyes and has starred in {data.films.length} films</span>
            <span></span>
        </div>
    )
}

export default Individual;