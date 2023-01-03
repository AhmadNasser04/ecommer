import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    currentImage >= images.length - 1
      ? setCurrentImage(0)
      : setCurrentImage(currentImage + 1);
  };

  const prevImage = () => {
    currentImage === 0
      ? setCurrentImage(images.length - 1)
      : setCurrentImage(currentImage - 1);
  };

  return (
    <div className="w-screen h-[700px] relative flex">
      {/* IMAGE */}
      <img
        src={images[currentImage]}
        alt="carousel"
        className="w-full h-full object-cover absolute"
      />
      {/* ARROW BUTTONS */}
      <div className="w-screen flex justify-between items-center">
        <IconButton onClick={prevImage}>
          <ArrowBackIosNewIcon fontSize="large" className="text-white" />
        </IconButton>
        <IconButton onClick={nextImage}>
          <ArrowForwardIosIcon fontSize="large" className="text-white" />
        </IconButton>
      </div>
      {/* CURRENT IMAGE INDICATOR */}
      <div className="absolute left-1/2 bottom-5">
        <div className="flex relative left-[-50%] space-x-5 text-white cursor-default select-none">
          {images.map((value, index) =>
            index === currentImage ? (
              <CircleIcon key={index} fontSize="small" />
            ) : (
              <CircleOutlinedIcon key={index} fontSize="small" />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
