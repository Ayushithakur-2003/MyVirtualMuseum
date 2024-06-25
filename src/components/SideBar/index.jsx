import React, { useState, useEffect } from 'react';
const SideBar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };

    const [isLightTheme, setIsLightTheme] = useState(false);

      useEffect(() => {
        const root = document.documentElement; // Gets the root HTML element (<html>).
        if (isLightTheme) {
          root.setAttribute('data-theme', 'light'); //If isLightTheme is true, sets a data-theme attribute with the value light on the root element
        } else {
          root.removeAttribute('data-theme'); //If isLightTheme is false, removes the data-theme attribute, reverting to the dark theme
        }
      }, [isLightTheme]); //The useEffect dependency array [isLightTheme] ensures this effect runs only when isLightTheme changes
    
      const toggleTheme = () => {
        setIsLightTheme(prevTheme => !prevTheme); //Updates isLightTheme to the opposite of its current value. If it’s true, it will be set to false, and vice versa
      };  


    return(
        <div>
        <button
        className="md:hidden fixed top-0 left-0 m-4 z-20 p-2 bg-gray-800 text-white rounded"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-32 pt-36 bg-zinc-900 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 z-10`}
      >
        <p className="fixed top-9 text-white font-bold p-8 text-2xl">LOGO</p>
            <a href='https://main.d3tf97kbv6gnou.amplifyapp.com/Mars'><button className=" text-white flex ml-1 p-4 hover:text-green-400"><img className="p-1 w-6" src="https://cdn-icons-png.flaticon.com/512/124/124582.png" width={25} height={25} alt="" />Mars</button> </a>
            <a href='https://main.d3tf97kbv6gnou.amplifyapp.com/Explore'><button className=" text-white flex ml-1 p-4 hover:text-green-400"><img className="p-1" src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.png" width={25} height={25} alt="" />Stars</button> </a>
            <a href='https://main.d3tf97kbv6gnou.amplifyapp.com/Model'><button className=" text-white flex ml-1 p-4 hover:text-green-400"><img className="p-1" src="https://cdn3d.iconscout.com/3d/premium/thumb/planet-6400105-5285076.png" width={25} height={25} alt="" />Models</button></a>
            <a href='https://main.d3tf97kbv6gnou.amplifyapp.com/events'><button className=" text-white flex ml-1 p-4 hover:text-green-400"><img className="p-1" src="https://www.iconpacks.net/icons/2/free-rocket-icon-3432-thumb.png" width={25} height={25} alt="" />Events</button></a> 
        <p className="fixed bottom-0 p-8 text-green-400">#Settings</p>
        <button
          className="lg:hidden absolute top-4 right-4 p-2 bg-gray-700 text-white rounded"
          onClick={toggleSidebar}
        >
          ✕
        </button>
      </div>

      <div class ='hidden md:flex'>
            <aside className="fixed top-0 left-0 h-screen w-32 pt-36 bg-zinc-900">
             <p className="fixed top-0 text-white font-bold p-3 pl-6 text-2xl"><img src="src\assets\Mylogo.png" alt="" srcset="" width={60} height={60} /> </p>
               <a href='https://main.d3tf97kbv6gnou.amplifyapp.com/Mars'><button className=" text-white flex ml-1 p-4 hover:text-green-400"><img className="p-1 w-6" src="https://cdn-icons-png.flaticon.com/512/124/124582.png" width={25} height={25} alt="Mars" />Mars</button> </a>
                <a href='https://main.d3tf97kbv6gnou.amplifyapp.com/Explore'><button className=" text-white flex ml-1 p-4 hover:text-green-400"><img className="p-1" src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.png" width={25} height={25} alt="Stars" />Stars</button> </a>
                <a href='https://main.d3tf97kbv6gnou.amplifyapp.com/Model'><button className=" text-white flex ml-1 p-4 hover:text-green-400"><img className="p-1" src="https://cdn3d.iconscout.com/3d/premium/thumb/planet-6400105-5285076.png" width={25} height={25} alt="Models" />Models</button></a>
                <a href='https://main.d3tf97kbv6gnou.amplifyapp.com/events'><button className=" text-white flex ml-1 p-4 hover:text-green-400"><img className="p-1" src="https://www.iconpacks.net/icons/2/free-rocket-icon-3432-thumb.png" width={25} height={25} alt="Events" />Events</button></a>
                <p className="fixed bottom-0 p-8 text-green-400">#Settings</p> 
            {/* <button onClick={toggleTheme}><img src="https://cdn-icons-png.flaticon.com/512/275/275915.png" alt="dark mode" width={25} height={25} /></button> */}
            </aside>
       </div>
        {/* <div class="hidden md:flex"> 
            <aside class="fixed top-0 left-0 h-screen w-32 pt-36 bg-zinc-900">
            <p className="fixed top-0 text-white font-bold p-8 text-2xl">LOGO</p>
               <a href='https://main.d3tf97kbv6gnou.amplifyapp.com/Mars'> <button className=" text-white flex ml-1 p-4 hover:text-green-400"><img className="p-1 w-6" src="https://cdn-icons-png.flaticon.com/512/124/124582.png" width={25} height={25} alt="" />Mars</button> </a>
                <a href='https://main.d3tf97kbv6gnou.amplifyapp.com/Explore'><button className=" text-white flex ml-1 p-4 hover:text-green-400"><img className="p-1" src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.png" width={25} height={25} alt="" />Stars</button> </a>
                <a href='https://main.d3tf97kbv6gnou.amplifyapp.com/Model'><button className=" text-white flex ml-1 p-4 hover:text-green-400"><img className="p-1" src="https://cdn3d.iconscout.com/3d/premium/thumb/planet-6400105-5285076.png" width={25} height={25} alt="" />Models</button></a>
                <a href='https://main.d3tf97kbv6gnou.amplifyapp.com/events'><button className=" text-white flex ml-1 p-4 hover:text-green-400"><img className="p-1" src="https://www.iconpacks.net/icons/2/free-rocket-icon-3432-thumb.png" width={25} height={25} alt="" />Events</button></a> 
                 <p className="fixed bottom-0 p-8 text-green-400"># Settings</p>
                 
            </aside>
</div> */}
</div>

    )
}

export default SideBar;
