import React from 'react';

function PreviousPage({previousPage}) {
    return (
        <button onClick={e => previousPage()}>Previous Page</button>
    )
}

export default PreviousPage;