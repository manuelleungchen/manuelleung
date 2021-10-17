import React from 'react'

function nextButton({nextPage}) {
    let nextPath = `#/${nextPage}`;
    return (
        <a href={nextPath}>
            Check {nextPage}
        </a>
    )
}

export default nextButton
