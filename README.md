<h1 align="center"> Web InvestManager </h1>

  <p align="center">
    <img alt="Last commit" src="https://img.shields.io/github/last-commit/Willian17/web-investmanager">
    <img alt="stars" src="https://img.shields.io/github/stars/Willian17/web-investmanager?logo=github">
    <img alt="size" src="https://img.shields.io/github/repo-size/Willian17/web-investmanager">
    <img alt="license" src="https://img.shields.io/github/license/Willian17/web-investmanager">
  </p>
  
  <p align="center">
    <a href="#sobre">Sobre</a> •
    <a href="#funcionalidades">Funcionalidades</a> •
    <a href="#executar">Executar</a> •
    <a href="#tecnologias">Tecnologias</a> •
    <a href="#contribuidores">Contribuidores</a> •
    <a href="#contribuir">Contribuir</a> •
    <a href="#licenca">Licença</a>
  </p>
  
  [![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#sobre-o-projeto)

  ## :pushpin: Sobre o Projeto <a name="sobre"></a>
  <div>
  <p>Bem-vindo ao repositório do Front-End do InvestManager! Aqui, você encontrará uma solução que visa otimizar seus investimentos por meio de um processo inteligente de realocação de ativos. O objetivo do projeto é proporcionar a você uma ferramenta que automatiza o rebalanceamento de sua carteira de investimentos, sem perder horas com cálculos em planilhas, garantindo que sua alocação de ativos esteja sempre alinhada com seus objetivos financeiros e tolerância ao risco. Com algoritmo complexos em cada etapa do simulador de aporte, o projeto oferece uma maneira eficiente de maximizar os retornos de sua carteira, reduzindo o risco e mantendo um portfólio diversificado.</p>
  <img src="https://github.com/Willian17/web-investmanager/assets/53010824/ba46986d-5e06-4cd2-80e5-405e995969d5" width="500px">
  <img src="https://github.com/Willian17/web-investmanager/assets/53010824/c1c27560-f7e0-4e52-a730-5f2b20dad356" width="500px">
  <img src="https://github.com/Willian17/web-investmanager/assets/53010824/01aa3825-4305-4884-88ac-64fb2e16803c" width="500px">
  <img src="https://github.com/Willian17/web-investmanager/assets/53010824/5f3a16e0-a1a1-4cf5-9097-fb2267ad21a9" width="500px">
  <img src="https://github.com/Willian17/web-investmanager/assets/53010824/5f3a16e0-a1a1-4cf5-9097-fb2267ad21a9" width="500px">
  <img src="https://github.com/Willian17/web-investmanager/assets/53010824/2abf8bce-7e1a-476d-b9b7-fe7a13c6d947" width="500px">


  </div>
  
  [![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#funcionalidades)

  ## :rocket: Funcionalidades <a name="funcionalidades"></a>

 - [x] Autenticação
       <ul>
        <li> Criar conta </li>
        <li> Login </li>
        <li> Cada usuário terá seus próprios ativos, metas, critérios e etc </li>
       </ul>
       
 - [x] Gerenciar ativos
       <ul>
        <li> Listar ativos - Nome, quanto R$ tem alocado, O % recomendado na carteira e atualmente % </li>
        <li> Criar ativos - Definindo quantidade, o nome, a classe de ativo, a nota ou as respostas do questionário  </li>
        <li> Editar ativo </li>
        <li> Deletar ativo </li>
       </ul>
 - [x] Definir metas da classe do ativo
        <ul>
        <li> Definir % que deseja para cada categoria da carteira </li>
        <li> No máximo a categoria tem que ter até 100% </li>
        <li> A soma de todas as metas não pode ultrapassar 100% </li>
        <li> Não pode ter meta negativa </li>
       </ul>
 - [x] Definir critérios de analise de ativo
       <ul>
        <li> Definir perguntas sobre a segurança do ativo para cada categoria </li>
        <li> Categorias: Ações nacionais e internacionais, FIIS e REITS </li>
        <li> Essas perguntas são respondidas no cadastro ou edição do ativo </li>
        <li> Serve para definir o peso e segurança do ativo na carteira </li>
       </ul>
 - [x] Definir em quais ativos aportar a partir do valor de aporte
        <ul>
        <li> É recomendado a partir do valor de aporte o quanto investir em cada ativo </li>
        <li> É levado em conta o desbalanciamento da classe do ativo em relação a meta</li>
        <li> Definir quanto investir em cada classe de ativo</li>
        <li> Com o valor do aporte para cada classe, pegar ativos desbalanciados, com a precificação e nota</li>
        <li> Definição do valor e quantidade para cada ativo a ser aportado</li>
        <li> O valor total das recomendações de aporte tem que chegar o mais próximo possivel do valor de aporte</li>
       </ul>
  
  [![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#executar)

  ## :construction_worker: Como executar <a name="executar"></a>

  ### Pré-requisitos
  Ter o <a href="https://nodejs.org/en/">Node.js</a> instalado na maquina.
  
  ### Clonar Repositório
  $ git clone https://github.com/Willian17/web-investmanager.git
  
  ### Instalar Dependencias
  ```
  $ npm install
  ```
  ### Executar Aplicação
  ```
  $ npm start
  ```

  

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](##tecnologias)

## :computer: Tecnologias <a name="tecnologias"></a>
<ul>
<li>NodeJS</li>
<li>Angular</li>
<li>Typescript</li>
<li>Tailwindcss</li>
<li>primeng</li>
<li>FontAwesome</li>
<li>JWT Decode</li>
</ul>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)

## 🤝 Contribuidores <a name="contribuidores"></a>

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<a href = "https://github.com/Willian17/web-investmanager/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=Willian17/web-investmanager"/>
</a>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contribuidores)

## 😄 Seja um dos contribuidores<br> <a name="contribuir"></a>

Contribuições são sempre bem-vindas!

1. Fork o Projeto
2. Criar uma Branch (git checkout -b feature/AmazingFeature)
3. Commit suas alterações (git commit -m 'Add some AmazingFeature)
4. Push na Branch (git push origin feature/AmazingFeature)
5. Abra um Pull Request


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#licensa)

## 📝 Licença <a name="licenca"></a>

Esse projeto está sob licença [MIT](LICENSE).

## :man_astronaut: Mostre seu apoio 

Dê uma ⭐️ se esse projeto te ajudou!
