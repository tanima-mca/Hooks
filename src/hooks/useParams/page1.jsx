import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Page1() {
    
    return (
        <>
            <Link to={`/page2/1`}><button>Button 1</button></Link>
            <Link to={`/page2/2`}><button>Button 2</button></Link>
            <Link to={`/page2/3`}><button>Button 3</button></Link>
           

        </>
    )
}
