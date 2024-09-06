# MultiApp
O MultiApp é uma aplicação feita em React, voltada para a solução de alguns problemas e algumas atividades divertidas de se fazer.
Este projeto está associado a Trilha FullStack Jr., um curso síncrono de 6 meses que se propõe a ensinar as principais tecnologias do mercado na área do desenvolvimento web.

## Objetivo do desenvolvimento desta aplicação
Como alunos do curso, fomos desafiados por nosso professor a recebermos um código sujo, com pouquíssima componentizção, sem estruturação de páginas e com o uso de APIs que não funcionavam corretamente e corrigirmos seus erros, além de componentizarmos e melhorarmos a estruturação de páginas.

### A seguir, os desafios obrigatórios e opcionais: 
1. **Obrigatórias**
    1. Arquitetura:
        1. Modularização: Reestruture o código em módulos distintos para melhorar a manutenção e a legibilidade. Separe componentes, páginas, serviços e utilitários.
        2. Tratamento de Erros: Melhore o tratamento de erros, garantindo que o aplicativo lide com erros de forma clara e amigável para o usuário.
    2. Autenticação:
        1. JWT (JSON Web Tokens): Implemente JWT para autenticação. Proteja rotas sensíveis no front-end e implemente mecanismos básicos de renovação de tokens.
        2. Validação de Dados: Valide os dados JSON recebidos e enviados para garantir que estejam corretos e completos.
        3. Interação com API: Melhore a interação com APIs, garantindo que as requisições sejam eficientes e seguras.
    3. Qualidade de Código e Melhores Práticas:
        1. Revisões de Código: Estabeleça um processo de revisão de código para garantir qualidade e consistência.
        2. Documentação: Melhore a documentação do código utilizando comentários claros e mantendo um README detalhado.
2. **Não obrigatórias:** 
   1. Uso de Padrões de Projeto: Aplique padrões de projeto simples como Singleton e Factory onde for adequado.
   2. OAuth2: Se possível, integre autenticação com provedores de identidade de terceiros (Google, Facebook, etc.).
   3. Cache: Implemente cache no front-end para melhorar a performance, armazenando dados frequentemente acessados no localStorage ou sessionStorage.
   4. Lazy Loading: Utilize lazy loading para carregar componentes e recursos sob demanda, melhorando o tempo de carregamento inicial da aplicação.
   5. Substituição de APIs -> OMDB para TMDB: Se você está utilizando a API do OMDB para buscar informações sobre filmes, considere substituir pela API do TMDB, que oferece mais funcionalidades e dados.
    OMDB API: http://www.omdbapi.com/?apikey=[sua_api_key]&s=filme
    TMDB API: https://api.themoviedb.org/3/search/movie?api_key=[sua_api_key]&query=filme
    A mudança pode envolver alterações na estrutura das respostas e nos componentes que exibem os dados.
   6. Funcionamento sem JSON Server: Modifique o todo app para funcionar sem o JSON Server, utilizando LocalStorage para persistência dos dados.

## Tecnologias utilizadas
- **React:** para a componentização e renderização das páginas.
- **Styled Components:** para a estilização dos componentes.
- **JSON Server :** antes, utilizado para controlar o To-Do. Agora, o JSON Server está sendo utilizado para salvar as informaçõoes de login.
- **React Router Dom:** para a renderização de páginas e controle de rotas condicionalmente.
- **Axios:** cliente HTTP baseado em promises para o auxílio das requisições.
- **React Icons:** para a utilização de ícones.
- **React Responsive Carousel:** para a criação do carrossel da página inicial.
- **Usehooks-ts:** conjunto de hooks personalizados para aplicações 

## Funções da aplicação
- Localizador de endereço IP
- Tradutor
- Mecanismo de pesquisa de filmes
- Gerador de QR Code
- Quiz Simples
- Lista de To-Dos

## Use o projeto localmente:
1. Clone o repositório do projeto:
```
git clone https://github.com/Yasmin-Carloto/MultiApp.git
```

2. Entre no repositório do projeto:
```
cd ./local/do/projeto
```
3. Abra com o VS Code ou com sua IDE de preferência.

4. Instale as dependências:
```
npm install
```

5. Após isso, configure o JSON Server, usando: 
```
json-server db.json --port 3000
```

6. Agora, crie uma chave de API para você no site [do TMDB](https://developer.themoviedb.org/v4/reference/intro/getting-started)

7. No arquivo **.env.example**, coloque a chave da API do TMDB (o token JWT), como no exemplo a seguir:
```
VITE_APP_TMDB_API_KEY="api.key.tmdb"
```

8. Agora, mude o nome do arquivo de **.env.example** para **.env**

9. Por fim, execute o projeto através do comando:
```
npm run dev
```

## Repositório original: 
[Repositório com o código original](https://github.com/jhyago/maisPraTi-2024-01/tree/main/3-reactjs/atv5)