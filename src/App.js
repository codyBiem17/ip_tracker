import React, { useEffect, useRef } from "react";
import Loader from "react-loader-spinner";
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
        const regex = /(([a-z0-9]+\.)*[a-z0-9]+\.[a-z]+)/
        const url = inputRef.current.value
        const extractUrl = url.replace('http://', '').replace('https://','').split(/[/?#]/)[0]
        inputRef.current.value = extractUrl
        const domainNameIp = regex.test(inputRef.current.value) || inputRef.current.value ? 'domain' : 'ipAddress'
        
        const domainIP = async () => {
            try {
                const url = `https://geo.ipify.org/api/v1?apiKey=${REACT_APP_GEO_API_KEY}&${domainNameIp}=${inputRef.current.value}`
                const getUrlData = await axios.get(url) 
                setValue(inputRef.current.value)
                setCurrentIp(getUrlData.data)
                setLoading(false)
                console.log(extractUrl)
            }
            catch(err){
                console.log(extractUrl)
                alert('ooopss this is an invalid url')
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
                loading ? 
                <div className="fixed top-1/2 left-1/2 transform
                    -translate-x-1/2 -translate-y-1/2">
        
                    <Loader
                        type="Grid"
                        color="white"
                        height={100}
                        width={100}
                    />
                </div>
                :
                <div className = "App">
                    <IPAddress 
                        currentIp={currentIp} 
                        value={value} 
                        handleChange={handleChange} 
                        handleSubmit={handleSubmit} 
                        ref={inputRef}
                    />
                    <div id="mapid" className="h-screen w-full relative z-0">
                        <MapArea center={currentIp && [currentIp.location.lat, currentIp.location.lng]} />
                    </div>
                </div>
            }
        </>
    );
}

export default App;