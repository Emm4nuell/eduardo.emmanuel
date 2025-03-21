export default function SobreMin() {
  return (
    <div className="bg-black text-white w-full">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
          EE
        </div>
        <h2 className="text-xl font-semibold mt-4">Eduardo Emmanuel</h2>
        <p className="text-orange-500">Desenvolvedor Full Stack</p>
      </div>

      <div className="mt-4 bg-gray-100 p-4 rounded-lg text-black">
        <h3 className="text-lg font-semibold">Sobre Mim</h3>
        <p className="text-sm mt-2">
          Desenvolvedor Full Stack especializado em Spring Boot e boas práticas
          de programação. Experiência na criação de APIs RESTful e sistemas
          escaláveis, com foco em desempenho e experiência do usuário.
        </p>
      </div>

      <div className="mt-4 bg-gray-100 p-4 rounded-lg text-black">
        <h3 className="text-lg font-semibold">Formação Acadêmica</h3>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>
            <strong>Pós-graduação (Em andamento)</strong>: MBA em Full Stack Web
            Development - UNIESP (2024 - 2025)
          </li>
          <li>
            <strong>Tecnólogo</strong>: Sistemas para Internet - FATECPB (2011 -
            2014)
          </li>
        </ul>
      </div>

      <div className="mt-4 bg-gray-100 p-4 rounded-lg text-black">
        <h3 className="text-lg font-semibold">Experiência Profissional</h3>
        <p className="text-sm mt-2">
          <strong>
            SampaioForce (Trabalho Voluntário) - Full Stack Developer (2024 -
            Presente)
          </strong>
        </p>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Desenvolvimento de APIs RESTful com Spring Boot e JPA.</li>
          <li>Criação de interfaces com Next.js.</li>
          <li>Uso de Flyway para versionamento de banco de dados.</li>
        </ul>
      </div>

      <div className="mt-4 bg-gray-100 p-4 rounded-lg text-black">
        <h3 className="text-lg font-semibold">Certificações</h3>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Spring Boot Expert - Segurança com JWT e boas práticas.</li>
          <li>Microserviços e Mensageria - Spring Cloud e Docker.</li>
          <li>Criação de Serviços Web com Spring Boot.</li>
        </ul>
      </div>

      <div className="mt-4 bg-gray-100 p-4 rounded-lg text-black">
        <h3 className="text-lg font-semibold">Habilidades</h3>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Spring Boot & JPA</li>
          <li>Next.js & React</li>
          <li>Arquitetura Hexagonal</li>
          <li>Docker & Microserviços</li>
          <li>JWT & Segurança</li>
        </ul>
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/eduardo-emmanuel-096403221"
          className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Emm4nuell"
          className="bg-gray-100 text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
