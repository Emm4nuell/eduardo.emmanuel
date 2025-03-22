import CardContato from "@/components/CardContato";
import Input from "@/components/Input";

const Contato = () => {
  return (
    <div className="flex flex-col items-center min-h-[90vh] w-full p-6 bg-[#1E1E1E]">
      <div className="flex flex-col font-extrabold md:flex-row text-4xl text-center gap-3 mt-10">
        <strong className="text-white">Contato</strong>
        <strong className="text-orange-500">Eduardo Emmanuel</strong>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-10 w-full max-w-5xl mx-auto">
        <div className="border-2 border-[#444444] rounded-lg p-6 bg-[#2A2A2A]">
          <CardContato titulo="Entre em Contato">
            <form action="" className="grid gap-5">
              <Input labelfor="nome" label="Nome" type="text" />
              <Input labelfor="email" label="E-mail" type="email" />
              <Input labelfor="empresa" label="Empresa" type="text" />
              <Input labelfor="contato" label="Contato" type="text" />
              <label htmlFor="mensagem" className="text-sm text-gray-300">
                Mensagem
              </label>
              <textarea
                title="Sua mensagem"
                className="p-3 mt-2 w-full h-32 bg-[#333333] text-white rounded-lg border-2 border-[#444444] focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-200"
              >
                Enviar
              </button>
            </form>
          </CardContato>
        </div>

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
