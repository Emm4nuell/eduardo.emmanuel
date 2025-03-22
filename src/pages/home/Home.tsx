import Button from "@/components/Button";
import SwaperSlider from "@/components/swaperslider";

const Home = () => {
  return (
    <div className="relative h-[90vh] overflow-hidden">
      <SwaperSlider />
      <div className="z-1 absolute w-[90%] sm:w-[640px] border-2 border-white/30 bg-black/40 backdrop-blur-md p-8 rounded-lg shadow-2xl text-white text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl font-extrabold mb-2">
          EDUARDO EMMANUEL
          <p className="text-orange-500 text-lg font-semibold mt-1">
            Desenvolvedor Full Stack
          </p>
        </h1>
        <p className="text-base leading-relaxed mt-4 mb-6 text-gray-200">
          Sou um desenvolvedor Full Stack apaixonado por tecnologia, sempre
          buscando criar soluções eficientes, escaláveis e bem estruturadas.
        </p>
        <Button value="Ver Meu Portfólio" />
      </div>
    </div>
  );
};

export default Home;
