function Qualification(pageProps:any) {
    console.log("data",pageProps.props)
    return ( 
        <div className="divide-y-2 space-y-2">
        <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gray-900">Skills</h3>
            <ul>
                {pageProps?.props?.skills.map((item:any,index:number)=>(
                    <li key={index} className="p-3 space-y-2 list-disc	list-inside">
                        {item.point}
                    </li>
                ))}
            </ul>
        </div>
        <div className="space-y-3 pt-2">
            <h3 className="text-2xl font-bold text-gray-900">Qualification</h3>
            <div>
                {pageProps?.props?.qualification.map((item:any,index:number)=>(
                    <div key={index} className="p-3 space-y-2">
                        <div className="text-lg font-semibold">{item.name}</div>
                        <p className="indent-8">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
     );
}

export default Qualification;