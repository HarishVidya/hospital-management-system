import React, { useState, useEffect, Component} from 'react'

export default function GetRooms() {

    const [rooms, setRooms] = useState("")

    function getRooms() {
        fetch("http://localhost:8002/rooms",
            {
                method: 'GET',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => m.json()).then(setRooms)
    }

    useEffect(() => {
        getRooms()
    }, [])

  return (
    <div>
        <p>{JSON.stringify(rooms)}</p>
        <button onClick = {getRooms}>Update</button>
    </div>
  )
}