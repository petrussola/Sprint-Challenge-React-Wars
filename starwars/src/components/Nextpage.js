import React from 'react';

function NextPage({nextPage}) {
    return (
        <button onClick={e => nextPage()}>Next Page</button>
    )
}

export default NextPage;