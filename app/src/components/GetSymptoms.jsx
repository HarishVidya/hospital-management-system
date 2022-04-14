import React, { useState, useEffect, Component} from 'react'

export default function GetSymptoms() {

    const [symptoms, setSymptoms] = useState("")

    function getSymptoms() {
        fetch("http://localhost:8001/symptoms",
            {
                method: 'GET',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => m.json()).then(setSymptoms)
    }

    useEffect(() => {
        getSymptoms()
    }, [])

  return (
    <div>
        <p>{JSON.stringify(symptoms)}</p>
        <button onClick = {getSymptoms}>Update</button>
    </div>
  )
}