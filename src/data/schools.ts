export interface School {
  id: number;
  name: string;
  era: string;
  thinkers: string;
  vector: number[];
  desc: string[];
  tensions: string;
  quote: string;
  author: string;
  aff?: number;
  dist?: number;
  pct?: number;
}

export const SCHOOLS: Record<number, School> = {
  1: {
    id: 1,
    name: 'Pré-Socráticos',
    era: 'Antiga',
    thinkers: 'Tales, Heráclito, Parmênides, Anaxímenes',
    vector: [-2, 0, 0, 0, -2, -2, -1],
    desc: [
      'Antes de a filosofia se voltar para dentro, ela olhou para o cosmos. Tales, Heráclito e Parmênides não perguntavam "quem sou eu?" — perguntavam "do que é feita a realidade?". Buscavam a arché, o princípio originário que sustenta tudo. Para Heráclito, tudo flui e o fogo é a chave; para Parmênides, o ser é uno e imóvel. Antes da resposta, o espanto.',
      'Se você ressoa com esta tradição, sente que o mundo possui uma gramática profunda que precede o humano. Você desconfia das explicações demasiado centradas no sujeito. A natureza fala — e o papel do pensador é aprender a ouvi-la, não projetá-la.'
    ],
    tensions: 'A reverência pela ordem cósmica pode tornar-se indiferença às urgências morais e políticas.',
    quote: 'O cosmo, o mesmo para todos, não foi feito por nenhum deus ou homem.',
    author: 'Heráclito'
  },
  2: {
    id: 2,
    name: 'Platonismo',
    era: 'Antiga',
    thinkers: 'Platão',
    vector: [-3, -3, -2, -1, -3, -3, -2],
    desc: [
      'O mundo sensível é uma sombra. A verdadeira realidade reside no mundo das Formas — ideias perfeitas, eternas e imutáveis que o filósofo acessa pela razão, não pelos sentidos. O mito da caverna não é metáfora pedagógica: é diagnóstico existencial. Vivemos acorrentados às aparências enquanto a luz real permanece atrás de nós.',
      'Se você é platonista, sente — contra todo relativismo fashionable — que há respostas corretas. Que beleza, justiça e verdade não são invenções, mas descobertas. Que filosofia é ascensão, não entretenimento.'
    ],
    tensions: 'O apego ao ideal pode gerar desdém pelo mundo concreto e pela política do real.',
    quote: 'A função do filósofo é subir da caverna e contemplar o sol.',
    author: 'Platão'
  },
  3: {
    id: 3,
    name: 'Aristotelismo',
    era: 'Antiga',
    thinkers: 'Aristóteles',
    vector: [-1, -1, -1, 0, -1, -1, 0],
    desc: [
      'Aristóteles trouxe a filosofia de volta à terra. Contra Platão, as formas habitam as próprias coisas — não num mundo separado. O conhecimento começa nos sentidos, avança pela indução, e culmina na contemplação das causas. A ética não é um sistema de regras, mas uma prática de excelência cultivada pelo hábito.',
      'Você acredita que a virtude se aprende fazendo. Que o ser humano é um animal político por natureza. Que a razão não nos separa do mundo — ela nos enraíza mais profundamente nele.'
    ],
    tensions: 'A confiança na ordem teleológica da natureza pode ser conservadora demais diante de rupturas radicais.',
    quote: 'Somos o que fazemos repetidamente. A excelência, portanto, não é um ato, mas um hábito.',
    author: 'Aristóteles'
  },
  4: {
    id: 4,
    name: 'Cinismo',
    era: 'Antiga',
    thinkers: 'Diógenes de Sínope, Antístenes',
    vector: [0, 0, 1, -3, 0, 1, 0],
    desc: [
      'Diógenes vivia num barril, rejeitava toda convenção social e pedia a Alexandre que saísse da frente do sol. O cinismo não é pessimismo — é radicalismo da autossuficiência. A virtude basta. Riqueza, fama, poder: correntes douradas. A liberdade real exige despir-se de tudo que a sociedade nos faz desejar.',
      'Se você é cínico no sentido filosófico, você sente que a maior parte do que as pessoas consideram necessário é contingente e sufocante. Você prefere desconforto honesto a conforto construído sobre ilusão. A provocação não é rancor — é cirurgia.'
    ],
    tensions: 'A recusa radical das convenções pode tornar-se postura estética em vez de transformação real.',
    quote: 'A maior riqueza é a pobreza de desejos.',
    author: 'Diógenes de Sínope'
  },
  5: {
    id: 5,
    name: 'Estoicismo',
    era: 'Antiga',
    thinkers: 'Zenão, Epicteto, Marco Aurélio, Sêneca',
    vector: [-1, -1, -1, -1, -1, -1, -1],
    desc: [
      'A distinção estoica é simples e devastadora: o que depende de nós (julgamentos, desejos, impulsos) e o que não depende (corpo, reputação, circunstâncias). A virtude é o único bem real. Tudo mais é indiferente. O logos permeia o universo e o sábio vive em harmonia com ele — não resistência ao que é, mas escolhendo como responder.',
      'Você cultiva uma cidadela interna que nenhuma circunstância exterior pode destruir. Não é frieza: Marco Aurélio chorava. É a disciplina de recusar que sua paz dependa do que não controla.'
    ],
    tensions: 'A autossuficiência interior pode tornar-se passividade política ou indiferença ao sofrimento estrutural.',
    quote: 'Não perguntes que as coisas aconteçam como desejas, mas deseja que aconteçam como são.',
    author: 'Epicteto'
  },
  6: {
    id: 6,
    name: 'Epicurismo',
    era: 'Antiga',
    thinkers: 'Epicuro, Lucrécio',
    vector: [1, 1, 2, -2, 0, 0, 0],
    desc: [
      'Epicuro pregava o prazer — mas não a orgia. Pregava a ataraxia: serenidade mental e ausência de dor. O átomo e o vazio compõem tudo; os deuses não intervêm; a morte é o fim e, portanto, não deve nos aterrorizar. A filosofia é remédio — e o jardim, seu espaço.',
      'Se você é epicurista, busca a amizade profunda, os prazeres simples, o retiro do ruído do mundo. Você suspeita das ambições grandiosas e das ideologias totalizantes. Viver bem é suficiente — e isso já é muito.'
    ],
    tensions: 'O foco no retiro privado pode tornar-se indiferença às obrigações coletivas de justiça.',
    quote: 'A morte não é nada para nós: quando existimos, a morte não está presente; quando a morte está presente, nós não existimos.',
    author: 'Epicuro'
  },
  7: {
    id: 7,
    name: 'Ceticismo Pirrônico',
    era: 'Antiga',
    thinkers: 'Pirro, Sexto Empírico',
    vector: [0, 3, 0, 0, 1, 0, 0],
    desc: [
      'Pirro observou que para toda afirmação existe uma igualmente forte negação. A saída não é escolher — é suspender o juízo (epoché). E na suspensão, paradoxalmente, encontra-se a tranquilidade. Não porque encontramos a verdade, mas porque paramos de nos torturar por não encontrá-la.',
      'Você desconfia de certezas. Toda posição filosófica, científica ou moral parece-lhe provisória. Isso não o paralisa — liberta. Você sabe que não sabe, e há uma paz estranha nessa honestidade radical.'
    ],
    tensions: 'A epoché pode tornar-se imobilismo ético quando a ação justa é urgente.',
    quote: 'A suspensão do juízo é seguida pela tranquilidade como a sombra segue o corpo.',
    author: 'Sexto Empírico'
  },
  8: {
    id: 8,
    name: 'Neoplatonismo',
    era: 'Antiga',
    thinkers: 'Plotino, Porfírio, Jâmblico',
    vector: [-3, -2, -1, 0, -3, -3, -3],
    desc: [
      'Plotino não leu Platão — ele o habitou. O Uno é além do ser, além do pensamento, além da linguagem. Dele emana o Nous (Intelecto), dele emana a Alma, dela emana a matéria. A filosofia é o retorno: ascender por dentro de si mesmo em direção à fonte. A mística não é irracional — é hiperracional.',
      'Se você é neoplatonista, sente que a realidade tem camadas — e que a superfície é a menos interessante. Você busca o Um que está aquém de toda multiplicidade. Meditação, contemplação, ascese: instrumentos de retorno.'
    ],
    tensions: 'A hierarquia ontológica pode gerar desvalorização do mundo material e do corpo.',
    quote: 'O Uno é perfeito porque não busca nada, não tem nada, não necessita de nada.',
    author: 'Plotino'
  },
  9: {
    id: 9,
    name: 'Patrística (Agostinho)',
    era: 'Medieval',
    thinkers: 'Agostinho de Hipona, Tertuliano, Orígenes',
    vector: [-3, -2, -1, -1, -2, -3, -2],
    desc: [
      'Agostinho fundiu Platão e Paulo. A filosofia não é fim em si — é serva da teologia. O coração humano é inquieto até repousar em Deus. O pecado original não é metáfora: é a estrutura da vontade corrompida que se dobra sobre si mesma. A graça, não o esforço, é o caminho.',
      'Se você ressoa com esta tradição, sente que a razão humana não basta — que há algo que ela alcança apenas quando iluminada. Que a maior batalha não é intelectual, mas espiritual.'
    ],
    tensions: 'A dependência da graça pode suprimir a responsabilidade moral e a autonomia racional.',
    quote: 'Nosso coração está inquieto até que encontre repouso em Ti.',
    author: 'Agostinho de Hipona'
  },
  10: {
    id: 10,
    name: 'Escolástica / Tomismo',
    era: 'Medieval',
    thinkers: 'Tomás de Aquino, Anselmo, Duns Escoto',
    vector: [-2, -2, -1, 0, -2, -2, -1],
    desc: [
      'Tomás de Aquino fez o impossível: reconciliar Aristóteles com o Evangelho. A razão e a fé não se contradizem — complementam-se. As cinco vias demonstram a existência de Deus pela razão natural. A lei natural é acessível a qualquer ser racional. A filosofia não nega a revelação — prepara o terreno para ela.',
      'Você acredita que o universo tem ordem racional e moral inscrita. Que a ética não é construída — é descoberta. Que há hierarquia natural no ser, e que compreendê-la é condição de vida boa.'
    ],
    tensions: 'A síntese fé-razão pode cristalizar-se em sistema fechado resistente a revisão.',
    quote: 'A graça não destrói a natureza, mas a aperfeiçoa.',
    author: 'Tomás de Aquino'
  },
  11: {
    id: 11,
    name: 'Nominalismo Medieval',
    era: 'Medieval',
    thinkers: 'Guilherme de Ockham, Roscelino',
    vector: [1, 1, 0, 0, 2, 1, 0],
    desc: [
      'Ockham cortou o nó górdio da metafísica medieval: os universais são apenas nomes (nomina), flatus vocis — sopro de voz. Só existem indivíduos concretos. A navalha de Ockham: não multiplique entidades além do necessário. Este princípio de parcimônia vai muito além da lógica — é uma atitude filosófica.',
      'Se você é nominalista, você desconfia de essências, naturezas e substâncias abstratas. O que existe é o particular, o concreto, o singular. As categorias gerais são ferramentas linguísticas — não espelhos do real.'
    ],
    tensions: 'A rejeição dos universais pode tornar difícil fundar qualquer ética ou ciência de alcance geral.',
    quote: 'Não se deve multiplicar os entes sem necessidade.',
    author: 'Guilherme de Ockham'
  },
  12: {
    id: 12,
    name: 'Misticismo Medieval',
    era: 'Medieval',
    thinkers: 'Meister Eckhart, Hildegarda de Bingen, João da Cruz',
    vector: [-3, 0, 0, 0, -3, -2, -3],
    desc: [
      'Meister Eckhart pregava que no fundo da alma há algo incriado e incriável — a centelha divina. A união com Deus não é teológica: é experiencial, imediata, além de palavras. Hildegarda de Bingen via visões e compunha música celestial. O místico não argumenta — testemunha.',
      'Se você ressoa aqui, você sabe que há experiências que nenhum conceito captura. Que o silêncio diz mais que o tratado. Que a filosofia pode ser vivida, não apenas pensada. Você não descarta o inefável — você o habita.'
    ],
    tensions: 'A experiência mística, por ser não-comunicável, resiste à crítica e ao diálogo racional.',
    quote: 'O olho pelo qual vejo Deus é o mesmo olho pelo qual Deus me vê.',
    author: 'Meister Eckhart'
  },
  13: {
    id: 13,
    name: 'Racionalismo',
    era: 'Moderna',
    thinkers: 'Descartes, Spinoza, Leibniz',
    vector: [-1, -3, 0, 0, -2, -1, 0],
    desc: [
      'Descartes duvidou de tudo até encontrar o que não podia duvidar: cogito ergo sum. A razão, não os sentidos, é a fonte primária do conhecimento. Spinoza construiu a ética more geometrico — como se fosse matemática. Leibniz viu o universo como sistema de mônadas governado pela razão suficiente. O racionalismo é a aposta de que a realidade é, em seu fundo, inteligível.',
      'Você acredita que o pensamento rigoroso, quando bem conduzido, alcança verdades necessárias. Que a geometria e a lógica não são convenções — são estruturas do real. Que a clareza e a distinção são critérios de verdade.'
    ],
    tensions: 'O apriorismo radical pode gerar sistemas fechados desconectados da experiência empírica.',
    quote: 'Penso, logo existo.',
    author: 'René Descartes'
  },
  14: {
    id: 14,
    name: 'Empirismo',
    era: 'Moderna',
    thinkers: 'Locke, Hume, Berkeley',
    vector: [1, 3, 0, 0, 0, 0, 1],
    desc: [
      'Locke declarou a mente uma tabula rasa: nenhuma ideia inata, tudo vem da experiência. Hume levou isso ao limite: nem mesmo a causalidade pode ser provada — é apenas hábito mental. Berkeley argumentou que ser é ser percebido. O empirismo é a disciplina de seguir a evidência onde quer que ela leve, mesmo que leve ao ceticismo.',
      'Você desconfia de raciocínios que flutuam muito acima dos dados. Para você, a filosofia deve ancorar-se na observação. Conhecimento sem experiência é, na melhor hipótese, especulação; na pior, dogma.'
    ],
    tensions: 'A negação de princípios a priori pode levar ao ceticismo radical sobre causalidade e indução.',
    quote: 'Nada está no intelecto que não tenha estado antes nos sentidos.',
    author: 'John Locke'
  },
  15: {
    id: 15,
    name: 'Contratualismo Clássico',
    era: 'Moderna',
    thinkers: 'Hobbes, Locke, Rousseau',
    vector: [0, -1, 0, 0, 0, 0, 1],
    desc: [
      'Por que obedecemos ao Estado? Hobbes: porque sem ele a vida é solitária, pobre, sórdida, brutal e breve. Locke: porque acordamos direitos naturais que o governo deve proteger. Rousseau: porque a vontade geral expressa nossa liberdade mais profunda. Três respostas, uma pergunta: qual é a origem legítima do poder político?',
      'Você acredita que as instituições políticas devem justificar-se racionalmente perante os cidadãos. Que o poder não é natural — é construído. E que essa construção pode ser melhor ou pior, mais ou menos legítima.'
    ],
    tensions: 'O contrato hipotético pode mascarar as desigualdades reais de quem está "à mesa" da negociação.',
    quote: 'O homem nasce livre, e por toda parte encontra-se acorrentado.',
    author: 'Jean-Jacques Rousseau'
  },
  16: {
    id: 16,
    name: 'Kantismo',
    era: 'Moderna',
    thinkers: 'Immanuel Kant',
    vector: [0, -2, -2, 0, -1, -1, 0],
    desc: [
      'Kant operou a "revolução copernicana" da filosofia: não é o sujeito que gira em torno dos objetos — são os objetos que giram em torno das estruturas do sujeito. O espaço, o tempo e as categorias do entendimento são condições da experiência, não propriedades das coisas em si. A ética do imperativo categórico: age só segundo aquela máxima que possas querer que seja lei universal.',
      'Você acredita na dignidade incondicional de cada pessoa. Que o dever não depende das consequências. Que a razão tem limites — e conhecê-los é sabedoria, não derrota.'
    ],
    tensions: 'O rigorismo deontológico pode ser cego às nuances trágicas onde deveres entram em conflito.',
    quote: 'Age apenas segundo a máxima pela qual possas ao mesmo tempo querer que ela se torne lei universal.',
    author: 'Immanuel Kant'
  },
  17: {
    id: 17,
    name: 'Idealismo Alemão',
    era: 'Moderna',
    thinkers: 'Fichte, Schelling, Hegel',
    vector: [-2, -3, 0, 0, -2, -2, 2],
    desc: [
      'Hegel viu na história o Espírito Absoluto tomando consciência de si mesmo. A dialética não é método: é o ritmo da realidade. Tese, antítese, síntese — não como esquema manual, mas como movimento real do pensamento e do ser. O racional é real; o real é racional. Nada existe fora do processo.',
      'Se você é idealista alemão, você vê contradições não como falhas a eliminar, mas como motores do desenvolvimento. Você lê a história como drama do espírito. Você suspeita que o todo é sempre mais do que a soma das partes.'
    ],
    tensions: 'O absolutismo do sistema hegeliano pode absorver e neutralizar toda alteridade e resistência.',
    quote: 'O que é racional é real; o que é real é racional.',
    author: 'G.W.F. Hegel'
  },
  18: {
    id: 18,
    name: 'Utilitarismo',
    era: 'Moderna',
    thinkers: 'Bentham, J.S. Mill, Sidgwick',
    vector: [1, 2, 3, 1, 0, 0, 2],
    desc: [
      'Bentham propôs o cálculo felicífico: a ação correta é a que produz a maior felicidade para o maior número. Mill refinou: há qualidades de prazer, não apenas quantidades. A ética deixa de ser sobre caráter ou dever — torna-se sobre consequências mensuráveis. O sofrimento importa, independente de quem sofre.',
      'Você pensa em termos de impacto. Avalia ações pelas suas consequências reais sobre seres reais. Desconfia de regras morais absolutas quando elas produzem sofrimento desnecessário. Para você, a compaixão bem calculada é virtude suprema.'
    ],
    tensions: 'A maximização agregada pode justificar sacrificar minorias pelo bem da maioria.',
    quote: 'A maior felicidade do maior número é a medida do certo e do errado.',
    author: 'Jeremy Bentham'
  },
  19: {
    id: 19,
    name: 'Marxismo',
    era: 'Séc. XIX',
    thinkers: 'Marx, Engels',
    vector: [2, 1, 1, 3, 1, 2, 3],
    desc: [
      'Marx inverteu Hegel: não é o espírito que move a história — são as relações materiais de produção. A superestrutura (cultura, filosofia, direito) reflete e serve à infraestrutura econômica. A alienação não é espiritual — é produzida pelo modo como trabalhamos. "Os filósofos apenas interpretaram o mundo de várias maneiras; o que importa é transformá-lo."',
      'Se você é marxista, você lê todo fenômeno cultural perguntando: a quem serve? Você vê na aparente naturalidade das relações sociais uma construção histórica que pode ser desfeita. A consciência não precede a práxis — a práxis transforma a consciência.'
    ],
    tensions: 'O determinismo econômico pode subestimar a agência individual e a autonomia da cultura.',
    quote: 'Os filósofos apenas interpretaram o mundo; o que importa é transformá-lo.',
    author: 'Karl Marx'
  },
  20: {
    id: 20,
    name: 'Nietzscheanismo',
    era: 'Séc. XIX',
    thinkers: 'Friedrich Nietzsche',
    vector: [1, -1, -1, -3, 0, 2, 2],
    desc: [
      'Deus está morto — e nós o matamos. Com ele, desmorona toda a estrutura de valores que a metafísica ocidental ergueu. Nietzsche não chora: ele pergunta quem vai criar novos valores. A vontade de potência não é brutalidade — é o impulso criativo em seu estado mais puro. O eterno retorno é o teste: você viveria esta vida infinitamente?',
      'Se você é nietzschiano, você se recusa a viver por valores herdados sem examiná-los. Você sente que a maior traição é a mediocridade consentida. Você quer criar — não apenas seguir.'
    ],
    tensions: 'A exaltação da potência criadora pode deslizar para justificações de aristocratismo ou niilismo destrutivo.',
    quote: 'Torna-te quem és.',
    author: 'Friedrich Nietzsche'
  },
  21: {
    id: 21,
    name: 'Pragmatismo',
    era: 'Séc. XIX',
    thinkers: 'Peirce, William James, Dewey',
    vector: [1, 2, 1, -1, 3, 1, 2],
    desc: [
      'Peirce perguntou: qual é a diferença prática entre duas teorias que têm as mesmas consequências observáveis? Se nenhuma, a diferença é ilusória. James radicalizou: a verdade é o que é bom acreditar. Dewey conectou isso à democracia e à educação. O pragmatismo não é cinismo — é a insistência de que ideias são ferramentas, não espelhos.',
      'Você avalia ideias pelo que elas fazem, não pelo que elas representam. Você desconfia de verdades eternas que não produzem nenhuma diferença na experiência. Para você, filosofia boa é filosofia que resolve problemas reais.'
    ],
    tensions: 'O critério da utilidade pode subordinar a verdade ao poder — o que funciona para quem?',
    quote: 'A verdade acontece a uma ideia; ela se torna verdadeira, é feita verdadeira pelos eventos.',
    author: 'William James'
  },
  22: {
    id: 22,
    name: 'Positivismo Científico',
    era: 'Séc. XIX',
    thinkers: 'Comte, Spencer, Mach',
    vector: [2, 3, 1, 0, 0, 0, 3],
    desc: [
      'Comte propôs que o conhecimento humano passou por três estágios: teológico, metafísico e positivo. No estágio positivo, só conta o que pode ser observado e verificado. A metafísica é resíduo a eliminar. A ciência é o modelo de todo conhecimento legítimo. A sociologia seria a "física social".',
      'Você confia na ciência como o método mais confiável de compreender o mundo. Você é cético diante de afirmações que não podem ser testadas. Para você, progresso é real e é medido por critérios objetivos.'
    ],
    tensions: 'A rejeição da metafísica pode eliminar questões filosóficas fundamentais que a ciência não formula.',
    quote: 'Saber para prever, prever para poder.',
    author: 'Auguste Comte'
  },
  23: {
    id: 23,
    name: 'Vitalismo / Filosofia da Vida',
    era: 'Séc. XIX',
    thinkers: 'Bergson, Dilthey, Simmel',
    vector: [0, 0, 0, -1, -1, -1, 0],
    desc: [
      'Bergson insistiu que o tempo vivido (durée) não é o tempo mensurável da física. A vida tem uma qualidade irredutível ao mecanismo — o élan vital. Dilthey distinguiu ciências naturais (explicar) de ciências do espírito (compreender). A filosofia da vida recusa reduzir o vivente ao calculável.',
      'Você sente que há algo na experiência viva que escapas a qualquer mensuração. Que o tempo que você vive não é o tempo do relógio. Que compreender uma pessoa ou uma obra de arte exige uma categoria diferente de "causa".'
    ],
    tensions: 'A ênfase na irredutibilidade da vida pode tornar-se hostilidade injustificada à ciência e à análise.',
    quote: 'O tempo é invenção ou não é absolutamente nada.',
    author: 'Henri Bergson'
  },
  24: {
    id: 24,
    name: 'Proto-Existencialismo (Kierkegaard)',
    era: 'Séc. XIX',
    thinkers: 'Søren Kierkegaard',
    vector: [-2, 0, -1, -2, 0, 1, -1],
    desc: [
      'Kierkegaard escreveu sob pseudônimos porque cada pseudônimo habitava um estágio da existência: o estético, o ético, o religioso. A verdade é subjetividade — não relativismo, mas comprometimento pessoal. O salto de fé não é irracional: é o reconhecimento de que certas escolhas existenciais não podem ser justificadas de fora.',
      'Se você está aqui, você sabe que a angústia não é patologia — é a tonalidade afetiva da liberdade. Você entende que escolher é criar-se. E que há algo que nenhum sistema filosófico pode decidir por você.'
    ],
    tensions: 'A subjetividade radical pode isolar o indivíduo de toda responsabilidade comunitária.',
    quote: 'A subjetividade é a verdade.',
    author: 'Søren Kierkegaard'
  },
  25: {
    id: 25,
    name: 'Fenomenologia',
    era: 'Séc. XX',
    thinkers: 'Husserl, Merleau-Ponty, Scheler',
    vector: [0, -1, 0, 0, -1, 1, -2],
    desc: [
      'Husserl propôs retornar "às coisas mesmas" — não às teorias sobre as coisas, mas à experiência tal como ela se dá. A consciência é sempre intencional: ela é sempre consciência de algo. A epoché fenomenológica suspende as pressuposições para ver o fenômeno em sua pureza. Merleau-Ponty acrescentou o corpo: não temos um corpo — somos um corpo.',
      'Você desacelera diante da experiência. Você quer descrever antes de explicar. Você suspeita que muito do que chamamos de "dado" já está carregado de teoria. A atenção radical ao que aparece é, para você, o início de toda filosofia séria.'
    ],
    tensions: 'A redução fenomenológica pode dificultar a passagem da descrição à crítica social e política.',
    quote: 'Toda consciência é consciência de algo.',
    author: 'Edmund Husserl'
  },
  26: {
    id: 26,
    name: 'Existencialismo',
    era: 'Séc. XX',
    thinkers: 'Sartre, Heidegger, Simone de Beauvoir',
    vector: [1, 0, 0, -1, 0, 2, 0],
    desc: [
      'A existência precede a essência: não há natureza humana dada — somos condenados a ser livres e a criar o que somos por meio de nossas escolhas. Heidegger aprofundou: o ser-no-mundo, o ser-para-a-morte, a autenticidade. Beauvoir aplicou à condição feminina: ninguém nasce mulher, torna-se. O existencialismo é a filosofia da responsabilidade radical.',
      'Se você é existencialista, você não espera que o universo lhe dê sentido. Você sabe que a angústia é o preço da liberdade, e está disposto a pagá-lo. Você escolhe — e assume.'
    ],
    tensions: 'A liberdade absoluta individual pode ignorar as condições estruturais que constrangem a escolha.',
    quote: 'A existência precede a essência.',
    author: 'Jean-Paul Sartre'
  },
  27: {
    id: 27,
    name: 'Filosofia Analítica',
    era: 'Séc. XX',
    thinkers: 'Russell, Frege, Moore, Wittgenstein',
    vector: [0, -2, 0, 0, -2, 0, 1],
    desc: [
      'Russell e Frege queriam fundamentar a matemática na lógica. Moore queria clareza conceitual em ética. O primeiro Wittgenstein traçou os limites do que pode ser dito. A filosofia analítica não é uma doutrina — é um método: análise cuidadosa de argumentos, clarificação de conceitos, rigor lógico.',
      'Você tem baixa tolerância para obscuridade filosófica gratuita. Você acredita que muitos problemas filosóficos são, na verdade, confusões linguísticas que a análise cuidadosa dissolve. Precisão não é empobrecimento — é honestidade intelectual.'
    ],
    tensions: 'O rigor analítico pode estreitar o campo da filosofia, excluindo questões que resistem à formalização.',
    quote: 'O que pode ser dito pode ser dito claramente; sobre o que não se pode falar, deve-se calar.',
    author: 'Ludwig Wittgenstein'
  },
  28: {
    id: 28,
    name: 'Estruturalismo',
    era: 'Séc. XX',
    thinkers: 'Saussure, Lévi-Strauss, Althusser',
    vector: [0, 0, 0, 0, -1, -2, 0],
    desc: [
      'Saussure mostrou que o signo linguístico é arbitrário: o significante não tem relação natural com o significado. Lévi-Strauss aplicou ao mito e ao parentesco: estruturas inconscientes governam a cultura. Althusser ao marxismo: a ideologia interpela os sujeitos. O sujeito não é origem — é produto de estruturas que o antecedem.',
      'Você vê padrões onde outros veem apenas eventos. Você suspeita que o que parece natural é estruturado. Você busca a gramática profunda por baixo da superfície cultural.'
    ],
    tensions: 'O anti-humanismo metodológico pode suprimir a agência e a responsabilidade individual.',
    quote: 'A linguagem é a condição de possibilidade da cultura.',
    author: 'Claude Lévi-Strauss'
  },
  29: {
    id: 29,
    name: 'Teoria Crítica (Escola de Frankfurt)',
    era: 'Séc. XX',
    thinkers: 'Adorno, Horkheimer, Marcuse, Benjamin',
    vector: [1, 0, 0, 2, 1, 2, 1],
    desc: [
      'Adorno e Horkheimer diagnosticaram o Iluminismo: a razão que prometia libertação tornou-se razão instrumental — dominação da natureza, da sociedade e do indivíduo. A indústria cultural produz conformismo em massa. Benjamin viu lampejo de redenção nos fragmentos da história dos vencidos. A teoria crítica não descreve — ela julga.',
      'Você não aceita o presente como natural. Você lê a cultura popular como campo de batalha ideológico. Você quer uma razão que se volte criticamente sobre si mesma — não uma razão que apenas otimiza.'
    ],
    tensions: 'A crítica total pode tornar-se niilismo teórico sem horizonte emancipatório concreto.',
    quote: 'O todo é o não-verdadeiro.',
    author: 'Theodor Adorno'
  },
  30: {
    id: 30,
    name: 'Hermenêutica',
    era: 'Séc. XX',
    thinkers: 'Gadamer, Ricoeur, Dilthey',
    vector: [0, 0, 0, 0, 2, 1, -1],
    desc: [
      'Gadamer argumentou que toda compreensão é interpretação — e toda interpretação acontece dentro de uma tradição, de um horizonte histórico. A fusão de horizontes não é relativismo: é o reconhecimento de que compreender é sempre um diálogo. Ricoeur acrescentou a narrativa: o tempo humano torna-se humano quando articulado em forma de história.',
      'Você sabe que não há leitura inocente. Que você carrega pressupostos que não escolheu. Que compreender o outro exige expor os próprios horizontes à transformação. Para você, o diálogo genuíno é o modo mais alto de conhecimento.'
    ],
    tensions: 'A ênfase na tradição pode tornar-se conservadorismo velado que resiste à crítica radical.',
    quote: 'O ser que pode ser compreendido é linguagem.',
    author: 'Hans-Georg Gadamer'
  },
  31: {
    id: 31,
    name: 'Filosofia Analítica da Linguagem',
    era: 'Séc. XX',
    thinkers: 'Austin, Searle, Grice, Ryle',
    vector: [0, -2, 0, 0, -3, 0, 0],
    desc: [
      'O segundo Wittgenstein abandonou o ideal de linguagem perfeita: a linguagem é uma forma de vida. Austin descobriu os atos de fala: dizer é fazer. Searle formalizou: locucionário, ilocucionário, perlocucionário. A linguagem não representa — ela age, promete, declara, ordena.',
      'Você presta atenção ao que as pessoas fazem com as palavras, não apenas ao que dizem. Você sabe que "isso é belo" e "está nevando" são atos radicalmente diferentes. A análise da linguagem ordinária revela filosofia embutida no cotidiano.'
    ],
    tensions: 'O foco nos usos ordinários pode perder de vista questões metafísicas que transcendem o linguístico.',
    quote: 'Os limites da minha linguagem são os limites do meu mundo.',
    author: 'Ludwig Wittgenstein'
  },
  32: {
    id: 32,
    name: 'Neopragmatismo',
    era: 'Séc. XX',
    thinkers: 'Richard Rorty, Donald Davidson',
    vector: [2, 1, 0, -1, 3, 2, 1],
    desc: [
      'Rorty declarou o fim da epistemologia: não há espelho da natureza, não há fundação última do conhecimento. A filosofia deve abandonar a pretensão de ser árbitro da cultura e tornar-se mais uma voz na conversa da humanidade. A solidariedade, não a objetividade, é o horizonte da ética. O vocabulário que usamos é contingente — e pode ser trocado.',
      'Você é pós-fundacionalista sem ser niilista. Você acredita que podemos melhorar o mundo sem precisar de fundamentos metafísicos. Que a ironia — saber que seu vocabulário final é contingente — é intelectualmente honesta.'
    ],
    tensions: 'A renúncia à objetividade pode dificultar a crítica de práticas culturais que se autojustificam.',
    quote: 'A verdade é o que é bom para nós acreditar.',
    author: 'Richard Rorty'
  },
  33: {
    id: 33,
    name: 'Pós-Estruturalismo',
    era: 'Contemporânea',
    thinkers: 'Foucault, Derrida, Deleuze, Guattari',
    vector: [2, 1, 0, 1, 3, 3, 1],
    desc: [
      'Derrida mostrou que todo texto contém suplementos que subvertem sua própria hierarquia. Foucault rastreou como o poder produz sujeitos, saberes e verdades — não apenas os reprime. Deleuze e Guattari propuseram o rizoma contra a árvore: pensamento sem centro, sem origem, sem destino fixo.',
      'Se você está aqui, você desconfia de qualquer centro, fundação ou origem estável. Você vê nos binarismos (natureza/cultura, normal/patológico) instrumentos de poder. Você prefere a multiplicidade à identidade, o devir ao ser.'
    ],
    tensions: 'A desconstrução permanente pode paralisar qualquer projeto político ou ético de longo prazo.',
    quote: 'Não há fora-do-texto.',
    author: 'Jacques Derrida'
  },
  34: {
    id: 34,
    name: 'Pós-Modernismo',
    era: 'Contemporânea',
    thinkers: 'Lyotard, Baudrillard, Vattimo',
    vector: [2, 2, 0, 0, 3, 3, 0],
    desc: [
      'Lyotard diagnosticou a incredulidade em relação às metanarrativas: não há mais uma história da emancipação, da razão, do progresso que organize o sentido. Baudrillard viu a realidade substituída pelo simulacro — signos que não remetem a nada além de outros signos. A hiperrealidade é mais real que o real.',
      'Você suspeita de qualquer grande narrativa que prometa redimir a história. Você vê nos meios de comunicação não janelas para o mundo, mas constructores de mundos. Para você, a fragmentação não é crise — é condição.'
    ],
    tensions: 'A rejeição das metanarrativas pode tornar impossível qualquer crítica normativa consistente.',
    quote: 'Simplificando ao extremo: defino pós-moderno como incredulidade em relação às metanarrativas.',
    author: 'Jean-François Lyotard'
  },
  35: {
    id: 35,
    name: 'Feminismo Filosófico',
    era: 'Contemporânea',
    thinkers: 'Judith Butler, bell hooks, Donna Haraway',
    vector: [1, 1, 1, 2, 2, 3, 2],
    desc: [
      'Butler mostrou que o gênero não é expressão de uma identidade natural — é performance reiterada de normas. Haraway propôs o cyborg como figura que recusa as fronteiras natureza/cultura, humano/máquina. hooks insistiu que raça, classe e gênero são inseparáveis — a interseccionalidade não é adição, é multiplicação.',
      'Você sabe que o pessoal é político. Que a filosofia que ignora o gênero ignora metade da experiência humana. Que a objetividade sem perspectiva é uma perspectiva que se esconde. Que corpos importam.'
    ],
    tensions: 'A multiplicidade de feminismos pode dificultar a construção de solidariedades políticas amplas.',
    quote: 'O gênero é sempre um fazer.',
    author: 'Judith Butler'
  },
  36: {
    id: 36,
    name: 'Filosofia da Mente',
    era: 'Contemporânea',
    thinkers: 'Chalmers, Dennett, Nagel, Churchland',
    vector: [1, -1, 0, 0, -1, 2, 0],
    desc: [
      'Chalmers formulou o "problema difícil da consciência": por que há algo que é ser como é ser eu? Dennett respondeu: a consciência é ilusão — um truque que o cérebro joga sobre si mesmo. Nagel perguntou: o que é ser um morcego? Churchland propôs o eliminativismo: estados mentais são estados cerebrais mal descritos.',
      'O problema da consciência fascina você. Você sente que a questão "por que há experiência subjetiva?" não pode ser respondida apenas pela neurociência. Que há algo no qualia que resiste à redução física.'
    ],
    tensions: 'O debate mente-corpo pode tornar-se tão técnico que perde contato com a experiência vivida real.',
    quote: 'Por que deveria haver algo que é ser um sistema de processamento de informação?',
    author: 'David Chalmers'
  },
  37: {
    id: 37,
    name: 'Naturalismo Filosófico',
    era: 'Contemporânea',
    thinkers: 'Quine, Churchland, Dennett',
    vector: [2, 3, 0, 0, 0, 0, 2],
    desc: [
      'Não há "filosofia primeira": a filosofia é contínua com a ciência. Quine argumentou que não há distinção nítida entre verdades analíticas e sintéticas. Dennett e os Churchland levaram isso ao limite: a neurociência e a biologia evolutiva são as ferramentas para entender a mente e a moral.',
      'Se você é naturalista, você não vê ruptura entre filosofia e ciência. Você acredita que a mente, a moral e o conhecimento podem ser estudados empiricamente. Que não há questões filosóficas que sejam, em princípio, inacessíveis à investigação científica.'
    ],
    tensions: 'A continuidade com a ciência pode dissolver questões filosóficas legítimas que resistem à empiria.',
    quote: 'A filosofia da ciência é suficientemente filosofia para mim.',
    author: 'W.V.O. Quine'
  },
  38: {
    id: 38,
    name: 'Ética das Virtudes Contemporânea',
    era: 'Contemporânea',
    thinkers: 'MacIntyre, Philippa Foot, Anscombe',
    vector: [-1, -1, -2, -1, -1, -1, 0],
    desc: [
      'MacIntyre diagnosticou a modernidade moral: perdemos o contexto teleológico que dava sentido às virtudes. Anscombe declarou que sem esse contexto, "dever" e "obrigação" são fantasmas sem corpo. Foot argumentou que as virtudes são objetivas porque estão ligadas ao florescimento da natureza humana — a eudaimonia.',
      'Você desconfia tanto do utilitarismo quanto do kantismo: ambos abstraem demais do caráter concreto. Para você, a pergunta central não é "o que devo fazer?" mas "que tipo de pessoa devo ser?". A virtude não é regra — é segunda natureza.'
    ],
    tensions: 'A referência a uma natureza humana pode ser conservadora diante de formas de vida radicalmente novas.',
    quote: 'A questão central da ética é: que tipo de pessoa devo me tornar?',
    author: 'Alasdair MacIntyre'
  },
  39: {
    id: 39,
    name: 'Contratualismo Contemporâneo',
    era: 'Contemporânea',
    thinkers: 'Rawls, Scanlon, Gauthier',
    vector: [0, -3, 1, 3, 0, 0, 1],
    desc: [
      'Rawls propôs o "véu de ignorância": princípios de justiça devem ser escolhidos sem saber qual posição ocuparemos na sociedade. Scanlon reformulou: age de acordo com princípios que ninguém poderia razoavelmente rejeitar. A justiça é o que pessoas livres e iguais, sob condições equitativas, acordariam.',
      'Você acredita que a legitimidade política e moral depende de justificação pública. Que as instituições devem ser justificáveis aos mais desfavorecidos. Que a razão pública é o tribunal da democracia.'
    ],
    tensions: 'A abstração do véu de ignorância pode ignorar identidades concretas que são constitutivas da pessoa.',
    quote: 'A justiça é a primeira virtude das instituições sociais.',
    author: 'John Rawls'
  },
  40: {
    id: 40,
    name: 'Libertarismo Filosófico',
    era: 'Contemporânea',
    thinkers: 'Nozick, Hayek, Rothbard',
    vector: [0, -1, 0, -3, 0, 0, 1],
    desc: [
      'Nozick respondeu a Rawls: a distribuição justa não é padrão — é processo. Se cada passo da história foi voluntário, o resultado é legítimo. O Estado mínimo — proteção contra violência e roubo, nada mais — é o único que respeita a auto-propriedade. Toda tributação redistributiva é trabalho forçado.',
      'Você acredita que cada pessoa é proprietária de si mesma e dos frutos de seu trabalho. Que a liberdade não pode ser sacrificada por bem-estar agregado. Que a coerção — mesmo bem-intencionada — é sempre moralmente problemática.'
    ],
    tensions: 'A auto-propriedade abstrata ignora as condições sociais que tornam a "escolha livre" possível para alguns e impossível para outros.',
    quote: 'Os indivíduos têm direitos, e há coisas que nenhuma pessoa ou grupo pode fazer-lhes sem violar esses direitos.',
    author: 'Robert Nozick'
  },
  41: {
    id: 41,
    name: 'Comunitarismo',
    era: 'Contemporânea',
    thinkers: 'MacIntyre, Sandel, Taylor, Walzer',
    vector: [-1, -1, -1, 1, -1, -1, -1],
    desc: [
      'Sandel criticou Rawls: o sujeito liberal é uma ficção — somos sempre já constituídos por comunidades, tradições e narrativas que não escolhemos. Taylor argumentou que a identidade moderna só se compreende contra um horizonte de significado compartilhado. A comunidade não é meio — é condição de possibilidade do eu.',
      'Você sente que pertencimento não é escolhido — é dado e recebido. Que obrigações nascem de vínculos, não de contratos. Que a filosofia que trata o indivíduo como átomo pré-social comete um erro antropológico fundamental.'
    ],
    tensions: 'A ênfase na comunidade pode sufocar dissidentes e minorias que não compartilham seus valores.',
    quote: 'Somos seres que se auto-interpretam.',
    author: 'Charles Taylor'
  },
  42: {
    id: 42,
    name: 'Realismo Especulativo / OOO',
    era: 'Contemporânea',
    thinkers: 'Meillassoux, Harman, Morton',
    vector: [2, 0, 0, 0, 1, 1, 0],
    desc: [
      'Meillassoux atacou o "correlacionismo": a filosofia moderna só pensa a correlação entre pensamento e ser, nunca o ser em si. Harman propôs que objetos têm realidade irredutível às relações que estabelecem — até mesmo às relações com o pensamento humano. Timothy Morton acrescentou os "hyperobjetos": realidades tão vastas que excedem qualquer localização.',
      'Você suspeita que o universo não gira em torno do humano. Que objetos, animais, sistemas têm vida filosófica própria que não se reduz ao que pensamos deles. Você quer uma filosofia que pense o não-humano sem antropomorfizá-lo.'
    ],
    tensions: 'A rejeição do correlacionismo pode tornar paradoxalmente impossível qualquer acesso filosófico ao real.',
    quote: 'A contingência absoluta é a única necessidade.',
    author: 'Quentin Meillassoux'
  },
  43: {
    id: 43,
    name: 'Aceleracionismo',
    era: 'Contemporânea',
    thinkers: 'Nick Land, Williams, Srnicek',
    vector: [2, 0, 0, 2, 2, 2, 3],
    desc: [
      'O aceleracionismo não é otimismo tecnológico ingênuo — é uma tese filosófica sobre a relação entre capital, tecnologia e transformação. Land argumentou que o capitalismo é uma inteligência alienígena que se auto-organiza. Williams e Srnicek propuseram o aceleracionismo de esquerda: apropriar-se das forças tecnológicas para fins emancipatórios.',
      'Você sente que desacelerar não é solução — que as contradições do presente só se resolvem sendo atravessadas, não evitadas. Que a tecnologia não é neutra, mas também não é o inimigo. Que o futuro não espera.'
    ],
    tensions: 'A aposta na aceleração pode servir tanto à emancipação quanto ao aprofundamento das desigualdades existentes.',
    quote: 'A modernidade é uma guerra que ainda não encontrou seu fim.',
    author: 'Nick Land'
  },
  44: {
    id: 44,
    name: 'Budismo Analítico',
    era: 'Contemporânea',
    thinkers: 'Nāgārjuna, Jay Garfield, Evan Thompson',
    vector: [-1, 0, 1, 0, 0, 2, -2],
    desc: [
      'Nāgārjuna demonstrou que nada tem existência própria (svabhāva) — tudo é vazio (śūnyatā) de essência independente. Jay Garfield e outros aproximaram isso da filosofia analítica: o eu é convencional, não metafisicamente real. Thompson dialogou com a fenomenologia e a ciência cognitiva. A meditação é, também, investigação filosófica.',
      'Você suspeita que o "eu" que parece tão sólido é uma construção dependente de causas e condições. Que a interdependência não é metáfora — é a estrutura da realidade. Que certos insights filosóficos só se compreendem completamente na prática.'
    ],
    tensions: 'A dissolução do eu pode dificultar a fundação de qualquer ética de responsabilidade individual.',
    quote: 'A vacuidade é vazia de existência inerente — mas não é vazia de fenômenos.',
    author: 'Nāgārjuna'
  },
  45: {
    id: 45,
    name: 'Ética Animal / Biocêntrica',
    era: 'Contemporânea',
    thinkers: 'Peter Singer, Tom Regan, Paul Taylor',
    vector: [1, 2, 2, 1, 0, 2, 2],
    desc: [
      'Singer perguntou: por que a dor de um porco importa menos que a dor de um humano? Se a senciência é o critério moralmente relevante, o especismo — preferência arbitrária pela própria espécie — é tão injustificável quanto o racismo. Regan argumentou que animais são "sujeitos de uma vida" com valor inerente. Taylor estendeu ao mundo vivo como um todo.',
      'Você acredita que o círculo moral precisa se expandir além da humanidade. Que o sofrimento importa independentemente de quem sofre. Que a filosofia que ignora o mundo não-humano está trabalhando com uma amostra deficiente da realidade.'
    ],
    tensions: 'A expansão do círculo moral pode tornar impossível qualquer hierarquia de obrigações na prática.',
    quote: 'A questão não é: podem eles raciocinar? Nem: podem eles falar? Mas: podem eles sofrer?',
    author: 'Jeremy Bentham'
  },
  46: {
    id: 46,
    name: 'Transumanismo',
    era: 'Contemporânea',
    thinkers: 'Bostrom, Kurzweil, More',
    vector: [2, 2, 0, -1, 1, 3, 3],
    desc: [
      'A condição humana não é o destino — é o ponto de partida. Bostrom argumenta que temos obrigações morais de melhorar capacidades humanas via tecnologia. Kurzweil prevê a singularidade: o ponto em que a inteligência artificial supera a humana. O transumanismo não é ficção científica — é programa filosófico de redesenho da humanidade.',
      'Você vê a biologia como contingência, não essência. Você acredita que eliminar o sofrimento e ampliar a cognição são projetos moralmente sérios. Que a morte não é inevitável — apenas ainda não foi resolvida. Que o humano é rascunho, não versão final.'
    ],
    tensions: 'A aceleração tecnológica pode criar abismos de desigualdade biológica entre os que têm acesso e os que não têm.',
    quote: 'Somos os primeiros a sermos capazes de redesenhar as condições fundamentais da existência humana.',
    author: 'Nick Bostrom'
  },
  47: {
    id: 47,
    name: 'Filosofia Decolonial',
    era: 'Contemporânea',
    thinkers: 'Quijano, Mignolo, Fanon, Dussel',
    vector: [1, 1, 1, 3, 2, 3, 1],
    desc: [
      'Quijano mostrou que a colonialidade do poder não terminou com a independência formal — ela estrutura ainda hoje as hierarquias de raça, saber e ser. Mignolo propôs a "opção decolonial": pensamento a partir das margens do sistema-mundo moderno-colonial. Fanon analisou a violência colonial como constitutiva da subjetividade colonizada.',
      'Você desconfia da universalidade europeia que se apresenta como simplesmente "universal". Você sabe que toda epistemologia tem uma geopolítica. Que pensar a partir do sul global, das margens, dos silenciados, produz filosofia diferente — e necessária.'
    ],
    tensions: 'A crítica ao eurocentrismo pode, paradoxalmente, reproduzir essencialismos culturais alternativos.',
    quote: 'A colonialidade é a face oculta da modernidade.',
    author: 'Walter Mignolo'
  },
  48: {
    id: 48,
    name: 'Filosofia da Complexidade',
    era: 'Contemporânea',
    thinkers: 'Morin, Stengers, Prigogine',
    vector: [1, 1, 0, 1, 1, 1, 0],
    desc: [
      'Morin propôs o pensamento complexo contra a simplificação: os fenômenos precisam ser compreendidos nas suas relações, recursividades e emergências — não reduzidos a partes. Stengers defendeu uma "ecologia das práticas" científicas. Prigogine mostrou que sistemas longe do equilíbrio geram ordem espontânea. A complexidade não é obstáculo ao conhecimento — é sua condição real.',
      'Você desconfia das explicações que simplificam demais. Você vê em todo sistema — ecológico, social, mental — uma teia de relações que produz emergências imprevisíveis. Para você, o todo não é apenas maior que a soma das partes — é qualitativamente diferente.'
    ],
    tensions: 'O pensamento complexo pode tornar-se impreciso quando a complexidade se torna desculpa para evitar comprometimentos claros.',
    quote: 'A complexidade não é uma receita para o conhecimento do complexo, mas uma advertência contra o conhecimento simplificante.',
    author: 'Edgar Morin'
  }
};
