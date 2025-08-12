'use client'

import Page from "@/Components/Page";
import Home from "@/Components/Pages/Home";
import Test from "@/Components/Pages/Test";
import Review from "@/Components/Pages/Review";
export default function Ascensionn() {
  const pages = [Home,];
  return (
    <div style={{
      background: "linear-gradient(to bottom, #051923 10%, #003554 44%, #006494 86%, #0582CA 100%)",
      color:"white",
      scrollSnapType: "y mandatory",
      scrollBehavior: "smooth",
      overflowY: "scroll"
    }}>
      {pages.map((Content, index) => (
        <Page key={index} >
          <Content />
        </Page>
      ))}
      <Page >
        <Home />
      </Page>
      <Page >
        <Test />
      </Page>
    </div>
  );
}
