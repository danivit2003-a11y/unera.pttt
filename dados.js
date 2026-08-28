// =====================================================
// UNERA — BASE DE DADOS
// =====================================================

const universidades = [];


// =====================================================
// NORMALIZAÇÃO
// =====================================================

function normalizar(texto) {
    return String(texto || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}


// =====================================================
// REGISTAR UMA INSTITUIÇÃO
// =====================================================

function registarUniversidade(
    id,
    nome,
    unidades = [],
    cursos = []
) {

    universidades.push({
        id,
        nome,
        unidades,
        cursos
    });

}


// =====================================================
// REGISTAR UMA FACULDADE / UNIDADE ORGÂNICA
// =====================================================

function registarFaculdade(
    universidadeId,
    id,
    nome,
    cursos = []
) {

    const universidade =
        universidades.find(
            universidade =>
                universidade.id === universidadeId
        );

    if (!universidade) {
        return;
    }

    universidade.unidades.push({
        id,
        nome,
        cursos
    });

}


// =====================================================
// REGISTAR CURSOS
// =====================================================

function registarCursos(
    universidadeId,
    faculdadeId,
    cursos
) {

    const universidade =
        universidades.find(
            universidade =>
                universidade.id === universidadeId
        );

    if (!universidade) {
        return;
    }


    // Instituições sem faculdade/unidade orgânica
    if (!faculdadeId) {

        universidade.cursos.push(
            ...cursos
        );

        return;
    }


    // Instituições com faculdade/unidade orgânica
    const faculdade =
        universidade.unidades.find(
            unidade =>
                unidade.id === faculdadeId
        );

    if (!faculdade) {
        return;
    }


    faculdade.cursos.push(
        ...cursos
    );

}


// =====================================================
// A PARTIR DAQUI ENTRAM OS DADOS
// =====================================================


// Exemplo da estrutura:
//
// registarUniversidade(
//     "universidade-exemplo",
//     "Nome da Universidade"
// );
//
//
// registarFaculdade(
//     "universidade-exemplo",
//     "faculdade-exemplo",
//     "Nome da Faculdade"
// );
//
//
// registarCursos(
//     "universidade-exemplo",
//     "faculdade-exemplo",
//     [
//         "Curso 1",
//         "Curso 2",
//         "Curso 3"
//     ]
// );
// =====================================================
// ISCTE — INSTITUTO UNIVERSITÁRIO DE LISBOA
// =====================================================

registarUniversidade(
  "iscte",
  "ISCTE - Instituto Universitário de Lisboa"
);

registarCursos(
  "iscte",
  null,
  [
      "Antropologia",
      "Arquitetura",
      "Ciência de Dados",
      "Ciência de Dados (regime pós-laboral)",
      "Ciência Política",
      "Economia",
      "Engenharia Informática",
      "Engenharia Informática (regime pós-laboral)",
      "Engenharia de Telecomunicações e Informática",
      "Estudos Internacionais (ensino em inglês)",
      "Finanças e Contabilidade",
      "Gestão",
      "Gestão Industrial e Logística",
      "Gestão de Marketing",
      "Gestão de Recursos Humanos",
      "História Moderna e Contemporânea",
      "Informática e Gestão de Empresas",
      "Informática e Gestão de Empresas (regime pós-laboral)",
      "Matemática Aplicada à Economia e às Finanças",
      "Psicologia",
      "Serviço Social",
      "Serviço Social (regime pós-laboral)",
      "Sociologia",
      "Sociologia (regime pós-laboral)"
  ]
);
// =====================================================
// ISCTE - INSTITUTO UNIVERSITÁRIO DE LISBOA (SINTRA)
// =====================================================

registarUniversidade(
  "iscte-sintra",
  "ISCTE - Instituto Universitário de Lisboa (Sintra)"
);

registarCursos(
  "iscte-sintra",
  null,
  [
      "Desenvolvimento de Software e Aplicações",
      "Matemática Aplicada e Tecnologias Digitais",
      "Política, Economia e Sociedade",
      "Tecnologias Digitais e Automação",
      "Tecnologias Digitais, Edifícios e Construção Sustentável",
      "Tecnologias Digitais Educativas",
      "Tecnologias Digitais e Gestão",
      "Tecnologias Digitais e Inteligência Artificial",
      "Tecnologias Digitais e Saúde",
      "Tecnologias Digitais e Segurança de Informação"
  ]
);
// =====================================================
// UNIVERSIDADE DOS AÇORES
// FACULDADE DE CIÊNCIAS AGRÁRIAS E DO AMBIENTE
// =====================================================

registarUniversidade(
  "acores",
  "Universidade dos Açores"
);

registarFaculdade(
  "acores",
  "fcaa",
  "Faculdade de Ciências Agrárias e do Ambiente"
);

registarCursos(
  "acores",
  "fcaa",
  [
      "Biotecnologia",
      "Ciências Agrárias",
      "Ciências Farmacêuticas (Preparatórios)",
      "Guias de Natureza e Património",
      "Medicina Veterinária (Preparatórios)"
  ]
);
// =====================================================
// UNIVERSIDADE DOS AÇORES
// FACULDADE DE CIÊNCIAS SOCIAIS E HUMANAS
// =====================================================

registarFaculdade(
  "acores",
  "fcsh",
  "Faculdade de Ciências Sociais e Humanas"
);

registarCursos(
  "acores",
  "fcsh",
  [
      "Comunicação e Relações Públicas",
      "Educação Básica",
      "Estudos Europeus",
      "Estudos Portugueses e Ingleses",
      "História",
      "Psicologia",
      "Serviço Social",
      "Sociologia"
  ]
);
// =====================================================
// UNIVERSIDADE DOS AÇORES
// FACULDADE DE CIÊNCIAS E TECNOLOGIA
// =====================================================

registarFaculdade(
  "acores",
  "fct",
  "Faculdade de Ciências e Tecnologia"
);

registarCursos(
  "acores",
  "fct",
  [
      "Biologia",
      "Ciclo Básico de Medicina",
      "Ciênc de Engenharia-Eng Mecânica; Eng Eletrotécnica e de Computadores (Pre)",
      "Ciências do Oceano (ensino em inglês)",
      "Informática",
      "Proteção Civil e Gestão de Riscos"
  ]
);
// =====================================================
// UNIVERSIDADE DOS AÇORES
// FACULDADE DE ECONOMIA E GESTÃO
// =====================================================

registarFaculdade(
  "acores",
  "feg",
  "Faculdade de Economia e Gestão"
);

registarCursos(
  "acores",
  "feg",
  [
      "Economia",
      "Gestão",
      "Turismo"
  ]
);
// =====================================================
// UNIVERSIDADE DO ALGARVE
// FACULDADE DE CIÊNCIAS HUMANAS E SOCIAIS
// =====================================================

registarUniversidade(
  "algarve",
  "Universidade do Algarve"
);

registarFaculdade(
  "algarve",
  "fchs",
  "Faculdade de Ciências Humanas e Sociais"
);

registarCursos(
  "algarve",
  "fchs",
  [
      "Artes Visuais",
      "Ciências da Educação e da Formação",
      "Línguas e Comunicação Intercultural",
      "Línguas, Literaturas e Culturas",
      "Património Cultural e Arqueologia",
      "Psicologia"
  ]
);
// =====================================================
// UNIVERSIDADE DO ALGARVE
// FACULDADE DE CIÊNCIAS E TECNOLOGIA
// =====================================================

registarFaculdade(
  "algarve",
  "fct",
  "Faculdade de Ciências e Tecnologia"
);

registarCursos(
  "algarve",
  "fct",
  [
      "Agronomia",
      "Arquitetura Paisagista",
      "Bioengenharia",
      "Biologia",
      "Biologia Marinha",
      "Bioquímica",
      "Biotecnologia",
      "Ciências Farmacêuticas",
      "Engenharia Informática",
      "Gestão Marinha e Costeira",
      "Matemática Aplicada à Economia e à Gestão"
  ]
);
// =====================================================
// UNIVERSIDADE DO ALGARVE
// FACULDADE DE ECONOMIA
// =====================================================

registarFaculdade(
  "algarve",
  "fe",
  "Faculdade de Economia"
);

registarCursos(
  "algarve",
  "fe",
  [
      "Economia",
      "Gestão de Empresas",
      "Sociologia"
  ]
);
// =====================================================
// UNIVERSIDADE DO ALGARVE
// FACULDADE DE MEDICINA E CIÊNCIAS BIOMÉDICAS
// =====================================================

registarFaculdade(
  "algarve",
  "fmcbiomed",
  "Faculdade de Medicina e Ciências Biomédicas"
);

registarCursos(
  "algarve",
  "fmcbiomed",
  [
      "Ciências Biomédicas"
  ]
);
// =====================================================
// UNIVERSIDADE DE AVEIRO
// =====================================================

registarUniversidade(
  "aveiro",
  "Universidade de Aveiro"
);

registarCursosUniversidade(
  "aveiro",
  [
    "Administração Pública",
    "Biologia",
    "Biologia e Geologia",
    "Bioquímica",
    "Biotecnologia",
    "Ciências Biomédicas",
    "Ciências do Mar",
    "Design",
    "Economia",
    "Educação Básica",
    "Engenharia Aeroespacial",
    "Engenharia do Ambiente",
    "Engenharia de Automação Industrial",
    "Engenharia Biomédica",
    "Engenharia Civil",
    "Engenharia Computacional",
    "Engenharia de Computadores e Informática",
    "Engenharia Eletrotécnica e de Computadores",
    "Engenharia Física",
    "Engenharia e Gestão Industrial",
    "Engenharia Informática",
    "Engenharia de Materiais",
    "Engenharia Mecânica",
    "Engenharia Química",
    "Física",
    "Geologia",
    "Gestão",
    "Gestão e Planeamento em Turismo",
    "Línguas e Estudos Editoriais",
    "Línguas e Relações Empresariais",
    "Línguas, Literaturas e Culturas",
    "Matemática",
    "Matemática Aplicada e Computação",
    "Medicina",
    "Meteorologia, Oceanografia e Clima",
    "Multimédia e Tecnologias da Comunicação",
    "Música",
    "Psicologia",
    "Química",
    "Tradução"
  ]
);
// =====================================================
// UNIVERSIDADE DA BEIRA INTERIOR
// =====================================================

registarUniversidade(
  "ubi",
  "Universidade da Beira Interior"
);

registarCursos(
  "ubi",
  null,
  [
      "Arquitetura",
      "Bioquímica",
      "Biotecnologia",
      "Cidades e Comunidades Sustentáveis Inteligentes",
      "Ciência Política e Relações Internacionais",
      "Ciências Biomédicas",
      "Ciências da Comunicação",
      "Ciências da Cultura",
      "Ciências do Desporto",
      "Ciências Farmacêuticas",
      "Cinema",
      "Computação Criativa e Realidade Virtual",
      "Design Industrial",
      "Design de Moda",
      "Design Multimédia",
      "Economia",
      "Engenharia Aeronáutica",
      "Engenharia Civil",
      "Engenharia Eletromecânica",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia e Gestão Industrial",
      "Engenharia Informática",
      "Engenharia Mecânica Computacional",
      "Estudos Portugueses e Espanhóis",
      "Filosofia",
      "Física e Aplicações",
      "Gestão",
      "Informática Web, Móvel e na Nuvem",
      "Inteligência Artificial e Ciência de Dados",
      "Marketing",
      "Matemática e Aplicações",
      "Medicina",
      "Optometria e Ciências da Visão",
      "Psicologia",
      "Química Industrial",
      "Sociologia",
      "Tecnologia e Produto de Moda Sustentável"
  ]
);
// =====================================================
// UNIVERSIDADE DE COIMBRA
// FACULDADE DE CIÊNCIAS DO DESPORTO E EDUCAÇÃO FÍSICA
// =====================================================

registarFaculdade(
  "coimbra",
  "fcdef",
  "Faculdade de Ciências do Desporto e Educação Física"
);

registarCursos(
  "coimbra",
  "fcdef",
  [
      "Ciências do Desporto"
  ]
);
// =====================================================
// UNIVERSIDADE DE COIMBRA
// FACULDADE DE CIÊNCIAS E TECNOLOGIA
// =====================================================

registarFaculdade(
  "coimbra",
  "fctuc",
  "Faculdade de Ciências e Tecnologia"
);

registarCursos(
  "coimbra",
  "fctuc",
  [
      "Antropologia",
      "Arquitetura",
      "Biologia",
      "Bioquímica",
      "Construção Digital",
      "Design e Multimédia",
      "Engenharia Aeroespacial",
      "Engenharia do Ambiente",
      "Engenharia Biomédica",
      "Engenharia Civil",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia Física",
      "Engenharia e Gestão Industrial",
      "Engenharia Informática",
      "Engenharia Mecânica",
      "Engenharia Química",
      "Física",
      "Geologia",
      "Gestão de Cidades Sustentáveis e Inteligentes",
      "Inteligência Artificial e Ciência de Dados",
      "Matemática",
      "Química",
      "Química Medicinal"
  ]
);
// =====================================================
// UNIVERSIDADE DE COIMBRA
// FACULDADE DE CIÊNCIAS E TECNOLOGIA
// CAMPUS FIGUEIRA DA FOZ
// =====================================================

registarFaculdade(
  "coimbra",
  "fctuc-figueira-da-foz",
  "Faculdade de Ciências e Tecnologia (Campus Figueira da Foz)"
);

registarCursos(
  "coimbra",
  "fctuc-figueira-da-foz",
  [
      "Biologia Marinha",
      "Engenharia Naval e Oceânica"
  ]
);
// =====================================================
// UNIVERSIDADE DE COIMBRA
// FACULDADE DE DIREITO
// =====================================================

registarFaculdade(
  "coimbra",
  "fd",
  "Faculdade de Direito"
);

registarCursos(
  "coimbra",
  "fd",
  [
      "Administração Pública",
      "Direito"
  ]
);
// =====================================================
// UNIVERSIDADE DE COIMBRA
// FACULDADE DE ECONOMIA
// =====================================================

registarFaculdade(
  "coimbra",
  "feuc",
  "Faculdade de Economia"
);

registarCursos(
  "coimbra",
  "feuc",
  [
      "Economia",
      "Gestão",
      "Relações Internacionais",
      "Sociologia"
  ]
);
// =====================================================
// UNIVERSIDADE DE COIMBRA
// FACULDADE DE FARMÁCIA
// =====================================================

registarFaculdade(
  "coimbra",
  "ffuc",
  "Faculdade de Farmácia"
);

registarCursos(
  "coimbra",
  "ffuc",
  [
      "Ciências Bioanalíticas",
      "Ciências Farmacêuticas",
      "Farmácia Biomédica"
  ]
);
// =====================================================
// UNIVERSIDADE DE COIMBRA
// FACULDADE DE LETRAS
// =====================================================

registarFaculdade(
  "coimbra",
  "fluc",
  "Faculdade de Letras"
);

registarCursos(
  "coimbra",
  "fluc",
  [
      "Arqueologia",
      "Ciência da Informação",
      "Estudos Artísticos",
      "Estudos Clássicos",
      "Estudos Europeus",
      "Filosofia",
      "Geografia",
      "História",
      "História da Arte",
      "Jornalismo e Comunicação",
      "Línguas Modernas",
      "Português",
      "Turismo, Território e Patrimónios"
  ]
);
// =====================================================
// UNIVERSIDADE DE COIMBRA
// FACULDADE DE MEDICINA
// =====================================================

registarFaculdade(
  "coimbra",
  "fmuc",
  "Faculdade de Medicina"
);

registarCursos(
  "coimbra",
  "fmuc",
  [
      "Medicina",
      "Medicina Dentária"
  ]
);
// =====================================================
// UNIVERSIDADE DE COIMBRA
// FACULDADE DE PSICOLOGIA E DE CIÊNCIAS DA EDUCAÇÃO
// =====================================================

registarFaculdade(
  "coimbra",
  "fpceuc",
  "Faculdade de Psicologia e de Ciências da Educação"
);

registarCursos(
  "coimbra",
  "fpceuc",
  [
      "Ciências da Educação",
      "Psicologia",
      "Serviço Social"
  ]
);
// =====================================================
// UNIVERSIDADE DE ÉVORA
// ESCOLA DE ARTES
// =====================================================

registarUniversidade(
  "evora",
  "Universidade de Évora"
);

registarFaculdade(
  "evora",
  "ea",
  "Escola de Artes"
);

registarCursos(
  "evora",
  "ea",
  [
      "Arquitetura",
      "Artes Plásticas e Multimédia",
      "Design",
      "Música",
      "Teatro"
  ]
);
// =====================================================
// UNIVERSIDADE DE ÉVORA
// ESCOLA DE CIÊNCIAS SOCIAIS
// =====================================================

registarFaculdade(
  "evora",
  "ecs",
  "Escola de Ciências Sociais"
);

registarCursos(
  "evora",
  "ecs",
  [
      "Ciências da Educação",
      "Economia",
      "Educação Básica",
      "Filosofia e Cultura Contemporânea",
      "Gestão",
      "História e Arqueologia",
      "Línguas e Literaturas",
      "Património Cultural",
      "Psicologia",
      "Relações Internacionais",
      "Sociologia",
      "Turismo"
  ]
);
// =====================================================
// UNIVERSIDADE DE ÉVORA
// ESCOLA DE CIÊNCIAS E TECNOLOGIA
// =====================================================

registarFaculdade(
  "evora",
  "ect",
  "Escola de Ciências e Tecnologia"
);

registarCursos(
  "evora",
  "ect",
  [
      "Agronomia",
      "Biologia",
      "Biologia e Geologia",
      "Biologia Humana",
      "Bioquímica",
      "Biotecnologia",
      "Ciência e Tecnologia Animal",
      "Ecologia e Ambiente",
      "Engenharia Aeroespacial",
      "Engenharia de Energias Renováveis",
      "Engenharia Informática",
      "Engenharia Mecatrónica",
      "Enologia",
      "Física e Química",
      "Geografia",
      "Inteligência Artificial e Ciência de Dados",
      "Matemática",
      "Matemática Aplicada à Economia e à Gestão",
      "Medicina Veterinária"
  ]
);
// =====================================================
// UNIVERSIDADE DE ÉVORA
// ESCOLA DE SAÚDE E DESENVOLVIMENTO HUMANO
// =====================================================

registarFaculdade(
  "evora",
  "esdh",
  "Escola de Saúde e Desenvolvimento Humano"
);

registarCursos(
  "evora",
  "esdh",
  [
      "Ciências Biomédicas e da Saúde",
      "Ciências do Desporto",
      "Ciências Farmacêuticas",
      "Reabilitação Psicomotora"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// FACULDADE DE ARQUITETURA
// =====================================================

registarUniversidade(
  "lisboa",
  "Universidade de Lisboa"
);

registarFaculdade(
  "lisboa",
  "fa",
  "Faculdade de Arquitetura"
);

registarCursos(
  "lisboa",
  "fa",
  [
      "Arquitetura",
      "Design",
      "Design de Moda"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// FACULDADE DE BELAS-ARTES
// =====================================================

registarFaculdade(
  "lisboa",
  "fbaul",
  "Faculdade de Belas-Artes"
);

registarCursos(
  "lisboa",
  "fbaul",
  [
      "Arte Multimédia",
      "Ciências da Arte e do Património",
      "Desenho",
      "Design de Comunicação",
      "Design de Equipamento",
      "Escultura",
      "Pintura"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// FACULDADE DE CIÊNCIAS
// =====================================================

registarFaculdade(
  "lisboa",
  "fc",
  "Faculdade de Ciências"
);

registarCursos(
  "lisboa",
  "fc",
  [
      "Biologia",
      "Bioquímica",
      "Ciência de Dados",
      "Engenharia Biomédica e Biofísica",
      "Engenharia da Energia e Ambiente",
      "Engenharia Física",
      "Engenharia Geoespacial",
      "Engenharia Informática",
      "Estatística Aplicada",
      "Física",
      "Geologia",
      "Matemática",
      "Meteorologia, Oceanografia e Geofísica",
      "Química",
      "Química Tecnológica",
      "Tecnologias de Informação"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// FACULDADE DE DIREITO
// =====================================================

registarFaculdade(
  "lisboa",
  "fdul",
  "Faculdade de Direito"
);

registarCursos(
  "lisboa",
  "fdul",
  [
      "Direito",
      "Direito (regime pós-laboral)"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// FACULDADE DE FARMÁCIA
// =====================================================

registarFaculdade(
  "lisboa",
  "fful",
  "Faculdade de Farmácia"
);

registarCursos(
  "lisboa",
  "fful",
  [
      "Ciências Farmacêuticas"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// FACULDADE DE LETRAS
// =====================================================

registarFaculdade(
  "lisboa",
  "flul",
  "Faculdade de Letras"
);

registarCursos(
  "lisboa",
  "flul",
  [
      "Arqueologia",
      "Artes e Humanidades",
      "Ciências da Linguagem",
      "Estudos Africanos",
      "Estudos Artísticos",
      "Estudos Asiáticos",
      "Estudos Clássicos",
      "Estudos Comparatistas",
      "Estudos de Cultura e Comunicação Intercultural",
      "Estudos Europeus",
      "Estudos Gerais",
      "Estudos Portugueses",
      "Filosofia",
      "História",
      "História da Arte",
      "Línguas, Literaturas e Culturas",
      "Tradução"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// FACULDADE DE MEDICINA
// =====================================================

registarFaculdade(
  "lisboa",
  "fmul",
  "Faculdade de Medicina"
);

registarCursos(
  "lisboa",
  "fmul",
  [
      "Ciências da Nutrição",
      "Medicina"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// FACULDADE DE MEDICINA DENTÁRIA
// =====================================================

registarFaculdade(
  "lisboa",
  "fmdul",
  "Faculdade de Medicina Dentária"
);

registarCursos(
  "lisboa",
  "fmdul",
  [
      "Higiene Oral",
      "Medicina Dentária",
      "Prótese Dentária"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// FACULDADE DE MEDICINA VETERINÁRIA
// =====================================================

registarFaculdade(
  "lisboa",
  "fmvul",
  "Faculdade de Medicina Veterinária"
);

registarCursos(
  "lisboa",
  "fmvul",
  [
      "Medicina Veterinária"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// FACULDADE DE MOTRICIDADE HUMANA
// =====================================================

registarFaculdade(
  "lisboa",
  "fmh",
  "Faculdade de Motricidade Humana"
);

registarCursos(
  "lisboa",
  "fmh",
  [
      "Ciências do Desporto",
      "Dança",
      "Gestão do Desporto",
      "Reabilitação Psicomotora"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// FACULDADE DE PSICOLOGIA
// =====================================================

registarFaculdade(
  "lisboa",
  "fpul",
  "Faculdade de Psicologia"
);

registarCursos(
  "lisboa",
  "fpul",
  [
      "Psicologia"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// INSTITUTO DE EDUCAÇÃO
// =====================================================

registarFaculdade(
  "lisboa",
  "ie",
  "Instituto de Educação"
);

registarCursos(
  "lisboa",
  "ie",
  [
      "Educação e Formação"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// INSTITUTO DE GEOGRAFIA E ORDENAMENTO DO TERRITÓRIO
// =====================================================

registarFaculdade(
  "lisboa",
  "igot",
  "Instituto de Geografia e Ordenamento do Território"
);

registarCursos(
  "lisboa",
  "igot",
  [
      "Geografia",
      "Planeamento e Gestão do Território"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// INSTITUTO SUPERIOR DE AGRONOMIA
// =====================================================

registarFaculdade(
  "lisboa",
  "isa",
  "Instituto Superior de Agronomia"
);

registarCursos(
  "lisboa",
  "isa",
  [
      "Arquitetura Paisagista",
      "Biologia",
      "Engenharia Agronómica",
      "Engenharia Alimentar",
      "Engenharia do Ambiente",
      "Engenharia Florestal e dos Recursos Naturais",
      "Engenharia Zootécnica"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// INSTITUTO SUPERIOR DE CIÊNCIAS SOCIAIS E POLÍTICAS
// =====================================================

registarFaculdade(
  "lisboa",
  "iscsp",
  "Instituto Superior de Ciências Sociais e Políticas"
);

registarCursos(
  "lisboa",
  "iscsp",
  [
      "Administração Pública",
      "Administração Pública (regime pós-laboral)",
      "Administração Pública e Políticas do Território (regime pós-laboral)",
      "Antropologia",
      "Ciência Política",
      "Ciências da Comunicação",
      "Gestão de Recursos Humanos",
      "Gestão de Recursos Humanos (regime pós-laboral)",
      "Relações Internacionais",
      "Relações Internacionais (regime pós-laboral)",
      "Serviço Social",
      "Serviço Social (regime pós-laboral)",
      "Sociologia",
      "Sociologia (regime pós-laboral)"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// INSTITUTO SUPERIOR DE ECONOMIA E GESTÃO
// =====================================================

registarFaculdade(
  "lisboa",
  "iseg",
  "Instituto Superior de Economia e Gestão"
);

registarCursos(
  "lisboa",
  "iseg",
  [
      "Economia",
      "Economia (ensino em Inglês)",
      "Finanças (ensino em inglês)",
      "Gestão",
      "Gestão (ensino em Inglês)",
      "Matemática Aplicada à Economia e à Gestão",
      "Matemática Aplicada à Economia e à Gestão (ensino em inglês)"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// INSTITUTO SUPERIOR TÉCNICO
// =====================================================

registarFaculdade(
  "lisboa",
  "ist",
  "Instituto Superior Técnico"
);

registarCursos(
  "lisboa",
  "ist",
  [
      "Arquitetura",
      "Engenharia Aeroespacial",
      "Engenharia do Ambiente",
      "Engenharia Biológica",
      "Engenharia Biomédica",
      "Engenharia Civil",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia Física Tecnológica",
      "Engenharia Geral (GENI) (ensino em inglês)",
      "Engenharia Informática e de Computadores",
      "Engenharia de Materiais",
      "Engenharia Mecânica",
      "Engenharia de Minas e Recursos Energéticos",
      "Engenharia Naval e Oceânica",
      "Engenharia Química",
      "Matemática Aplicada e Computação"
  ]
);
// =====================================================
// UNIVERSIDADE DE LISBOA
// INSTITUTO SUPERIOR TÉCNICO (TAGUS PARK)
// =====================================================

registarFaculdade(
  "lisboa",
  "ist_tagus",
  "Instituto Superior Técnico (Tagus Park)"
);

registarCursos(
  "lisboa",
  "ist_tagus",
  [
      "Engenharia Eletrónica",
      "Engenharia e Gestão Industrial",
      "Engenharia Informática e de Computadores",
      "Engenharia de Telecomunicações e Informática"
  ]
);
// =====================================================
// UNIVERSIDADE DA MADEIRA
// FACULDADE DE ARTES E HUMANIDADES
// =====================================================

registarFaculdade(
  "madeira",
  "fau",
  "Faculdade de Artes e Humanidades"
);

registarCursos(
  "madeira",
  "fau",
  [
      "Artes Visuais",
      "Comunicação, Cultura e Organizações",
      "Design",
      "Estudos de Cultura",
      "Línguas e Relações Empresariais",
      "Psicologia"
  ]
);
// =====================================================
// UNIVERSIDADE DA MADEIRA
// FACULDADE DE CIÊNCIAS EXATAS E DA ENGENHARIA
// =====================================================

registarFaculdade(
  "madeira",
  "fcee",
  "Faculdade de Ciências Exatas e da Engenharia"
);

registarCursos(
  "madeira",
  "fcee",
  [
      "Bioquímica",
      "Engenharia Biomédica",
      "Engenharia Civil",
      "Engenharia Eletrónica e Telecomunicações",
      "Engenharia Física e Computacional",
      "Engenharia Informática",
      "Matemática"
  ]
);
// =====================================================
// UNIVERSIDADE DA MADEIRA
// FACULDADE DE CIÊNCIAS SOCIAIS
// =====================================================

registarFaculdade(
  "madeira",
  "fcs",
  "Faculdade de Ciências Sociais"
);

registarCursos(
  "madeira",
  "fcs",
  [
      "Ciências da Educação",
      "Economia",
      "Educação Básica",
      "Educação Física e Desporto",
      "Gestão"
  ]
);
// =====================================================
// UNIVERSIDADE DA MADEIRA
// FACULDADE DE CIÊNCIAS DA VIDA
// =====================================================

registarFaculdade(
  "madeira",
  "fcv",
  "Faculdade de Ciências da Vida"
);

registarCursos(
  "madeira",
  "fcv",
  [
      "Biologia",
      "Ciclo Básico de Medicina"
  ]
);
// =====================================================
// UNIVERSIDADE DO MINHO
// =====================================================

registarUniversidade(
  "minho",
  "Universidade do Minho"
);

registarCursosUniversidade(
  "minho",
  [
      "Administração Pública",
      "Arqueologia",
      "Arquitetura",
      "Artes Visuais",
      "Biologia Aplicada",
      "Biologia e Geologia",
      "Bioquímica",
      "Ciência de Dados",
      "Ciência Política",
      "Ciências do Ambiente",
      "Ciências da Computação",
      "Ciências da Comunicação",
      "Contabilidade",
      "Criminologia e Justiça Criminal",
      "Design e Marketing de Moda",
      "Design de Produto",
      "Direito",
      "Direito (regime pós-laboral)",
      "Economia",
      "Economia + Gestão",
      "Economia + Negócios Internacionais",
      "Educação",
      "Educação (regime pós-laboral)",
      "Educação Básica",
      "Engenharia Aeroespacial",
      "Engenharia Biomédica",
      "Engenharia Civil",
      "Engenharia Eletrónica Industrial e Computadores",
      "Engenharia Física",
      "Engenharia e Gestão Industrial",
      "Engenharia e Gestão de Sistemas de Informação",
      "Engenharia Informática",
      "Engenharia de Materiais",
      "Engenharia Mecânica",
      "Engenharia de Polímeros",
      "Engenharia Química e Biológica",
      "Engenharia de Telecomunicações e Informática",
      "Engenharia Têxtil",
      "Estatística Aplicada",
      "Estudos Culturais",
      "Estudos Orientais: Estudos Chineses e Japoneses",
      "Estudos Portugueses",
      "Filosofia",
      "Física",
      "Física + Química",
      "Geografia e Planeamento",
      "Geologia",
      "Gestão",
      "Gestão + Negócios Internacionais",
      "História",
      "Línguas Aplicadas",
      "Línguas e Literaturas Europeias",
      "Marketing",
      "Matemática",
      "Matemática + Física",
      "Medicina",
      "Música",
      "Negócios Internacionais",
      "Optometria e Ciências da Visão",
      "Proteção Civil e Gestão do Território",
      "Psicologia",
      "Química",
      "Relações Internacionais",
      "Sociologia",
      "Teatro"
  ]
);
// =====================================================
// UNIVERSIDADE DA BEIRA INTERIOR
// =====================================================

registarUniversidade(

  "ubi",

  "Universidade da Beira Interior"

);

registarCursosUniversidade(

  "ubi",

  [

      "Bioquímica",
      "Biotecnologia",
      "Cidades e Comunidades Sustentáveis Inteligentes",
      "Ciência Política e Relações Internacionais",
      "Ciências Biomédicas",
      "Ciências da Comunicação",
      "Ciências da Cultura",
      "Ciências do Desporto",
      "Cinema",
      "Computação Criativa e Realidade Virtual",
      "Design de Moda",
      "Design Industrial",
      "Design Multimédia",
      "Economia",
      "Engenharia Aeronáutica",
      "Engenharia Civil",
      "Engenharia e Gestão Industrial",
      "Engenharia Eletromecânica",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia Informática",
      "Engenharia Mecânica Computacional",
      "Estudos Portugueses e Espanhóis",
      "Filosofia",
      "Física e Aplicações",
      "Gestão",
      "Informática Web, Móvel e na Nuvem",
      "Inteligência Artificial e Ciência de Dados",
      "Marketing",
      "Matemática e Aplicações",
      "Optometria e Ciências da Visão",
      "Psicologia",
      "Química Industrial",
      "Sociologia",
      "Tecnologia e Produto de Moda Sustentável",
      "Arquitetura",
      "Ciências Farmacêuticas",
      "Medicina"

  ]

);
// =====================================================
// UNIVERSIDADE NOVA DE LISBOA
// ESCOLA NACIONAL DE SAÚDE PÚBLICA
// =====================================================

registarFaculdade(
  "nova",
  "ensp",
  "Escola Nacional de Saúde Pública"
);

registarCursos(
  "nova",
  "ensp",
  [
      "Saúde Pública Global"
  ]
);
// =====================================================
// UNIVERSIDADE NOVA DE LISBOA
// FACULDADE DE CIÊNCIAS MÉDICAS
// =====================================================

registarFaculdade(
  "nova",
  "fcm",
  "Faculdade de Ciências Médicas"
);

registarCursos(
  "nova",
  "fcm",
  [
      "Ciências da Nutrição",
      "Medicina"
  ]
);
// =====================================================
// UNIVERSIDADE NOVA DE LISBOA
// FACULDADE DE CIÊNCIAS SOCIAIS E HUMANAS
// =====================================================

registarFaculdade(
  "nova",
  "fcsh",
  "Faculdade de Ciências Sociais e Humanas"
);

registarCursos(
  "nova",
  "fcsh",
  [
      "Antropologia",
      "Arqueologia",
      "Ciência Política e Relações Internacionais",
      "Ciências da Comunicação",
      "Ciências da Linguagem",
      "Ciências Musicais",
      "Ciências Sociais (regime pós-laboral)",
      "Estudos Portugueses",
      "Filosofia",
      "Geografia e Planeamento Regional",
      "História",
      "História da Arte",
      "Línguas, Literaturas e Culturas",
      "Sociologia",
      "Tradução"
  ]
);


// =====================================================
// UNIVERSIDADE NOVA DE LISBOA
// FACULDADE DE CIÊNCIAS E TECNOLOGIA
// =====================================================

registarFaculdade(
  "nova",
  "fct",
  "Faculdade de Ciências e Tecnologia"
);

registarCursos(
  "nova",
  "fct",
  [
      "Análise e Engenharia de Dados",
      "Biologia Celular e Molecular",
      "Bioquímica",
      "Conservação - Restauro",
      "Engenharia Aeroespacial",
      "Engenharia do Ambiente",
      "Engenharia Biomédica",
      "Engenharia Civil",
      "Engenharia de Comunicações e de Informação",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia Física",
      "Engenharia e Gestão Industrial",
      "Engenharia Informática",
      "Engenharia de Materiais",
      "Engenharia Mecânica",
      "Engenharia de Micro e Nanotecnologias",
      "Engenharia Química e Biológica",
      "Geologia para a Sustentabilidade",
      "Matemática",
      "Matemática Aplicada à Gestão do Risco",
      "Química Aplicada",
      "Tecnologia Agro-Industrial"
  ]
);


// =====================================================
// UNIVERSIDADE NOVA DE LISBOA
// FACULDADE DE DIREITO
// =====================================================

registarFaculdade(
  "nova",
  "fd",
  "Faculdade de Direito"
);

registarCursos(
  "nova",
  "fd",
  [
      "Direito"
  ]
);
// =====================================================
// UNIVERSIDADE NOVA DE LISBOA
// FACULDADE DE ECONOMIA
// =====================================================

registarFaculdade(
  "nova",
  "fe",
  "Faculdade de Economia"
);

registarCursos(
  "nova",
  "fe",
  [
      "Economia",
      "Estudos do Mar",
      "Gestão"
  ]
);
// =====================================================
// UNIVERSIDADE NOVA DE LISBOA
// INSTITUTO SUPERIOR DE ESTATÍSTICA E GESTÃO DE INFORMAÇÃO
// =====================================================

registarFaculdade(
  "nova",
  "isegi",
  "Instituto Superior de Estatística e Gestão de Informação"
);

registarCursos(
  "nova",
  "isegi",
  [
      "Ciência de Dados",
      "Gestão de Informação",
      "Sistemas e Tecnologias de Informação"
  ]
);
// =====================================================
// UNIVERSIDADE DO PORTO
// FACULDADE DE ARQUITETURA
// =====================================================

registarFaculdade(
  "porto",
  "faup",
  "Faculdade de Arquitetura"
);

registarCursos(
  "porto",
  "faup",
  [
      "Arquitetura"
  ]
);
// =====================================================
// UNIVERSIDADE DO PORTO
// FACULDADE DE BELAS-ARTES
// =====================================================

registarFaculdade(
  "porto",
  "fba",
  "Faculdade de Belas-Artes"
);

registarCursos(
  "porto",
  "fba",
  [
      "Artes Plásticas",
      "Desenho",
      "Design de Comunicação"
  ]
);
// =====================================================
// UNIVERSIDADE DO PORTO
// FACULDADE DE CIÊNCIAS
// =====================================================

registarFaculdade(
  "porto",
  "fcup",
  "Faculdade de Ciências"
);

registarCursos(
  "porto",
  "fcup",
  [
      "Arquitetura Paisagista",
      "Bioinformática",
      "Biologia",
      "Bioquímica",
      "Ciência de Computadores",
      "Ciências e Tecnologia do Ambiente",
      "Engenharia Agronómica",
      "Engenharia Física",
      "Engenharia Geoespacial",
      "Física",
      "Geologia",
      "Inteligência Artificial e Ciência de Dados",
      "Matemática",
      "Matemática Aplicada",
      "Química"
  ]
);
// =====================================================
// UNIVERSIDADE DO PORTO
// FACULDADE DE CIÊNCIAS DA NUTRIÇÃO E DA ALIMENTAÇÃO
// =====================================================

registarFaculdade(
  "porto",
  "fcna",
  "Faculdade de Ciências da Nutrição e da Alimentação"
);

registarCursos(
  "porto",
  "fcna",
  [
      "Ciências da Nutrição"
  ]
);
// =====================================================
// UNIVERSIDADE DO PORTO
// FACULDADE DE DESPORTO
// =====================================================

registarFaculdade(
  "porto",
  "fadeup",
  "Faculdade de Desporto"
);

registarCursos(
  "porto",
  "fadeup",
  [
      "Ciências do Desporto"
  ]
);
// =====================================================
// UNIVERSIDADE DO PORTO
// FACULDADE DE DIREITO
// =====================================================

registarFaculdade(
  "porto",
  "fd",
  "Faculdade de Direito"
);

registarCursos(
  "porto",
  "fd",
  [
      "Criminologia",
      "Direito"
  ]
);
// =====================================================
// UNIVERSIDADE DO PORTO
// FACULDADE DE ENGENHARIA
// =====================================================

registarFaculdade(
  "porto",
  "feup",
  "Faculdade de Engenharia"
);

registarCursos(
  "porto",
  "feup",
  [
      "Bioengenharia",
      "Engenharia Aeroespacial",
      "Engenharia do Ambiente",
      "Engenharia Civil",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia e Gestão Industrial",
      "Engenharia Informática e Computação",
      "Engenharia de Materiais",
      "Engenharia Mecânica",
      "Engenharia de Minas e Geo-Ambiente",
      "Engenharia Química"
  ]
);
// =====================================================
// UNIVERSIDADE DO PORTO
// FACULDADE DE FARMÁCIA
// =====================================================

registarFaculdade(
  "porto",
  "ffup",
  "Faculdade de Farmácia"
);

registarCursos(
  "porto",
  "ffup",
  [
      "Ciências Farmacêuticas"
  ]
);
// =====================================================
// UNIVERSIDADE DO PORTO
// FACULDADE DE LETRAS
// =====================================================

registarFaculdade(
  "porto",
  "flup",
  "Faculdade de Letras"
);

registarCursos(
  "porto",
  "flup",
  [
      "Arqueologia",
      "Ciência da Informação",
      "Ciências da Comunicação",
      "Ciências da Linguagem",
      "Filosofia",
      "Geografia",
      "História",
      "História da Arte",
      "Línguas Aplicadas",
      "Línguas e Relações Internacionais",
      "Línguas, Literaturas e Culturas",
      "Literatura e Estudos Interartes",
      "Sociologia"
  ]
);
// =====================================================
// UNIVERSIDADE DO PORTO
// FACULDADE DE MEDICINA
// =====================================================

registarFaculdade(
  "porto",
  "fmup",
  "Faculdade de Medicina"
);

registarCursos(
  "porto",
  "fmup",
  [
      "Ciências da Saúde Pública",
      "Medicina",
      "Saúde Digital e Inovação Biomédica"
  ]
);
// =====================================================
// UNIVERSIDADE DO PORTO
// FACULDADE DE MEDICINA DENTÁRIA
// =====================================================

registarFaculdade(
  "porto",
  "fmd",
  "Faculdade de Medicina Dentária"
);

registarCursos(
  "porto",
  "fmd",
  [
      "Medicina Dentária"
  ]
);
// =====================================================
// UNIVERSIDADE DO PORTO
// FACULDADE DE PSICOLOGIA E DE CIÊNCIAS DA EDUCAÇÃO
// =====================================================

registarFaculdade(
  "porto",
  "fpceup",
  "Faculdade de Psicologia e de Ciências da Educação"
);

registarCursos(
  "porto",
  "fpceup",
  [
      "Ciências da Educação",
      "Psicologia"
  ]
);
// =====================================================
// UNIVERSIDADE DO PORTO
// FEP FACULDADE DE ECONOMIA E GESTÃO
// =====================================================

registarFaculdade(
  "porto",
  "fep",
  "FEP Faculdade de Economia e Gestão"
);

registarCursos(
  "porto",
  "fep",
  [
      "Economia",
      "Economia (ensino em Inglês)",
      "Gestão",
      "Gestão (ensino em Inglês)"
  ]
);
// =====================================================
// UNIVERSIDADE DO PORTO
// INSTITUTO DE CIÊNCIAS BIOMÉDICAS ABEL SALAZAR
// =====================================================

registarFaculdade(
  "porto",
  "icbas",
  "Instituto de Ciências Biomédicas Abel Salazar"
);

registarCursos(
  "porto",
  "icbas",
  [
      "Ciências do Meio Aquático",
      "Medicina",
      "Medicina Veterinária"
  ]
);
// =====================================================
// UNIVERSIDADE DE TRÁS-OS-MONTES E ALTO DOURO
// ESCOLA DE CIÊNCIAS AGRÁRIAS E VETERINÁRIAS
// =====================================================

registarFaculdade(
  "utad",
  "ecav",
  "Escola de Ciências Agrárias e Veterinárias"
);

registarCursos(
  "utad",
  "ecav",
  [
      "Agronomia",
      "Ciência Animal",
      "Ciências e Tecnologias Florestais",
      "Enologia",
      "Medicina Veterinária",
      "Tecnologia dos Espaços Verdes"
  ]
);
// =====================================================
// UNIVERSIDADE DE TRÁS-OS-MONTES E ALTO DOURO
// ESCOLA DE CIÊNCIAS HUMANAS E SOCIAIS
// =====================================================

registarFaculdade(
  "utad",
  "echs",
  "Escola de Ciências Humanas e Sociais"
);

registarCursos(
  "utad",
  "echs",
  [
      "Animação Sociocultural",
      "Ciências da Comunicação",
      "Cultura e Transformação Digital",
      "Economia",
      "Educação Básica",
      "Gestão",
      "Línguas e Relações Empresariais",
      "Línguas, Literaturas e Culturas",
      "Psicologia",
      "Serviço Social",
      "Teatro e Artes Performativas",
      "Turismo"
  ]
);
// =====================================================
// UNIVERSIDADE DE TRÁS-OS-MONTES E ALTO DOURO
// ESCOLA DE CIÊNCIAS E TECNOLOGIA
// =====================================================

registarFaculdade(
  "utad",
  "ect",
  "Escola de Ciências e Tecnologia"
);

registarCursos(
  "utad",
  "ect",
  [
      "Comunicação e Multimédia",
      "Design Sustentável",
      "Engenharia Biomédica",
      "Engenharia Civil",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia Física",
      "Engenharia e Gestão Industrial",
      "Engenharia Informática",
      "Engenharia Mecânica",
      "Matemática Aplicada e Ciência de Dados"
  ]
);
// =====================================================
// UNIVERSIDADE DE TRÁS-OS-MONTES E ALTO DOURO
// ESCOLA DE CIÊNCIAS DA VIDA E DO AMBIENTE
// =====================================================

registarFaculdade(
  "utad",
  "ecva",
  "Escola de Ciências da Vida e do Ambiente"
);

registarCursos(
  "utad",
  "ecva",
  [
      "Bioengenharia",
      "Biologia",
      "Biologia e Geologia",
      "Bioquímica",
      "Ciências do Ambiente",
      "Ciências Biomédicas",
      "Ciências do Desporto",
      "Ciências da Nutrição",
      "Genética e Biotecnologia",
      "Medicina",
      "Psicomotricidade"
  ]
);
// =====================================================
// ESCOLA SUPERIOR DE HOTELARIA E TURISMO DO ESTORIL
// =====================================================

registarInstituicao(
  "eshte",
  "Escola Superior de Hotelaria e Turismo do Estoril"
);

registarCursosInstituicao(
  "eshte",
  [
      "Direção e Gestão Hoteleira",
      "Gestão do Lazer e Animação Turística",
      "Gestão Turística",
      "Informação Turística",
      "Produção Alimentar em Restauração"
  ]
);
// =====================================================
// ESCOLA SUPERIOR NÁUTICA INFANTE D. HENRIQUE
// =====================================================

registarInstituicao(
  "enidh",
  "Escola Superior Náutica Infante D. Henrique"
);

registarCursosInstituicao(
  "enidh",
  [
      "Engenharia Eletrotécnica Marítima",
      "Engenharia Informática e de Computadores",
      "Engenharia de Máquinas Marítimas",
      "Gestão Portuária",
      "Gestão de Transportes e Logística",
      "Pilotagem"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DE BEJA
// ESCOLA SUPERIOR AGRÁRIA
// =====================================================

registarFaculdade(
  "ipbeja",
  "esa",
  "Escola Superior Agrária"
);

registarCursos(
  "ipbeja",
  "esa",
  [
      "Agronomia",
      "Ciência e Tecnologia dos Alimentos",
      "Engenharia do Ambiente"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DE BEJA
// ESCOLA SUPERIOR DE EDUCAÇÃO
// =====================================================

registarFaculdade(
  "ipbeja",
  "ese",
  "Escola Superior de Educação"
);

registarCursos(
  "ipbeja",
  "ese",
  [
      "Audiovisual e Multimédia",
      "Desporto",
      "Educação Básica",
      "Serviço Social"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DE BEJA
// ESCOLA SUPERIOR DE SAÚDE
// =====================================================

registarFaculdade(
  "ipbeja",
  "ess",
  "Escola Superior de Saúde"
);

registarCursos(
  "ipbeja",
  "ess",
  [
      "Enfermagem",
      "Terapia Ocupacional"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DE BEJA
// ESCOLA SUPERIOR DE TECNOLOGIA E DE GESTÃO
// =====================================================

registarFaculdade(
  "ipbeja",
  "estig",
  "Escola Superior de Tecnologia e de Gestão"
);

registarCursos(
  "ipbeja",
  "estig",
  [
      "Engenharia Informática",
      "Gestão de Empresas",
      "Gestão de Empresas (regime pós-laboral)",
      "Solicitadoria",
      "Turismo"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DE BRAGANÇA
// ESCOLA SUPERIOR AGRÁRIA DE BRAGANÇA
// =====================================================

registarFaculdade(
  "ipb",
  "esa",
  "Escola Superior Agrária de Bragança"
);

registarCursos(
  "ipb",
  "esa",
  [
      "Biologia e Biotecnologia",
      "Enfermagem Veterinária",
      "Engenharia Agronómica",
      "Engenharia Alimentar",
      "Engenharia do Ambiente",
      "Engenharia Zootécnica",
      "Enologia"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DE BRAGANÇA
// ESCOLA SUPERIOR DE COMUNICAÇÃO, ADMINISTRAÇÃO E TURISMO DE MIRANDELA
// =====================================================

registarFaculdade(
  "ipb",
  "escat",
  "Escola Superior de Comunicação, Administração e Turismo de Mirandela"
);

registarCursos(
  "ipb",
  "escat",
  [
      "Design de Jogos Digitais",
      "Gestão e Administração Pública",
      "Informática e Comunicações",
      "Jornalismo e Comunicação",
      "Marketing",
      "Multimédia",
      "Solicitadoria",
      "Turismo"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DE BRAGANÇA
// ESCOLA SUPERIOR DE EDUCAÇÃO DE BRAGANÇA
// =====================================================

registarFaculdade(
  "ipb",
  "ese",
  "Escola Superior de Educação de Bragança"
);

registarCursos(
  "ipb",
  "ese",
  [
      "Animação e Produção Artística",
      "Arte e Design",
      "Desporto",
      "Educação Ambiental",
      "Educação Básica",
      "Educação Social",
      "Línguas Estrangeiras: Inglês e Espanhol",
      "Línguas para Relações Internacionais",
      "Música em Contextos Comunitários",
      "Relações Lusófonas e Língua Portuguesa"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DE BRAGANÇA
// ESCOLA SUPERIOR DE HOTELARIA E BEM-ESTAR
// =====================================================

registarFaculdade(
  "ipb",
  "eshbe",
  "Escola Superior de Hotelaria e Bem-Estar"
);

registarCursos(
  "ipb",
  "eshbe",
  [
      "Direção e Gestão Hoteleira",
      "Osteopatia",
      "Restauração e Tecnologia Alimentar"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DE BRAGANÇA
// ESCOLA SUPERIOR DE SAÚDE DE BRAGANÇA
// =====================================================

registarFaculdade(
  "ipb",
  "essb",
  "Escola Superior de Saúde de Bragança"
);

registarCursos(
  "ipb",
  "essb",
  [
      "Ciências Biomédicas Laboratoriais",
      "Dietética e Nutrição",
      "Enfermagem",
      "Enfermagem (entrada no 2.º semestre)",
      "Farmácia",
      "Gerontologia"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DE BRAGANÇA
// ESCOLA SUPERIOR DE SAÚDE DE BRAGANÇA (CHAVES)
// =====================================================

registarFaculdade(
  "ipb",
  "essb_chaves",
  "Escola Superior de Saúde de Bragança (Chaves)"
);

registarCursos(
  "ipb",
  "essb_chaves",
  [
      "Fisioterapia"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DE BRAGANÇA
// ESCOLA SUPERIOR DE TECNOLOGIA E DE GESTÃO DE BRAGANÇA
// =====================================================

registarFaculdade(
  "ipb",
  "estgb",
  "Escola Superior de Tecnologia e de Gestão de Bragança"
);

registarCursos(
  "ipb",
  "estgb",
  [
      "Contabilidade",
      "Engenharia Civil",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia de Energias Renováveis",
      "Engenharia e Gestão Industrial",
      "Engenharia Informática",
      "Engenharia Mecânica",
      "Engenharia Química",
      "Gestão",
      "Gestão de Negócios Internacionais (ensino em Inglês)",
      "Tecnologia Biomédica",
      "Tecnologias Digitais e Gestão"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE CASTELO BRANCO
// ESCOLA SUPERIOR AGRÁRIA DE CASTELO BRANCO
// =====================================================

registarFaculdade(
  "ipcb",
  "esacb",
  "Escola Superior Agrária de Castelo Branco"
);

registarCursos(
  "ipcb",
  "esacb",
  [
      "Agronomia",
      "Biotecnologia Alimentar",
      "Enfermagem Veterinária",
      "Engenharia de Proteção Civil"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE CASTELO BRANCO
// ESCOLA SUPERIOR DE ARTES APLICADAS
// =====================================================

registarFaculdade(
  "ipcb",
  "esaa",
  "Escola Superior de Artes Aplicadas"
);

registarCursos(
  "ipcb",
  "esaa",
  [
      "Design de Comunicação e Audiovisual",
      "Design de Interiores e Equipamento",
      "Design de Moda e Têxtil",
      "Música, variante de Formação Musical, Direção Coral e Instrumental",
      "Música, variante de Instrumento",
      "Música, variante de Música Eletrónica e Produção Musical",
      "Música, variante de Canto"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE CASTELO BRANCO
// ESCOLA SUPERIOR DE EDUCAÇÃO DE CASTELO BRANCO
// =====================================================

registarFaculdade(
  "ipcb",
  "esecb",
  "Escola Superior de Educação de Castelo Branco"
);

registarCursos(
  "ipcb",
  "esecb",
  [
      "Desporto e Atividade Física",
      "Educação Básica",
      "Secretariado",
      "Serviço Social",
      "Treino Desportivo e Preparação Física"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE CASTELO BRANCO
// ESCOLA SUPERIOR DE GESTÃO DE IDANHA-A-NOVA
// =====================================================

registarFaculdade(
  "ipcb",
  "esgin",
  "Escola Superior de Gestão de Idanha-a-Nova"
);

registarCursos(
  "ipcb",
  "esgin",
  [
      "Administração Pública",
      "Gestão",
      "Gestão Comercial",
      "Solicitadoria",
      "Turismo"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE CASTELO BRANCO
// ESCOLA SUPERIOR DE SAÚDE DR. LOPES DIAS
// =====================================================

registarFaculdade(
  "ipcb",
  "essdld",
  "Escola Superior de Saúde Dr. Lopes Dias"
);

registarCursos(
  "ipcb",
  "essdld",
  [
      "Ciências Biomédicas Laboratoriais",
      "Enfermagem",
      "Fisiologia Clínica",
      "Fisioterapia",
      "Imagem Médica e Radioterapia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE CASTELO BRANCO
// ESCOLA SUPERIOR DE TECNOLOGIA DE CASTELO BRANCO
// =====================================================

registarFaculdade(
  "ipcb",
  "estcb",
  "Escola Superior de Tecnologia de Castelo Branco"
);

registarCursos(
  "ipcb",
  "estcb",
  [
      "Engenharia Civil",
      "Engenharia Eletrotécnica e das Telecomunicações",
      "Engenharia das Energias Renováveis",
      "Engenharia e Gestão Industrial",
      "Engenharia Informática",
      "Informática e Multimédia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DO CÁVADO E DO AVE
// ESCOLA SUPERIOR DE DESIGN
// =====================================================

registarFaculdade(
  "ipca",
  "esd",
  "Escola Superior de Design"
);

registarCursos(
  "ipca",
  "esd",
  [
      "Design Audiovisual",
      "Design Gráfico",
      "Design Gráfico (regime pós-laboral)",
      "Design Industrial"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DO CÁVADO E DO AVE
// ESCOLA SUPERIOR DE DESPORTO, BEM-ESTAR E SISTEMAS BIOMÉDICOS
// =====================================================

registarFaculdade(
  "ipca",
  "esdbesb",
  "Escola Superior de Desporto, Bem-Estar e Sistemas Biomédicos"
);

registarCursos(
  "ipca",
  "esdbesb",
  [
      "Desporto"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DO CÁVADO E DO AVE
// ESCOLA SUPERIOR DE GESTÃO
// =====================================================

registarFaculdade(
  "ipca",
  "esg",
  "Escola Superior de Gestão"
);

registarCursos(
  "ipca",
  "esg",
  [
      "Contabilidade",
      "Contabilidade (regime pós-laboral)",
      "Finanças",
      "Fiscalidade",
      "Fiscalidade (regime pós-laboral)",
      "Gestão de Empresas",
      "Gestão de Empresas (regime pós-laboral)",
      "Gestão Pública",
      "Solicitadoria",
      "Solicitadoria (regime pós-laboral)"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DO CÁVADO E DO AVE
// ESCOLA SUPERIOR DE HOTELARIA E TURISMO
// =====================================================

registarFaculdade(
  "ipca",
  "esht",
  "Escola Superior de Hotelaria e Turismo"
);

registarCursos(
  "ipca",
  "esht",
  [
      "Gastronomia e Sustentabilidade Alimentar",
      "Gestão de Atividades Turísticas",
      "Gestão de Atividades Turísticas (regime pós-laboral)",
      "Gestão Hoteleira"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DO CÁVADO E DO AVE
// ESCOLA SUPERIOR DE TECNOLOGIA
// =====================================================

registarFaculdade(
  "ipca",
  "est",
  "Escola Superior de Tecnologia"
);

registarCursos(
  "ipca",
  "est",
  [
      "Engenharia de Dados e Inteligência Artificial",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia em Desenvolvimento de Jogos Digitais",
      "Engenharia e Gestão Industrial",
      "Engenharia de Sistemas Informáticos",
      "Engenharia de Sistemas Informáticos (regime pós-laboral)"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE COIMBRA
// ESCOLA SUPERIOR AGRÁRIA DE COIMBRA
// =====================================================

registarFaculdade(
  "ipc",
  "esac",
  "Escola Superior Agrária de Coimbra"
);

registarCursos(
  "ipc",
  "esac",
  [
      "Agronomia",
      "Biotecnologia",
      "Ciências Florestais e Recursos Naturais",
      "Enfermagem Veterinária",
      "Tecnologia Alimentar",
      "Tecnologia e Gestão do Ambiente",
      "Turismo em Espaços Rurais e Naturais",
      "Zootecnia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE COIMBRA
// ESCOLA SUPERIOR DE EDUCAÇÃO DE COIMBRA
// =====================================================

registarFaculdade(
  "ipc",
  "ese",
  "Escola Superior de Educação de Coimbra"
);

registarCursos(
  "ipc",
  "ese",
  [
      "Animação Socioeducativa",
      "Animação Socioeducativa (regime pós-laboral)",
      "Arte e Design",
      "Comunicação e Design Multimédia",
      "Comunicação Organizacional",
      "Comunicação Organizacional (regime pós-laboral)",
      "Comunicação Social",
      "Desporto e Lazer",
      "Educação Básica",
      "Estudos Musicais Aplicados",
      "Gastronomia",
      "Gerontologia",
      "Língua Gestual Portuguesa",
      "Teatro e Educação",
      "Turismo",
      "Turismo (regime pós-laboral)"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE COIMBRA
// ESCOLA SUPERIOR DE TECNOLOGIA E GESTÃO DE OLIVEIRA DO HOSPITAL
// =====================================================

registarFaculdade(
  "ipc",
  "estgoh",
  "Escola Superior de Tecnologia e Gestão de Oliveira do Hospital"
);

registarCursos(
  "ipc",
  "estgoh",
  [
      "Contabilidade e Administração",
      "Engenharia Informática",
      "Gestão",
      "Gestão e Biociências",
      "Gestão do Território",
      "Marketing"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE COIMBRA
// ESCOLA SUPERIOR DE TECNOLOGIA DA SAÚDE DE COIMBRA
// =====================================================

registarFaculdade(
  "ipc",
  "estesc",
  "Escola Superior de Tecnologia da Saúde de Coimbra"
);

registarCursos(
  "ipc",
  "estesc",
  [
      "Audiologia",
      "Ciências Biomédicas Laboratoriais",
      "Dietética e Nutrição",
      "Farmácia",
      "Fisiologia Clínica",
      "Fisioterapia",
      "Imagem Médica e Radioterapia",
      "Saúde Ambiental",
      "Terapia Ocupacional"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE COIMBRA
// INSTITUTO SUPERIOR DE CONTABILIDADE E ADMINISTRAÇÃO DE COIMBRA
// =====================================================

registarFaculdade(
  "ipc",
  "iscac",
  "Instituto Superior de Contabilidade e Administração de Coimbra"
);

registarCursos(
  "ipc",
  "iscac",
  [
      "Assessoria de Direção",
      "Ciência de Dados para a Gestão",
      "Comércio e Relações Económicas Internacionais",
      "Contabilidade e Auditoria",
      "Contabilidade e Gestão Pública",
      "Finanças e Contabilidade",
      "Gestão de Empresas",
      "Gestão de Recursos Humanos",
      "Informática de Gestão",
      "Marketing e Negócios Internacionais",
      "Solicitadoria e Administração"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE COIMBRA
// INSTITUTO SUPERIOR DE ENGENHARIA DE COIMBRA
// =====================================================

registarFaculdade(
  "ipc",
  "isec",
  "Instituto Superior de Engenharia de Coimbra"
);

registarCursos(
  "ipc",
  "isec",
  [
      "Bioengenharia",
      "Engenharia Biomédica",
      "Engenharia Civil",
      "Engenharia Eletromecânica",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia e Gestão Industrial",
      "Engenharia Informática",
      "Engenharia Informática (Curso Europeu)",
      "Engenharia Informática (regime pós-laboral)",
      "Engenharia Mecânica",
      "Gestão Sustentável das Cidades",
      "Informática Industrial"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DA GUARDA
// ESCOLA SUPERIOR DE EDUCAÇÃO, COMUNICAÇÃO E DESPORTO
// =====================================================

registarFaculdade(
  "ipg",
  "esecd",
  "Escola Superior de Educação, Comunicação e Desporto"
);

registarCursos(
  "ipg",
  "esecd",
  [
      "Animação Sociocultural",
      "Comunicação Multimédia",
      "Comunicação e Relações Públicas",
      "Desporto",
      "Desporto, Condição Física e Saúde",
      "Educação Básica",
      "Educação Social Gerontológica"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DA GUARDA
// ESCOLA SUPERIOR DE SAÚDE DA GUARDA
// =====================================================

registarFaculdade(
  "ipg",
  "essg",
  "Escola Superior de Saúde da Guarda"
);

registarCursos(
  "ipg",
  "essg",
  [
      "Biotecnologia Medicinal",
      "Ciências Biomédicas Laboratoriais",
      "Enfermagem",
      "Farmácia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DA GUARDA
// ESCOLA SUPERIOR DE TECNOLOGIA E GESTÃO
// =====================================================

registarFaculdade(
  "ipg",
  "estg",
  "Escola Superior de Tecnologia e Gestão"
);

registarCursos(
  "ipg",
  "estg",
  [
      "Ciência de Dados e Inteligência Artificial",
      "Contabilidade",
      "Design de Equipamento e Ambientes",
      "Energia e Ambiente",
      "Engenharia Civil",
      "Engenharia Informática",
      "Engenharia Topográfica",
      "Gestão",
      "Gestão de Recursos Humanos",
      "Marketing",
      "Mecânica e Informática Industrial"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DA GUARDA
// ESCOLA SUPERIOR DE TURISMO E HOTELARIA
// =====================================================

registarFaculdade(
  "ipg",
  "esth",
  "Escola Superior de Turismo e Hotelaria"
);

registarCursos(
  "ipg",
  "esth",
  [
      "Gestão Hoteleira",
      "Gestão do Turismo e da Hospitalidade",
      "Marketing e Inovação no Turismo",
      "Restauração e Catering",
      "Turismo e Lazer"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE LEIRIA
// ESCOLA SUPERIOR DE ARTES E DESIGN
// =====================================================

registarFaculdade(
  "ipleiria",
  "esad",
  "Escola Superior de Artes e Design"
);

registarCursos(
  "ipleiria",
  "esad",
  [
      "Artes Plásticas",
      "Design de Espaços",
      "Design Gráfico e Multimédia",
      "Design Gráfico e Multimédia (regime pós-laboral)",
      "Design Industrial",
      "Design de Produto - Cerâmica e Vidro",
      "Programação e Produção Cultural",
      "Som e Imagem",
      "Teatro"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE LEIRIA
// ESCOLA SUPERIOR DE EDUCAÇÃO E CIÊNCIAS SOCIAIS
// =====================================================

registarFaculdade(
  "ipleiria",
  "eseCS",
  "Escola Superior de Educação e Ciências Sociais"
);

registarCursos(
  "ipleiria",
  "eseCS",
  [
      "Comunicação e Media",
      "Desporto e Bem-Estar",
      "Educação Básica",
      "Educação Social",
      "Relações Humanas e Comunicação Organizacional",
      "Relações Humanas e Comunicação Organizacional (regime pós-laboral)",
      "Serviço Social",
      "Serviço Social (regime pós-laboral)",
      "Tradução e Interpretação: Português/Chinês - Chinês/Português"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE LEIRIA
// ESCOLA SUPERIOR DE SAÚDE
// =====================================================

registarFaculdade(
  "ipleiria",
  "ess",
  "Escola Superior de Saúde"
);

registarCursos(
  "ipleiria",
  "ess",
  [
      "Dietética e Nutrição",
      "Enfermagem",
      "Fisioterapia",
      "Terapia da Fala",
      "Terapia Ocupacional"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE LEIRIA
// ESCOLA SUPERIOR DE TECNOLOGIA E GESTÃO
// =====================================================

registarFaculdade(
  "ipleiria",
  "estg",
  "Escola Superior de Tecnologia e Gestão"
);

registarCursos(
  "ipleiria",
  "estg",
  [
      "Administração Pública",
      "Biomecânica",
      "Contabilidade e Finanças",
      "Engenharia Automóvel",
      "Engenharia Civil",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia Eletrotécnica e de Computadores (regime noturno)",
      "Engenharia e Gestão Industrial",
      "Engenharia Informática",
      "Engenharia Informática (regime pós-laboral)",
      "Engenharia Mecânica",
      "Engenharia Mecânica (regime pós-laboral)",
      "Gestão",
      "Gestão (regime pós-laboral)",
      "Gestão Sustentável das Cidades e da Indústria",
      "Jogos Digitais e Multimédia (ensino em inglês)",
      "Marketing",
      "Solicitadoria",
      "Solicitadoria (regime pós-laboral)"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE LEIRIA
// ESCOLA SUPERIOR DE TURISMO E TECNOLOGIA DO MAR
// =====================================================

registarFaculdade(
  "ipleiria",
  "estm",
  "Escola Superior de Turismo e Tecnologia do Mar"
);

registarCursos(
  "ipleiria",
  "estm",
  [
      "Animação Turística",
      "Biologia Marinha",
      "Biotecnologia",
      "Gestão de Eventos",
      "Gestão da Restauração e Catering",
      "Gestão Turística e Hoteleira",
      "Marketing Turístico",
      "Sistemas Alimentares Sustentáveis",
      "Tecnologias Digitais Aplicadas ao Turismo",
      "Turismo"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE LISBOA
// ESCOLA SUPERIOR DE COMUNICAÇÃO SOCIAL
// =====================================================

registarFaculdade(
  "ipl",
  "escs",
  "Escola Superior de Comunicação Social"
);

registarCursos(
  "ipl",
  "escs",
  [
      "Audiovisual e Multimédia",
      "Jornalismo",
      "Publicidade e Marketing",
      "Publicidade e Marketing (regime pós-laboral)",
      "Relações Públicas e Comunicação Empresarial",
      "Relações Públicas e Comunicação Empresarial (regime pós-laboral)"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE LISBOA
// ESCOLA SUPERIOR DE DANÇA
// =====================================================

registarFaculdade(
  "ipl",
  "esd",
  "Escola Superior de Dança"
);

registarCursos(
  "ipl",
  "esd",
  [
      "Dança"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE LISBOA
// ESCOLA SUPERIOR DE EDUCAÇÃO
// =====================================================

registarFaculdade(
  "ipl",
  "ese",
  "Escola Superior de Educação"
);

registarCursos(
  "ipl",
  "ese",
  [
      "Animação Sociocultural",
      "Artes Visuais e Tecnologias",
      "Educação Básica",
      "Educação Básica (regime pós-laboral)",
      "Mediação Artística e Cultural"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DE LISBOA
// ESCOLA SUPERIOR DE MÚSICA
// =====================================================

registarFaculdade(
  "ipl",
  "esm",
  "Escola Superior de Música"
);

registarCursos(
  "ipl",
  "esm",
  [
      "Música, variante de Composição, Direção e Formação Musical",
      "Música, variante de Execução",
      "Música, variante de Jazz (regime pós-laboral)",
      "Tecnologias da Música (regime pós-laboral)"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE LISBOA
// ESCOLA SUPERIOR DE SAÚDE DE LISBOA
// =====================================================

registarFaculdade(
  "ipl",
  "essl",
  "Escola Superior de Saúde de Lisboa"
);

registarCursos(
  "ipl",
  "essl",
  [
      "Ciências Biomédicas Laboratoriais",
      "Dietética e Nutrição",
      "Farmácia",
      "Fisiologia Clínica",
      "Fisioterapia",
      "Imagem Médica e Radioterapia",
      "Ortoprotesia",
      "Ortóptica e Ciências da Visão",
      "Saúde Ambiental"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE LISBOA
// ESCOLA SUPERIOR DE TEATRO E CINEMA
// =====================================================

registarFaculdade(
  "ipl",
  "estc",
  "Escola Superior de Teatro e Cinema"
);

registarCursos(
  "ipl",
  "estc",
  [
      "Cinema",
      "Teatro"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE LISBOA
// INSTITUTO SUPERIOR DE CONTABILIDADE E ADMINISTRAÇÃO DE LISBOA
// =====================================================

registarFaculdade(
  "ipl",
  "iscal",
  "Instituto Superior de Contabilidade e Administração de Lisboa"
);

registarCursos(
  "ipl",
  "iscal",
  [
      "Comércio e Negócios Internacionais",
      "Comércio e Negócios Internacionais (regime pós-laboral)",
      "Contabilidade",
      "Contabilidade (regime pós-laboral)",
      "Finanças Empresariais",
      "Finanças Empresariais (regime pós-laboral)",
      "Gestão",
      "Gestão (regime pós-laboral)",
      "Solicitadoria",
      "Solicitadoria (regime pós-laboral)"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE LISBOA
// INSTITUTO SUPERIOR DE ENGENHARIA DE LISBOA
// =====================================================

registarFaculdade(
  "ipl",
  "isel",
  "Instituto Superior de Engenharia de Lisboa"
);

registarCursos(
  "ipl",
  "isel",
  [
      "Engenharia Biomédica",
      "Engenharia Civil",
      "Engenharia Eletrónica e Telecomunicações e de Computadores",
      "Engenharia Eletrotécnica",
      "Engenharia Física Aplicada",
      "Engenharia Informática e de Computadores",
      "Engenharia Informática e Multimédia",
      "Engenharia Informática, Redes e Telecomunicações",
      "Engenharia Mecânica",
      "Engenharia Química e Biológica",
      "Engenharia de Sistemas de Computadores",
      "Informática e Economia dos Dados",
      "Matemática Aplicada à Tecnologia e à Empresa",
      "Tecnologias e Gestão Municipal"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE PORTALEGRE
// ESCOLA SUPERIOR DE BIOCIÊNCIAS DE ELVAS
// =====================================================

registarFaculdade(
  "ipp",
  "esbe",
  "Escola Superior de Biociências de Elvas"
);

registarCursos(
  "ipp",
  "esbe",
  [
      "Agronomia",
      "Desporto",
      "Enfermagem Veterinária",
      "Equinicultura"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE PORTALEGRE
// ESCOLA SUPERIOR DE EDUCAÇÃO E CIÊNCIAS SOCIAIS
// =====================================================

registarFaculdade(
  "ipp",
  "eseCS",
  "Escola Superior de Educação e Ciências Sociais"
);

registarCursos(
  "ipp",
  "eseCS",
  [
      "Educação Básica",
      "Educação Social",
      "Jornalismo e Comunicação",
      "Línguas Aplicadas em Comunicação Digital",
      "Serviço Social",
      "Turismo"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE PORTALEGRE
// ESCOLA SUPERIOR DE SAÚDE
// =====================================================

registarFaculdade(
  "ipp",
  "ess",
  "Escola Superior de Saúde"
);

registarCursos(
  "ipp",
  "ess",
  [
      "Enfermagem",
      "Fisioterapia",
      "Higiene Oral"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE PORTALEGRE
// ESCOLA SUPERIOR DE TECNOLOGIA, GESTÃO E DESIGN
// =====================================================

registarFaculdade(
  "ipp",
  "estgd",
  "Escola Superior de Tecnologia, Gestão e Design"
);

registarCursos(
  "ipp",
  "estgd",
  [
      "Administração de Publicidade e Marketing",
      "Design de Animação",
      "Design de Comunicação",
      "Engenharia Civil",
      "Engenharia Informática",
      "Engenharia Química e Biológica",
      "Gestão",
      "Gestão de Recursos Humanos",
      "Som e Imagem"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DO PORTO
// ESCOLA SUPERIOR DE EDUCAÇÃO
// =====================================================

registarFaculdade(
  "ipp",
  "ese",
  "Escola Superior de Educação"
);

registarCursos(
  "ipp",
  "ese",
  [
      "Artes Visuais e Tecnologias Artísticas",
      "Desporto",
      "Educação Básica",
      "Educação Musical",
      "Educação Social",
      "Educação Social (regime pós-laboral)",
      "Gestão do Património Cultural",
      "Línguas e Culturas Estrangeiras",
      "Tecnologias para a Educação STEAM",
      "Tradução e Interpretação em Língua Gestual Portuguesa"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DO PORTO
// ESCOLA SUPERIOR DE HOTELARIA E TURISMO
// =====================================================

registarFaculdade(
  "ipp",
  "esht",
  "Escola Superior de Hotelaria e Turismo"
);

registarCursos(
  "ipp",
  "esht",
  [
      "Gestão e Administração Hoteleira",
      "Gestão das Atividades Turísticas",
      "Gestão da Restauração e Catering"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DO PORTO
// ESCOLA SUPERIOR DE MEDIA ARTES E DESIGN
// =====================================================

registarFaculdade(
  "ipp",
  "esmad",
  "Escola Superior de Media Artes e Design"
);

registarCursos(
  "ipp",
  "esmad",
  [
      "Cinema e Audiovisual",
      "Design",
      "Fotografia",
      "Multimédia",
      "Tecnologias e Desenvolvimento Web"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DO PORTO
// ESCOLA SUPERIOR DE MÚSICA E ARTES DO ESPETÁCULO
// =====================================================

registarFaculdade(
  "ipp",
  "esmae",
  "Escola Superior de Música e Artes do Espetáculo"
);

registarCursos(
  "ipp",
  "esmae",
  [
      "Música, variante de Instrumento e Canto",
      "Música, variante de Composição",
      "Música, variante de Jazz",
      "Música, variante de Música Antiga",
      "Música, variante de Produção e Tecnologias da Música",
      "Teatro, variante de Cenografia",
      "Teatro, variante Direção de Cena e Produção",
      "Teatro, variante de Figurino",
      "Teatro, variante Luz",
      "Teatro, variante Som",
      "Teatro, variante de Interpretação"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DO PORTO
// ESCOLA SUPERIOR DE SAÚDE
// =====================================================

registarFaculdade(
  "ipp",
  "ess",
  "Escola Superior de Saúde"
);

registarCursos(
  "ipp",
  "ess",
  [
      "Audiologia",
      "Biotecnologia Medicinal",
      "Ciências Biomédicas Laboratoriais",
      "Farmácia",
      "Física Aplicada à Saúde",
      "Fisiologia Clínica",
      "Fisioterapia",
      "Imagem Médica e Radioterapia",
      "Ortóptica",
      "Osteopatia",
      "Saúde Ambiental",
      "Saúde Digital",
      "Terapia da Fala",
      "Terapia Ocupacional"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DO PORTO
// ESCOLA SUPERIOR DE TECNOLOGIA E GESTÃO
// =====================================================

registarFaculdade(
  "ipp",
  "estg",
  "Escola Superior de Tecnologia e Gestão"
);

registarCursos(
  "ipp",
  "estg",
  [
      "Ciências Empresariais",
      "Ciências Empresariais (regime pós-laboral)",
      "Engenharia Informática",
      "Gestão Industrial e Logística",
      "Segurança Informática em Redes de Computadores",
      "Segurança do Trabalho e Ambiente",
      "Sistemas de Informação para a Gestão",
      "Solicitadoria",
      "Solicitadoria (regime pós-laboral)"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DO PORTO
// INSTITUTO SUPERIOR DE CONTABILIDADE E ADMINISTRAÇÃO DO PORTO
// =====================================================

registarFaculdade(
  "ipp",
  "iscap",
  "Instituto Superior de Contabilidade e Administração do Porto"
);

registarCursos(
  "ipp",
  "iscap",
  [
      "Assessoria e Tradução",
      "Assessoria e Tradução (regime pós-laboral)",
      "Ciências e Tecnologias da Documentação e Informação",
      "Comércio Internacional",
      "Comércio Internacional (regime pós-laboral)",
      "Comunicação Empresarial",
      "Comunicação Empresarial (regime pós-laboral)",
      "Contabilidade e Administração",
      "Contabilidade e Administração (regime pós-laboral)",
      "Criatividade e Inovação Empresarial",
      "Gestão",
      "Marketing",
      "Marketing (regime pós-laboral)",
      "Recursos Humanos"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DO PORTO
// INSTITUTO SUPERIOR DE ENGENHARIA DO PORTO
// =====================================================

registarFaculdade(
  "ipp",
  "isep",
  "Instituto Superior de Engenharia do Porto"
);

registarCursos(
  "ipp",
  "isep",
  [
      "Biorrecursos",
      "Engenharia Biomédica",
      "Engenharia Civil",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia Eletrotécnica - Sistemas Elétricos de Energia",
      "Engenharia Física Aplicada",
      "Engenharia Geotécnica e Geoambiente",
      "Engenharia e Gestão Industrial",
      "Engenharia Informática",
      "Engenharia Mecânica",
      "Engenharia Mecânica Automóvel",
      "Engenharia Química",
      "Engenharia de Sistemas",
      "Engenharia de Telecomunicações e Informática"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE SANTARÉM
// ESCOLA SUPERIOR AGRÁRIA DE SANTARÉM
// =====================================================

registarFaculdade(
  "ips",
  "esa",
  "Escola Superior Agrária de Santarém"
);

registarCursos(
  "ips",
  "esa",
  [
      "Agronomia",
      "Agronomia (regime pós-laboral)",
      "Biologia e Biotecnologia Alimentar",
      "Enfermagem Veterinária",
      "Qualidade Alimentar e Nutrição Humana",
      "Zootecnia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE SANTARÉM
// ESCOLA SUPERIOR DE DESPORTO DE RIO MAIOR
// =====================================================

registarFaculdade(
  "ips",
  "esdrm",
  "Escola Superior de Desporto de Rio Maior"
);

registarCursos(
  "ips",
  "esdrm",
  [
      "Atividade Física e Estilos de Vida Saudáveis",
      "Desporto, Condição Física e Saúde",
      "Desporto de Natureza e Turismo Ativo",
      "Gestão das Organizações Desportivas",
      "Treino Desportivo"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE SANTARÉM
// ESCOLA SUPERIOR DE EDUCAÇÃO DE SANTARÉM
// =====================================================

registarFaculdade(
  "ips",
  "ese",
  "Escola Superior de Educação de Santarém"
);

registarCursos(
  "ips",
  "ese",
  [
      "Educação Ambiental e Turismo de Natureza",
      "Educação Básica",
      "Educação Social",
      "Produção Multimédia em Educação"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE SANTARÉM
// ESCOLA SUPERIOR DE GESTÃO E TECNOLOGIA DE SANTARÉM
// =====================================================

registarFaculdade(
  "ips",
  "esgts",
  "Escola Superior de Gestão e Tecnologia de Santarém"
);

registarCursos(
  "ips",
  "esgts",
  [
      "Contabilidade e Fiscalidade",
      "Engenharia Informática",
      "Gestão",
      "Gestão de Marketing",
      "Gestão (regime pós-laboral)",
      "Negócios Internacionais"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DE SANTARÉM
// ESCOLA SUPERIOR DE SAÚDE DE SANTARÉM
// =====================================================

registarFaculdade(
  "ips",
  "ess",
  "Escola Superior de Saúde de Santarém"
);

registarCursos(
  "ips",
  "ess",
  [
      "Enfermagem",
      "Fisioterapia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE SETÚBAL
// ESCOLA SUPERIOR DE CIÊNCIAS EMPRESARIAIS
// =====================================================

registarFaculdade(
  "ips",
  "esce",
  "Escola Superior de Ciências Empresariais"
);

registarCursos(
  "ips",
  "esce",
  [
      "Contabilidade e Finanças",
      "Contabilidade e Finanças (regime noturno)",
      "Gestão da Distribuição e da Logística",
      "Gestão da Distribuição e da Logística (regime pós-laboral)",
      "Gestão de Recursos Humanos",
      "Gestão de Recursos Humanos (regime pós-laboral)",
      "Gestão de Sistemas de Informação",
      "Marketing"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE SETÚBAL
// ESCOLA SUPERIOR DE EDUCAÇÃO
// =====================================================

registarFaculdade(
  "ips",
  "ese",
  "Escola Superior de Educação"
);

registarCursos(
  "ips",
  "ese",
  [
      "Animação Sociocultural",
      "Comunicação Social",
      "Desporto",
      "Educação Básica",
      "Educação Básica (regime pós-laboral)",
      "Tradução e Interpretação de Língua Gestual Portuguesa"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE SETÚBAL
// ESCOLA SUPERIOR DE SAÚDE
// =====================================================

registarFaculdade(
  "ips",
  "ess",
  "Escola Superior de Saúde"
);

registarCursos(
  "ips",
  "ess",
  [
      "Enfermagem",
      "Fisioterapia",
      "Terapia da Fala"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE SETÚBAL
// ESCOLA SUPERIOR DE TECNOLOGIA DO BARREIRO
// =====================================================

registarFaculdade(
  "ips",
  "estb",
  "Escola Superior de Tecnologia do Barreiro"
);

registarCursos(
  "ips",
  "estb",
  [
      "Bioinformática",
      "Biotecnologia",
      "Engenharia Civil",
      "Engenharia Civil (regime pós-laboral)",
      "Tecnologias do Petróleo"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE SETÚBAL
// ESCOLA SUPERIOR DE TECNOLOGIA DE SETÚBAL
// =====================================================

registarFaculdade(
  "ips",
  "ests",
  "Escola Superior de Tecnologia de Setúbal"
);

registarCursos(
  "ips",
  "ests",
  [
      "Engenharia de Automação, Controlo e Instrumentação",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia Informática",
      "Engenharia Mecânica",
      "Tecnologia Biomédica",
      "Tecnologia e Gestão Industrial (regime noturno)",
      "Tecnologias do Ambiente e do Mar",
      "Tecnologias de Energia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE TOMAR
// ESCOLA SUPERIOR DE GESTÃO DE TOMAR
// =====================================================

registarFaculdade(
  "ipt",
  "esgt",
  "Escola Superior de Gestão de Tomar"
);

registarCursos(
  "ipt",
  "esgt",
  [
      "Contabilidade",
      "Gestão de Empresas",
      "Gestão de Recursos Humanos e Comportamento Organizacional",
      "Turismo e Gestão do Património Cultural"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE TOMAR
// ESCOLA SUPERIOR DE TECNOLOGIA DE ABRANTES
// =====================================================

registarFaculdade(
  "ipt",
  "esta",
  "Escola Superior de Tecnologia de Abrantes"
);

registarCursos(
  "ipt",
  "esta",
  [
      "Cinema e Média Digitais",
      "Computação e Logística",
      "Comunicação Social: Jornalismo e Comunicação Empresarial",
      "Engenharia Mecânica",
      "Informática e Tecnologias Multimédia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE TOMAR
// ESCOLA SUPERIOR DE TECNOLOGIA DE TOMAR
// =====================================================

registarFaculdade(
  "ipt",
  "estt",
  "Escola Superior de Tecnologia de Tomar"
);

registarCursos(
  "ipt",
  "estt",
  [
      "Conservação e Restauro",
      "Design e Tecnologia das Artes Gráficas",
      "Engenharia Civil",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia Informática",
      "Fotografia",
      "Gestão da Edificação e Obras",
      "Tecnologia Química"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE VIANA DO CASTELO
// ESCOLA SUPERIOR AGRÁRIA
// =====================================================

registarFaculdade(
  "ipvc",
  "esa",
  "Escola Superior Agrária"
);

registarCursos(
  "ipvc",
  "esa",
  [
      "Agronomia",
      "Biotecnologia",
      "Enfermagem Veterinária",
      "Engenharia do Ambiente e Geoinformática"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE VIANA DO CASTELO
// ESCOLA SUPERIOR DE CIÊNCIAS EMPRESARIAIS
// =====================================================

registarFaculdade(
  "ipvc",
  "esce",
  "Escola Superior de Ciências Empresariais"
);

registarCursos(
  "ipvc",
  "esce",
  [
      "Contabilidade e Fiscalidade",
      "Gestão da Distribuição e Logística",
      "Marketing e Comunicação Empresariais",
      "Organização e Gestão Empresariais"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE VIANA DO CASTELO
// ESCOLA SUPERIOR DE DESPORTO E LAZER
// =====================================================

registarFaculdade(
  "ipvc",
  "esdl",
  "Escola Superior de Desporto e Lazer"
);

registarCursos(
  "ipvc",
  "esdl",
  [
      "Desporto e Lazer"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE VIANA DO CASTELO
// ESCOLA SUPERIOR DE EDUCAÇÃO
// =====================================================

registarFaculdade(
  "ipvc",
  "ese",
  "Escola Superior de Educação"
);

registarCursos(
  "ipvc",
  "ese",
  [
      "Artes e Cinema Digital",
      "Artes Plásticas e Tecnologias Artísticas",
      "Educação Básica",
      "Gerontologia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE VIANA DO CASTELO
// ESCOLA SUPERIOR DE SAÚDE
// =====================================================

registarFaculdade(
  "ipvc",
  "ess",
  "Escola Superior de Saúde"
);

registarCursos(
  "ipvc",
  "ess",
  [
      "Enfermagem",
      "Fisioterapia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE VIANA DO CASTELO
// ESCOLA SUPERIOR DE TECNOLOGIA E GESTÃO
// =====================================================

registarFaculdade(
  "ipvc",
  "estg",
  "Escola Superior de Tecnologia e Gestão"
);

registarCursos(
  "ipvc",
  "estg",
  [
      "Design de Ambientes",
      "Design do Produto",
      "Engenharia Civil e do Ambiente",
      "Engenharia da Computação Gráfica e Multimédia",
      "Engenharia Informática",
      "Engenharia Mecânica",
      "Engenharia Mecatrónica",
      "Engenharia de Redes e Sistemas de Computadores",
      "Gastronomia e Artes Culinárias",
      "Gestão",
      "Gestão (regime noturno)",
      "Tecnologia Alimentar e Nutrição",
      "Turismo"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DE VISEU
// ESCOLA SUPERIOR AGRÁRIA DE VISEU
// =====================================================

registarFaculdade(
  "ipv",
  "esav",
  "Escola Superior Agrária de Viseu"
);

registarCursos(
  "ipv",
  "esav",
  [
      "Biotecnologia",
      "Enfermagem Veterinária",
      "Engenharia Agronómica",
      "Engenharia Alimentar",
      "Engenharia Zootécnica"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE VISEU
// ESCOLA SUPERIOR DE EDUCAÇÃO DE VISEU
// =====================================================

registarFaculdade(
  "ipv",
  "esev",
  "Escola Superior de Educação de Viseu"
);

registarCursos(
  "ipv",
  "esev",
  [
      "Artes Performativas",
      "Artes Plásticas e Multimédia",
      "Comunicação Social",
      "Desporto e Atividade Física",
      "Educação Básica",
      "Educação Social",
      "Publicidade e Relações Públicas"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE VISEU
// ESCOLA SUPERIOR DE SAÚDE DE VISEU
// =====================================================

registarFaculdade(
  "ipv",
  "essv",
  "Escola Superior de Saúde de Viseu"
);

registarCursos(
  "ipv",
  "essv",
  [
      "Enfermagem",
      "Fisioterapia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE VISEU
// ESCOLA SUPERIOR DE TECNOLOGIA E GESTÃO DE LAMEGO
// =====================================================

registarFaculdade(
  "ipv",
  "estgl",
  "Escola Superior de Tecnologia e Gestão de Lamego"
);

registarCursos(
  "ipv",
  "estgl",
  [
      "Engenharia Informática e Telecomunicações",
      "Gestão Comercial",
      "Gestão e Informática",
      "Gestão Turística, Cultural e Patrimonial",
      "Secretariado de Administração",
      "Serviço Social"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE VISEU
// ESCOLA SUPERIOR DE TECNOLOGIA E GESTÃO DE VISEU
// =====================================================

registarFaculdade(
  "ipv",
  "estgv",
  "Escola Superior de Tecnologia e Gestão de Viseu"
);

registarCursos(
  "ipv",
  "estgv",
  [
      "Ciências e Tecnologia do Ambiente",
      "Contabilidade",
      "Engenharia Civil",
      "Engenharia Eletrotécnica",
      "Engenharia Informática",
      "Engenharia Mecânica",
      "Gestão de Empresas",
      "Gestão de Empresas (regime pós-laboral)",
      "Gestão Industrial",
      "Marketing",
      "Tecnologia e Design de Mobiliário",
      "Tecnologias e Design de Multimédia",
      "Turismo"
  ]
);

// =====================================================
// UNIVERSIDADE DOS AÇORES
// ESCOLA SUPERIOR DE SAÚDE - ANGRA DO HEROÍSMO
// =====================================================

registarFaculdade(
  "uac",
  "essa",
  "Escola Superior de Saúde - Angra do Heroísmo"
);

registarCursos(
  "uac",
  "essa",
  [
      "Enfermagem"
  ]
);

// =====================================================
// UNIVERSIDADE DOS AÇORES
// ESCOLA SUPERIOR DE SAÚDE - PONTA DELGADA
// =====================================================

registarFaculdade(
  "uac",
  "esspd",
  "Escola Superior de Saúde - Ponta Delgada"
);

registarCursos(
  "uac",
  "esspd",
  [
      "Enfermagem"
  ]
);

// =====================================================
// UNIVERSIDADE DO ALGARVE
// ESCOLA SUPERIOR DE EDUCAÇÃO E COMUNICAÇÃO
// =====================================================

registarFaculdade(
  "ualg",
  "esecom",
  "Escola Superior de Educação e Comunicação"
);

registarCursos(
  "ualg",
  "esecom",
  [
      "Ciências da Comunicação",
      "Design de Comunicação",
      "Desporto",
      "Educação Básica",
      "Educação Social",
      "Imagem Animada"
  ]
);

// =====================================================
// UNIVERSIDADE DO ALGARVE
// ESCOLA SUPERIOR DE GESTÃO, HOTELARIA E TURISMO
// =====================================================

registarFaculdade(
  "ualg",
  "esght",
  "Escola Superior de Gestão, Hotelaria e Turismo"
);

registarCursos(
  "ualg",
  "esght",
  [
      "Gestão",
      "Gestão Hoteleira",
      "Gestão (regime noturno)",
      "Marketing",
      "Turismo"
  ]
);
// =====================================================
// UNIVERSIDADE DO ALGARVE
// ESCOLA SUPERIOR DE GESTÃO, HOTELARIA E TURISMO (PORTIMÃO)
// =====================================================

registarFaculdade(
  "ualg",
  "esght-portimao",
  "Escola Superior de Gestão, Hotelaria e Turismo (Portimão)"
);

registarCursos(
  "ualg",
  "esght-portimao",
  [
      "Gestão",
      "Gestão (regime noturno)",
      "Turismo"
  ]
);

// =====================================================
// UNIVERSIDADE DO ALGARVE
// ESCOLA SUPERIOR DE SAÚDE
// =====================================================

registarFaculdade(
  "ualg",
  "ess",
  "Escola Superior de Saúde"
);

registarCursos(
  "ualg",
  "ess",
  [
      "Ciências Biomédicas Laboratoriais",
      "Dietética e Nutrição",
      "Enfermagem",
      "Farmácia",
      "Fisioterapia",
      "Imagem Médica e Radioterapia",
      "Terapia da Fala"
  ]
);

// =====================================================
// UNIVERSIDADE DO ALGARVE
// INSTITUTO SUPERIOR DE ENGENHARIA
// =====================================================

registarFaculdade(
  "ualg",
  "ise",
  "Instituto Superior de Engenharia"
);

registarCursos(
  "ualg",
  "ise",
  [
      "Engenharia Civil",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia Mecânica",
      "Engenharia de Sistemas e Tecnologias Informáticas"
  ]
);

// =====================================================
// UNIVERSIDADE DE AVEIRO
// ESCOLA SUPERIOR DE DESIGN, GESTÃO E TECNOLOGIA
// DA PRODUÇÃO DE AVEIRO-NORTE
// =====================================================

registarFaculdade(
  "ua",
  "esdgtpan",
  "Escola Superior de Design, Gestão e Tecnologia da Produção de Aveiro-Norte"
);

registarCursos(
  "ua",
  "esdgtpan",
  [
      "Automação e Sistemas de Produção",
      "Design de Produto e Tecnologia",
      "Engenharia de Software Industrial"
  ]
);

// =====================================================
// UNIVERSIDADE DE AVEIRO
// UNIVERSIDADE DE AVEIRO
// =====================================================

registarFaculdade(
  "aveiro",
  "universidade-de-aveiro",
  "Universidade de Aveiro"
);

// =====================================================
// UNIVERSIDADE DE AVEIRO
// ESCOLA SUPERIOR DE SAÚDE DE AVEIRO
// =====================================================

registarFaculdade(
  "ua",
  "essa",
  "Escola Superior de Saúde de Aveiro"
);

registarCursos(
  "ua",
  "essa",
  [
      "Enfermagem",
      "Fisioterapia",
      "Imagem Médica e Radioterapia",
      "Terapia da Fala"
  ]
);

// =====================================================
// UNIVERSIDADE DE AVEIRO
// ESCOLA SUPERIOR DE TECNOLOGIA E GESTÃO DE ÁGUEDA
// =====================================================

registarFaculdade(
  "ua",
  "estga",
  "Escola Superior de Tecnologia e Gestão de Águeda"
);

registarCursos(
  "ua",
  "estga",
  [
      "Eletrónica e Mecânica Industrial",
      "Engenharia Informática Aplicada",
      "Gestão Comercial",
      "Gestão Pública",
      "Gestão da Qualidade",
      "Secretariado e Comunicação Empresarial"
  ]
);

// =====================================================
// UNIVERSIDADE DE AVEIRO
// INSTITUTO SUPERIOR DE CONTABILIDADE E ADMINISTRAÇÃO
// DE AVEIRO
// =====================================================

registarFaculdade(
  "ua",
  "isca",
  "Instituto Superior de Contabilidade e Administração de Aveiro"
);

registarCursos(
  "ua",
  "isca",
  [
      "Contabilidade",
      "Contabilidade (regime pós-laboral)",
      "Finanças",
      "Finanças (regime pós-laboral)",
      "Marketing",
      "Marketing (regime pós-laboral)"
  ]
);

// =====================================================
// UNIVERSIDADE DE COIMBRA
// ESCOLA SUPERIOR DE ENFERMAGEM
// =====================================================

registarFaculdade(
  "uc",
  "esenfc",
  "Escola Superior de Enfermagem"
);

registarCursos(
  "uc",
  "esenfc",
  [
      "Enfermagem"
  ]
);

// =====================================================
// UNIVERSIDADE DE ÉVORA
// ESCOLA SUPERIOR DE ENFERMAGEM DE SÃO JOÃO DE DEUS
// =====================================================

registarFaculdade(
  "ue",
  "esenf",
  "Escola Superior de Enfermagem de São João de Deus"
);

registarCursos(
  "ue",
  "esenf",
  [
      "Enfermagem"
  ]
);

// =====================================================
// UNIVERSIDADE DE LISBOA
// ESCOLA SUPERIOR DE ENFERMAGEM
// =====================================================

registarFaculdade(
  "ulisboa",
  "esenful",
  "Escola Superior de Enfermagem"
);

registarCursos(
  "ulisboa",
  "esenful",
  [
      "Enfermagem"
  ]
);

// =====================================================
// UNIVERSIDADE DA MADEIRA
// ESCOLA SUPERIOR DE SAÚDE
// =====================================================

registarFaculdade(
  "uma",
  "ess",
  "Escola Superior de Saúde"
);

registarCursos(
  "uma",
  "ess",
  [
      "Enfermagem"
  ]
);

// =====================================================
// UNIVERSIDADE DA MADEIRA
// ESCOLA SUPERIOR DE TECNOLOGIAS E GESTÃO
// =====================================================

registarFaculdade(
  "uma",
  "estg",
  "Escola Superior de Tecnologias e Gestão"
);

registarCursos(
  "uma",
  "estg",
  [
      "Direção e Gestão Hoteleira"
  ]
);

// =====================================================
// UNIVERSIDADE DO MINHO
// ESCOLA SUPERIOR DE ENFERMAGEM
// =====================================================

registarFaculdade(
  "uminho",
  "esenf",
  "Escola Superior de Enfermagem"
);

registarCursos(
  "uminho",
  "esenf",
  [
      "Enfermagem"
  ]
);

// =====================================================
// UNIVERSIDADE DO PORTO
// ESCOLA SUPERIOR DE ENFERMAGEM
// =====================================================

registarFaculdade(
  "up",
  "esenf",
  "Escola Superior de Enfermagem"
);

registarCursos(
  "up",
  "esenf",
  [
      "Enfermagem"
  ]
);

// =====================================================
// UNIVERSIDADE DE TRÁS-OS-MONTES E ALTO DOURO
// ESCOLA SUPERIOR DE SAÚDE
// =====================================================

registarFaculdade(
  "utad",
  "ess",
  "Escola Superior de Saúde"
);

registarCursos(
  "utad",
  "ess",
  [
      "Enfermagem"
  ]
);

// =====================================================
// ENSINO SUPERIOR PÚBLICO MILITAR E POLICIAL
// INSTITUTO SUPERIOR DE CIÊNCIAS POLICIAIS
// E SEGURANÇA INTERNA
// =====================================================

registarFaculdade(
  "iscpsi",
  "iscpsi",
  "Instituto Superior de Ciências Policiais e Segurança Interna"
);

registarCursos(
  "iscpsi",
  "iscpsi",
  [
      "Ciências Policiais"
  ]
);

// =====================================================
// INSTITUTO UNIVERSITÁRIO MILITAR
// ACADEMIA DA FORÇA AÉREA
// =====================================================

registarFaculdade(
  "ium",
  "afa",
  "Academia da Força Aérea"
);

registarCursos(
  "ium",
  "afa",
  [
      "Ciências Militares Aeronáuticas, especialidade de Administração Aeronáutica",
      "Ciências Militares Aeronáuticas, Especialidade de Engenharia",
      "Ciências Militares Aeronáuticas, especialidade de Piloto Aviador"
  ]
);

// =====================================================
// INSTITUTO UNIVERSITÁRIO MILITAR
// ACADEMIA MILITAR
// =====================================================

registarFaculdade(
  "ium",
  "am",
  "Academia Militar"
);

registarCursos(
  "ium",
  "am",
  [
      "Ciências Militares, no Ramo de Administração",
      "Ciências Militares, ramo Exército",
      "Ciências Militares, ramo Segurança",
      "Engenharia Eletrotécnica Militar",
      "Engenharia Mecânica Militar",
      "Engenharia Militar"
  ]
);

// =====================================================
// INSTITUTO UNIVERSITÁRIO MILITAR
// ESCOLA NAVAL
// =====================================================

registarFaculdade(
  "ium",
  "en",
  "Escola Naval"
);

registarCursos(
  "ium",
  "en",
  [
      "Ciências Militares Navais, ramo de Administração Naval",
      "Ciências Militares Navais, ramo de Engenharia Naval",
      "Ciências Militares Navais, ramo de Marinha e Fuzileiros",
      "Tecnologias Militares Navais"
  ]
);

// =====================================================
// ATLÂNTICA - INSTITUTO UNIVERSITÁRIO
// =====================================================

registarFaculdade(
  "atlantica",
  "atlantica",
  "Atlântica - Instituto Universitário"
);

registarCursos(
  "atlantica",
  "atlantica",
  [
      "Ciências da Nutrição",
      "Design UX/UI",
      "Engenharia Aeronáutica",
      "Engenharia Mecânica",
      "Gestão",
      "Gestão em Saúde",
      "Gestão da Segurança, Emergência e Proteção Civil",
      "Gestão de Sistemas e Computação",
      "Gestão do Transporte Aéreo"
  ]
);

// =====================================================
// CENTRO UNIVERSITÁRIO LUSÓFONA - LISBOA
// =====================================================

registarFaculdade(
  "lusofona",
  "cul",
  "Centro Universitário Lusófona - Lisboa"
);

registarCursos(
  "lusofona",
  "cul",
  [
      "Animação Digital",
      "Arquitetura",
      "Artes Visuais",
      "Bioeconomia Circular e Tecnologia",
      "Biologia",
      "Biomedicina Computacional e Inteligência Artificial",
      "Bioquímica",
      "Biotecnologia",
      "Ciência de Dados",
      "Ciência Política e Relações Internacionais",
      "Ciência e Tecnologias do Som",
      "Ciências da Comunicação",
      "Ciências da Educação - Educação Social",
      "Ciências Farmacêuticas",
      "Ciências da Nutrição",
      "Cinema e Artes dos Media",
      "Computação e Matemática Aplicada",
      "Comunicação Aplicada: Marketing, Publicidade e Relações Públicas",
      "Comunicação e Jornalismo",
      "Contabilidade, Fiscalidade e Auditoria",
      "Criminologia",
      "Cuidados de Beleza e Bem-Estar",
      "Design de Comunicação",
      "Design e Produção de Moda",
      "Direito",
      "Economia",
      "Educação Física e Desporto",
      "Engenharia do Ambiente",
      "Engenharia Biomédica",
      "Engenharia Civil",
      "Engenharia Eletrotécnica e de Computadores",
      "Engenharia e Gestão Industrial",
      "Engenharia Informática",
      "Engenharia Informática, Redes e Telecomunicações",
      "Estudos Europeus e Relações Internacionais",
      "Estudos Portugueses",
      "Estudos de Segurança Interna",
      "Formação de Atores - Cinema, Televisão, Teatro",
      "Fotografia",
      "Gestão Aeronáutica",
      "Gestão de Empresas",
      "Gestão de Recursos Humanos",
      "Informática de Gestão",
      "Medicina Veterinária",
      "Psicologia",
      "Serviço Social",
      "Sociologia",
      "Tecnologias e Gestão do Ambiente",
      "Turismo",
      "Videojogos"
  ]
);
// =====================================================
// CENTRO UNIVERSITÁRIO LUSÓFONA - PORTO
// =====================================================

registarFaculdade(
  "lusofona",
  "cul-porto",
  "Centro Universitário Lusófona - Porto"
);

registarCursos(
  "lusofona",
  "cul-porto",
  [
      "Arquitetura",
      "Artes Dramáticas - Formação de Atores",
      "Ciências da Comunicação",
      "Ciências da Educação",
      "Computação e Matemática Aplicada",
      "Comunicação Aplicada",
      "Comunicação Audiovisual e Multimédia",
      "Design de Comunicação",
      "Design e Produção de Moda",
      "Direito",
      "Economia",
      "Educação Física e Desporto",
      "Engenharia do Ambiente",
      "Engenharia Civil",
      "Engenharia Eletrotécnica de Sistemas de Energia",
      "Engenharia Informática",
      "Engenharia de Proteção Civil",
      "Estudos Europeus, Estudos Lusófonos e Relações Internacionais",
      "Gestão",
      "Gestão Comercial",
      "Gestão e Desenvolvimento de Recursos Humanos",
      "Proteção Civil",
      "Psicologia",
      "Serviço Social",
      "Videojogos e Aplicações Multimédia"
  ]
);

// =====================================================
// ESCOLA SUPERIOR ARTÍSTICA DO PORTO
// =====================================================

registarFaculdade(
  "esap",
  "esap",
  "Escola Superior Artística do Porto"
);

registarCursos(
  "esap",
  "esap",
  [
      "Arquitetura",
      "Artes Plásticas e Intermédia",
      "Artes Visuais - Fotografia",
      "Banda Desenhada e Narrativas Gráficas",
      "Cinema e Audiovisual",
      "Design de Comunicação",
      "Teatro"
  ]
);

// =====================================================
// ESCOLA UNIVERSITÁRIA VASCO DA GAMA
// =====================================================

registarFaculdade(
  "euvg",
  "euvg",
  "Escola Universitária Vasco da Gama"
);

registarCursos(
  "euvg",
  "euvg",
  [
      "Ciências Bioveterinárias",
      "Medicina Veterinária",
      "Saúde e Bem-Estar Marinho"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR DE ESTUDOS INTERCULTURAIS
// E TRANSDISCIPLINARES DE ALMADA
// =====================================================

registarFaculdade(
  "iset",
  "almada",
  "Instituto Superior de Estudos Interculturais e Transdisciplinares de Almada"
);

registarCursos(
  "iset",
  "almada",
  [
      "Educação Física e Desporto",
      "Gestão",
      "Psicologia"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR DE ESTUDOS INTERCULTURAIS
// E TRANSDISCIPLINARES DE VISEU
// =====================================================

registarFaculdade(
  "iset",
  "viseu",
  "Instituto Superior de Estudos Interculturais e Transdisciplinares de Viseu"
);

registarCursos(
  "iset",
  "viseu",
  [
      "Psicologia",
      "Relações Internacionais"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR DE GESTÃO
// =====================================================

registarFaculdade(
  "isg",
  "isg",
  "Instituto Superior de Gestão"
);

registarCursos(
  "isg",
  "isg",
  [
      "Gestão",
      "Gestão de Recursos Humanos",
      "Gestão do Turismo"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR MANUEL TEIXEIRA GOMES
// =====================================================

registarFaculdade(
  "ismtg",
  "ismtg",
  "Instituto Superior Manuel Teixeira Gomes"
);

registarCursos(
  "ismtg",
  "ismtg",
  [
      "Arquitetura",
      "Ciência de Dados",
      "Ciências do Desporto",
      "Computação e Matemática Aplicada",
      "Design de Comunicação",
      "Design e Produção de Moda e Têxtil",
      "Direito",
      "Engenharia Informática",
      "Gestão de Empresas",
      "Gestão de Recursos Humanos",
      "Gestão do Turismo",
      "Psicologia",
      "Tecnologias Criativas"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR MIGUEL TORGA
// =====================================================

registarFaculdade(
  "ismt",
  "ismt",
  "Instituto Superior Miguel Torga"
);

registarCursos(
  "ismt",
  "ismt",
  [
      "Comunicação Empresarial",
      "Design de Comunicação",
      "Empreendedorismo",
      "Gestão",
      "Gestão de Recursos Humanos",
      "Informática",
      "Jornalismo",
      "Multimédia",
      "Psicologia",
      "Serviço Social"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR DE SERVIÇO SOCIAL DO PORTO
// =====================================================

registarFaculdade(
  "isssp",
  "isssp",
  "Instituto Superior de Serviço Social do Porto"
);

registarCursos(
  "isssp",
  "isssp",
  [
      "Gerontologia",
      "Serviço Social"
  ]
);

// =====================================================
// INSTITUTO UNIVERSITÁRIO DE CIÊNCIAS DA SAÚDE - CESPU
// =====================================================

registarFaculdade(
  "cespu",
  "iucs",
  "Instituto Universitário de Ciências da Saúde - CESPU"
);

registarCursos(
  "cespu",
  "iucs",
  [
      "Ciências Biomédicas",
      "Ciências Farmacêuticas",
      "Ciências Forenses",
      "Ciências da Nutrição",
      "Medicina Dentária",
      "Medicina Veterinária",
      "Psicologia",
      "Saúde Pública"
  ]
);

// =====================================================
// INSTITUTO UNIVERSITÁRIO EGAS MONIZ
// =====================================================

registarFaculdade(
  "egas-moniz",
  "egas-moniz",
  "Instituto Universitário Egas Moniz"
);

registarCursos(
  "egas-moniz",
  "egas-moniz",
  [
      "Ciências Biomédicas",
      "Ciências Farmacêuticas",
      "Ciências Forenses e Criminais",
      "Ciências da Nutrição",
      "Gastronomia",
      "Medicina Dentária",
      "Medicina Veterinária",
      "Psicologia"
  ]
);

// =====================================================
// ISPA - INSTITUTO UNIVERSITÁRIO DE CIÊNCIAS
// PSICOLÓGICAS, SOCIAIS E DA VIDA
// =====================================================

registarFaculdade(
  "ispa",
  "ispa",
  "ISPA - Instituto Universitário de Ciências Psicológicas, Sociais e da Vida"
);

registarCursos(
  "ispa",
  "ispa",
  [
      "Biologia",
      "Ciências Cognitivas e do Comportamento",
      "Educação Básica",
      "Psicologia"
  ]
);

// =====================================================
// UNIVERSIDADE AUTÓNOMA DE LISBOA LUÍS DE CAMÕES
// =====================================================

registarFaculdade(
  "ual",
  "ual",
  "Universidade Autónoma de Lisboa Luís de Camões"
);

registarCursos(
  "ual",
  "ual",
  [
      "Arquitetura",
      "Ciências da Comunicação",
      "Direito",
      "Economia",
      "Engenharia Eletrónica e de Telecomunicações",
      "Engenharia Informática",
      "Estudos de Segurança",
      "Gestão",
      "Gestão do Desporto",
      "História",
      "Informática de Gestão",
      "Psicologia",
      "Relações Internacionais"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// ESCOLA DAS ARTES
// =====================================================

registarFaculdade(
  "ucp",
  "escola-artes",
  "Escola das Artes"
);

registarCursos(
  "ucp",
  "escola-artes",
  [
      "Arte - Conservação e Restauro",
      "Cinema",
      "Som e Imagem"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// ESCOLA SUPERIOR DE BIOTECNOLOGIA
// =====================================================

registarFaculdade(
  "ucp",
  "esb",
  "Escola Superior de Biotecnologia"
);

registarCursos(
  "ucp",
  "esb",
  [
      "Bioengenharia",
      "Ciências da Nutrição",
      "Ciências e Sociedade",
      "Microbiologia"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// FACULDADE DE CIÊNCIAS ECONÓMICAS E EMPRESARIAIS
// =====================================================

registarFaculdade(
  "ucp",
  "fcee",
  "Faculdade de Ciências Económicas e Empresariais"
);

registarCursos(
  "ucp",
  "fcee",
  [
      "Administração e Gestão de Empresas",
      "Administração e Gestão de Empresas - Licenciatura Internacional",
      "Economia",
      "Economia e Finanças - Licenciatura Internacional",
      "Gestão e Análise de Dados"
  ]
);
// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// FACULDADE DE CIÊNCIAS HUMANAS
// =====================================================

registarFaculdade(
  "ucp",
  "fch",
  "Faculdade de Ciências Humanas"
);

registarCursos(
  "ucp",
  "fch",
  [
      "Comunicação Social e Cultural",
      "Filosofia",
      "Filosofia, Política e Economia",
      "Línguas Estrangeiras Aplicadas",
      "Psicologia",
      "Serviço Social"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// FACULDADE DE DIREITO
// =====================================================

registarFaculdade(
  "ucp",
  "direito",
  "Faculdade de Direito"
);

registarCursos(
  "ucp",
  "direito",
  [
      "Direito"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// FACULDADE DE DIREITO (PORTO)
// =====================================================

registarFaculdade(
  "ucp",
  "direito-porto",
  "Faculdade de Direito (Porto)"
);

registarCursos(
  "ucp",
  "direito-porto",
  [
      "Direito"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// FACULDADE DE ECONOMIA E GESTÃO
// =====================================================

registarFaculdade(
  "ucp",
  "feg",
  "Faculdade de Economia e Gestão"
);

registarCursos(
  "ucp",
  "feg",
  [
      "Economia",
      "Gestão"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// FACULDADE DE EDUCAÇÃO E PSICOLOGIA
// =====================================================

registarFaculdade(
  "ucp",
  "fep",
  "Faculdade de Educação e Psicologia"
);

registarCursos(
  "ucp",
  "fep",
  [
      "Psicologia"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// FACULDADE DE FILOSOFIA E CIÊNCIAS SOCIAIS
// =====================================================

registarFaculdade(
  "ucp",
  "ffcs",
  "Faculdade de Filosofia e Ciências Sociais"
);

registarCursos(
  "ucp",
  "ffcs",
  [
      "Ciência de Dados Aplicada",
      "Ciência e Tecnologia de Dados",
      "Ciências da Comunicação",
      "Estudos Portugueses",
      "Filosofia",
      "Gestão Aplicada",
      "Psicologia",
      "Serviço Social",
      "Turismo"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// FACULDADE DE MEDICINA
// =====================================================

registarFaculdade(
  "ucp",
  "medicina",
  "Faculdade de Medicina"
);

registarCursos(
  "ucp",
  "medicina",
  [
      "Medicina"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// FACULDADE DE MEDICINA DENTÁRIA
// =====================================================

registarFaculdade(
  "ucp",
  "medicina-dentaria",
  "Faculdade de Medicina Dentária"
);

registarCursos(
  "ucp",
  "medicina-dentaria",
  [
      "Ciências Biomédicas",
      "Medicina Dentária"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// FACULDADE DE TEOLOGIA
// =====================================================

registarFaculdade(
  "ucp",
  "teologia",
  "Faculdade de Teologia"
);

registarCursos(
  "ucp",
  "teologia",
  [
      "Teologia"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// INSTITUTO DE CIÊNCIAS DA SAÚDE
// =====================================================

registarFaculdade(
  "ucp",
  "ics",
  "Instituto de Ciências da Saúde"
);

registarCursos(
  "ucp",
  "ics",
  [
      "Neurociência de Sistemas e Cognitiva"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// INSTITUTO DE ESTUDOS POLÍTICOS
// =====================================================

registarFaculdade(
  "ucp",
  "iep",
  "Instituto de Estudos Políticos"
);

registarCursos(
  "ucp",
  "iep",
  [
      "Ciência Política e Relações Internacionais",
      "Estudos de Segurança e Geopolítica"
  ]
);

// =====================================================
// UNIVERSIDADE EUROPEIA
// =====================================================

registarFaculdade(
  "universidade-europeia",
  "universidade-europeia",
  "Universidade Europeia"
);

registarCursos(
  "universidade-europeia",
  "universidade-europeia",
  [
      "Animação e Criação Visual",
      "Animação Global",
      "Ciência de Dados e Gestão",
      "Ciências da Comunicação",
      "Ciências da Nutrição",
      "Criminologia",
      "Desenvolvimento de Jogos",
      "Design",
      "Design Digital e Multimédia",
      "Design Global",
      "Design Gráfico",
      "Design de Interação",
      "Design de Produto",
      "Direito",
      "Economia",
      "Engenharia Informática",
      "Fotografia e Cultura Visual",
      "Gestão",
      "Gestão do Desporto",
      "Gestão Hoteleira",
      "Gestão de Recursos Humanos",
      "Informática de Gestão",
      "Marketing e Publicidade",
      "Psicologia",
      "Relações Internacionais",
      "Tecnologias Criativas",
      "Turismo"
  ]
);

// =====================================================
// UNIVERSIDADE FERNANDO PESSOA
// =====================================================

registarFaculdade(
  "universidade-fernando-pessoa",
  "universidade-fernando-pessoa",
  "Universidade Fernando Pessoa"
);

registarCursos(
  "universidade-fernando-pessoa",
  "universidade-fernando-pessoa",
  [
      "Arquitetura",
      "Ciência Política e Relações Internacionais",
      "Ciências da Comunicação",
      "Ciências Empresariais",
      "Ciências Farmacêuticas",
      "Ciências da Nutrição",
      "Criminologia",
      "Engenharia Informática",
      "Medicina",
      "Medicina Dentária",
      "Psicologia"
  ]
);
// =====================================================
// UNIVERSIDADE LUSÍADA
// CENTRO UNIVERSITÁRIO LUSÍADA - LISBOA
// =====================================================

registarFaculdade(
  "universidade-lusiada",
  "lisboa",
  "Centro Universitário Lusíada - Lisboa"
);

registarCursos(
  "universidade-lusiada",
  "lisboa",
  [
      "Arquitetura",
      "Artes e Comunicação Multimédia",
      "Design",
      "Direito",
      "Economia",
      "Engenharia Informática",
      "Gestão de Empresa",
      "Gestão das Organizações Desportivas",
      "Gestão de Recursos Humanos",
      "Gestão do Turismo",
      "Jazz e Música Moderna",
      "Marketing",
      "Psicologia",
      "Relações Internacionais",
      "Segurança e Justiça",
      "Serviço Social"
  ]
);

// =====================================================
// UNIVERSIDADE LUSÍADA
// CENTRO UNIVERSITÁRIO LUSÍADA - NORTE - PORTO
// =====================================================

registarFaculdade(
  "universidade-lusiada",
  "norte-porto",
  "Centro Universitário Lusíada - Norte - Porto"
);

registarCursos(
  "universidade-lusiada",
  "norte-porto",
  [
      "Arquitetura",
      "Criminologia",
      "Design",
      "Direito",
      "Gestão de Empresa",
      "Marketing",
      "Psicologia",
      "Relações Internacionais"
  ]
);

// =====================================================
// UNIVERSIDADE LUSÍADA
// CENTRO UNIVERSITÁRIO LUSÍADA - NORTE - VILA NOVA DE FAMALICÃO
// =====================================================

registarFaculdade(
  "universidade-lusiada",
  "norte-famalicao",
  "Centro Universitário Lusíada - Norte - Vila Nova de Famalicão"
);

registarCursos(
  "universidade-lusiada",
  "norte-famalicao",
  [
      "Arquitetura",
      "Contabilidade",
      "Design",
      "Engenharia Eletrónica e Informática",
      "Engenharia e Gestão Industrial",
      "Engenharia Mecânica",
      "Gestão"
  ]
);

// =====================================================
// UNIVERSIDADE DA MAIA
// =====================================================

registarFaculdade(
  "universidade-da-maia",
  "universidade-da-maia",
  "Universidade da Maia"
);

registarCursos(
  "universidade-da-maia",
  "universidade-da-maia",
  [
      "Arte Multimédia",
      "Ciências da Comunicação",
      "Ciências do Desporto",
      "Criminologia",
      "Energias Renováveis",
      "Gestão do Desporto",
      "Gestão de Empresas",
      "Gestão de Marketing",
      "Gestão de Recursos Humanos",
      "Informática",
      "Psicologia",
      "Relações Públicas e Gestão da Comunicação",
      "Tecnologias de Comunicação Multimédia",
      "Turismo"
  ]
);

// =====================================================
// UNIVERSIDADE PORTUCALENSE INFANTE D. HENRIQUE
// =====================================================

registarFaculdade(
  "universidade-portucalense",
  "universidade-portucalense",
  "Universidade Portucalense Infante D. Henrique"
);

registarCursos(
  "universidade-portucalense",
  "universidade-portucalense",
  [
      "Arquitetura e Urbanismo",
      "Direito",
      "Economia",
      "Educação Social",
      "Engenharia e Gestão Industrial",
      "Engenharia Informática",
      "Gestão",
      "Gestão e Administração em Saúde",
      "Gestão da Hospitalidade",
      "Marketing",
      "Multimédia e Artes",
      "Psicologia",
      "Relações Internacionais",
      "Sistemas de Informação para Gestão",
      "Solicitadoria",
      "Turismo"
  ]
);

// =====================================================
// ENSINO SUPERIOR PRIVADO POLITÉCNICO
// ACADEMIA NACIONAL SUPERIOR DE ORQUESTRA
// =====================================================

registarFaculdade(
  "academia-nacional-superior-de-orquestra",
  "academia-nacional-superior-de-orquestra",
  "Academia Nacional Superior de Orquestra"
);

registarCursos(
  "academia-nacional-superior-de-orquestra",
  "academia-nacional-superior-de-orquestra",
  [
      "Música"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE ACTIVIDADES IMOBILIÁRIAS
// =====================================================

registarFaculdade(
  "escola-superior-de-actividades-imobiliarias",
  "escola-superior-de-actividades-imobiliarias",
  "Escola Superior de Actividades Imobiliárias"
);

registarCursos(
  "escola-superior-de-actividades-imobiliarias",
  "escola-superior-de-actividades-imobiliarias",
  [
      "Engenharia Civil",
      "Gestão da Edificação e Obras",
      "Gestão Imobiliária"
  ]
);
// =====================================================
// ESCOLA SUPERIOR DE ARTES E DESIGN
// =====================================================

registarFaculdade(
  "escola-superior-artes-design",
  "escola-superior-artes-design",
  "Escola Superior de Artes e Design"
);

registarCursos(
  "escola-superior-artes-design",
  "escola-superior-artes-design",
  [
      "Artes Digitais e Multimédia",
      "Design"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE EDUCAÇÃO DE FAFE
// =====================================================

registarFaculdade(
  "escola-superior-educacao-fafe",
  "escola-superior-educacao-fafe",
  "Escola Superior de Educação de Fafe"
);

registarCursos(
  "escola-superior-educacao-fafe",
  "escola-superior-educacao-fafe",
  [
      "Desporto",
      "Educação Básica",
      "Educação Social"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE EDUCAÇÃO DE JOÃO DE DEUS
// =====================================================

registarFaculdade(
  "escola-superior-educacao-joao-de-deus",
  "escola-superior-educacao-joao-de-deus",
  "Escola Superior de Educação de João de Deus"
);

registarCursos(
  "escola-superior-educacao-joao-de-deus",
  "escola-superior-educacao-joao-de-deus",
  [
      "Educação Básica"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE EDUCAÇÃO DE PAULA FRASSINETTI
// =====================================================

registarFaculdade(
  "escola-superior-educacao-paula-frassinetti",
  "escola-superior-educacao-paula-frassinetti",
  "Escola Superior de Educação de Paula Frassinetti"
);

registarCursos(
  "escola-superior-educacao-paula-frassinetti",
  "escola-superior-educacao-paula-frassinetti",
  [
      "Educação Básica",
      "Educação Social"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE ENFERMAGEM SÃO FRANCISCO
// DAS MISERICÓRDIAS
// =====================================================

registarFaculdade(
  "escola-superior-enfermagem-sao-francisco",
  "escola-superior-enfermagem-sao-francisco",
  "Escola Superior de Enfermagem São Francisco das Misericórdias"
);

registarCursos(
  "escola-superior-enfermagem-sao-francisco",
  "escola-superior-enfermagem-sao-francisco",
  [
      "Enfermagem"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE ENFERMAGEM DE SÃO JOSÉ DE CLUNY
// =====================================================

registarFaculdade(
  "escola-superior-enfermagem-sao-jose-cluny",
  "escola-superior-enfermagem-sao-jose-cluny",
  "Escola Superior de Enfermagem de São José de Cluny"
);

registarCursos(
  "escola-superior-enfermagem-sao-jose-cluny",
  "escola-superior-enfermagem-sao-jose-cluny",
  [
      "Enfermagem"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE NEGÓCIOS ATLÂNTICO
// =====================================================

registarFaculdade(
  "escola-superior-negocios-atlantico",
  "escola-superior-negocios-atlantico",
  "Escola Superior de Negócios Atlântico"
);

registarCursos(
  "escola-superior-negocios-atlantico",
  "escola-superior-negocios-atlantico",
  [
      "Gestão e Negócios"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE SAÚDE DO ALCOITÃO
// =====================================================

registarFaculdade(
  "escola-superior-saude-alcoitao",
  "escola-superior-saude-alcoitao",
  "Escola Superior de Saúde do Alcoitão"
);

registarCursos(
  "escola-superior-saude-alcoitao",
  "escola-superior-saude-alcoitao",
  [
      "Fisioterapia",
      "Terapia da Fala",
      "Terapia Ocupacional"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE SAÚDE ATLÂNTICA
// =====================================================

registarFaculdade(
  "escola-superior-saude-atlantica",
  "escola-superior-saude-atlantica",
  "Escola Superior de Saúde Atlântica"
);

registarCursos(
  "escola-superior-saude-atlantica",
  "escola-superior-saude-atlantica",
  [
      "Enfermagem",
      "Farmácia",
      "Fisioterapia",
      "Osteopatia"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE SAÚDE CRUZ VERMELHA PORTUGUESA
// - ALTO TÂMEGA
// =====================================================

registarFaculdade(
  "escola-superior-saude-cruz-vermelha-alto-tamega",
  "escola-superior-saude-cruz-vermelha-alto-tamega",
  "Escola Superior de Saúde Cruz Vermelha Portuguesa - Alto Tâmega"
);

registarCursos(
  "escola-superior-saude-cruz-vermelha-alto-tamega",
  "escola-superior-saude-cruz-vermelha-alto-tamega",
  [
      "Enfermagem",
      "Imagem Médica e Radioterapia"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE SAÚDE DA CRUZ VERMELHA PORTUGUESA
// - LISBOA
// =====================================================

registarFaculdade(
  "escola-superior-saude-cruz-vermelha-lisboa",
  "escola-superior-saude-cruz-vermelha-lisboa",
  "Escola Superior de Saúde da Cruz Vermelha Portuguesa - Lisboa"
);

registarCursos(
  "escola-superior-saude-cruz-vermelha-lisboa",
  "escola-superior-saude-cruz-vermelha-lisboa",
  [
      "Cardiopneumologia",
      "Ciências Biomédicas Laboratoriais",
      "Enfermagem",
      "Fisioterapia",
      "Imagem Médica e Radioterapia",
      "Osteopatia",
      "Podologia"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE SAÚDE EGAS MONIZ
// =====================================================

registarFaculdade(
  "escola-superior-saude-egas-moniz",
  "escola-superior-saude-egas-moniz",
  "Escola Superior de Saúde Egas Moniz"
);

registarCursos(
  "escola-superior-saude-egas-moniz",
  "escola-superior-saude-egas-moniz",
  [
      "Ciências Biomédicas Laboratoriais",
      "Enfermagem",
      "Enfermagem Veterinária",
      "Fisioterapia",
      "Prótese Dentária"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE SAÚDE DA FUNDAÇÃO FERNANDO PESSOA
// =====================================================

registarFaculdade(
  "escola-superior-saude-fundacao-fernando-pessoa",
  "escola-superior-saude-fundacao-fernando-pessoa",
  "Escola Superior de Saúde da Fundação «Fernando Pessoa»"
);

registarCursos(
  "escola-superior-saude-fundacao-fernando-pessoa",
  "escola-superior-saude-fundacao-fernando-pessoa",
  [
      "Ciências Biomédicas Laboratoriais",
      "Enfermagem",
      "Fisioterapia",
      "Terapia da Fala"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE SAÚDE NORTE DA CRUZ VERMELHA
// PORTUGUESA
// =====================================================

registarFaculdade(
  "escola-superior-saude-norte-cruz-vermelha",
  "escola-superior-saude-norte-cruz-vermelha",
  "Escola Superior de Saúde Norte da Cruz Vermelha Portuguesa"
);

registarCursos(
  "escola-superior-saude-norte-cruz-vermelha",
  "escola-superior-saude-norte-cruz-vermelha",
  [
      "Enfermagem",
      "Fisioterapia",
      "Osteopatia"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE SAÚDE DE SANTA MARIA
// =====================================================

registarFaculdade(
  "escola-superior-saude-santa-maria",
  "escola-superior-saude-santa-maria",
  "Escola Superior de Saúde de Santa Maria"
);

registarCursos(
  "escola-superior-saude-santa-maria",
  "escola-superior-saude-santa-maria",
  [
      "Enfermagem",
      "Fisioterapia",
      "Gestão de Dados e Tecnologias em Saúde",
      "Terapia Ocupacional"
  ]
);

// =====================================================
// ESCOLA SUPERIOR DE TECNOLOGIAS DE FAFE
// =====================================================

registarFaculdade(
  "escola-superior-tecnologias-fafe",
  "escola-superior-tecnologias-fafe",
  "Escola Superior de Tecnologias de Fafe"
);

registarCursos(
  "escola-superior-tecnologias-fafe",
  "escola-superior-tecnologias-fafe",
  [
      "Gestão",
      "Gestão Hoteleira",
      "Tecnologias e Gestão de Sistemas Informação",
      "Turismo"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO JEAN PIAGET DO NORTE
// ESCOLA SUPERIOR DE DESPORTO E EDUCAÇÃO
// JEAN PIAGET DE VILA NOVA DE GAIA
// =====================================================

registarFaculdade(
  "jean-piaget-norte-desporto-educacao-gaia",
  "jean-piaget-norte-desporto-educacao-gaia",
  "Instituto Politécnico Jean Piaget do Norte - Escola Superior de Desporto e Educação Jean Piaget de Vila Nova de Gaia"
);

registarCursos(
  "jean-piaget-norte-desporto-educacao-gaia",
  "jean-piaget-norte-desporto-educacao-gaia",
  [
      "Desporto",
      "Educação Básica",
      "Educação Social"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO JEAN PIAGET DO NORTE
// ESCOLA SUPERIOR DE SAÚDE JEAN PIAGET DE VILA NOVA DE GAIA
// =====================================================

registarFaculdade(
  "jean-piaget-norte-saude-gaia",
  "jean-piaget-norte-saude-gaia",
  "Instituto Politécnico Jean Piaget do Norte - Escola Superior de Saúde Jean Piaget de Vila Nova de Gaia"
);

registarCursos(
  "jean-piaget-norte-saude-gaia",
  "jean-piaget-norte-saude-gaia",
  [
      "Dietética e Nutrição",
      "Enfermagem",
      "Fisioterapia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO JEAN PIAGET DO NORTE
// ESCOLA SUPERIOR DE SAÚDE JEAN PIAGET DE VISEU
// =====================================================

registarFaculdade(
  "jean-piaget-norte-saude-viseu",
  "jean-piaget-norte-saude-viseu",
  "Instituto Politécnico Jean Piaget do Norte - Escola Superior de Saúde Jean Piaget de Viseu"
);

registarCursos(
  "jean-piaget-norte-saude-viseu",
  "jean-piaget-norte-saude-viseu",
  [
      "Dietética e Nutrição",
      "Enfermagem",
      "Fisioterapia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO JEAN PIAGET DO NORTE
// ESCOLA SUPERIOR DE TECNOLOGIA E GESTÃO JEAN PIAGET DE VISEU
// =====================================================

registarFaculdade(
  "jean-piaget-norte-tecnologia-gestao-viseu",
  "jean-piaget-norte-tecnologia-gestao-viseu",
  "Instituto Politécnico Jean Piaget do Norte - Escola Superior de Tecnologia e Gestão Jean Piaget de Viseu"
);

registarCursos(
  "jean-piaget-norte-tecnologia-gestao-viseu",
  "jean-piaget-norte-tecnologia-gestao-viseu",
  [
      "Engenharia Informática"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO JEAN PIAGET DO SUL
// ESCOLA SUPERIOR DE EDUCAÇÃO JEAN PIAGET DE ALMADA
// =====================================================

registarFaculdade(
  "jean-piaget-sul-educacao-almada",
  "jean-piaget-sul-educacao-almada",
  "Instituto Politécnico Jean Piaget do Sul - Escola Superior de Educação Jean Piaget de Almada"
);

registarCursos(
  "jean-piaget-sul-educacao-almada",
  "jean-piaget-sul-educacao-almada",
  [
      "Educação Básica",
      "Educação Social"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO JEAN PIAGET DO SUL
// ESCOLA SUPERIOR DE SAÚDE JEAN PIAGET DO ALGARVE
// =====================================================

registarFaculdade(
  "jean-piaget-sul-saude-algarve",
  "jean-piaget-sul-saude-algarve",
  "Instituto Politécnico Jean Piaget do Sul - Escola Superior de Saúde Jean Piaget do Algarve"
);

registarCursos(
  "jean-piaget-sul-saude-algarve",
  "jean-piaget-sul-saude-algarve",
  [
      "Enfermagem",
      "Fisioterapia",
      "Osteopatia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO JEAN PIAGET DO SUL
// ESCOLA SUPERIOR DE SAÚDE JEAN PIAGET DE ALMADA
// =====================================================

registarFaculdade(
  "jean-piaget-sul-saude-almada",
  "jean-piaget-sul-saude-almada",
  "Instituto Politécnico Jean Piaget do Sul - Escola Superior de Saúde Jean Piaget de Almada"
);

registarCursos(
  "jean-piaget-sul-saude-almada",
  "jean-piaget-sul-saude-almada",
  [
      "Dietética e Nutrição",
      "Fisioterapia",
      "Medicina Tradicional Chinesa"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO JEAN PIAGET DO SUL
// ESCOLA SUPERIOR DE TECNOLOGIA E GESTÃO JEAN PIAGET
// =====================================================

registarFaculdade(
  "jean-piaget-sul-tecnologia-gestao",
  "jean-piaget-sul-tecnologia-gestao",
  "Instituto Politécnico Jean Piaget do Sul - Escola Superior de Tecnologia e Gestão Jean Piaget"
);

registarCursos(
  "jean-piaget-sul-tecnologia-gestao",
  "jean-piaget-sul-tecnologia-gestao",
  [
      "Engenharia Informática"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DA LUSOFONIA
// ESCOLA SUPERIOR DE CIÊNCIAS DA ADMINISTRAÇÃO
// =====================================================

registarFaculdade(
  "instituto-politecnico-lusofonia-administracao",
  "instituto-politecnico-lusofonia-administracao",
  "Instituto Politécnico da Lusofonia - Escola Superior de Ciências da Administração"
);

registarCursos(
  "instituto-politecnico-lusofonia-administracao",
  "instituto-politecnico-lusofonia-administracao",
  [
      "Contabilidade e Finanças",
      "Gestão Comercial",
      "Gestão Empresarial",
      "Gestão de Empresas do Turismo"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DA LUSOFONIA
// ESCOLA SUPERIOR DE COMUNICAÇÃO, INOVAÇÃO E ARTES
// =====================================================

registarFaculdade(
  "instituto-politecnico-lusofonia-comunicacao",
  "instituto-politecnico-lusofonia-comunicacao",
  "Instituto Politécnico da Lusofonia - Escola Superior de Comunicação, Inovação e Artes"
);

registarCursos(
  "instituto-politecnico-lusofonia-comunicacao",
  "instituto-politecnico-lusofonia-comunicacao",
  [
      "Arte Multimédia",
      "Ilustração e Desenho"
  ]
);
// =====================================================
// INSTITUTO POLITÉCNICO DA LUSOFONIA
// ESCOLA SUPERIOR DE EDUCAÇÃO DA LUSOFONIA
// =====================================================

registarFaculdade(
  "instituto-politecnico-lusofonia-educacao",
  "instituto-politecnico-lusofonia-educacao",
  "Instituto Politécnico da Lusofonia - Escola Superior de Educação da Lusofonia"
);

registarCursos(
  "instituto-politecnico-lusofonia-educacao",
  "instituto-politecnico-lusofonia-educacao",
  [
      "Educação Básica"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DA LUSOFONIA
// ESCOLA SUPERIOR DE ENGENHARIA E TECNOLOGIAS
// =====================================================

registarFaculdade(
  "instituto-politecnico-lusofonia-engenharia-tecnologias",
  "instituto-politecnico-lusofonia-engenharia-tecnologias",
  "Instituto Politécnico da Lusofonia - Escola Superior de Engenharia e Tecnologias"
);

registarCursos(
  "instituto-politecnico-lusofonia-engenharia-tecnologias",
  "instituto-politecnico-lusofonia-engenharia-tecnologias",
  [
      "Automação e Sistemas Informáticos",
      "Engenharia Informática e Aplicações"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DA LUSOFONIA
// ESCOLA SUPERIOR DE SAÚDE, PROTEÇÃO E BEM-ESTAR ANIMAL
// =====================================================

registarFaculdade(
  "instituto-politecnico-lusofonia-saude-animal",
  "instituto-politecnico-lusofonia-saude-animal",
  "Instituto Politécnico da Lusofonia - Escola Superior de Saúde, Proteção e Bem-Estar Animal"
);

registarCursos(
  "instituto-politecnico-lusofonia-saude-animal",
  "instituto-politecnico-lusofonia-saude-animal",
  [
      "Enfermagem Veterinária"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DA LUSOFONIA
// ESCOLA SUPERIOR DE SAÚDE RIBEIRO SANCHES
// =====================================================

registarFaculdade(
  "instituto-politecnico-lusofonia-ribeiro-sanches",
  "instituto-politecnico-lusofonia-ribeiro-sanches",
  "Instituto Politécnico da Lusofonia - Escola Superior de Saúde Ribeiro Sanches"
);

registarCursos(
  "instituto-politecnico-lusofonia-ribeiro-sanches",
  "instituto-politecnico-lusofonia-ribeiro-sanches",
  [
      "Ciências Biomédicas Laboratoriais",
      "Enfermagem",
      "Farmácia",
      "Imagem Médica e Radioterapia",
      "Osteopatia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DA MAIA
// ESCOLA SUPERIOR DE CIÊNCIAS SOCIAIS, EDUCAÇÃO E DESPORTO
// =====================================================

registarFaculdade(
  "instituto-politecnico-maia-ciencias-sociais",
  "instituto-politecnico-maia-ciencias-sociais",
  "Instituto Politécnico da Maia - Escola Superior de Ciências Sociais, Educação e Desporto"
);

registarCursos(
  "instituto-politecnico-maia-ciencias-sociais",
  "instituto-politecnico-maia-ciencias-sociais",
  [
      "Desporto, Condição Física e Bem-Estar",
      "Educação Social",
      "Solicitadoria",
      "Treino Desportivo"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DA MAIA
// ESCOLA SUPERIOR DE TECNOLOGIA E GESTÃO
// =====================================================

registarFaculdade(
  "instituto-politecnico-maia-tecnologia-gestao",
  "instituto-politecnico-maia-tecnologia-gestao",
  "Instituto Politécnico da Maia - Escola Superior de Tecnologia e Gestão"
);

registarCursos(
  "instituto-politecnico-maia-tecnologia-gestao",
  "instituto-politecnico-maia-tecnologia-gestao",
  [
      "Contabilidade",
      "Desenvolvimento de Jogos Digitais",
      "Negócios e Comércio Internacional",
      "Tecnologias de Informação, Web e Multimédia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE SAÚDE DO NORTE - CESPU
// ESCOLA SUPERIOR DE ENFERMAGEM DO TÂMEGA E SOUSA
// =====================================================

registarFaculdade(
  "cespu-enfermagem-tamega-sousa",
  "cespu-enfermagem-tamega-sousa",
  "Instituto Politécnico de Saúde do Norte - CESPU - Escola Superior de Enfermagem do Tâmega e Sousa"
);

registarCursos(
  "cespu-enfermagem-tamega-sousa",
  "cespu-enfermagem-tamega-sousa",
  [
      "Enfermagem"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE SAÚDE DO NORTE - CESPU
// ESCOLA SUPERIOR DE SAÚDE DO VALE DO AVE
// =====================================================

registarFaculdade(
  "cespu-saude-vale-ave",
  "cespu-saude-vale-ave",
  "Instituto Politécnico de Saúde do Norte - CESPU - Escola Superior de Saúde do Vale do Ave"
);

registarCursos(
  "cespu-saude-vale-ave",
  "cespu-saude-vale-ave",
  [
      "Enfermagem",
      "Farmácia",
      "Fisiologia Clínica",
      "Fisioterapia",
      "Imagem Médica e Radioterapia",
      "Osteopatia",
      "Podologia"
  ]
);

// =====================================================
// INSTITUTO POLITÉCNICO DE SAÚDE DO NORTE - CESPU
// ESCOLA SUPERIOR DE TECNOLOGIAS DA SAÚDE
// DO TÂMEGA E SOUSA
// =====================================================

registarFaculdade(
  "cespu-tecnologias-saude-tamega-sousa",
  "cespu-tecnologias-saude-tamega-sousa",
  "Instituto Politécnico de Saúde do Norte - CESPU - Escola Superior de Tecnologias da Saúde do Tâmega e Sousa"
);

registarCursos(
  "cespu-tecnologias-saude-tamega-sousa",
  "cespu-tecnologias-saude-tamega-sousa",
  [
      "Enfermagem Veterinária",
      "Fisioterapia",
      "Prótese Dentária"
  ]
);

// =====================================================
// INSTITUTO PORTUGUÊS DE ADMINISTRAÇÃO DE MARKETING
// DE LISBOA
// =====================================================

registarFaculdade(
  "ipam-lisboa",
  "ipam-lisboa",
  "Instituto Português de Administração de Marketing de Lisboa"
);

registarCursos(
  "ipam-lisboa",
  "ipam-lisboa",
  [
      "Gestão de Marketing",
      "Gestão de Negócios",
      "Marketing",
      "Negócios Globais"
  ]
);

// =====================================================
// INSTITUTO PORTUGUÊS DE ADMINISTRAÇÃO DE MARKETING
// DO PORTO
// =====================================================

registarFaculdade(
  "ipam-porto",
  "ipam-porto",
  "Instituto Português de Administração de Marketing do Porto"
);

registarCursos(
  "ipam-porto",
  "ipam-porto",
  [
      "Gestão de Marketing",
      "Gestão de Negócios",
      "Marketing",
      "Negócios Globais"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR DE ADMINISTRAÇÃO E GESTÃO
// =====================================================

registarFaculdade(
  "instituto-superior-administracao-gestao",
  "instituto-superior-administracao-gestao",
  "Instituto Superior de Administração e Gestão"
);

registarCursos(
  "instituto-superior-administracao-gestao",
  "instituto-superior-administracao-gestao",
  [
      "Gestão",
      "Gestão de Empresas",
      "Relações Empresariais",
      "Turismo"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR DE CIÊNCIAS EDUCATIVAS DO DOURO
// =====================================================

registarFaculdade(
  "instituto-superior-ciencias-educativas-douro",
  "instituto-superior-ciencias-educativas-douro",
  "Instituto Superior de Ciências Educativas do Douro"
);

registarCursos(
  "instituto-superior-ciencias-educativas-douro",
  "instituto-superior-ciencias-educativas-douro",
  [
      "Atividade Física e Estilos de Vida Saudáveis",
      "Design de Produto",
      "Desporto",
      "Educação Básica",
      "Educação Social",
      "Tecnologias Multimédia"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR DE CIÊNCIAS EMPRESARIAIS
// E DO TURISMO
// =====================================================

registarFaculdade(
  "instituto-superior-ciencias-empresariais-turismo",
  "instituto-superior-ciencias-empresariais-turismo",
  "Instituto Superior de Ciências Empresariais e do Turismo"
);

registarCursos(
  "instituto-superior-ciencias-empresariais-turismo",
  "instituto-superior-ciencias-empresariais-turismo",
  [
      "Comércio Internacional",
      "Gestão de Empresas",
      "Marketing e Publicidade",
      "Solicitadoria",
      "Turismo"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR DE CIÊNCIAS DA INFORMAÇÃO
// E DA ADMINISTRAÇÃO
// =====================================================

registarFaculdade(
  "instituto-superior-ciencias-informacao-administracao",
  "instituto-superior-ciencias-informacao-administracao",
  "Instituto Superior de Ciências da Informação e da Administração"
);

registarCursos(
  "instituto-superior-ciencias-informacao-administracao",
  "instituto-superior-ciencias-informacao-administracao",
  [
      "Educação Social",
      "Gestão Industrial e Logística",
      "Proteção Civil",
      "Segurança e Saúde no Trabalho"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR D. DINIS
// =====================================================

registarFaculdade(
  "instituto-superior-d-dinis",
  "instituto-superior-d-dinis",
  "Instituto Superior D. Dinis"
);

registarCursos(
  "instituto-superior-d-dinis",
  "instituto-superior-d-dinis",
  [
      "Engenharia e Design Industrial",
      "Engenharia e Gestão da Produção Aeronáutica",
      "Engenharia e Gestão da Produção de Moldes",
      "Engenharia e Gestão da Tecnologia Industrial",
      "Gestão Comercial",
      "Gestão Industrial e Inovação Tecnológica",
      "Gestão de Recursos Humanos"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR DE ENTRE DOURO E VOUGA
// =====================================================

registarFaculdade(
  "instituto-superior-entre-douro-vouga",
  "instituto-superior-entre-douro-vouga",
  "Instituto Superior de Entre Douro e Vouga"
);

registarCursos(
  "instituto-superior-entre-douro-vouga",
  "instituto-superior-entre-douro-vouga",
  [
      "Contabilidade",
      "Engenharia de Produção Industrial",
      "Gestão de Empresas",
      "Marketing, Publicidade e Relações Públicas",
      "Solicitadoria"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR POLITÉCNICO GAYA
// ESCOLA SUPERIOR DE CIÊNCIA E TECNOLOGIA
// =====================================================

registarFaculdade(
  "ispgaya-ciencia-tecnologia",
  "ispgaya-ciencia-tecnologia",
  "Instituto Superior Politécnico Gaya - Escola Superior de Ciência e Tecnologia"
);

registarCursos(
  "ispgaya-ciencia-tecnologia",
  "ispgaya-ciencia-tecnologia",
  [
      "Engenharia Eletrónica e de Automação",
      "Engenharia Informática",
      "Engenharia Mecânica"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR POLITÉCNICO GAYA
// ESCOLA SUPERIOR DE CIÊNCIAS EMPRESARIAIS
// =====================================================

registarFaculdade(
  "ispgaya-ciencias-empresariais",
  "ispgaya-ciencias-empresariais",
  "Instituto Superior Politécnico Gaya - Escola Superior de Ciências Empresariais"
);

registarCursos(
  "ispgaya-ciencias-empresariais",
  "ispgaya-ciencias-empresariais",
  [
      "Contabilidade",
      "Gestão"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR DE TECNOLOGIAS AVANÇADAS DE LISBOA
// =====================================================

registarFaculdade(
  "instituto-superior-tecnologias-avancadas-lisboa",
  "instituto-superior-tecnologias-avancadas-lisboa",
  "Instituto Superior de Tecnologias Avançadas de Lisboa"
);

registarCursos(
  "instituto-superior-tecnologias-avancadas-lisboa",
  "instituto-superior-tecnologias-avancadas-lisboa",
  [
      "Engenharia Informática",
      "Engenharia Multimédia",
      "Engenharia de Redes e Segurança Informática"
  ]
);

// =====================================================
// INSTITUTO SUPERIOR DE TECNOLOGIAS AVANÇADAS DO PORTO
// =====================================================

registarFaculdade(
  "instituto-superior-tecnologias-avancadas-porto",
  "instituto-superior-tecnologias-avancadas-porto",
  "Instituto Superior de Tecnologias Avançadas do Porto"
);

registarCursos(
  "instituto-superior-tecnologias-avancadas-porto",
  "instituto-superior-tecnologias-avancadas-porto",
  [
      "Engenharia Informática",
      "Engenharia Multimédia"
  ]
);

// =====================================================
// ISAVE - INSTITUTO SUPERIOR DE SAÚDE
// =====================================================

registarFaculdade(
  "isave-instituto-superior-saude",
  "isave-instituto-superior-saude",
  "ISAVE - Instituto Superior de Saúde"
);

registarCursos(
  "isave-instituto-superior-saude",
  "isave-instituto-superior-saude",
  [
      "Dietética e Nutrição",
      "Enfermagem",
      "Fisioterapia"
  ]
);

// =====================================================
// ISCE - INSTITUTO SUPERIOR DE LISBOA
// E VALE DO TEJO
// =====================================================

registarFaculdade(
  "isce-lisboa-vale-tejo",
  "isce-lisboa-vale-tejo",
  "ISCE - Instituto Superior de Lisboa e Vale do Tejo"
);

registarCursos(
  "isce-lisboa-vale-tejo",
  "isce-lisboa-vale-tejo",
  [
      "Animação Sociocultural",
      "Desporto",
      "Educação Básica",
      "Educação Social",
      "Gestão Turística"
  ]
);

// =====================================================
// ISEC LISBOA - INSTITUTO SUPERIOR DE EDUCAÇÃO E CIÊNCIAS
// =====================================================

registarFaculdade(
  "isec-lisboa",
  "isec-lisboa",
  "ISEC Lisboa - Instituto Superior de Educação e Ciências"
);

registarCursos(
  "isec-lisboa",
  "isec-lisboa",
  [
      "Ciência e Visualização de Dados",
      "Ciências Aeronáuticas e do Espaço",
      "Comunicação Global",
      "Design e Produção Gráfica",
      "Educação Básica",
      "Energias Renováveis e Ambiente",
      "Engenharia de Proteção Civil",
      "Gestão Aeronáutica",
      "Gestão Autárquica",
      "Gestão de Dados e Tecnologias em Saúde",
      "Gestão Hoteleira",
      "Gestão da Proteção Civil e Segurança Comunitária",
      "Ótica e Optometria"
  ]
);

// =====================================================
// ISLA - INSTITUTO POLITÉCNICO DE GESTÃO E TECNOLOGIA
// ESCOLA SUPERIOR DE GESTÃO
// =====================================================

registarFaculdade(
  "isla-instituto-politecnico-gestao-tecnologia",
  "isla-instituto-politecnico-gestao-tecnologia",
  "ISLA - Instituto Politécnico de Gestão e Tecnologia - Escola Superior de Gestão"
);

registarCursos(
  "isla-instituto-politecnico-gestao-tecnologia",
  "isla-instituto-politecnico-gestao-tecnologia",
  [
      "Gestão de Empresas",
      "Gestão de Recursos Humanos",
      "Gestão do Turismo"
  ]
);
// =====================================================
// ISLA - INSTITUTO POLITÉCNICO DE GESTÃO E TECNOLOGIA
// ESCOLA SUPERIOR DE TECNOLOGIA
// =====================================================

registarFaculdade(
  "isla-escola-superior-tecnologia",
  "isla-escola-superior-tecnologia",
  "ISLA - Instituto Politécnico de Gestão e Tecnologia - Escola Superior de Tecnologia"
);

registarCursos(
  "isla-escola-superior-tecnologia",
  "isla-escola-superior-tecnologia",
  [
      "Comunicação Digital",
      "Engenharia Informática",
      "Engenharia da Segurança do Trabalho",
      "Informática para Comércio Eletrónico",
      "Inteligência Artificial",
      "Multimédia"
  ]
);

// =====================================================
// ISLA SANTARÉM
// ESCOLA SUPERIOR DE ENGENHARIA E TECNOLOGIA
// =====================================================

registarFaculdade(
  "isla-santarem-engenharia-tecnologia",
  "isla-santarem-engenharia-tecnologia",
  "ISLA Santarém - Instituto Politécnico - Escola Superior de Engenharia e Tecnologia"
);

registarCursos(
  "isla-santarem-engenharia-tecnologia",
  "isla-santarem-engenharia-tecnologia",
  [
      "Engenharia Informática",
      "Engenharia da Segurança do Trabalho",
      "Gestão de Dados e Tecnologias em Saúde",
      "Informática de Gestão"
  ]
);

// =====================================================
// ISLA SANTARÉM
// ESCOLA SUPERIOR DE GESTÃO
// =====================================================

registarFaculdade(
  "isla-santarem-gestao",
  "isla-santarem-gestao",
  "ISLA Santarém - Instituto Politécnico - Escola Superior de Gestão"
);

registarCursos(
  "isla-santarem-gestao",
  "isla-santarem-gestao",
  [
      "Gestão Comercial",
      "Gestão de Processos e Operações Empresariais",
      "Gestão de Recursos Humanos",
      "Gestão Turística",
      "Marketing"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// CENTRO REGIONAL DE VISEU
// =====================================================

registarFaculdade(
  "universidade-catolica-centro-regional-viseu",
  "universidade-catolica-centro-regional-viseu",
  "Universidade Católica Portuguesa - Centro Regional de Viseu"
);

registarCursos(
  "universidade-catolica-centro-regional-viseu",
  "universidade-catolica-centro-regional-viseu",
  [
      "Gestão"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// ESCOLA DE ENFERMAGEM (LISBOA)
// =====================================================

registarFaculdade(
  "universidade-catolica-escola-enfermagem-lisboa",
  "universidade-catolica-escola-enfermagem-lisboa",
  "Universidade Católica Portuguesa - Escola de Enfermagem (Lisboa)"
);

registarCursos(
  "universidade-catolica-escola-enfermagem-lisboa",
  "universidade-catolica-escola-enfermagem-lisboa",
  [
      "Enfermagem"
  ]
);

// =====================================================
// UNIVERSIDADE CATÓLICA PORTUGUESA
// ESCOLA DE ENFERMAGEM (PORTO)
// =====================================================

registarFaculdade(
  "universidade-catolica-escola-enfermagem-porto",
  "universidade-catolica-escola-enfermagem-porto",
  "Universidade Católica Portuguesa - Escola de Enfermagem (Porto)"
);

registarCursos(
  "universidade-catolica-escola-enfermagem-porto",
  "universidade-catolica-escola-enfermagem-porto",
  [
      "Enfermagem"
  ]
);
