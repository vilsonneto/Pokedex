<div align="center">
    <img src="https://i.imgur.com/1Ia1Qgb.png" width="200px"/><br><br>
</div>

<div align="center">
    <p align="center">🚀 Este projeto é um aplicativo web desenvolvido usando Next.js e Redux, que consome a API do pokeapi.co para exibir informações sobre Pokémons. O aplicativo permite que o usuário visualize uma lista de Pokémons e suas informações individuais, como nome, imagem, tipo, habilidades e estatísticas.</p>
    <p align="center">As informações são salvas em um estado global gerenciado pelo Redux. O aplicativo possui uma interface agradável e responsiva, que se adapta a dispositivos móveis e desktops. O usuário pode pesquisar Pokémons pelo nome ou pelo tipo e também navegar pelas páginas de resultados, com um limite de Pokémons por página.</p>
</div>
<div align="center">
    <h4> 🚧  Pokedex  🚧</h4>
</div>

<div align="center">
    <h2> Preview da tela de pokemon individual do site.</h2>
</div>

<div align="center">
    <img width="800px" hight="300px" src="https://i.imgur.com/LisvcrS.png" /><br><br>
</div>

## ⚙️ Funcionalidades

### **Configuração do projeto**

- [x]  Inicialize um novo projeto Next.js
- [ ]  Configure as tecnologias necessárias:
    - [x]  React
    - [x]  Redux
    - [ ]  Jest

### **Gestão Global do Estado**

- [x]  Crie uma loja Redux para gerenciar o estado do aplicativo
- [x]  Defina ações para
    - [x]  Buscar dados de Pokémon
    - [x]  Lidar com consultas de pesquisa
- [x]  Defina redutores para lidar com as ações e atualizar o estado
- [x]  Integre a loja Redux com a aplicação Next.js

### **Página da lista de Pokémon**

- [x]  Crie um componente para exibir a lista de Pokémons
- [x]  Implemente a paginação para exibir um número limitado de Pokémons por página
- [x]  Adicione uma barra de pesquisa para permitir que os usuários procurem Pokémons por nome ou tipo
- [x]  Inclua um link para a página Pokémon individual de cada Pokémon

### **Página de detalhes do Pokémon**

- [x]  Crie um componente para exibir os detalhes de um único Pokémon
- [x]  Exibir o nome, imagem, tipo, habilidades e estatísticas
- [x]  Implementar a navegação entre a página da lista de Pokémon e a página de Pokémon individual

### **Integração de API**

- [x]  Consumir a API Pokeapi.co para buscar dados de Pokémon
- [x]  Lidar com quaisquer erros de API e exibir mensagens apropriadas
- [x]  Cache de respostas da API para melhorar a experiência do usuário

### **Estilo**

- [x]  Implemente um design responsivo que se adapte a diferentes tamanhos de tela
- [x]  Certifique-se de que o aplicativo tenha um design visualmente atraente e consistente

### **Teste**

- [ ]  Escreva testes de unidade para verificar a funcionalidade do aplicativo, incluindo ações de armazenamento Redux, redutores e manipulação de paginação
- [ ]  Verifique se os dados estão armazenados corretamente na loja Redux e se a paginação está funcionando conforme o esperado

### **Qualidade do código**

- [x]  Siga as práticas recomendadas para codificação em Next.js, React e Redux
- [x]  Mantenha o código organizado, limpo e de fácil manutenção
- [x]  Certifique-se de que o código esteja bem comentado e fácil de entender


## 🚀 Tecnologias

- [x] Linguagem de programação: TypeScript
- [x] IDE: VScode
- [x] React: Biblioteca JavaScript para construir interfaces de usuário.
- [x] React Hook Form: Uma biblioteca leve e extensível para lidar com o estado do formulário e validação no React.
- [x] Zod: Biblioteca de validação de schema para TypeScript que fornece segurança de tipo e geração dinâmica de schema.
- [x] Redux: Biblioteca para gerenciar o estado global do aplicativo.
- [x] Redux Toolkit: Conjunto de ferramentas para simplificar a configuração do Redux.
- [x] Next.js: Framework para construir aplicativos React de renderização no lado do servidor.
- [ ] Jest: Framework de testes unitários para JavaScript.
- [x] Tailwind CSS: Framework de estilos CSS para construir interfaces de usuário responsivas.
- [x] Framer Motion: Biblioteca para adicionar animações e interações aos componentes React.
- [x] Lottie Web: Biblioteca para exibir animações do Lottie no navegador.


### 🎲 Rodando o Front End

```bash
# Clone este repositório
$ git clone https://github.com/vilsonneto/teste-react-pleno.git

# entre na pasta
$ cd teste-react-pleno/

# instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento.
$ npm run dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

```
### Links importantes
- [URL do site](https://vilsonneto-pokedex.vercel.app/)
- [Prototype Figma](https://www.figma.com/file/QxYkG6YRdSkYbwDOKijysY/Untitled?type=design&node-id=1-2&mode=design&t=Jri5cWVe9pQI2AZ5-0)
- [PokeAPI](https://pokeapi.co/docs/v2)
