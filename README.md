<h1 align="center">
	<a href="https://fdaciuk.notion.site/Bootcamp-React-js-B-Academy-04beed6c0dda4b79a28709b0f4cf6042">
	<p align="center">Bootcamp React.js - B. Academy</p>
        <img src="src\pages\sidebar\markee-logo.png" alt="Alura Challenges">
    </a>
</h1>

<div align="center" id="badges">
    <img src="https://img.shields.io/badge/STATUS-COMPLETED-green"/>
</div>

---

# Markdown Editor
## Descrição do Projeto
Projeto de Markdown, Single Page Application desenvolvida em React e hospedade na [Netlify](https://www.netlify.com/), que permite ter um preview instantâneo enquanto digita um texto em markdow.

O projeto foi desedesenvolvido com objetivo de aprendizado de React seguindo as orientações do [Bootcamp React.js - B. Academy](https://fdaciuk.notion.site/Bootcamp-React-js-B-Academy-04beed6c0dda4b79a28709b0f4cf6042).

O projeto está disponível no link: https://app-markdown-editor.netlify.app/

---
## Requirements
- Node
- JavaScript ES6
- TypeScript
- React

## Funcionamento
O app permite ter n arquivos que são armazenados localmente pelo [IndexedDB](https://developer.mozilla.org/pt-BR/docs/Web/API/IndexedDB_API) do browser, ao digitar um texto markdown o editor imprime em formato HTML. Essa conversão é feita durante o input de um caractere  através da biblioteca [marked](https://github.com/markedjs/marked). A sanitização desse input é feito atráves do [DOMPurify](https://github.com/cure53/DOMPurify).

---

## Executando o Projeto

`npm start` ou `yarn start`
