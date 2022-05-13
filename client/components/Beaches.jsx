import React from 'react'
import { Link } from 'react-router-dom'
import { getBeaches } from '../../beaches'

function Beaches() {
    let beaches = getBeaches();

    return (
        <div>
            {beaches.map((beach) => (
                <Link
                    to={`/beaches/${beach.name}`}
                    key={beach.name}
                >
                    {beach.name}
                </Link>

            ))}
        </div>
    )

}

export default Beaches