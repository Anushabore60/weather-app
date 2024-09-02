import { useState } from "react"
export function Searchbox({city}){
    const [input,setInput]=useState("")
    const buttonhandle=()=>{
        city(input)
    }
   
    return<div className=" flex justify-center pt-40 ">
    <div className="relative flex w-full max-w-[24rem] sm:max-w-[32rem] md:max-w-[40rem] xl:max-w-[60rem]">
      <img 
      src="https://cdn.pixabay.com/photo/2012/04/18/13/56/cloud-37097_1280.png"
      alt="cloud"
      className="absolute left-[-30px] top-[-50px] w-12 h-auto sm:w-16 md:w-24 xl:w-32"
      
 
      />
   <img 
      src="https://cdn.pixabay.com/photo/2012/04/18/13/56/cloud-37097_1280.png"
      alt="cloud"
      style={{ width: "140px", height: "auto" }}
      className="absolute left-[-30px] top-[-50px] w-12 h-auto sm:w-16 md:w-24 xl:w-32"
      />
       <div className="relative h-14 w-full min-w-[200px]">
      <input type="text"
        className="  peer h-full w-full rounded-full  bg-white/30 backdrop-blur-lg text-white placeholder-white pl-4  "
        placeholder="enter city name " value={input} 
        onChange={(e)=>setInput(e.target.value)}
       />
    </div>
    <button className="!absolute right-1 top-1 select-none rounded bg-blue-gray-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
      type="button"
      onClick={buttonhandle}>
      submit
    </button>
  </div>  
  </div>
}
   
  