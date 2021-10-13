import { SearchIcon } from '@heroicons/react/solid'
import { forwardRef } from 'react'
import { IPINFO } from '../components'



const IPAddress = forwardRef((props, ref) => {
    return (
    
        <header className="bg-header-img bg-cover h-60 relative z-40">
            <div className="header-text ipAddress">
                <p className="header-title font-bold p-4 text-white">IP Address Tracker</p>
                <form className="my-1" onSubmit={props.handleSubmit}>
                    <input 
                        type="text" 
                        className="rounded-l-lg" 
                        value={props.value} 
                        onChange={props.handleChange}
                        ref={ref}
                    /> 
                    <button 
                        type="submit" 
                        className="relative top-1 px-3 pt-11px pb-10px rounded-r-xl"
                    > 
                        <SearchIcon className="h-5 w-5 text-white-500" />
                    </button>
                </form> 
            </div>
            <div id="ip-info">
                <IPINFO currentIp={props.currentIp} />
            </div>
        </header> 
    )
})

export default IPAddress