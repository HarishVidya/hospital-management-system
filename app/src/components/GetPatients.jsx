import React, { useState, useEffect, Component} from 'react'

export default function GetPatients() {

    const [patients, setPatients] = useState("")

    function getPatients() {
        fetch("http://localhost:8002/patients",
            {
                method: 'GET',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => m.json()).then(setPatients)
    }

    

    useEffect(() => {
        getPatients()
    }, [])

  return (
    <div>
        <p>{JSON.stringify(patients)}</p>
        <button onClick = {getPatients}>Update</button>
    </div>
  )
}