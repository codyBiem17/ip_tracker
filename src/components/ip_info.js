const IPINFO = (props) => {
 return(
        <div className="bg-white w-4/5 mx-auto my-4 p-3 rounded-lg ipInfo-div">
            <div className="w-full mb-4 mt-2">
                <p className="font-bold text-xs tracking-widest uppercase">Ip Address</p>
                <p className="font-bold text-black text-base">{props.currentIp.ip}</p>
            </div>
            <div className="w-full mb-4">
                <p className="font-bold text-xs tracking-widest uppercase">Location</p>
                <p className="font-bold text-black text-base">
                    <span> {props.currentIp.location.city}, </span>
                    <span> {props.currentIp.location.region}, </span>
                    <span> {props.currentIp.location.country} </span>
                </p>
            </div>
            <div className="w-full mb-4">
                <p className="font-bold text-xs tracking-widest uppercase">Timezone</p>
                <p className="font-bold text-black text-base">{props.currentIp.location.timezone}</p>
            </div>
            <div className="w-full mb-4">
                <p className="font-bold text-xs tracking-widest uppercase">ISP</p>
                <p className="font-bold text-black text-base">{props.currentIp.isp}</p>
            </div>
        </div>
    )
}

export default IPINFO