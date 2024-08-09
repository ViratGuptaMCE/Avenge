'use client'
import React, { useContext } from "react";
import Iron3D from "@/models/Heros/iron3D";
import Hulk3D from "@/models/Heros/hulk3D";
import Thor3D from "@/models/Heros/thor3D";
import Captain3D from "@/models/Heros/captain3D";
import Hawk3D from "@/models/Heros/hawkeye";
import Widow3D from "@/models/Heros/widow3D";
import ModelLoader from "@/components/modelLoader";
import { slideContext } from "@/contexts/contexts";

const renderModel = (value) => {
  switch (value) {
    case 2:
      return <Hulk3D />;
    case 3:
      return <Captain3D />;
    case 4:
      return <Thor3D />;
    case 5:
      return <Widow3D />;
    case 6:
      return <Hawk3D />;
    default:
      return <Iron3D />;
  }
};

const HeroModel = () => {
  const slide = useContext(slideContext);
  console.log(slide.value);
  return (
    <div className="text-black font-descript relative">
      <ModelLoader />
      {renderModel(slide.value)}
    </div>
  );
};

export default HeroModel;
