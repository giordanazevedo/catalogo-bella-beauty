# Guia de Hospedagem: Bella Beauty | Catálogo Eudora & Cosméticos

Este documento explica de forma detalhada e simples como hospedar o seu catálogo online para que ele fique acessível para os seus clientes de qualquer lugar da internet.

Como este é um site estático (composto apenas por HTML, CSS e JavaScript), você pode hospedá-lo **totalmente de graça** utilizando as melhores plataformas do mercado. Abaixo, separamos as 3 principais opções, da mais simples até a mais profissional.

---

## Opção 1: Netlify Drop (A mais fácil e rápida — Sem programar nada!)

Essa é a melhor opção se você quer colocar o seu site no ar em menos de 1 minuto, sem precisar criar repositórios ou instalar programas.

### Passo a passo:
1. Acesse o site [Netlify Drop](https://app.netlify.com/drop) no seu navegador.
2. Arraste a pasta inteira do seu projeto (`Nova pasta (2)`) e solte-a dentro da área indicada na página.
3. **Pronto!** O Netlify vai compilar e disponibilizar o seu site em poucos segundos, gerando um link automático (ex: `https://linda-beleza-12345.netlify.app`).
4. **(Opcional)** Para mudar o nome do link ou adicionar o seu próprio domínio (como `.com.br`):
   - Crie uma conta gratuita no Netlify para salvar o site na sua conta.
   - Acesse as configurações do site no painel e vá em **Domain management** > **Options** > **Edit site name** para definir um endereço personalizado (ex: `bellabeauty.netlify.app`).

---

## Opção 2: GitHub Pages (Ideal para manter o código salvo e atualizado)

O GitHub Pages é excelente porque além de hospedar o seu site gratuitamente, ele guarda todo o histórico do seu código na nuvem (controle de versão).

### Passo a passo pelo Navegador:
1. Acesse [github.com](https://github.com/) e crie uma conta gratuita (ou faça login).
2. Clique no botão **New** (Novo) para criar um repositório.
3. Dê um nome para o repositório (ex: `catalogo-bella-beauty`) e deixe-o como **Public** (Público). Clique em **Create repository**.
4. Na página que abrir, clique no link **"uploading an existing file"** (enviar um arquivo existente).
5. Selecione e arraste os arquivos do seu projeto diretamente para a tela:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `banner.png`
   *(Importante: Envie os arquivos soltos, não a pasta inteira `Nova pasta (2)` diretamente, para que o `index.html` fique na raiz)*.
6. Aguarde o envio terminar e clique em **Commit changes** (Confirmar alterações) no final da página.
7. Com os arquivos enviados, vá na aba **Settings** (Configurações) do seu repositório no menu superior.
8. No menu lateral esquerdo, clique em **Pages**.
9. Na seção **Build and deployment**, onde diz *Branch*, mude de `None` para `main` (ou `master`) e clique em **Save**.
10. Aguarde de 1 a 2 minutos. Atualize a página e o GitHub mostrará o link do seu site no topo (ex: `https://seu-usuario.github.io/catalogo-bella-beauty/`).

---

## Opção 3: Vercel (Hospedagem profissional e super rápida)

A Vercel é uma das plataformas mais modernas de hospedagem do mundo, com carregamento ultrarrápido e integração muito simples.

### Passo a passo (Utilizando o Terminal do seu computador):
Como você já possui o **Node.js** e o **npm** instalados no seu computador, você pode subir o site diretamente por aqui:

1. Abra o terminal na pasta do seu projeto.
2. Execute o comando para iniciar a publicação:
   ```bash
   npx vercel
   ```
3. O terminal fará algumas perguntas na primeira vez:
   - *Set up and deploy?* Digite `y` (sim) e aperte Enter.
   - *Which scope...?* Aperte Enter para selecionar a sua conta.
   - *Link to existing project?* Digite `N` (não) para criar um novo projeto.
   - *What’s your project’s name?* Digite um nome para o site (ex: `bella-beauty-catalogo`) e aperte Enter.
   - *In which directory...?* Aperte Enter para selecionar a pasta atual.
   - *Want to modify these settings?* Digite `N` (não) e aperte Enter.
4. O sistema irá enviar os arquivos e, em poucos segundos, gerará o link oficial do seu site hospedado na Vercel (ex: `https://bella-beauty-catalogo.vercel.app`).

Se preferir, você também pode conectar sua conta da Vercel diretamente ao seu repositório do GitHub (criado na Opção 2) pelo próprio site da Vercel. Assim, toda vez que você atualizar os arquivos no GitHub, a Vercel atualiza seu site automaticamente!

---

## 💡 Dicas Extras Importantes

* **Domínio Personalizado:** Tanto o Netlify, quanto o GitHub Pages e a Vercel permitem que você compre um domínio próprio (ex: `www.bellabeauty.com.br`) e o configure gratuitamente para apontar para o seu site.
* **Número do WhatsApp:** Lembre-se de entrar nas configurações no painel administrativo do site (clicando na engrenagem no cabeçalho) e configurar o seu número do WhatsApp real para poder receber as mensagens dos pedidos com o número correto!
* **Ajuste de Imagens:** Certifique-se de que a imagem `banner.png` esteja salva na pasta do projeto se optar por fazer o deploy completo, mantendo a estrutura original de arquivos.
