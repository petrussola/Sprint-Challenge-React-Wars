import React from 'react';

function Nextpage({turnPage}) {
    return (
        <button onClick={e => turnPage()}>Next page</button>
    )
}

export default Nextpage;