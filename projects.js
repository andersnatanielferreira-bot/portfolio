/**
 * PORTFÓLIO OFICIAL — ANDERSON NATANIEL MENDES FERREIRA
 * Apenas Sites e Aplicações Web / Desktop
 */

window.SITE = {
  name: 'Anderson Nataniel Mendes Ferreira',
  shortName: 'Anderson Mendes',
  title: 'Desenvolvedor de Software & Websites · Contabilidade & Finanças',
  technicalDegree: 'Técnico Médio de Contabilidade e Gestão',
  university: 'Universidade Óscar Ribas',
  course: 'Contabilidade e Finanças',
  location: 'Luanda, Angola',
  bio: 'Técnico Médio de Contabilidade e Gestão e estudante de Contabilidade e Finanças na Universidade Óscar Ribas. Uno o rigor dos processos contábeis e fiscais (AGT, Imposto de Selo, DUC, custos e finanças corporativas) à paixão pelo desenvolvimento de software, criando aplicações desktop robustas, plataformas SaaS com IA, websites institucionais e interfaces digitais de alta conversão.',
  email: 'anderson.mendes.dev@gmail.com',
  whatsapp: '244958438590',
  instagram: '',
  github: ''
};

window.PROJECTS = [
  {
    id: 'bandi',
    title: 'Bandi Desktop',
    featured: true,
    kind: 'Aplicação Desktop (Windows)',
    tags: ['Electron 34', 'React 18', 'TypeScript', 'SQLite', 'AGT Angola'],
    lead: 'Sistema executivo completo para secretariado, protocolo digital e conformidade com o Imposto de Selo da AGT.',
    meta: {
      Tipo: 'Aplicação Desktop Nativa (Windows)',
      Versão: 'v2.0 Oficial',
      Área: 'Secretariado Executivo · Consultas · Fiscalidade AGT',
      Stack: 'Electron 34, React 18, TypeScript, Vite, TailwindCSS, SQLite Nativo, jsPDF, AutoTable'
    },
    body: [
      'Desenvolvido para atender às necessidades reais das empresas e escritórios em Angola, o Bandi centraliza a rotina administrativa e fiscal numa ferramenta ágil, segura e com operação local e em rede Wi-Fi.',
      'O módulo de Imposto de Selo calcula automaticamente a taxa de 1% sobre recibos e contratos, efetua o registo e controlo de guias DUC com referência Multicaixa da AGT e aciona notificações nativas na área de trabalho do Windows antes do vencimento.',
      'Conta com Livro de Protocolos eletrónico numerado automaticamente, caixa de faturas com validação de NIF angolano de 10 dígitos, exportação contábil para o Perito Contabilista da OCPCA e gerador de relatórios diários em PDF A4 institucional.'
    ],
    shot: 'assets/shots/bandi-app.jpg',
    gallery: ['assets/shots/bandi-site.jpg'],
    links: [
      { label: 'Website Oficial de Download', href: '../secretariado-agt-app/site-download/index.html' }
    ]
  },
  {
    id: 'bandi-site',
    title: 'Bandi · Website Oficial',
    kind: 'Website de Produto',
    tags: ['HTML5', 'CSS3 Dark Mode', 'Landing Page', 'Download Hub'],
    lead: 'Página oficial de lançamento, apresentação dos módulos e distribuição do instalador do Bandi Desktop.',
    meta: {
      Tipo: 'Website Institucional & Download',
      Área: 'Apresentação de Software Corporativo',
      Stack: 'HTML5 Semântico, CSS Moderno, Dark Glassmorphism, JavaScript'
    },
    body: [
      'Website concebido para apresentar a versão 2.0 do Bandi a empresas, clínicas e profissionais em Angola, destacando os diferenciais de sincronização Wi-Fi, três perfis de acesso (Admin, Gestor, Colaborador) e proteção de faturação.',
      'Estrutura com navegação suave, seções explicativas dos recursos fiscais e botões de descarregamento direto do instalador e pacote compactado.'
    ],
    shot: 'assets/shots/bandi-site.jpg',
    links: [
      { label: 'Abrir Website do Bandi', href: '../secretariado-agt-app/site-download/index.html' }
    ]
  },
  {
    id: 'lucro-certo',
    title: 'Ovakanda · Lucro Certo',
    kind: 'Website Institucional',
    tags: ['Simulador Web', 'Contabilidade PME', 'Fiscalidade AGT'],
    lead: 'Plataforma web de consultoria online em contabilidade, gestão e fiscalidade para PMEs em Angola.',
    meta: {
      Tipo: 'Website com Aplicação / Simulador Interativo',
      Área: 'Consultoria Contábil & Gestão Empresarial',
      Stack: 'HTML5 Semântico, CSS3 com Design System sob medida, JavaScript ES6+'
    },
    body: [
      'Criado para desmistificar a burocracia contábil e tributária em Angola. O site apresenta a jornada dos empreendedores através de quatro etapas de maturidade empresarial: Fundação, Conformidade Fiscal, Gestão Organizada e Negócio Vivo.',
      'Possui um simulador financeiro interativo onde o cliente estima em tempo real margens de lucro, provisões fiscais e identifica o pacote de serviços ideal antes de contactar o consultor.'
    ],
    shot: 'assets/shots/lucro-certo.jpg',
    links: [
      { label: 'Abrir Website Lucro Certo', href: '../lucro-certo/index.html' },
      { label: 'Ver Processo Criativo', href: '../lucro-certo/processo-criativo.html' }
    ]
  },
  {
    id: 'processo-criativo',
    title: 'Ovakanda · Processo Criativo',
    kind: 'Website / Bastidores',
    tags: ['Storytelling Web', 'Áudio Player', 'Design Editorial'],
    lead: 'Experiência web imersiva narrando os bastidores, a estratégia de marca e a criação visual da Ovakanda.',
    meta: {
      Tipo: 'Página Web Editorial & Interativa',
      Área: 'Branding · Processo de Criação Digital',
      Stack: 'HTML5, CSS3 Avançado, Áudio Player Integrado, Componentes Dinâmicos'
    },
    body: [
      'Uma página de narrativa e bastidores que documenta cada etapa da identidade do Lucro Certo: definição de propósito, escolha da tipografia (Playfair Display & JetBrains Mono), erros de gravação e aprendizagens.',
      'Inclui player de áudio com comentários dos criadores, galeria de flyers e seções com acabamento editorial de alta classe.'
    ],
    shot: 'assets/shots/processo-criativo.jpg',
    links: [
      { label: 'Abrir Processo Criativo', href: '../lucro-certo/processo-criativo.html' }
    ]
  },
  {
    id: 'drip-nassendes',
    title: 'Drip Nassendes',
    kind: 'Website · E-Commerce',
    tags: ['Canvas 2D', 'E-Commerce de Luxo', 'Vídeo Lookbook', 'WhatsApp API'],
    lead: 'Website de alta costura e moda streetwear Old Money em Luanda com abertura interativa em Canvas.',
    meta: {
      Tipo: 'Website / E-Commerce e Catálogo Interativo',
      Área: 'Moda e Alta Costura (Luanda, Angola)',
      Stack: 'HTML5, CSS3, Canvas 2D (Física Fluida), Catálogo em Vídeo Vertical, Integração WhatsApp Business'
    },
    body: [
      'Inspirado em marcas de luxo como Prada, Loro Piana e Ralph Lauren, o website possui uma tela de abertura que simula uma gota de tecido fluida e orgânica em Canvas 2D que se expande ao clique.',
      'No interior, um catálogo responsivo em vídeo com peças exclusivas, iluminação ambiente sutil e direcionamento imediato para compra via WhatsApp com mensagem pré-formatada.'
    ],
    shot: 'assets/shots/drip-nassendes.jpg',
    links: [
      { label: 'Abrir Website Drip Nassendes', href: '../drip-nassendes/index.html' }
    ]
  },
  {
    id: 'viewgow',
    title: 'ViewGow',
    kind: 'Aplicação Web SaaS',
    tags: ['React 18', 'TypeScript', 'Inteligência Artificial', 'Editor de Vídeo'],
    lead: 'Plataforma SaaS moderna de automação de cortes virais inteligentes para TikTok, Reels e YouTube Shorts.',
    meta: {
      Tipo: 'Aplicação Web SaaS (Software as a Service)',
      Área: 'Ferramentas para Criadores & Marketing de Conteúdo',
      Stack: 'React 18, TypeScript, Vite, TailwindCSS, Lucide Icons, Integração de IA'
    },
    body: [
      'Desenvolvida para criadores de conteúdo, streamers e agências que precisam extrair os momentos mais engajadores de vídeos longos e transformá-los em formatos verticais prontos para publicação.',
      'Interface limpa e futurista com tipografia urbana, gestão de créditos de IA, seletor de legendas dinâmicas animadas e dashboard de projetos salvos.'
    ],
    shot: 'assets/shots/viewgow.jpg',
    links: [
      { label: 'Abrir Aplicação ViewGow', href: '../clipviral-saas/index.html' }
    ]
  },
  {
    id: 'tiktok-landing',
    title: 'Lives com IA no TikTok Shop',
    kind: 'Website / Landing Page',
    tags: ['Alta Conversão', 'Copywriting Estratégico', 'Dark Neon', 'Vendas 24/7'],
    lead: 'Landing page focada em alta conversão para o ecossistema de directos automatizados com IA no TikTok Shop.',
    meta: {
      Tipo: 'Website / Landing Page de Vendas',
      Área: 'E-Commerce Global & Infoproduto',
      Stack: 'HTML5 Semântico, CSS Neon Dark, Scripts de Tracking e Conversão'
    },
    body: [
      'Página de conversão completa estruturada com princípios de neurodesign, prova social e quebra de objeções para venda de soluções de transmissões ao vivo sem operador humano.',
      'Layout com paleta preta, azul ciano e magenta neon, carregamento instantâneo e seções modulares detalhando arquitetura técnica, segurança anti-ban e conversão com fixação de produtos.'
    ],
    shot: 'assets/shots/tiktok-landing.jpg',
    links: [
      { label: 'Abrir Landing Page', href: '../landing_page_tiktok_shop_ia/index.html' }
    ]
  },
  {
    id: 'tiktok-demo',
    title: 'Workstation Live IA',
    kind: 'Aplicação Web Interativa',
    tags: ['Simulação de Software', 'Painel de Estúdio', 'JavaScript Dinâmico'],
    lead: 'Aplicação web que simula o fluxo completo de uma estação de trabalho para transmissão de lives automatizadas.',
    meta: {
      Tipo: 'Aplicação Web Interativa / Painel de Demonstração',
      Área: 'Automação de E-Commerce & Transmissão',
      Stack: 'HTML5, CSS3, JavaScript ES6+, UI de Estúdio Virtual'
    },
    body: [
      'Uma interface interativa em seis etapas guiadas (Mineração de Produtos, Geração de Vídeo POV, Locução Neural com IA, Montagem de Linha de Tempo, Live Streaming e Fixação de Carrinho de Compras).',
      'Permite aos utilizadores e clientes navegarem pelo ecossistema simulado antes de aplicarem a estratégia nas suas contas.'
    ],
    shot: 'assets/shots/tiktok-demo.jpg',
    links: [
      { label: 'Abrir Simulador da Estação', href: '../tiktok_live_screen_demo/index.html' }
    ]
  },
  {
    id: 'gestao-custos',
    title: 'Gestão de Custos Corporativos',
    kind: 'Aplicação Web / Dashboard',
    tags: ['Dashboard Financeiro', 'Folha de Cálculo Web', 'Contabilidade de Custos'],
    lead: 'Aplicação analítica para acompanhamento mensal de despesas, orçamentos e centros de custos corporativos.',
    meta: {
      Tipo: 'Aplicação Web / Dashboard Interativo',
      Área: 'Contabilidade Analítica & Gestão Financeira',
      Stack: 'HTML5, CSS3 Flexbox/Grid, JavaScript ES6+, Sincronização XLSX'
    },
    body: [
      'Desenvolvida com a visão prática de quem estuda e atua na área contábil: uma ferramenta ágil no navegador para lançamento rápido de despesas operacionais, classificação por departamentos e comparação com o orçamento estipulado.',
      'Gera visões sintéticas e detalhadas em tempo real, facilitando o fecho mensal e a tomada de decisão estratégica.'
    ],
    shot: 'assets/shots/gestao-custos.jpg',
    links: [
      { label: 'Abrir Dashboard de Custos', href: '../gestao-custos/index.html' }
    ]
  }
];
