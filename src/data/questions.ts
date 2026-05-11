export interface Option {
  l: string;
  t: string;
  v: number[];
}

export interface Question {
  id: string;
  layer: number | string;
  cat: string;
  text: string;
  opts: Option[];
}

export const QUESTIONS: Record<string, Question> = {
  // ── CAMADA 0: todos respondem ──
  Q01: {
    id: 'Q01',
    layer: 0,
    cat: 'Sobre a Realidade',
    text: 'O que fundamenta, de forma mais profunda, a verdadeira compreensão do mundo?',
    opts: [
      { l: 'A', t: 'Uma ordem racional ou espiritual mais profunda que as aparências', v: [-3, -3, 0, 0, -2, -2, -2] },
      { l: 'B', t: 'Observação cuidadosa, testes sistemáticos e evidências concretas', v: [2, 4, 0, 0, 0, 0, 2] },
      { l: 'C', t: 'A forma como vivemos, nos relacionamos e construímos sociedades justas', v: [0, 0, -2, 2, 0, 0, 0] },
      { l: 'D', t: 'A experiência subjetiva, a linguagem e a interpretação de significados', v: [0, 0, 0, 0, 3, 3, 0] }
    ]
  },
  Q02: {
    id: 'Q02',
    layer: 0,
    cat: 'Sobre o Conhecimento',
    text: 'Quando duas pessoas discordam profundamente, o mais importante é descobrir:',
    opts: [
      { l: 'A', t: 'Qual delas está mais próxima da estrutura verdadeira do ser ou da realidade', v: [-3, -2, 0, 0, -3, -2, -2] },
      { l: 'B', t: 'Qual posição é mais logicamente coerente e defensável por fatos', v: [0, -3, 0, 0, -2, 0, 0] },
      { l: 'C', t: 'Qual posição produz uma forma de vida mais justa ou virtuosa', v: [0, 0, -2, 2, 0, 0, 0] },
      { l: 'D', t: 'Como cada posição emerge do contexto, da linguagem ou do poder', v: [2, 2, 0, 2, 4, 3, 0] }
    ]
  },
  Q03: {
    id: 'Q03',
    layer: 0,
    cat: 'Sobre o Problema Humano',
    text: 'O maior problema da condição humana é:',
    opts: [
      { l: 'A', t: 'O afastamento de um princípio transcendente ou da verdade profunda', v: [-3, -2, 0, 0, -2, -3, -3] },
      { l: 'B', t: 'O pensamento sem rigor, método ou critério crítico', v: [0, -3, 0, 0, -2, 0, 0] },
      { l: 'C', t: 'A injustiça social e a exploração estrutural do ser humano', v: [0, 0, -2, 3, 0, 2, 2] },
      { l: 'D', t: 'A incapacidade de criar sentido diante de um universo indiferente', v: [0, 0, 0, 0, 2, 4, 0] }
    ]
  },
  Q04: {
    id: 'Q04',
    layer: 0,
    cat: 'Sobre a Filosofia',
    text: 'A tarefa primária da filosofia é:',
    opts: [
      { l: 'A', t: 'Apreender a natureza do ser, da realidade e do que existe em última instância', v: [-3, -2, 0, 0, -3, -2, -2] },
      { l: 'B', t: 'Clarificar conceitos, testar raciocínios e mapear os limites do conhecimento', v: [0, -3, 0, 0, -3, 0, 0] },
      { l: 'C', t: 'Guiar como devemos viver e como a sociedade deve ser organizada', v: [0, 0, -2, 2, 0, 0, 0] },
      { l: 'D', t: 'Questionar sentidos dados, desconstruir certezas e abrir o pensamento', v: [2, 2, 0, 0, 4, 4, 0] }
    ]
  },
  Q05: {
    id: 'Q05',
    layer: 0,
    cat: 'Sobre o Eu',
    text: 'Qual afirmação soa mais verdadeira para você?',
    opts: [
      { l: 'A', t: 'Há uma ordem ou essência mais profunda que sustenta o que sou', v: [-2, -2, 0, -2, -2, -4, -3] },
      { l: 'B', t: 'Sou inseparável do corpo, do cérebro e do mundo natural', v: [3, 3, 0, 0, 0, -2, 2] },
      { l: 'C', t: 'Sou fundamentalmente um ser social e histórico moldado pelo contexto', v: [0, 0, 0, 3, 2, 2, 2] },
      { l: 'D', t: 'Crio a mim mesmo através de escolhas, comprometimentos e interpretação', v: [0, 0, 0, -2, 2, 5, 0] }
    ]
  },
  // ── RAMO A: Cosmo-Metafísico ──
  Q06A: {
    id: 'Q06A',
    layer: '1A',
    cat: 'O Cosmos',
    text: 'A realidade em seu nível mais profundo é melhor entendida como:',
    opts: [
      { l: 'A', t: 'Uma ordem eterna de formas, ideias ou princípios além dos sentidos', v: [-5, -4, 0, 0, -4, -5, -3] },
      { l: 'B', t: 'Um fluxo contínuo de transformação, tensão e devir', v: [2, 0, 0, 0, 0, 2, 0] },
      { l: 'C', t: 'O aparecer das coisas dentro da experiência consciente', v: [0, -2, 0, 0, -2, 0, -2] },
      { l: 'D', t: 'Uma rede de objetos ou sistemas que excedem a percepção humana', v: [4, 0, 0, 0, 2, 2, 0] }
    ]
  },
  Q07A: {
    id: 'Q07A',
    layer: '1A',
    cat: 'A Transcendência',
    text: 'O que existe "por trás" ou "além" do mundo visível?',
    opts: [
      { l: 'A', t: 'Um princípio transcendente — o Uno, Deus, o Absoluto ou o Bem', v: [-6, -2, 0, 0, -4, -5, -5] },
      { l: 'B', t: 'Nada separado: o sentido surge dentro da própria experiência e da vida', v: [0, 0, 0, 0, 0, 2, 0] },
      { l: 'C', t: 'O princípio originário da natureza — arché, logos, élan vital', v: [-2, 0, 0, 0, 0, -2, 0] },
      { l: 'D', t: 'Objetos e processos que excedem completamente qualquer quadro humano', v: [5, 0, 0, 0, 2, 2, 0] }
    ]
  },
  Q08A: {
    id: 'Q08A',
    layer: '1A',
    cat: 'O Acesso ao Real',
    text: 'O melhor acesso à realidade profunda vem através de:',
    opts: [
      { l: 'A', t: 'Ascensão racional — da aparência em direção ao inteligível puro', v: [-3, -3, 0, 0, -2, -2, -2] },
      { l: 'B', t: 'Intuição, experiência mística ou contemplação direta', v: [-2, 0, 0, 0, -2, -1, -3] },
      { l: 'C', t: 'Atenção cuidadosa à experiência vivida e às suas estruturas', v: [0, -1, 0, 0, -1, 0, -1] },
      { l: 'D', t: 'Pensamento sistêmico — ver totalidades, padrões e interdependências', v: [1, 1, 0, 0, 1, 0, 0] }
    ]
  },
  Q09A: {
    id: 'Q09A',
    layer: '1A',
    cat: 'O Ser',
    text: 'Qual imagem da realidade ressoa mais com você?',
    opts: [
      { l: 'A', t: 'Uma escada que ascende da sombra à luz pura — a caverna de Platão', v: [-3, -3, 0, 0, -3, -3, -3] },
      { l: 'B', t: 'Um rio em fluxo constante — a tensão heraclitiana entre opostos', v: [-1, 0, 0, 0, 0, 0, 0] },
      { l: 'C', t: 'Um horizonte sempre presente mas nunca plenamente apreendido', v: [0, -1, 0, 0, 0, 0, -1] },
      { l: 'D', t: 'Um ecossistema de forças em interação sem centro humano', v: [2, 0, 0, 0, 1, 1, 0] }
    ]
  },
  Q10A: {
    id: 'Q10A',
    layer: '1A',
    cat: 'O Eterno e o Temporal',
    text: 'Sobre a relação entre o eterno e o temporal:',
    opts: [
      { l: 'A', t: 'O eterno é primário — o tempo é uma imagem móvel da eternidade', v: [-3, -1, 0, 0, -1, -2, -3] },
      { l: 'B', t: 'O devir é primário — não há essências fixas, apenas processos', v: [1, 0, 0, 0, 0, 2, 2] },
      { l: 'C', t: 'O tempo é o meio da compreensão — a história revela o ser', v: [-1, 0, 0, 0, 1, 0, 1] },
      { l: 'D', t: 'Tudo é radicalmente contingente — nenhuma ordem eterna existe', v: [2, 1, 0, 0, 2, 2, 1] }
    ]
  },
  // ── RAMO B: Racional-Científico ──
  Q06B: {
    id: 'Q06B',
    layer: '1B',
    cat: 'O Saber',
    text: 'O conhecimento é primariamente fundado em:',
    opts: [
      { l: 'A', t: 'A razão pura — a mente possui estruturas inatas que precedem a experiência', v: [-1, -3, 0, 0, -2, -1, 0] },
      { l: 'B', t: 'A experiência — todo conhecimento remonta à percepção e à evidência', v: [1, 3, 0, 0, 0, 0, 1] },
      { l: 'C', t: 'Uma síntese estruturada entre razão e sensibilidade empírica', v: [0, -1, 0, 0, -1, -1, 0] },
      { l: 'D', t: 'Nada pode ser conhecido com certeza — a suspensão é a resposta honesta', v: [0, 3, 0, 0, 1, 0, 0] }
    ]
  },
  Q07B: {
    id: 'Q07B',
    layer: '1B',
    cat: 'A Ciência',
    text: 'A ciência é melhor entendida como:',
    opts: [
      { l: 'A', t: 'O modelo supremo de verdade — todo conhecimento genuíno é científico', v: [4, 6, 2, 0, 0, 0, 4] },
      { l: 'B', t: 'Uma prática poderosa mas filosoficamente incompleta', v: [0, 2, 0, 0, -2, 0, 0] },
      { l: 'C', t: 'Uma prática útil cujos fundamentos exigem crítica filosófica profunda', v: [0, 0, 0, 0, -2, 0, 0] },
      { l: 'D', t: 'Um discurso entre outros — não privilegiado sobre outros modos de saber', v: [2, 2, 0, 0, 4, 4, 0] }
    ]
  },
  Q08B: {
    id: 'Q08B',
    layer: '1B',
    cat: 'A Verdade',
    text: 'Um argumento filosófico é mais valioso quando:',
    opts: [
      { l: 'A', t: 'Atinge necessidade lógica — as conclusões seguem inevitavelmente das premissas', v: [0, -6, 0, 0, -4, 0, 0] },
      { l: 'B', t: 'Corresponde a fatos observáveis e pode ser testado ou falsificado', v: [2, 6, 0, 0, 0, 0, 2] },
      { l: 'C', t: 'Analisa com precisão o significado e o uso de conceitos e linguagem', v: [0, -2, 0, 0, -4, 0, 0] },
      { l: 'D', t: 'Expõe os limites do que pode ser conhecido ou dito com sentido', v: [0, 4, 0, 0, 2, 0, 0] }
    ]
  },
  Q09B: {
    id: 'Q09B',
    layer: '1B',
    cat: 'A Mente',
    text: 'A mente humana é melhor entendida como:',
    opts: [
      { l: 'A', t: 'Uma faculdade racional capaz de apreender princípios universais a priori', v: [-1, -3, 0, 0, -1, -1, 0] },
      { l: 'B', t: 'Um produto de processos biológicos e da seleção natural evolutiva', v: [2, 3, 0, 0, 0, -1, 2] },
      { l: 'C', t: 'Algo parcialmente irredutível ao físico — a consciência é especial', v: [0, -1, 0, 0, -1, 0, 0] },
      { l: 'D', t: 'Um sistema moldado por estruturas linguísticas e conceituais', v: [0, 0, 0, 0, -1, 1, 0] }
    ]
  },
  Q10B: {
    id: 'Q10B',
    layer: '1B',
    cat: 'O Método',
    text: 'O ideal filosófico mais convincente é:',
    opts: [
      { l: 'A', t: 'Um sistema racional coerente deduzido a partir de primeiros princípios', v: [-1, -3, 0, 0, -2, -1, 0] },
      { l: 'B', t: 'Rigor empírico — seguir a evidência onde quer que ela leve', v: [1, 3, 0, 0, 0, 0, 1] },
      { l: 'C', t: 'Crítica — mapear as condições e os limites do próprio conhecimento', v: [0, -2, 0, 0, -1, 0, 0] },
      { l: 'D', t: 'Precisão linguística — filosofia como terapia da linguagem confusa', v: [0, -1, 0, 0, -2, 0, 0] }
    ]
  },
  Q11B: {
    id: 'Q11B',
    layer: '1B',
    cat: 'A Certeza',
    text: 'Sobre o que podemos saber com confiança:',
    opts: [
      { l: 'A', t: 'Verdades matemáticas e lógicas são as mais certas que existem', v: [-1, -3, 0, 0, -2, -1, 0] },
      { l: 'B', t: 'Afirmações empíricas bem testadas são o mais confiável que temos', v: [1, 3, 0, 0, 0, 0, 1] },
      { l: 'C', t: 'A certeza é um problema filosófico — precisamos examinar suas condições', v: [0, -2, 0, 0, -1, 0, 0] },
      { l: 'D', t: 'A certeza genuína é inatingível — a dúvida honesta é a postura correta', v: [0, 3, 0, 0, 1, 0, -1] }
    ]
  },
  // ── RAMO C: Ético-Social ──
  Q06C: {
    id: 'Q06C',
    layer: '1C',
    cat: 'A Ética',
    text: 'O objetivo central da ética é:',
    opts: [
      { l: 'A', t: 'Guiar o indivíduo em direção a uma vida de virtude, sabedoria e florescimento', v: [-1, 0, -2, -2, 0, -1, 0] },
      { l: 'B', t: 'Estabelecer regras universais que valem independentemente da preferência pessoal', v: [0, -1, -2, 0, -1, -1, 0] },
      { l: 'C', t: 'Produzir o maior bem-estar para o maior número de pessoas possível', v: [0, 1, 3, 1, 0, 0, 1] },
      { l: 'D', t: 'Transformar estruturas sociais injustas que produzem sofrimento sistemático', v: [1, 0, 1, 3, 1, 2, 2] }
    ]
  },
  Q07C: {
    id: 'Q07C',
    layer: '1C',
    cat: 'A Moral',
    text: 'As normas morais são fundamentadas em:',
    opts: [
      { l: 'A', t: 'A natureza ou uma ordem moral racional independente da convenção humana', v: [-1, -1, -2, 0, -1, -2, -1] },
      { l: 'B', t: 'Princípios racionais que qualquer pessoa razoável aceitaria', v: [0, -2, -1, 0, -1, 0, 0] },
      { l: 'C', t: 'Acordos sociais construídos para benefício mútuo e convivência', v: [0, -1, 0, 0, 0, 0, 1] },
      { l: 'D', t: 'Contexto histórico e cultural — não há ordem moral atemporal', v: [1, 1, 0, 1, 2, 2, 1] }
    ]
  },
  Q08C: {
    id: 'Q08C',
    layer: '1C',
    cat: 'O Dilema Moral',
    text: 'Diante de um dilema moral, a pergunta mais importante é:',
    opts: [
      { l: 'A', t: 'O que faria uma pessoa de caráter excelente nesta situação?', v: [-1, 0, -2, -1, 0, -1, 0] },
      { l: 'B', t: 'Qual ação respeita toda pessoa como fim em si mesma, nunca apenas como meio?', v: [0, -1, -2, 0, -1, -1, 0] },
      { l: 'C', t: 'Qual opção produz as melhores consequências para todos os afetados?', v: [0, 1, 3, 1, 0, 0, 1] },
      { l: 'D', t: 'O que isso revela sobre estruturas de poder, privilégio ou opressão?', v: [1, 0, 1, 3, 1, 2, 1] }
    ]
  },
  Q09C: {
    id: 'Q09C',
    layer: '1C',
    cat: 'A Justiça',
    text: 'Uma sociedade justa é primariamente aquela que:',
    opts: [
      { l: 'A', t: 'Protege direitos individuais e mantém a interferência do Estado ao mínimo', v: [0, -1, 0, -3, 0, 0, 1] },
      { l: 'B', t: 'Estabelece regras que cidadãos racionais aceitariam atrás de um véu de ignorância', v: [0, -1, 0, 0, 0, 0, 1] },
      { l: 'C', t: 'Cultiva comunidades de valores compartilhados, tradição e bem comum', v: [-1, -1, -1, 1, -1, -1, -1] },
      { l: 'D', t: 'Desmantela hierarquias econômicas e estruturais que produzem desigualdade', v: [1, 0, 1, 3, 1, 2, 2] }
    ]
  },
  Q10C: {
    id: 'Q10C',
    layer: '1C',
    cat: 'A Crítica Social',
    text: 'A crítica social mais convincente é que:',
    opts: [
      { l: 'A', t: 'A sociedade nos torna artificiais, dependentes e distantes da virtude autêntica', v: [0, 0, -2, -4, 0, 0, -2] },
      { l: 'B', t: 'O capitalismo organiza injustiças profundas que não podem ser reformadas, apenas superadas', v: [2, 0, 2, 6, 2, 4, 4] },
      { l: 'C', t: 'Colonialismo e patriarcado moldaram as próprias categorias com que pensamos', v: [2, 2, 2, 6, 4, 6, 2] },
      { l: 'D', t: 'O racionalismo moderno tornou-se dominação instrumental da natureza e das pessoas', v: [2, 0, 0, 4, 2, 4, 0] }
    ]
  },
  Q11C: {
    id: 'Q11C',
    layer: '1C',
    cat: 'A Política',
    text: 'Em termos de organização política, o que ressoa mais com você?',
    opts: [
      { l: 'A', t: 'Um Estado mínimo que protege a liberdade sem impor valores', v: [0, -2, 0, -6, 0, 2, 2] },
      { l: 'B', t: 'Democracia liberal fundada em direitos, consenso racional e igualdade de oportunidades', v: [0, -2, 0, 0, 0, 0, 2] },
      { l: 'C', t: 'Comunidades enraizadas em tradição, solidariedade e identidade moral partilhada', v: [-2, -2, -2, 2, -2, -2, -2] },
      { l: 'D', t: 'Transformação radical de sistemas que produzem exploração e exclusão', v: [2, 0, 2, 6, 2, 4, 4] }
    ]
  },
  // ── RAMO D: Existencial-Linguístico ──
  Q06D: {
    id: 'Q06D',
    layer: '1D',
    cat: 'O Sentido',
    text: 'O sentido da vida surge primariamente de:',
    opts: [
      { l: 'A', t: 'Um ato solitário e radical de escolha diante do absurdo', v: [2, 0, 0, -2, 0, 6, 0] },
      { l: 'B', t: 'A fé — um comprometimento que vai além da justificação racional', v: [-4, 0, 0, -2, 0, 4, -2] },
      { l: 'C', t: 'O horizonte interpretativo da tradição, da história e da cultura', v: [0, 0, 0, 0, 4, 3, -2] },
      { l: 'D', t: 'Práticas, usos e jogos sociais — o sentido está no como agimos, não na essência', v: [2, 2, 0, 0, 6, 2, 2] }
    ]
  },
  Q07D: {
    id: 'Q07D',
    layer: '1D',
    cat: 'O Sujeito',
    text: 'O sujeito humano é melhor entendido como:',
    opts: [
      { l: 'A', t: 'Radicalmente livre — condenado a escolher e a carregar o peso dessa liberdade', v: [1, 0, 0, -1, 0, 3, 0] },
      { l: 'B', t: 'Sempre já inserido na linguagem, na história e em estruturas de significado', v: [0, 0, 0, 0, 2, 1, -1] },
      { l: 'C', t: 'Um efeito do poder, do discurso e dos sistemas de classificação social', v: [2, 1, 0, 1, 3, 3, 0] },
      { l: 'D', t: 'Algo que pode e deve ser radicalmente redesenhado ou transcendido', v: [2, 1, 0, 0, 1, 3, 3] }
    ]
  },
  Q08D: {
    id: 'Q08D',
    layer: '1D',
    cat: 'A Linguagem',
    text: 'A linguagem é melhor entendida como:',
    opts: [
      { l: 'A', t: 'O medium pelo qual toda compreensão e todo ser se revelam', v: [0, 0, 0, 0, 2, 1, -1] },
      { l: 'B', t: 'Uma ferramenta — útil quando funciona, revisável quando não funciona', v: [1, 1, 0, 0, 3, 1, 1] },
      { l: 'C', t: 'Um sistema que nos precede e produz o sujeito — não um instrumento neutro', v: [1, 0, 0, 0, 2, -1, 0] },
      { l: 'D', t: 'Um campo de poder — discursos moldam o que pode ser pensado ou dito', v: [2, 1, 0, 1, 3, 3, 0] }
    ]
  },
  Q09D: {
    id: 'Q09D',
    layer: '1D',
    cat: 'A Verdade',
    text: 'A verdade é melhor compreendida como:',
    opts: [
      { l: 'A', t: 'Um comprometimento existencial pessoal — a verdade é subjetividade', v: [0, 0, 0, -1, 0, 2, -1] },
      { l: 'B', t: 'O que se sustenta dentro de uma tradição de interpretação e prática comunitária', v: [0, 0, 0, 0, 2, 1, -1] },
      { l: 'C', t: 'Um efeito do discurso — o que conta como verdade reflete relações de poder', v: [2, 1, 0, 1, 3, 3, 0] },
      { l: 'D', t: 'O que funciona — um vocabulário útil, não um espelho da realidade independente', v: [1, 1, 0, -1, 3, 2, 1] }
    ]
  },
  Q10D: {
    id: 'Q10D',
    layer: '1D',
    cat: 'O Futuro',
    text: 'Sobre o futuro humano, o que parece mais verdadeiro?',
    opts: [
      { l: 'A', t: 'O drama humano — angústia, autenticidade, morte — é permanente e irredutível', v: [0, 0, 0, -1, 0, 2, 0] },
      { l: 'B', t: 'Estamos perdendo narrativas estáveis — e isso é ao mesmo tempo aterrorizante e libertador', v: [2, 2, 0, 0, 2, 2, 0] },
      { l: 'C', t: 'A tecnologia está redesenhando a humanidade de formas que devemos abraçar', v: [2, 1, 0, 0, 1, 3, 3] },
      { l: 'D', t: 'A aceleração — capital, código, complexidade — ultrapassa o controle humano', v: [2, 0, 0, 2, 2, 2, 3] }
    ]
  },
  Q11D: {
    id: 'Q11D',
    layer: '1D',
    cat: 'A Existência',
    text: 'Qual dessas afirmações soa mais convincente para você?',
    opts: [
      { l: 'A', t: 'Escolher é criar-se — a existência precede a essência', v: [1, 0, 0, -1, 0, 3, 0] },
      { l: 'B', t: 'Compreender é interpretar — não há visão de lugar nenhum', v: [0, 0, 0, 0, 2, 1, -1] },
      { l: 'C', t: 'Identidades e verdades são produzidas historicamente, não dadas', v: [2, 1, 0, 1, 2, 3, 1] },
      { l: 'D', t: '"Verdade" é um vocabulário — útil, não metafisicamente vinculante', v: [1, 1, 0, -1, 3, 2, 1] }
    ]
  },
  // ── REFINAMENTO: perguntas de desempate fino ──
  QR1: {
    id: 'QR1', layer: 'R', cat: 'Fundamentos Antigos',
    text: 'Qual o papel primordial do conhecimento?',
    opts: [
      { l: 'A', t: 'Contemplar a natureza e o princípio que organiza o cosmos (Arché)', v: [-20, 0, 0, 0, -20, -20, -10] }, // 1: Pré-Socráticos
      { l: 'B', t: 'Ascender do mundo das sombras para a verdade eterna das Ideias', v: [-30, -30, -20, -10, -30, -30, -20] }, // 2: Platonismo
      { l: 'C', t: 'Cientificar as causas das coisas e cultivar a virtude prática na pólis', v: [-10, -10, -10, 0, -10, -10, 0] }, // 3: Aristotelismo
      { l: 'D', t: 'Desafiar toda convenção e alcançar a autossuficiência radical', v: [0, 0, 10, -30, 0, 10, 0] } // 4: Cinismo
    ]
  },
  QR2: {
    id: 'QR2', layer: 'R', cat: 'A Conduta no Mundo',
    text: 'Como devemos lidar com os desejos e a dor?',
    opts: [
      { l: 'A', t: 'Aceitar o que não controlamos e alinhar nossa vontade ao Logos', v: [-10, -10, -10, -10, -10, -10, -10] }, // 5: Estoicismo
      { l: 'B', t: 'Buscar o prazer tranquilo (ataraxia) e afastar o medo e a perturbação', v: [10, 10, 20, -20, 0, 0, 0] }, // 6: Epicurismo
      { l: 'C', t: 'Suspender todo juízo para alcançar a paz mental (epoché)', v: [30, 30, 0, 0, 10, 0, 0] }, // 7: Ceticismo Pirrônico
      { l: 'D', t: 'Reconhecer que o Um transborda e retornar a ele pela alma', v: [-30, -10, -10, -10, -30, -25, -20] } // 8: Neoplatonismo
    ]
  },
  QR3: {
    id: 'QR3', layer: 'R', cat: 'A Fé e a Lógica',
    text: 'A relação entre razão e transcendência é:',
    opts: [
      { l: 'A', t: 'Crer para compreender: o coração precede a inteligência', v: [-25, -15, -15, -10, -20, -30, -20] }, // 9: Patrística
      { l: 'B', t: 'Sistematizar a fé através da lógica e da demonstração racional', v: [-20, -20, -10, 0, -20, -20, -10] }, // 10: Escolástica
      { l: 'C', t: 'O conhecimento vem de nomes e indivíduos, não de universais divinos', v: [10, 10, 0, 0, 20, 10, 0] }, // 11: Nominalismo
      { l: 'D', t: 'Unir-se ao Absoluto através do silêncio e da experiência mística', v: [-30, -5, -5, -5, -30, -20, -30] } // 12: Misticismo
    ]
  },
  QR4: {
    id: 'QR4', layer: 'R', cat: 'O Método Moderno',
    text: 'Qual o fundamento do conhecimento seguro?',
    opts: [
      { l: 'A', t: 'A evidência clara e distinta descoberta pela dedução racional', v: [-15, -30, 0, 0, -20, -10, 0] }, // 13: Racionalismo
      { l: 'B', t: 'A experiência sensível e a observação rigorosa dos dados', v: [10, 30, 0, 0, 0, 0, 10] }, // 14: Empirismo
      { l: 'C', t: 'Um contrato social racional para garantir a paz e a propriedade', v: [0, -10, 10, 30, 0, 10, 5] }, // 15: Contratualismo Clássico
      { l: 'D', t: 'Os limites da razão: conhecer o fenômeno, mas respeitar o noúmeno', v: [0, -20, 0, 5, -10, -10, 0] } // 16: Kantismo
    ]
  },
  QR5: {
    id: 'QR5', layer: 'R', cat: 'Vontade e História',
    text: 'Qual força move o desenvolvimento humano?',
    opts: [
      { l: 'A', t: 'O desenvolvimento do Espírito Absoluto no tempo histórico', v: [-10, -15, 0, 0, -10, -10, 30] }, // 17: Idealismo Alemão
      { l: 'B', t: 'A maximização da felicidade geral através do cálculo de utilidade', v: [5, 10, 20, 10, 0, 0, 5] }, // 18: Utilitarismo
      { l: 'C', t: 'A luta de classes e a superação das condições materiais de existência', v: [20, 10, 10, 30, 10, 20, 30] }, // 19: Marxismo
      { l: 'D', t: 'A afirmação da vida, a força e a superação de todos os valores antigos', v: [10, -10, -10, -30, 0, 20, 10] } // 20: Nietzscheanismo
    ]
  },
  QR6: {
    id: 'QR6', layer: 'R', cat: 'Ação e Observação',
    text: 'A filosofia deve ser avaliada por:',
    opts: [
      { l: 'A', t: 'Suas consequências práticas na resolução de problemas concretos', v: [10, 10, 10, -10, 25, 10, 15] }, // 21: Pragmatismo
      { l: 'B', t: 'Sua submissão aos métodos das ciências positivas e fatos observáveis', v: [15, 30, 15, 0, 5, 5, 20] }, // 22: Positivismo Científico
      { l: 'C', t: 'A intuição do fluxo vital que escapa às categorias do intelecto', v: [0, 0, 0, -10, -10, -10, 0] }, // 23: Vitalismo
      { l: 'D', t: 'O salto de fé subjetivo diante do paradoxo da existência', v: [-20, 0, -10, -20, 0, 30, -10] } // 24: Kierkegaard
    ]
  },
  QR7: {
    id: 'QR7', layer: 'R', cat: 'Fenômeno e Existência',
    text: 'O ponto de partida do pensamento é:',
    opts: [
      { l: 'A', t: 'A descrição pura da consciência e do modo como as coisas aparecem', v: [0, -15, 10, 0, -15, 0, -20] }, // 25: Fenomenologia
      { l: 'B', t: 'A liberdade absoluta de um ser que cria sua própria essência', v: [10, 0, 0, -20, 0, 30, 10] }, // 26: Existencialismo
      { l: 'C', t: 'A análise lógica das proposições e a clareza da linguagem', v: [0, -10, 0, 0, -30, 15, 0] }, // 27: Filosofia Analítica
      { l: 'D', t: 'A rede de estruturas ocultas que definem o sentido e o sujeito', v: [0, 0, 0, 10, -15, -20, 0] } // 28: Estruturalismo
    ]
  },
  QR8: {
    id: 'QR8', layer: 'R', cat: 'Linguagem e Diálogo',
    text: 'A verdade é mais bem compreendida como:',
    opts: [
      { l: 'A', t: 'A emancipação do poder através da crítica e da comunicação', v: [10, 5, 5, 25, 10, 20, 15] }, // 29: Teoria Crítica
      { l: 'B', t: 'O processo infinito de interpretação dentro de uma tradição', v: [0, -5, 0, 0, 25, 15, -15] }, // 30: Hermenêutica
      { l: 'C', t: 'O uso da linguagem em formas de vida e jogos de linguagem', v: [0, -15, 0, 0, -30, 0, -5] }, // 31: Analítica da Linguagem
      { l: 'D', t: 'A utilidade política e a conversação solidária, sem fundamentos fixos', v: [25, 15, 5, -15, 30, 25, 15] } // 32: Neopragmatismo
    ]
  },
  QR9: {
    id: 'QR9', layer: 'R', cat: 'Diferença e Sujeito',
    text: 'A tarefa do pensamento contemporâneo é:',
    opts: [
      { l: 'A', t: 'Desconstruir os grandes sistemas e abraçar a diferença e o devir', v: [25, 10, 0, 10, 30, 30, 15] }, // 33: Pós-Estruturalismo
      { l: 'B', t: 'Reconhecer que vivemos o fim das grandes metanarrativas', v: [25, 15, 0, 5, 30, 30, 5] }, // 34: Pós-Modernismo
      { l: 'C', t: 'Desvelar as estruturas de opressão de gênero e patriarcado', v: [15, 10, 10, 25, 20, 30, 20] }, // 35: Feminismo
      { l: 'D', t: 'Modelar a consciência através da ciência cognitiva e física', v: [0, -15, 0, 0, -20, 0, 10] } // 36: Mente
    ]
  },
  QR10: {
    id: 'QR10', layer: 'R', cat: 'Natureza e Sociedade',
    text: 'Como devemos organizar nosso olhar sobre o mundo?',
    opts: [
      { l: 'A', t: 'A filosofia deve ser contínua à pesquisa nas ciências naturais', v: [20, 30, 0, 0, 0, 0, 20] }, // 37: Naturalismo
      { l: 'B', t: 'Devemos focar no florescimento do caráter e de virtudes estáveis', v: [-10, -10, -25, -10, -10, -10, 0] }, // 38: Ética das Virtudes
      { l: 'C', t: 'Por acordos políticos que pessoas livres e iguais aceitariam', v: [0, -10, 10, 30, 0, 5, 10] }, // 39: Contratualismo Contemp.
      { l: 'D', t: 'Garantir a soberania individual absoluta e a liberdade de mercado', v: [5, -5, 0, -30, 5, 5, 10] } // 40: Libertarismo
    ]
  },
  QR11: {
    id: 'QR11', layer: 'R', cat: 'Sistemas e Alteridade',
    text: 'O que define nossa responsabilidade?',
    opts: [
      { l: 'A', t: 'Nossa dívida com os valores históricos de nossa própria comunidade', v: [-15, -15, -15, 15, -15, -15, -10] }, // 41: Comunitarismo
      { l: 'B', t: 'O reconhecimento de que objetos em si têm realidade independente de nós', v: [30, 5, 0, 0, 15, 15, 5] }, // 42: Realismo Especulativo
      { l: 'C', t: 'Acelerar o processo tecnológico e social além dos limites humanos', v: [25, 5, 0, 20, 25, 25, 30] }, // 43: Aceleracionismo
      { l: 'D', t: 'A compreensão da vacuidade e a superação do apego conceitual', v: [-15, 0, 10, 5, 5, 20, -30] } // 44: Budismo Analítico
    ]
  },
  QR12: {
    id: 'QR12', layer: 'R', cat: 'Horizontes Finais',
    text: 'Qual o maior desafio ético atual?',
    opts: [
      { l: 'A', t: 'Expandir o círculo moral para incluir todos os seres sencientes', v: [10, 10, 20, 15, 10, 10, 10] }, // 45: Ética Animal
      { l: 'B', t: 'Usar a tecnologia para aprimorar radicalmente a condição humana', v: [25, 25, 0, -10, 15, 30, 30] }, // 46: Transumanismo
      { l: 'C', t: 'Descolonizar o saber e desconstruir a hegemonia ocidental', v: [15, 15, 15, 30, 25, 30, 15] }, // 47: Decolonial
      { l: 'D', t: 'Pensar a complexidade e a interdependência sistêmica do mundo', v: [15, 15, 0, 15, 15, 15, 5] } // 48: Complexidade
    ]
  }
};
