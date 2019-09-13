import React from 'react';
import Individual from './Individual'

function Data({data}) {
    return (
        <div>
            {
                data.map( item => (
                    <Individual data={item} />
                ))
            }
        </div>
    )
}

export default Data;