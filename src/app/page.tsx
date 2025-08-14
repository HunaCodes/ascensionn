'use client'

import Page from "@/Components/Page";
import Home from "@/Components/Pages/Home";
type ComponentConfig = {
  Component: React.ReactNode
  props?: any
}

export default function Ascensionn() {
  
  const pages:ComponentConfig[] = [
    {Component: <Home/>},
    {Component: <Home/>}
    
  ];
  return (
    <div className="text-white snap-y w-screen h-screen overflow-y-auto snap-mandatory">
      <div style={{
        background: "linear-gradient(to bottom, #051923 10%, #003554 44%, #006494 86%, #0582CA 100%)"}} 
      className="flex w-screen h-fit flex-col snap-y snap-mandatory">
        {pages.map((Content, index) => (
            <Page key={index} >
              {Content.Component}
            </Page>
        ))}
      </div>
    </div>
  );
}
