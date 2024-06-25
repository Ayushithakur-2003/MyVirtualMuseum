import { useState, useEffect } from "react";
import axios from "axios";
function ContentGrid(){
  const [apod, setApod] = useState({});
  
  useEffect(() => {
    // Fetch Astronomy Picture of the Day
    axios.get('https://api.nasa.gov/planetary/apod?api_key=diO51zeLGvrk6PIn1wIqHeW94DZR9uRB1Z2agnh6')
      .then(response => {
        setApod(response.data);
      })
      .catch(error => {
        console.error('Error fetching APOD:', error);
      });
  })


return(
<div className="min-h-screen min-w-screen ml-0 md:ml-32 p-4">
<div className="mt-32 grid md:flex bg-none w-full h-fit shadow-white rounded mb-5">
  <img className="w-fit h-64 shadow rounded" src={apod.url} alt="" />
  <p className="text-white text-justify font-light px-2 overflow-hidden" >
    <h1 className=" text-4xl font-semibold text-content">{apod.title} <span className="font-thin text-base bg-green-600 rounded-md p-0.5">  Astronomy picture of the Day</span></h1> <br />
    {apod.explanation}</p>
    </div>
    <hr className=" border-green-600" />
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
  {/* <div className="bg-gray-200 w-62 h-96 shadow rounded overflow-hidden justify-center">
  <div className=" bg-[url('https://st4.depositphotos.com/11928092/22137/v/450/depositphotos_221376730-stock-illustration-mars-planet-rocket-paper-art.jpg')] w-62 h-96 blur-sm bg-cover bg-clip-border hover:from-violet-950/80 via-violet-900/50" >
  <h2 className="mb-6 items-center font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      Explore The Mars Corner
    </h2>
  </div>
  </div> */}
  <div
  class="relative grid h-[24rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-none bg-clip-border text-center text-gray-700">
  <div
    class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://st4.depositphotos.com/11928092/22137/v/450/depositphotos_221376730-stock-illustration-mars-planet-rocket-paper-art.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>

  <div class="relative p-6 px-6 py-14 md:px-12">
    <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
    The Mars Corner
    </h2>
    <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
      Explore
    </h5>
    <a href="https://main.d3tf97kbv6gnou.amplifyapp.com/Mars">
    <img alt="Tania Andrew"
      src="https://st4.depositphotos.com/11928092/22137/v/450/depositphotos_221376730-stock-illustration-mars-planet-rocket-paper-art.jpg"
      class="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" /></a>
  </div>
</div>

  <div
  class="relative grid h-[24rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-none bg-clip-border text-center text-gray-700">
  <div
    class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://st4.depositphotos.com/1905705/23962/v/450/depositphotos_239620552-stock-illustration-space-vector-background-glossy-planets.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  
  <div class="relative p-6 px-6 py-14 md:px-12">
    <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
    The Star Gallery
    </h2>
    <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
      Explore
    </h5>
    <a href="https://main.d3tf97kbv6gnou.amplifyapp.com/Explore">
    <img alt="Tania Andrew"
      src="https://st4.depositphotos.com/1905705/23962/v/450/depositphotos_239620552-stock-illustration-space-vector-background-glossy-planets.jpg"
      class="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" /></a>
  </div>
</div>

<div
  class="relative grid h-[24rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-none bg-clip-border text-center text-gray-700">
  <div
    class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://media2.giphy.com/media/VOgpnDOAddaN0zr9UE/giphy.gif?cid=790b7611ordwgj83ykls5r01pebk53ajydycopwtuga7wu2t&ep=v1_gifs_search&rid=giphy.gif&ct=g')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  
  <div class="relative p-6 px-6 py-14 md:px-12">
    <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
    3D Planetary Models
    </h2>
    <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
     Explore
    </h5>
    <a href="https://main.d3tf97kbv6gnou.amplifyapp.com/Model">
    <img alt="Tania Andrew"
      src="https://media2.giphy.com/media/VOgpnDOAddaN0zr9UE/giphy.gif?cid=790b7611ordwgj83ykls5r01pebk53ajydycopwtuga7wu2t&ep=v1_gifs_search&rid=giphy.gif&ct=g"
      class="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" /></a>
  </div>
</div>


</div>
<div className="flex bg-[url('https://img.freepik.com/free-vector/satellites-around-earth-scene_1308-71512.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711670400&semt=ais')] bg-cover bg-clip-border w-full h-80 p-6 shadow rounded mt-10">
<h2 className="mb-6 items-center font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      Catch up on all the events.
    </h2>
</div>
<hr className=" border-green-600 m-6" />
<div className=" w-fit bg-zinc-900 p-4">
<h1 className=" text-3xl text-white">About us</h1> 
<p className="m-10 text-white text-justify" >
Welcome to the Space Virtual Museum, where the wonders of the cosmos are at your fingertips. Our museum is a digital portal to the awe-inspiring universe beyond our own planet, offering a unique and immersive exploration of space exploration, astronomy, and the mysteries of the cosmos.
</p>
<p className="m-10 text-white text-justify" >
At the Space Virtual Museum, we are passionate about sharing the wonders of space with people from all walks of life. Whether you're a seasoned astronomer, a curious student, or simply someone who marvels at the beauty of the night sky, there is something here for you.Our museum features a diverse collection of exhibits, each carefully curated to showcase the remarkable achievements and discoveries made by humanity in the realm of space. From the pioneering missions of the Apollo program to the breathtaking images captured by telescopes like the Hubble Space Telescope, our exhibits offer a glimpse into the vastness and complexity of the universe.
</p>
<p className="m-10 text-white text-justify" >
But our museum is more than just a collection of artifacts and images. It's a journey through time and space, where you can learn about the history of space exploration, the science behind the cosmos, and the ongoing quest to unlock the secrets of the universe. Through interactive exhibits, virtual tours, and multimedia presentations, we aim to inspire curiosity, spark imagination, and foster a deeper understanding of the cosmos.Whether you're exploring the surface of Mars with a rover, learning about the life cycle of stars, or marveling at the beauty of distant galaxies, we invite you to embark on an unforgettable journey through the cosmos at the Space Virtual Museum. Join us as we reach for the stars and explore the wonders of the universe together.
</p>
<p className="m-10 text-white text-justify" >
In addition to our permanent exhibits, the Space Virtual Museum will be adding special events, guest lectures, and educational programs designed to engage audiences of all ages. From live Q&A sessions with astronauts to virtual stargazing events led by expert astronomers, there are countless opportunities to deepen your understanding of space and connect with others who share your passion for exploration. Whether you're a student looking to expand your knowledge or a lifelong learner seeking inspiration, the Space Virtual Museum is your gateway to the cosmos. Join us on this extraordinary journey of discovery, where the wonders of space await at every turn.
</p>
</div>
<hr className=" border-green-600 m-6" />
  <h1 className="text-5xl text-white font-bold my-20">Tech Stack</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
    <p className="grid place-items-center md:flex gap-2 text-3xl text-white font-bold items-center hover:text-green-600"><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React logo" width={70} height={50} /> <a href="https://react.dev/">REACT JS</a></p>
    <p className="grid place-items-center md:flex gap-2 text-3xl text-white font-bold items-center hover:text-green-600"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" alt="Vite logo" width={70} height={50} /> <a href="https://vitejs.dev/guide/">VITE</a></p>
    <p className="grid place-items-center md:flex gap-2 text-3xl text-white font-bold items-center hover:text-green-600"><img src="https://www.loopple.com/img/tailwind-logo.png" alt="Tailwind css logo" width={70} height={50} /><a href="https://tailwindcss.com/">TAILWIND</a></p>
    <p className="grid place-items-center md:flex gap-2 text-3xl text-white font-bold items-center hover:text-green-600"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" alt="Nasa logo" width={70} height={50} /> <a href="https://ssd-api.jpl.nasa.gov/doc/index.php">NASA API</a></p>
  </div>

</div>
    )
}

export default ContentGrid;
