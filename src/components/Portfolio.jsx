import React from "react";
import arrayDestruct from "../assets/portfolio/Genius.png";
import navbar from "../assets/portfolio/spotify.png";
import reactParallax from "../assets/portfolio/Movix.png";
import reactSmooth from "../assets/portfolio/portfolio.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
   
      src: arrayDestruct,
      url:"https://genius-nine-mu.vercel.app/"
    },
    {
      id: 2,
      src: reactParallax,
      href:"https://movix-one-psi.vercel.app/"

    },
    {
      id: 3,
      src: navbar,
      abc:"https://spotify-gric.vercel.app/"

    },
    {
      id: 4,
      src: reactSmooth,
      href:"https://www.instagram.com/maan__778"

    },
    // {
    //   id: 5,
    //   src: installNode,
    //   href:"https://www.instagram.com/maan__778"

    // },
 
  ];
  const openInNewTab = (url,href) => {
    const newWindow = window.open(url,href, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit pt-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,url,href,abc}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
            
              <div className="flex items-center justify-center">
                <button  onClick={()=>openInNewTab(url||href||abc)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
