function getTextCases(bloco) {
    let retorno = {};
    let subTitlePlay = "Baseada em uma iniciativa corporativa global que visa inspirar funcionários, parceiros e clientes da Toyota, o desafio proposto pelo cliente foi entregar uma campanha interna que envolvesse os stakeholders da empresa.";
    subTitlePlay += "Assim como no patrocínio das Paralimpíadas, no qual a Toyota contou a história de diversos atletas, no Brasil, a missão era também contar histórias reais de superação de seus próprios colaboradores.";
    let cases = [{
            "bloco": "com",
            "title": "Geradores Cummins",
            "subtitle": "Campanha de mídia online para aumentar a presença dos Geradores Cummins e visibilidade da marca Cummins no mercado, além de captar novos leads através de conteúdos sobre os diferenciais da área de negócio.",
            "frases": [
                { "texto": " - Deﬁnição de mensagem e conceito baseado na presença constante da cummins na sociedade, agindo para que o mundo não pare mesmo em situação pandêmica, trazendo seus produtos para auxiliar no combate à covid-19." },
                { "texto": " - Deﬁnição de key visual e aplicações para os  diferentes públicos da campanha: interno, varejo,  indústria e saúde." },
                { "texto": " - Desenvolvimento de conteúdo para cada  público e canais. Foram explorados diversos tipos de formatos: estáticos, animações e gifs." },
                { "texto": " - Desenvolvimento de plano de mídia e social media. Verba mensal aplicada em Google Ads e Facebook  Ads, todas as redes com objetivo de conversão,  direcionando à landing page da área de negócio,  captando leads para repassar ao comercial três vezes por semana." },
            ]
        },
        {
            "bloco": "live",
            "title": "Plataforma de eventos e tour virtual ",
            "subtitle": "A convenção nacional de representantes de vendas da indústria farmacêutica multinacional GSK reuniu cerca de 800 pessoas em 4 dias de aprendizado, integração e motivação. Tudo isso em 1 plenária principal, 3 plenárias secundárias e 14 salas simultâneas, além de ações e ativações nas dependências do hotel Bourbon Atibaia.",
            "frases": [
                { "texto": " - Criação de conceito, identidade visual e estratégia de ações e ativações para o evento.  " },
                { "texto": " - Planejamento do evento e execução de todas as suas fases, de capa a capa. " },
                { "texto": " - Seleção e gestão de fornecedores.  " },
                { "texto": " - Criação de atividades integrativas, como o Álbum de Figurinhas que propunha o network entre os colaboradores." },
                { "texto": " - lenária principal em formato arena para 800 pessoas, com telões suspensos e palco personalizado." },
                { "texto": " - Área de integração com conteúdo personalizado reproduzindo a área de convivência da sede do cliente." },
                { "texto": " - Festas temáticas e show de encerramento." },
            ]
        },
        {
            "bloco": "play",
            "title": "Start Your Impossible - Toyota",
            "subtitle": subTitlePlay,
            "frases": [
                { "texto": " - Desenvolvimento de campanha storytelling para coletar histórias reais de colaboradores, relacionando-os com sua trajetória na empresa." },
                { "texto": " - Apoio na seleção de histórias, bate-papo e entrevista com colaboradores e suas histórias selecionadas." },
                { "texto": " - Roteirização, captação e imagens e edições de vídeos individuais por colaborador." },
                { "texto": " - Desenvolvimento de materiais de comunicação de campanha." },
                { "texto": " - Evento final para premiação das histórias embaixadoras Toyota." },
            ]
        },
        {
            "bloco": "camp",
            "title": "Novo Sistema de Vendas - Via Varejo",
            "subtitle": "O sistema de vendas nas lojas físicas de Casas Bahia, Ponto Frio e Extra mudou para facilitar o dia a dia dos colaboradores. O antigo PCOM se transfornou em um software moderno, com cara de e-commerce e, para isso, o cliente nos desafiou a criar um plano de treinamento a nível nacional para um público grande e diverso.",
            "frases": [
                { "texto": " - Pesquisa de campo e diagnóstico." },
                { "texto": " - Desenvolvimento de conceito criativo." },
                { "texto": " - Definições de metodologia de ensino." },
                { "texto": " - Desenvolvimento de treinamentos personalizados e gamificados para cada público." },
                { "texto": " - Comunicações da campanha com peças estáticas e animadas." },
                { "texto": " - Gestão de equipe de promotores para aplicação dos treinamentos a nível nacional." },
            ]
        },
        {
            "bloco": "digital",
            "title": "Plataforma de eventos e tour virtual",
            "subtitle": "Plataforma própria que permite a realização de eventos online e  híbridos, além de transmissões em tempo real e também gravadas. Totalmente personalizável para a necessidade do cliente, a plataforma reúne todas as informações pertinentes ao evento em um único lugar e emite relatórios completos que permitem análises de dados com assertividade e segurança.",
            "frases": [
                { "texto": " - Plataforma personalizável." },
                { "texto": " - Relatórios customizáveis de acordo com a necessidade do cliente." },
                { "texto": " - Suporta altos volumes de acesso." },
            ]
        },
    ]
    cases.forEach(function(c) {
        if (c.bloco == bloco) {
            retorno = c
        }
    });
    return retorno;
}