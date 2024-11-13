FocusTimer é um aplicativo web simples de temporizador de foco, projetado para ajudar os usuários a gerenciar melhor seu tempo e manter a concentração. O aplicativo oferece funcionalidades de temporizador com sons de fundo relaxantes, como floresta, chuva e café, além de modos que permitem alternar entre tarefas e pausas.

Tecnologias Utilizadas
HTML5: Estrutura básica da aplicação.
CSS3: Estilização do layout e dos elementos visuais.
JavaScript (ES6): Lógica do temporizador e controle dos sons.



Requisitos de Sistema
Navegador: Qualquer navegador moderno que suporte HTML5, CSS3 e JavaScript ES6.
Versão de Linguagem: JavaScript ES6



Instruções para Execução
Clone o repositório:
  git clone https://github.com/PedroOtavio313/FocusTImer.git
Abra o arquivo index.html diretamente no seu navegador:

Navegue até o diretório do projeto e clique duas vezes no arquivo index.html para abrir o aplicativo.

Uso:
  Ajuste o temporizador conforme necessário.
  Escolha um som de fundo para tocar enquanto o temporizador está ativo.
  Alternar entre os modos claro e escuro também é possível através da interface.

Estrutura do diretório:

  FocusTImer-master/
├── index.html                # Arquivo principal do aplicativo
├── style.css                 # Estilos principais
├── assets/                   # Recursos de mídia
│   ├── bg-audio.mp3          # Som de fundo
│   ├── button-press.wav      # Som de botão
│   ├── card.png              # Imagem de cartão
│   ├── coffee.wav            # Som de ambiente de café
│   ├── favicon.svg           # Ícone do aplicativo
│   ├── fireplace.wav         # Som de ambiente de lareira
│   ├── forest.wav            # Som de ambiente de floresta
│   ├── kitchen-timer.mp3     # Som de alarme de cozinha
│   └── rain.wav              # Som de ambiente de chuva
└── src/                      # Código JavaScript
    ├── main.js               # Arquivo principal
    ├── toggle-mode.js        # Lógica para alternância de modo
    └── FocusTimer/           # Módulos do temporizador
        ├── actions.js        # Ações do temporizador
        ├── elements.js       # Elementos DOM
        ├── events.js         # Eventos de interação do usuário
        ├── index.js          # Inicialização do temporizador
        ├── sounds.js         # Controle dos sons
        └── state.js          # Gerenciamento do estado do temporizador
