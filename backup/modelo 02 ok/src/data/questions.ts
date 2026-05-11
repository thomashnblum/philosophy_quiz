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
      { l: 'A', t: 'Uma ordem racional ou espiritual mais profunda que as aparências', v: [-2, -2, 0, 0, -1, -1, -1] },
      { l: 'B', t: 'Observação cuidadosa, testes sistemáticos e evidências concretas', v: [1, 3, 0, 0, 0, 0, 1] },
      { l: 'C', t: 'A forma como vivemos, nos relacionamos e construímos sociedades justas', v: [0, 0, -1, 1, 0, 0, 0] },
      { l: 'D', t: 'A experiência subjetiva, a linguagem e a interpretação de significados', v: [0, 0, 0, 0, 2, 2, 0] }
    ]
  },
  Q02: {
    id: 'Q02',
    layer: 0,
    cat: 'Sobre o Conhecimento',
    text: 'Quando duas pessoas discordam profundamente, o mais importante é descobrir:',
    opts: [
      { l: 'A', t: 'Qual delas está mais próxima da estrutura verdadeira do ser ou da realidade', v: [-2, -1, 0, 0, -2, -1, -1] },
      { l: 'B', t: 'Qual posição é mais logicamente coerente e defensável por fatos', v: [0, -2, 0, 0, -1, 0, 0] },
      { l: 'C', t: 'Qual posição produz uma forma de vida mais justa ou virtuosa', v: [0, 0, -1, 1, 0, 0, 0] },
      { l: 'D', t: 'Como cada posição emerge do contexto, da linguagem ou do poder', v: [1, 1, 0, 1, 3, 2, 0] }
    ]
  },
  Q03: {
    id: 'Q03',
    layer: 0,
    cat: 'Sobre o Problema Humano',
    text: 'O maior problema da condição humana é:',
    opts: [
      { l: 'A', t: 'O afastamento de um princípio transcendente ou da verdade profunda', v: [-2, -1, 0, 0, -1, -2, -2] },
      { l: 'B', t: 'O pensamento sem rigor, método ou critério crítico', v: [0, -2, 0, 0, -1, 0, 0] },
      { l: 'C', t: 'A injustiça social e a exploração estrutural do ser humano', v: [0, 0, -1, 2, 0, 1, 1] },
      { l: 'D', t: 'A incapacidade de criar sentido diante de um universo indiferente', v: [0, 0, 0, 0, 1, 2, 0] }
    ]
  },
  Q04: {
    id: 'Q04',
    layer: 0,
    cat: 'Sobre a Filosofia',
    text: 'A tarefa primária da filosofia é:',
    opts: [
      { l: 'A', t: 'Apreender a natureza do ser, da realidade e do que existe em última instância', v: [-2, -1, 0, 0, -2, -1, -1] },
      { l: 'B', t: 'Clarificar conceitos, testar raciocínios e mapear os limites do conhecimento', v: [0, -2, 0, 0, -2, 0, 0] },
      { l: 'C', t: 'Guiar como devemos viver e como a sociedade deve ser organizada', v: [0, 0, -1, 1, 0, 0, 0] },
      { l: 'D', t: 'Questionar sentidos dados, desconstruir certezas e abrir o pensamento', v: [1, 1, 0, 0, 2, 2, 0] }
    ]
  },
  Q05: {
    id: 'Q05',
    layer: 0,
    cat: 'Sobre o Eu',
    text: 'Qual afirmação soa mais verdadeira para você?',
    opts: [
      { l: 'A', t: 'Há uma ordem ou essência mais profunda que sustenta o que sou', v: [-1, -1, 0, -1, -1, -3, -2] },
      { l: 'B', t: 'Sou inseparável do corpo, do cérebro e do mundo natural', v: [2, 2, 0, 0, 0, -1, 1] },
      { l: 'C', t: 'Sou fundamentalmente um ser social e histórico moldado pelo contexto', v: [0, 0, 0, 2, 1, 1, 1] },
      { l: 'D', t: 'Crio a mim mesmo através de escolhas, comprometimentos e interpretação', v: [0, 0, 0, -1, 1, 3, 0] }
    ]
  },
  // ── RAMO A: Cosmo-Metafísico ──
  Q06A: {
    id: 'Q06A',
    layer: '1A',
    cat: 'O Cosmos',
    text: 'A realidade em seu nível mais profundo é melhor entendida como:',
    opts: [
      { l: 'A', t: 'Uma ordem eterna de formas, ideias ou princípios além dos sentidos', v: [-3, -2, 0, 0, -2, -3, -3] },
      { l: 'B', t: 'Um fluxo contínuo de transformação, tensão e devir', v: [1, 0, 0, 0, 0, 1, 0] },
      { l: 'C', t: 'O aparecer das coisas dentro da experiência consciente', v: [0, -1, 0, 0, -1, 0, -1] },
      { l: 'D', t: 'Uma rede de objetos ou sistemas que excedem a percepção humana', v: [2, 0, 0, 0, 1, 1, 0] }
    ]
  },
  Q07A: {
    id: 'Q07A',
    layer: '1A',
    cat: 'A Transcendência',
    text: 'O que existe "por trás" ou "além" do mundo visível?',
    opts: [
      { l: 'A', t: 'Um princípio transcendente — o Uno, Deus, o Absoluto ou o Bem', v: [-3, -1, 0, 0, -3, -3, -3] },
      { l: 'B', t: 'Nada separado: o sentido surge dentro da própria experiência e da vida', v: [0, 0, 0, 0, 0, 1, 0] },
      { l: 'C', t: 'O princípio originário da natureza — arché, logos, élan vital', v: [-1, 0, 0, 0, 0, -1, 0] },
      { l: 'D', t: 'Objetos e processos que excedem completamente qualquer quadro humano', v: [3, 0, 0, 0, 1, 1, 0] }
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
      { l: 'A', t: 'O modelo supremo de verdade — todo conhecimento genuíno é científico', v: [2, 3, 0, 0, 0, 0, 2] },
      { l: 'B', t: 'Uma prática poderosa mas filosoficamente incompleta', v: [0, 1, 0, 0, -1, 0, 0] },
      { l: 'C', t: 'Uma prática útil cujos fundamentos exigem crítica filosófica profunda', v: [0, 0, 0, 0, -1, 0, 0] },
      { l: 'D', t: 'Um discurso entre outros — não privilegiado sobre outros modos de saber', v: [1, 1, 0, 0, 2, 2, 0] }
    ]
  },
  Q08B: {
    id: 'Q08B',
    layer: '1B',
    cat: 'A Verdade',
    text: 'Um argumento filosófico é mais valioso quando:',
    opts: [
      { l: 'A', t: 'Atinge necessidade lógica — as conclusões seguem inevitavelmente das premissas', v: [0, -3, 0, 0, -2, 0, 0] },
      { l: 'B', t: 'Corresponde a fatos observáveis e pode ser testado ou falsificado', v: [1, 3, 0, 0, 0, 0, 1] },
      { l: 'C', t: 'Analisa com precisão o significado e o uso de conceitos e linguagem', v: [0, -1, 0, 0, -2, 0, 0] },
      { l: 'D', t: 'Expõe os limites do que pode ser conhecido ou dito com sentido', v: [0, 2, 0, 0, 1, 0, 0] }
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
      { l: 'A', t: 'A sociedade nos torna artificiais, dependentes e distantes da virtude autêntica', v: [0, 0, -1, -2, 0, 0, -1] },
      { l: 'B', t: 'O capitalismo organiza injustiças profundas que não podem ser reformadas, apenas superadas', v: [1, 0, 1, 3, 1, 2, 2] },
      { l: 'C', t: 'Colonialismo e patriarcado moldaram as próprias categorias com que pensamos', v: [1, 1, 1, 3, 2, 3, 1] },
      { l: 'D', t: 'O racionalismo moderno tornou-se dominação instrumental da natureza e das pessoas', v: [1, 0, 0, 2, 1, 2, 0] }
    ]
  },
  Q11C: {
    id: 'Q11C',
    layer: '1C',
    cat: 'A Política',
    text: 'Em termos de organização política, o que ressoa mais com você?',
    opts: [
      { l: 'A', t: 'Um Estado mínimo que protege a liberdade sem impor valores', v: [0, -1, 0, -3, 0, 0, 1] },
      { l: 'B', t: 'Democracia liberal fundada em direitos, consenso racional e igualdade de oportunidades', v: [0, -1, 0, 0, 0, 0, 1] },
      { l: 'C', t: 'Comunidades enraizadas em tradição, solidariedade e identidade moral partilhada', v: [-1, -1, -1, 1, -1, -1, -1] },
      { l: 'D', t: 'Transformação radical de sistemas que produzem exploração e exclusão', v: [1, 0, 1, 3, 1, 2, 2] }
    ]
  },
  // ── RAMO D: Existencial-Linguístico ──
  Q06D: {
    id: 'Q06D',
    layer: '1D',
    cat: 'O Sentido',
    text: 'O sentido da vida surge primariamente de:',
    opts: [
      { l: 'A', t: 'Um ato solitário e radical de escolha diante do absurdo', v: [1, 0, 0, -1, 0, 3, 0] },
      { l: 'B', t: 'A fé — um comprometimento que vai além da justificação racional', v: [-2, 0, 0, -1, 0, 2, -1] },
      { l: 'C', t: 'O horizonte interpretativo da tradição, da história e da cultura', v: [0, 0, 0, 0, 2, 1, -1] },
      { l: 'D', t: 'Práticas, usos e jogos sociais — o sentido está no como agimos, não na essência', v: [1, 1, 0, 0, 3, 1, 1] }
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
    id: 'QR1',
    layer: 'R',
    cat: 'O Absoluto',
    text: 'O princípio mais alto — Deus, o Uno, o Bem — é:',
    opts: [
      { l: 'A', t: 'Um Deus pessoal que revela, ama e age na história', v: [-3, -1, 0, 0, -2, -3, -1] },
      { l: 'B', t: 'O Uno impessoal — unidade pura além do ser e do pensamento', v: [-3, -2, 0, 0, -3, -3, -3] },
      { l: 'C', t: 'A Forma do Bem — inteligível, racional, acessível pela razão', v: [-3, -3, 0, 0, -3, -3, -3] },
      { l: 'D', t: 'Uma presença viva encontrada no silêncio místico além de todo conceito', v: [-3, 0, 0, 0, -3, -2, -3] }
    ]
  },
  QR2: {
    id: 'QR2',
    layer: 'R',
    cat: 'A Vida Virtuosa',
    text: 'O fundamento de uma vida bem vivida é:',
    opts: [
      { l: 'A', t: 'Virtude e razão — alinhar a vontade à ordem racional do cosmos', v: [-1, -1, -2, -1, -1, -1, -1] },
      { l: 'B', t: 'Ataraxia — uma vida calma, livre do medo, da dor e da superstição', v: [1, 1, 2, -2, 0, 0, 0] },
      { l: 'C', t: 'Autossuficiência completa — rejeitar todas as convenções e necessidades falsas', v: [0, 0, 1, -3, 0, 1, 0] },
      { l: 'D', t: 'Piedade e submissão a uma ordem moral natural ordenada por Deus', v: [-2, -1, -1, -1, -1, -2, -1] }
    ]
  },
  QR3: {
    id: 'QR3',
    layer: 'R',
    cat: 'A Emancipação',
    text: 'O alvo central de uma filosofia crítica é:',
    opts: [
      { l: 'A', t: 'A exploração econômica — o capitalismo como estrutura raiz da dominação', v: [1, 0, 1, 3, 1, 2, 3] },
      { l: 'B', t: 'A dominação cultural — a racionalização da vida cotidiana e da consciência', v: [1, 0, 0, 2, 1, 2, 1] },
      { l: 'C', t: 'O patriarcado e o gênero — estruturas que naturalizam a opressão', v: [1, 1, 1, 2, 2, 3, 2] },
      { l: 'D', t: 'A colonialidade — o saber ocidental como instrumento de dominação', v: [1, 1, 1, 3, 2, 3, 1] }
    ]
  },
  QR4: {
    id: 'QR4',
    layer: 'R',
    cat: 'A Resposta Existencial',
    text: 'Diante da ausência de sentido dado, deve-se:',
    opts: [
      { l: 'A', t: 'Dar o salto de fé — abraçar o que a razão não alcança', v: [-2, 0, -1, -2, 0, 2, -1] },
      { l: 'B', t: 'Criar-se pela liberdade radical e pela escolha autêntica', v: [1, 0, 0, -1, 0, 3, 0] },
      { l: 'C', t: 'Retornar à tradição — o sentido sempre já está dado na interpretação partilhada', v: [0, 0, 0, 0, 2, 1, -1] },
      { l: 'D', t: 'Aceitar a ironia — nenhum vocabulário é final; revisamos e seguimos', v: [2, 1, 0, -1, 3, 2, 1] }
    ]
  },
  QR5: {
    id: 'QR5',
    layer: 'R',
    cat: 'Os Limites da Razão',
    text: 'A fronteira filosófica mais importante é entre:',
    opts: [
      { l: 'A', t: 'Ideias claras e distintas versus aparências confusas — clareza racionalista', v: [-1, -3, 0, 0, -2, -1, 0] },
      { l: 'B', t: 'O que a experiência sustenta versus o que ela não sustenta — disciplina empírica', v: [1, 3, 0, 0, 0, 0, 1] },
      { l: 'C', t: 'O que pode ser conhecido (fenômenos) versus o que está além da razão (noúmenos)', v: [0, -2, 0, 0, -1, -1, 0] },
      { l: 'D', t: 'O que pode ser dito com sentido versus o que deve ser mostrado ou calado', v: [0, -1, 0, 0, -2, 0, 0] }
    ]
  },
  QR6: {
    id: 'QR6',
    layer: 'R',
    cat: 'Estrutura e Diferença',
    text: 'A linguagem e o discurso:',
    opts: [
      { l: 'A', t: 'Operam como estruturas inconscientes que determinam o sentido por baixo', v: [0, 0, 0, 0, -1, -2, 0] },
      { l: 'B', t: 'São campos de diferença e adiamento — nenhum signo está plenamente presente', v: [2, 1, 0, 1, 3, 3, 1] },
      { l: 'C', t: 'São inseparáveis do poder — produzem sujeitos, verdades e normas', v: [2, 1, 0, 1, 3, 3, 0] },
      { l: 'D', t: 'São vocabulários locais — não há grande narrativa, apenas pequenas', v: [2, 2, 0, 0, 3, 3, 0] }
    ]
  },
  QR7: {
    id: 'QR7',
    layer: 'R',
    cat: 'O Pós-Humano',
    text: 'Sobre a relação entre humanidade e tecnologia:',
    opts: [
      { l: 'A', t: 'A tecnologia deve aprimorar e eventualmente transcender os limites biológicos', v: [2, 2, 0, -1, 1, 3, 3] },
      { l: 'B', t: 'A aceleração do capital e da computação é uma inteligência inumana em si', v: [2, 0, 0, 2, 2, 2, 3] },
      { l: 'C', t: 'Objetos e sistemas já têm agência que excede o design humano', v: [2, 0, 0, 0, 1, 1, 0] },
      { l: 'D', t: 'A complexidade e a emergência exigem um modo inteiramente novo de pensar sistemas', v: [1, 1, 0, 1, 1, 1, 0] }
    ]
  }
};
