import Animate from "@/components/Animate";
import CardProjetos from "@/components/CardProjetos";
import { LoadingCardProject } from "@/components/loander/LoadingSkeleto";
import api from "@/service/api";
import { RepoGitPropsType } from "@/types/RepoGitTypes";
import { useEffect, useState } from "react";

const Projeto = () => {
  const [repos, setRepos] = useState<RepoGitPropsType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function github() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const response = await api.get("/Emm4nuell/repos");
        setRepos(response.data);
      } catch (error) {
        setError("Erro ao carregar os repositórios");
        console.error("ERROR: ", error);
      } finally {
        setLoading(false);
      }
    }
    github();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <div className="max-w-170 m-auto">
        <Animate times={100}>
          <h1 className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-400 text-transparent bg-clip-text">
            Meus Repositórios do GitHub
          </h1>
        </Animate>

        <Animate times={500}>
          <p className="text-center text-lg font-light text-gray-300 mt-2 mb-20">
            Aqui você pode visualizar todos os repositórios públicos que
            desenvolvi ou colaboro no GitHub. Cada card exibe detalhes sobre o
            repositório, como descrição, linguagem usada e muito mais.
          </p>
        </Animate>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {!loading
          ? repos.map((repo) => (
              <CardProjetos key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                      {repo.name}
                    </h2>
                    <p className="text-gray-300">
                      {repo.description || "Sem descrição"}
                    </p>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400">
                        {repo.language}
                      </span>
                      <span className="text-sm text-gray-400">
                        ⭐ {repo.stargazers_count}
                      </span>
                      <span className="text-sm text-gray-400">
                        🍴 {repo.forks_count}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{repo.private ? "🔒 Privado" : "🌍 Público"}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <p>
                        Criado em:{" "}
                        {new Date(repo.created_at).toLocaleDateString()}
                      </p>
                      <p>
                        Última atualização:{" "}
                        {new Date(repo.updated_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </a>
              </CardProjetos>
            ))
          : [...Array(3)].map((_, index) => <LoadingCardProject key={index} />)}
      </div>
    </div>
  );
};

export default Projeto;
