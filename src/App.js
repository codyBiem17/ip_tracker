import React, { useEffect, useRef, useState } from "react";
import Loader from "react-loader-spinner";
import 'leaflet/dist/leaflet.css'
import './App.css';
import { IPAddress, MapArea } from './components'
import axios from 'axios'



function App() {
    const {REACT_APP_IPGEO_API_KEY} = process.env
    const [currentIp, setCurrentIp] = useState({})
    const [value, setValue] = useState()
    const [loading,setLoading] = useState(true)

    const inputRef = useRef()

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const urlInput = inputRef.current.value
        const regex = /(([a-z0-9]+\.)*[a-z0-9]+\.[a-z]+)/
        const extractUrl = urlInput.replace('http://', '').replace('https://','').split(/[/?#]/)[0]
        // inputRef.current.value = extractUrl.toLowerCase()
        
        const domainNameIp = regex.test(urlInput)|| extractUrl ? 'domain' : 'ipAddress'
        
        const domainIP = async () => {
            try {
                const url = `https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=${REACT_APP_IPGEO_API_KEY}&${domainNameIp}=${urlInput}`
                const getUrlData = await axios.get(url) 
                console.log(getUrlData.data)
                setValue(inputRef.current.value)
                setCurrentIp(getUrlData.data)
                setLoading(false)
                // console.log(extractUrl)
            }
            catch(err){
                // console.log(extractUrl)
                alert('ooopss this is an invalid url')
            }
        }
        domainIP()
    }
    

    useEffect(() => {
        const getIP = async () => {
            try {
                const url = `https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=${REACT_APP_IPGEO_API_KEY}`
                const getUrlData = await axios.get(url) 
                // console.log(getUrlData.data)
                setValue(getUrlData.data.ip)
                setCurrentIp(getUrlData.data)
                setLoading(false)
            }
            catch(err){
                console.log(err.getUrlData.data.messages)
            }
        }
        getIP()
    }, [REACT_APP_IPGEO_API_KEY])

 

    return ( 
        <>
            {
                loading ? 
                <div className="fixed top-1/2 left-1/2 transform
                    -translate-x-1/2 -translate-y-1/2"
                >        
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
                        <MapArea currentIp={currentIp} />
                    </div>
                </div>
            }
        </>
    );
}

export default App;