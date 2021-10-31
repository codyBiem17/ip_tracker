import { SearchIcon } from '@heroicons/react/solid'
import { forwardRef } from 'react'
import { IPINFO } from '../components'



const IPAddress = forwardRef((props, ref) => {
    return (
        <header className="bg-header-img bg-cover h-60 relative z-40">
            <div className="md:pt-10 lg:pt-14">
                <p className="font-bold p-4 text-white">IP Address Tracker</p>
                <form className="my-1 md:w-full" onSubmit={props.handleSubmit}>
                    <input 
                        type="text" 
                        className="focus:ring-transparent focus:border-transparent md:w-1/2 rounded-l-lg" 
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