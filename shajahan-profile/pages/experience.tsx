function Experience() {
    return ( 
        
                    <div className="grid grid-cols-3 p-2">
                        <div className="w-full flex items-center justify-center">
                            <img src="profile_img.png" alt="Profile Imge" className="border-2 h-44 rounded-lg" />
                            {/* <Image src={"/profile_img.png"} width={200} height={240} /> */}
                        </div>
                        <div className="w-full flex flex-col items-center justify-center font-serif">
                            <h2 className="text-6xl ">Shaik Shajahan</h2>
                            <div className="flex divide-x-2">
                                <p className="p-2">shajahan.j2se@gmail.com</p>
                                <p className="p-2">+91 9000425100</p>
                            </div>
                        </div>
                    </div>
                
     );
}

export default Experience;