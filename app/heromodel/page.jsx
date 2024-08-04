import React from "react";
import Iron3D from "@/models/Heros/iron3D";
import Hulk3D from "@/models/Heros/hulk3D";
import Thor3D from "@/models/Heros/thor3D";
import Captain3D from "@/models/Heros/captain3D";
import Hawk3D from "@/models/Heros/hawkeye";
import Widow3D from "@/models/Heros/widow3D";

const HeroModel = () => {
  return (
    <div className="text-black font-descript">
      <Iron3D />
    </div>
  );
};

export default HeroModel;
