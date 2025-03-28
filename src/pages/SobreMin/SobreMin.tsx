import Card from "@/components/Card";
import { LoadingPerfil } from "@/components/loander/LoadingSkeleto";
import api from "@/service/api";
import { useEffect, useState } from "react";
import {
  FaUserAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaTools,
} from "react-icons/fa";

type AvatarPropsType = {
  avatar?: string | undefined;
};

export default function SobreMin() {
  const [fotoPerfil, setFotoPerfil] = useState<AvatarPropsType | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getAvatar() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const request = await api.get("/Emm4nuell");
        setFotoPerfil({ avatar: request.data.avatar_url });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getAvatar();
  }, []);
  return (
    <div className="flex flex-col items-center gap-8 p-6 md:p-16 text-white w-full min-h-[90vh] bg-gray-900">
      <div className="flex flex-col items-center text-center gap-4">
        {!loading ? (
          <>
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500 transition-transform duration-500 hover:scale-110">
              <img
                src={fotoPerfil?.avatar}
                alt="Foto de Eduardo Emmanuel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-4xl font-bold text-white">
                Eduardo Emmanuel
              </h2>
              <p className="text-orange-400 text-lg">
                Desenvolvedor Full Stack
              </p>
            </div>
          </>
        ) : (
          <LoadingPerfil />
        )}

        {/* <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500 mb-4 transition-transform duration-500 hover:scale-110">
          {fotoPerfil?.avatar ? (
            <img
              src={fotoPerfil.avatar}
              alt="Foto de Eduardo Emmanuel"
              className="w-full h-full object-cover"
            />
          ) : (
            <h1>teste de sistema</h1>
          )}
        </div>
        <h2 className="text-4xl font-bold text-white mb-2">Eduardo Emmanuel</h2>
        <p className="text-orange-400 text-lg">Desenvolvedor Full Stack</p> */}
      </div>

      <section className="flex flex-col gap-8 w-full max-w-4xl">
        <Card
          icons={
            <FaUserAlt className="bg-[#404040] text-[#FE9A00] w-10 h-10 p-2 rounded-[10px]" />
          }
          titulo="Sobre Mim"
        >
          <p className="leading-relaxed text-gray-300">
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
            <FaGraduationCap className="bg-[#404040] text-[#FE9A00] w-10 h-10 p-2 rounded-[10px]" />
          }
          titulo="Formação Acadêmica"
        >
          <ul className="list-none space-y-2 text-sm text-gray-300">
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
            <FaBriefcase className="bg-[#404040] text-[#FE9A00] w-10 h-10 p-2 rounded-[10px]" />
          }
          titulo="Experiência Profissional"
        >
          <p className="text-sm text-gray-300">
            <strong>
              SampaioForce (Trabalho Voluntário) - Full Stack Developer (2024 -
              Presente)
            </strong>
          </p>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-gray-300">
            <li>
              Desenvolvimento de APIs RESTful com Spring Boot, JPA e MySQL.
            </li>
            <li>Criação de interfaces modernas com Next.js.</li>
            <li>Uso de Flyway para versionamento do banco de dados.</li>
          </ul>
        </Card>

        <Card
          icons={
            <FaCertificate className="bg-[#404040] text-[#FE9A00] w-10 h-10 p-2 rounded-[10px]" />
          }
          titulo="Certificações"
        >
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
            <li>Spring Boot Expert - Segurança com JWT e boas práticas.</li>
            <li>Microserviços e Mensageria - Spring Cloud e Docker.</li>
            <li>Criação de Serviços Web com Spring Boot.</li>
          </ul>
        </Card>

        <Card
          icons={
            <FaTools className="bg-[#404040] text-[#FE9A00] w-10 h-10 p-2 rounded-[10px]" />
          }
          titulo="Habilidades"
        >
          <ul className="grid grid-cols-2 gap-4 text-sm text-gray-300">
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
