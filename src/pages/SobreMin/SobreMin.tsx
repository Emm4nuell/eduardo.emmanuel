import Card from "@/components/Card";
import {
  FaUserAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaTools,
} from "react-icons/fa";
import fotoperfil from "@/assets/fotoperfil.jpeg";

export default function SobreMin() {
  return (
    <div className="flex flex-col items-center gap-6 p-6 md:p-16 bg-gray-900 text-white w-full min-h-[90vh]">
      {/* Perfil */}
      <div className="flex flex-col items-center text-center">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-orange-500">
          <img
            src={fotoperfil}
            alt="Foto de Eduardo Emmanuel"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold mt-4">Eduardo Emmanuel</h2>
        <p className="text-orange-400 text-lg">Desenvolvedor Full Stack</p>
      </div>

      {/* Cards */}
      <section className="flex flex-col gap-6 w-full max-w-3xl">
        <Card
          icons={
            <FaUserAlt className="bg-[#404040] text-[#FE9A00] w-9 h-9 p-2 rounded-[10px]" />
          }
          titulo="Sobre Mim"
        >
          <p className="leading-relaxed">
            Desenvolvedor Full Stack com experiência em{" "}
            <strong>Spring Boot</strong> e <strong>React</strong>, focado em
            arquitetura escalável, boas práticas e otimização de código.
            Especializado na criação de APIs RESTful seguras e performáticas,
            aplicando princípios <strong>SOLID</strong>,{" "}
            <strong>Arquitetura Hexagonal</strong> e{" "}
            <strong>Testes Automatizados</strong>. Busco aprimorar
            constantemente minhas habilidades em engenharia de software para
            desenvolver soluções robustas e eficientes.
          </p>
        </Card>

        <Card
          icons={
            <FaGraduationCap className="bg-[#404040] text-[#FE9A00] w-9 h-9 p-2 rounded-[10px]" />
          }
          titulo="Formação Acadêmica"
        >
          <ul className="list-none space-y-2 text-sm">
            <li>
              <strong>MBA (Em andamento): </strong> Full Stack Web Development -
              UNIESP (2024 - 2025)
            </li>
            <li>
              <strong>Tecnólogo: </strong> Sistemas para Internet - FATECPB
              (2011 - 2014)
            </li>
            <li>
              <strong>Especializações: </strong> Spring Boot, Arquitetura
              Hexagonal, RabbitMQ, Kafka, SOLID, Next.js, Angular
            </li>
          </ul>
        </Card>

        <Card
          icons={
            <FaBriefcase className="bg-[#404040] text-[#FE9A00] w-9 h-9 p-2 rounded-[10px]" />
          }
          titulo="Experiência Profissional"
        >
          <p className="text-sm">
            <strong>
              SampaioForce (Trabalho Voluntário) - Full Stack Developer (2024 -
              Presente)
            </strong>
          </p>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>
              Desenvolvimento de APIs RESTful com Spring Boot, JPA e MySQL.
            </li>
            <li>Criação de interfaces modernas com Next.js.</li>
            <li>Uso de Flyway para versionamento do banco de dados.</li>
          </ul>
        </Card>

        <Card
          icons={
            <FaCertificate className="bg-[#404040] text-[#FE9A00] w-9 h-9 p-2 rounded-[10px]" />
          }
          titulo="Certificações"
        >
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Spring Boot Expert - Segurança com JWT e boas práticas.</li>
            <li>Microserviços e Mensageria - Spring Cloud e Docker.</li>
            <li>Criação de Serviços Web com Spring Boot.</li>
          </ul>
        </Card>

        <Card
          icons={
            <FaTools className="bg-[#404040] text-[#FE9A00] w-9 h-9 p-2 rounded-[10px]" />
          }
          titulo="Habilidades"
        >
          <ul className="grid grid-cols-2 gap-2 text-sm">
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
      </section>
    </div>
  );
}
