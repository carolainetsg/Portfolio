# Portfólio Profissional — Carolaine Gonçalves

Descrição
- Site estático de portfólio pessoal que apresenta minha trajetória em Engenharia Química, experiência em laboratório/qualidade/processos e transição para Tecnologia (Full Stack e Análise de Dados).
- Desenvolvido com HTML5 e CSS3, com layout responsivo e fácil hospedagem em qualquer serviço de arquivos estáticos.

Estrutura das Páginas
- index.html
  - Header fixo com navegação (Home, Contato).
  - Imagem principal (hero) no topo, retangular e responsiva, ocupando 100% da largura.
  - Seção “Sobre” (Minha Jornada/Entre Laboratório, Processos e Tecnologia):
    - Formação na UNIPAMPA, atividades acadêmicas (empresa júnior, iniciação científica), empreendedorismo (Doceria Ca-Ana) e estágio na CAAL (análises físico-químicas/UTEs).
    - Atuação na Yara Brasil Fertilizantes (análises físico-químicas, gestão de equipamentos, suporte via SAP, melhoria contínua).
    - Início de formação em Desenvolvimento Full Stack JavaScript com práticas em SQL/MySQL, Node.js, Nest.js, TypeScript, React, HTML, CSS e Tailwind.
    - Ênfase nas áreas alvo: Analista de Laboratório Químico, Qualidade e Dados Júnior (termos destacados em negrito no texto).
  - Seção “Vídeo”: dois embeds do YouTube com instituições/pilares da formação.
  - Footer com links (LinkedIn, GitHub, Instagram) e assinatura.

- contato.html
  - Header e footer consistentes com a Home.
  - Main em duas colunas (formulário + mapa):
    - Formulário: Nome, Email, Assunto e Mensagem, com feedback visual (classes erro/valido e mensagens), e mensagem de sucesso.
    - Google Maps embed com a localização de Porto Alegre/RS.

Estilos (assets/css/style.css)
- Variáveis CSS para paleta: primary, secondary, accent, background, text, highlight.
- Tipografia: Poppins/Roboto/Segoe UI.
- Header sticky, navegação com hover sublinhado animado, seções centralizadas e texto legível.
- Hero responsivo: object-fit: cover, largura total, altura via clamp para manter proporção visual.
- Vídeos responsivos (aspect-ratio 16:9), bordas e sombras suaves.
- Formulário com estados de validação (erro/válido) e mensagens animadas.

Tecnologias
- HTML5 semântico (headings, sections, article, figure/iframe, footer), atributos alt em imagens.
- CSS3 (variáveis, media queries, clamp, object-fit, transições e sombras).

Como executar localmente
1) Abra o arquivo index.html no navegador (duplo clique ou arraste para a janela do navegador).
2) Mantenha a estrutura de pastas:
   - index.html, contato.html
   - assets/css/style.css
   - assets/img/* (imagens e ícones referenciados)

Personalização
- Substitua a imagem principal em assets/img/perfil_carolaine.jpg (ou ajuste o src no index.html).
- Edite cores globais no seletor :root do style.css.
- Atualize textos na seção “Sobre” e títulos em index.html.
- Altere os links das redes sociais no footer.

Licença
- Uso pessoal/educacional. Adapte conforme a necessidade para publicação.
