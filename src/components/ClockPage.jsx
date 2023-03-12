import React from "react";
import { useEffect, useState } from "react";

function ClockPage () {

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const [activityName, setActivityName] = useState ('Unnamed activity')

    const [isActive, setIsActive] = useState(false)

    useEffect( () => {
        if ( minutes > 59 ) {
            setHours((hours) => {
                return hours + 1
            })

            setMinutes (0)
        }


        if (seconds > 59 ) {
            setMinutes((minutes) => {
                return minutes + 1
            })

            setSeconds (0)
        }

        if (isActive) {
            var interval = setInterval ( () => {
                setSeconds ((seconds) => {
                    return seconds + 1;
                })
            }, 1000)

            return function cleanup() {
                clearInterval(interval);
            };
        }
    })

    function handleStop () {
        setIsActive(false)

        // save data
    }

    return (
        <>
            <div>
                {hours}:{minutes}:{seconds}         
            </div>

            <div>
                <input type = "text" value = {activityName} onChange = {(event) => setActivityName(event.target.value)}/>
                { isActive  
                    ? <input type="button" value="stop" onClick = {handleStop}/>                      
                    : <input type="button" value="start" onClick = {() => setIsActive(true)}/>

                }
            </div>
        </>
    ) 
}

export default ClockPage