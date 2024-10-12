import React from 'react'

const Cards = () => {
  return (
    <div  id="our-expertise" className="cards-headings bg-[#050505] sm:pt-[20rem] pt-[10vh]">
        <div className="w-full h-screen text-white ">
            <div className="flex justify-between items-center sm:px-12 px-4">
                <h1 className="text-[12vw] bg-teal-40 w-fit whitespace-nowrap font-neuehaas leading-none tracking-tight font-medium antialiased">Adobe Firefly</h1>
                <div className="w-full sm:block hidden sm:w-[20%] h-full ">
                    <h5 className="text-[0.9vw] font-neuehaas font-semibold tracking-wider uppercase">A list of features adobe firefly does for you</h5>
                    <div className="flex mt-4 gap-2">
                        <div className="w-8 h-10 rounded-[5px] border aspect-card grid place-items-center">
                            <h1 className="font-grotesk font-semibold">G</h1>
                        </div>
                        <div className="w-8 h-10 rounded-[5px] border aspect-card grid place-items-center">
                            <h1 className="font-grotesk font-semibold">T</h1>
                        </div>
                        <div className="w-8 h-10 rounded-[5px] border aspect-card grid place-items-center">
                            <h1 className="font-grotesk font-semibold">S</h1>
                        </div>
                        <div className="w-8 h-10 rounded-[5px] border aspect-card grid place-items-center">
                            <h1 className="font-grotesk font-semibold">R</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
