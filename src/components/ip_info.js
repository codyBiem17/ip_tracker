const IPINFO = (props) => {
 return(
        <div className="bg-white w-4/5 mx-auto my-4 md:px-0 md:my-7 md:grid md:grid-cols-2 md:place-items-center lg:grid-cols-4 lg:pt-6 p-3 rounded-lg">
            <div className="w-full mb-4 mt-2 md:mt-0 lg:border-r-2 lg:border-#ededed-400">
                <p className="font-bold text-xs uppercase">Ip Address</p>
                <p className="font-bold text-black text-base">{props.currentIp.ip}</p>
            </div>
            <div className="w-full mb-4 lg:border-r-2 lg:border-#ededed-400">
                <p className="font-bold text-xs uppercase">Location</p>
                <p className="font-bold text-black text-base">
                    <span> {props.currentIp.location.city}, </span>
                    <span> {props.currentIp.location.region}, </span>
                    <span> {props.currentIp.location.country} </span>
                </p>
            </div>
            <div className="w-full mb-4 lg:border-r-2 lg:border-#ededed-400">
                <p className="font-bold text-xs uppercase">Timezone</p>
                <p className="font-bold text-black text-base">{props.currentIp.location.timezone}</p>
            </div>
            <div className="w-full mb-4">
                <p className="font-bold text-xs uppercase">ISP</p>
                <p className="font-bold text-black text-base">{props.currentIp.isp}</p>
            </div>
        </div>
    )
}

export default IPINFO