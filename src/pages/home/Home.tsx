import Button from "@/components/Button";
import SwaperSlider from "@/components/swaperslider";
import React from "react";

const Home = () => {
  return (
    <div className="z-2 relative h-[90vh] bottom-0">
      <SwaperSlider />
      <div className="grid absolute z-10 border-1 border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-lg text-white w-160 h-60">
        <h1 className="text-[35px] font-extrabold text-center">
          EDUARDO EMMANUEL
        </h1>
        <p className="text-sm leading-relaxed">
          Desenvolvedor Full Stack apaixonado por tecnologia e boas práticas de
          programação. Busco sempre aprimorar minhas habilidades e criar
          soluções eficientes e escaláveis.
        </p>
        <Button value="Meu Perfil" />
      </div>
    </div>
  );
};

export default Home;
