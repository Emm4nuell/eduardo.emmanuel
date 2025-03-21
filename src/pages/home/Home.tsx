import Button from "@/components/Button";
import SwaperSlider from "@/components/swaperslider";

const Home = () => {
  return (
    <div className="z-0 relative h-[90vh] bottom-0 overflow-hidden">
      <SwaperSlider />
      <div className="grid absolute w-[90%] sm:w-[640px] z-1 border-1 border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md bg- p-8 rounded-lg shadow-lg text-white">
        <h1 className="text-[35px] font-extrabold text-center">
          EDUARDO EMMANUEL
          <p className="text-orange-500 text-[20px]">
            Desenvolvedor Full Stack
          </p>
        </h1>
        <p className="text-sm leading-relaxed mt-5 mb-5">
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
