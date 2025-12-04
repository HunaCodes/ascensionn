'use client'

import Page from "@/Components/Page";
import AboutUs from "@/Components/Pages/AboutUs";
import Home from "@/Components/Pages/Home";


type ComponentConfig = {
  Component: React.ReactNode
  props?: any
}


export default function Ascensionn() {
  
  const pages:ComponentConfig[] = [
    {Component: <Home/>},
    {Component: <AboutUs/>},
    {Component: <AboutUs/>},
    {Component: <AboutUs/>},
    {Component: <AboutUs/>},
  ];

  
  return (
    <div className="text-white w-screen h-screen overflow-y-auto overflow-x-hidden overflow-hidden snap-y snap-mandatory">
      
      <div className="flex flex-col" style={{background: "linear-gradient(to bottom, #051923 2%, #003554 44%, #006494 90%, #0582CA 100%)", backdropFilter:'blur(10px)'}}>
        {pages.map((page, index) => (
            <Page key={index} >
              {page.Component}
            </Page>
        ))}
      </div>

    </div>
  );
}
