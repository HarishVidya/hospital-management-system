import React, { useState, useEffect, Component} from 'react'

export default function GetStatus() {

    const [room, setRoom] = useState("")

    function getRoom() {
        fetch("http://localhost:8003/status",
            {
                method: 'GET',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => m.json()).then(setRoom)
    }

    useEffect(() => {
        getRoom()
    }, [])

  return (
    <div>
        <p>{JSON.stringify(room)}</p>
        <button onClick = {getRoom}>Update</button>
    </div>
  )
}