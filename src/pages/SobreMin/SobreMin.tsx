import Card from "@/components/Card";
import { FaAddressCard, FaUserGraduate } from "react-icons/fa";
import fotoperfil from "@/assets/fotoperfil.jpeg";

export default function SobreMin() {
  return (
    <div className="flex flex-col items-center gap-5 p-4 md:p-15 bg-black/95 text-white w-full min-h-[90vh]">
      <div className="flex flex-col items-center">
        <div className="w-26 h-26 bg-orange-500 border-2 border-orange-500 rounded-full flex items-center justify-center text-2xl font-bold overflow-hidden">
          <img
            src={fotoperfil}
            alt="Foto"
            className="w-26 h-26 rounded-[50px] scale-[1.2] border-2 border-orange-500"
          />
        </div>
        <h2 className="text-xl font-semibold mt-4">Eduardo Emmanuel</h2>
        <p className="text-orange-500">Desenvolvedor Full Stack</p>
      </div>

      <Card
        icons={
          <FaAddressCard className="bg-[#404040] w-9 h-9 p-[6px] text-[#FE9A00] rounded-[6px]" />
        }
        titulo="Sobre Mim"
      >
        <strong>
          Desenvolvedor Full Stack especializado em Spring Boot e boas práticas
          de programação. Experiência na criação de APIs RESTful e sistemas
          escaláveis, com foco em desempenho e experiência do usuário.
        </strong>
      </Card>

      <Card
        icons={
          <FaUserGraduate className="bg-[#404040] w-9 h-9 p-[6px] text-[#FE9A00] rounded-[6px]" />
        }
        titulo="Formação Acadêmica"
      >
        <ul className="list-disc list-inside text-sm mt-2">
          <strong>Pós-graduação (Em andamento): </strong>
          <span>MBA em Full Stack Web Development - UNIESP (2024 - 2025)</span>
          <li>
            <strong>BACK-END: </strong>Spring Boot, Arquitetura Hexagonal,
            RabbitMQ, Kafka, SOLID
          </li>
          <li>
            <strong>FRONT-END: </strong>React, Next.js e Angular
          </li>
          <strong>Tecnólogo: </strong>
          <span>Sistemas para Internet - FATECPB (2011 - 2014)</span>
        </ul>
      </Card>

      <Card
        icons={
          <FaAddressCard className="bg-[#404040] w-9 h-9 p-[6px] text-[#FE9A00] rounded-[6px]" />
        }
        titulo="Experiência Profissional"
      >
        <p className="text-sm mt-2">
          <strong>
            SampaioForce (Trabalho Voluntário) - Full Stack Developer (2024 -
            Presente)
          </strong>
        </p>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>
            Desenvolvimento de APIs RESTful com Spring Boot, JPA, Mysql e SOLID.
          </li>
          <li>Criação de interfaces com Next.js.</li>
          <li>
            Uso de Flyway para versionamento de banco de dados e GIT/GITHUB.
          </li>
        </ul>
      </Card>

      <Card
        icons={
          <FaAddressCard className="bg-[#404040] w-9 h-9 p-[6px] text-[#FE9A00] rounded-[6px]" />
        }
        titulo="Certificações"
      >
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Spring Boot Expert - Segurança com JWT e boas práticas.</li>
          <li>Microserviços e Mensageria - Spring Cloud e Docker.</li>
          <li>Criação de Serviços Web com Spring Boot.</li>
        </ul>
      </Card>

      <Card
        icons={
          <FaAddressCard className="bg-[#404040] w-9 h-9 p-[6px] text-[#FE9A00] rounded-[6px]" />
        }
        titulo="Habilidades"
      >
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Spring Boot & JPA</li>
          <li>Next.js & React</li>
          <li>Arquitetura Hexagonal</li>
          <li>Docker & Microserviços</li>
          <li>JWT & Segurança</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Flyway & Migrations</li>
          <li>Testes Automatizados (JUnit)</li>
          <li>Otimização de Queries SQL</li>
        </ul>
      </Card>
    </div>
  );
}
