import Animate from "@/components/Animate";
import CardProjetos from "@/components/CardProjetos";
import api from "@/service/api";
import { RepoGitPropsType } from "@/types/RepoGitTypes";
import { useEffect, useState } from "react";

const Projeto = () => {
  const [repos, setRepos] = useState<RepoGitPropsType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function github() {
      try {
        const response = await api.get("/Emm4nuell/repos");
        setRepos(response.data);
      } catch (error) {
        setError("Erro ao carregar os repositórios");
        console.error("ERROR: ", error);
      }
    }
    github();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-6 md:p-16 text-white">
      <Animate>
        <h1 className="text-4xl font-bold text-center mb-4 text-orange-500">
          Meus Repositórios do GitHub
        </h1>
      </Animate>

      <p className="text-center text-lg text-gray-300 mb-22">
        Aqui você pode visualizar todos os repositórios públicos que desenvolvi
        ou colaboro no GitHub. Cada card exibe detalhes sobre o repositório,
        como descrição, linguagem usada e muito mais.
      </p>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <CardProjetos key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
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
        ) : (
          <p className="text-center">Não há repositórios para exibir.</p>
        )}
      </div>
    </div>
  );
};

export default Projeto;
