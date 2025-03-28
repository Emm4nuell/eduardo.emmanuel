import Animate from "@/components/Animate";
import AnimateContato from "@/components/AnimateContato";
import CardContato from "@/components/CardContato";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { useEffect, useState } from "react";

const Contato = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(!animate);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-[90vh] w-full p-6 bg-gray-900">
      <div className="max-w-170">
        <Animate times={100}>
          <h1 className="text-white">Contato</h1>
          <h1 className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-400 text-transparent bg-clip-text">
            Eduardo Emmanuel
          </h1>
        </Animate>

        <Animate times={300}>
          <p className="text-center text-lg font-light text-gray-300 mt-4 mb-20">
            Fique à vontade para entrar em contato comigo! Seja para tirar
            dúvidas, trocar ideias ou discutir sobre possíveis colaborações,
            estou disponível para conversar e ajudar no que for preciso.
          </p>
        </Animate>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mx-auto">
        <AnimateContato times={300}>
          <div className="border-2 p-6 border-gray-700 rounded-lg bg-gray-800">
            <CardContato titulo="Entre em Contato">
              <form action="" className="grid gap-5">
                <Input labelfor="nome" label="Nome" type="text" />
                <Input labelfor="email" label="E-mail" type="email" />
                <Input labelfor="empresa" label="Empresa" type="text" />
                <Input labelfor="contato" label="Contato" type="text" />
                <label htmlFor="mensagem" className="text-sm text-gray-300">
                  Mensagem
                </label>
                <TextArea />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-200"
                >
                  Enviar
                </button>
              </form>
            </CardContato>
          </div>
        </AnimateContato>

        <div className="flex flex-col gap-10">
          <CardContato titulo="Meus Contatos">
            <ul className="text-white space-y-2">
              <li>
                <strong>E-mail: </strong>eduardo.eesf@gmail.com
              </li>
              <li>
                <strong>Contato: </strong>+55 (83) 99869-9835
              </li>
              <li>
                <strong>WhatsApp: </strong>+55 (83) 99869-9835
              </li>
            </ul>
          </CardContato>

          <CardContato titulo="Onde me Encontrar">
            <iframe
              id="map"
              title="Meu endereço"
              className="w-full h-[300px] rounded-2xl border-2 border-orange-500"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.0906698297153!2d-34.8457591!3d-7.1742328999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acc2694ce2d2eb%3A0x65dc0ad441a7b872!2sR.%20Ten.%20Frederico%20Carlos%20Jacob%20Junior%2C%2079%20-%20Mangabeira%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058057-575!5e0!3m2!1spt-BR!2sbr!4v1711111111111!5m2!1spt-BR!2sbr"
              loading="lazy"
            />
          </CardContato>
        </div>
      </div>
    </div>
  );
};

export default Contato;
