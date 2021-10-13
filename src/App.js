import React, { useEffect, useRef } from "react";
import 'leaflet/dist/leaflet.css'
import './App.css';
import { IPAddress, MapArea } from './components'
import { useState } from "react/cjs/react.development";
import axios from 'axios'



function App() {
    const {REACT_APP_GEO_API_KEY} = process.env
    const [currentIp, setCurrentIp] = useState({})
    const [value, setValue] = useState()
    const [loading,setLoading] = useState(true)

    const inputRef = useRef()

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const domainIP = async () => {
            try {
                const url = `https://geo.ipify.org/api/v1?apiKey=${REACT_APP_GEO_API_KEY}&ipAddress=${inputRef.current.value}`
                const getUrlData = await axios.get(url) 
                console.log(getUrlData.data)
                setValue(getUrlData.data.ip)
                setCurrentIp(getUrlData.data)
                setLoading(false)
            }
            catch(err){
                console.log(err.getUrlData.data.messages)
            }
        }
        domainIP()
    }
    

    useEffect(() => {
        const getIP = async () => {
            try {
                const url = `https://geo.ipify.org/api/v1?apiKey=${REACT_APP_GEO_API_KEY}`
                const getUrlData = await axios.get(url) 
                console.log(getUrlData.data)
                setValue(getUrlData.data.ip)
                setCurrentIp(getUrlData.data)
                setLoading(false)
            }
            catch(err){
                console.log(err.getUrlData.data.messages)
            }
        }
        getIP()
    }, [REACT_APP_GEO_API_KEY])

 

    return ( 
        <>
            {
                loading ? <p>Loading...please wait</p> :
                <div className = "App">
                    <IPAddress 
                        currentIp={currentIp} 
                        value={value} 
                        handleChange={handleChange} 
                        handleSubmit={handleSubmit} 
                        ref={inputRef}
                    />
                    <div id="mapid" className="h-screen w-full relative z-0">
                        <MapArea center={currentIp.ip && [currentIp.location.lat, currentIp.location.lng]} />
                    </div>
                </div>
            }
        </>
    );
}

export default App;