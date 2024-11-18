import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Page2() {
    let { id } = useParams()
    console.log(id)

    return (
        <> 
        {id=="1" ? "Hello1" : ""}
        {id=="2" ? "Hello2" : ""}
        {id=="3" ? "Hello3" : ""} 

        </>
    )
}
