import React from "react";
import ReactPlayer from "react-player";

export default function Video() {
  return (
    <ReactPlayer
      url="/videos/Global Garment_1.mp4"
      width="50vw"
      height="50vh"
      playing={true}
      
    
    />
  );
}
