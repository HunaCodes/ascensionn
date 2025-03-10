'use client'
import Image from "next/image";

export default function Home() {
  return (
    <div id = 'BG' style={{height:"100vh"}} >
          <img id = 'Logo' alt = 'Logo' src = {'/logo.png'}/>
          <h1 id = "AscensionTitle">ASCENSI &nbsp; NN </h1>
        </div>
  );
}
