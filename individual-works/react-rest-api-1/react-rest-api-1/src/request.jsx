import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Button from './colors'


const ButtonClick = () => {
    const [requests, setRequests] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
      response()
    }, [])
    
    const response = async () => {
        setLoading(true)
        try {
        const response = await axios.get('https://api.golemio.cz/v2/gtfs/routes?limit=30', {
            headers: {
                "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkYW1lazU1NUBlbWFpbC5jeiIsImlkIjoxNjQxLCJuYW1lIjpudWxsLCJzdXJuYW1lIjpudWxsLCJpYXQiOjE2NzQ0NzU3NjIsImV4cCI6MTE2NzQ0NzU3NjIsImlzcyI6ImdvbGVtaW8iLCJqdGkiOiI0YWIyNTc4NS1jYjk5LTRhNTAtYjkxMi01OWMwMzVkZDAzMGMifQ.2upbmRpJ8WaPyk5Un5_9Qr4D4CHQbxRObI67tt922mk"
              }
          })
          const data = response.data
          setRequests(data)
          console.log(data)
        } catch (error) {
          console.error(error);
        }
        setLoading(false)
    }

    return (
        <div>
            {loading ? <div> This is loading... </div> : null}
            <div>
                {requests.length > 0 && (
                    <ul>
                        {requests.map(request => (
                            <li key={request.route_id} className='grid grid-cols-6 w-3/4 mx-auto'>
                                <a href={`${request.route_url}`} className="" style={{backgroundColor: `#${request.route_color}`}}>{request.route_id}</a>
                                <div className="col-span-4" style={{backgroundColor: `#${request.route_color}`}}>{request.route_long_name}</div>
                                <div className="" style={{backgroundColor: `#${request.route_color}`}}>{request.route_short_name}</div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
export default ButtonClick
/* => {
            const data = await response()
            console.log(response)
            setRequest(data) }}> 
        
        <pre>{JSON.stringify(requests,null,2)}</pre>
            */