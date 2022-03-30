function PersonalProjects(pageProps: any) {
    console.log(pageProps)
    return (
        <div className="divide-y-2 space-y-2">
            {/* <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">Personal Projects</h3>
                <ul>
                    {pageProps?.props?.skills.map((item:any,index:number)=>(
                    <li key={index} className="p-3 space-y-2 list-disc	list-inside">
                        {item.point}
                    </li>
                ))}
                </ul>
            </div> */}
            <div className="space-y-3 pt-2">
                <h3 className="text-2xl font-bold text-gray-900">Academic Projects</h3>
                <div>
                    {pageProps?.props?.academic_projects.map((item: any, index: number) => (
                        <div key={index} className="p-3 space-y-2">
                            <div className="flex lg:flex-row flex-col space-x-2 items-center justify-start">
                                <div className="text-lg font-semibold">{item.name}</div>
                                {item?.url ? <a href={item?.url} target={'_blank'} className="text-blue-500 underline">Base Paper</a>: null}
                            </div>
                            <p className="indent-8">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PersonalProjects;