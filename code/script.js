let filmes = [
    {
      "id": 1,
      "titulo": "The Last Of Us",
      "descricao": "Joel, um sobrevivente duro e cínico, e a jovem e impetuosa Ellie se conectam pela dificuldade do mundo em que vivem. Juntos, eles enfrentam circunstâncias brutais e monstros impiedosos durante uma difícil jornada pelos EUA após um surto apocalíptico.",
      "imagem": "imgs/capatlou.jpg",
      "banner": "imgs/bannertlouseries.webp",
      "trailers": [
        "https://www.youtube.com/embed/0vB2lHQim3Q",
        "https://youtube.com/embed/lW5kiEUVlpo"
      ],
      "rating": 8.7,
      "duration": "50min",
      "atores": [
        {
          "nome": "bella ramsey",
          "foto": "imgs/ramsey.jpg"
        },
        {
          "nome": "Pedro Pascal",
          "foto": "imgs/pascal.webp"
        }
      ]
    },
    {
      "id": 2,
      "titulo": "Ainda Estou Aqui",
      "descricao": "No início da década de 1970, o Brasil enfrenta o endurecimento da ditadura militar. No Rio de Janeiro, a família Paiva - Rubens, Eunice e seus cinco filhos - vive à beira da praia em uma casa de portas abertas para os amigos. Um dia, Rubens Paiva é levado por militares à paisana e desaparece.",
      "imagem": "imgs/tlou.jpg",
      "banner": "imgs/aindaestouaqui.webp",
      "trailers": [
        "https://youtube.com/embed/_NzqP0jmk3o",
        "https://youtube.com/embed/qddo7XLa3Tc"
      ],
      "rating": 8.9,
      "duration": "137min",
      "atores": [
        {
          "nome": "bella ramsey",
          "foto": "imgs/ramsey.jpg"
        },
        {
          "nome": "Pedro Pascal",
          "foto": "imgs/pascal.webp"
        }
      ]
    },
    {
      "id": 3,
      "titulo": "Capitão América: Admirável Mundo Novo",
      "descricao": "Em CAPITÃO AMÉRICA: ADMIRÁVEL MUNDO NOVO, após a eleição de Thaddeus Ross como presidente dos Estados Unidos, Sam Wilson se encontra no meio de um incidente internacional e deve trabalhar para deter os verdadeiros cérebros por trás dele.",
      "imagem": "imgs/capitaoamerica.webp",
      "banner": "imgs/capitaobg.jpg",
      "trailers": [
        "https://youtube.com/embed/NP2xle2cmf0",
        "https://youtube.com/embed/U7JG6FMoEdM"
      ],
      "rating": 5.9,
      "duration": "118min",
      "atores": [
        {
          "nome": "bella ramsey",
          "foto": "imgs/ramsey.jpg"
        },
        {
          "nome": "Pedro Pascal",
          "foto": "imgs/pascal.webp"
        }
      ]
    },
    {
      "id": 4,
      "titulo": "Até O Último Homem",
      "descricao": "Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens.",
      "imagem": "imgs/lastman.jpg",
      "banner": "imgs/lastmanbg.jpg",
      "trailers": [
        "https://youtube.com/embed/4s4UCxCv_OE",
        ""
      ],
      "rating": 8.1,
      "duration": "139min",
      "atores": [
        {
          "nome": "bella ramsey",
          "foto": "imgs/ramsey.jpg"
        },
        {
          "nome": "Pedro Pascal",
          "foto": "imgs/pascal.webp"
        }
      ]
    },
    {
      "id": 5,
      "titulo": "Interestelar",
      "descricao": "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
      "imagem": "imgs/interestelar.jpg",
      "banner": "imgs/interestellar.jpg",
      "trailers": [
        "https://youtube.com/embed/i6avfCqKcQo"
      ],
      "rating": 8.6,
      "duration": "169min",
      "atores": [
        {
          "nome": "bella ramsey",
          "foto": "imgs/ramsey.jpg"
        },
        {
          "nome": "bella ramsey",
          "foto": "imgs/ramsey.jpg"
        }
      ]
    }
  ]

notFound = {"imagem": "imgs/notfound.png"}

let destaques = [
    {
      "id": 1,
      "imagem": "imgs/backgroundtlou2.webp",
      "titulo": "The Last Of Us",
      "tipo": "Série",
      "ano": "2025",
      "rating": "8.7",
      "descricao": "Joel, um sobrevivente duro e cínico, e a jovem e impetuosa Ellie se conectam pela dificuldade do mundo em que vivem. Juntos, eles enfrentam circunstâncias brutais e monstros impiedosos durante uma difícil jornada pelos EUA após um surto apocalíptico.",
      "imgdestaque": "imgs/capatlou.jpg"
    },
    {
      "id": 2,
      "imagem": "imgs/cry.webp",
      "titulo": "Ainda Estou Aqui",
      "tipo": "Filme",
      "ano": "2025",
      "rating": "8.9",
      "descricao": "No início da década de 1970, o Brasil enfrenta o endurecimento da ditadura militar. No Rio de Janeiro, a família Paiva - Rubens, Eunice e seus cinco filhos - vive à beira da praia em uma casa de portas abertas para os amigos. Um dia, Rubens Paiva é levado por militares à paisana e desaparece.",
      "imgdestaque": "imgs/tlou.jpg"
    },
    {
      "id": 3,
      "imagem": "imgs/capitaobg.jpg",
      "titulo": "Capitão América: Admirável Mundo Novo",
      "tipo": "Filme",
      "ano": "2025",
      "rating": "5.9",
      "descricao": "Em CAPITÃO AMÉRICA: ADMIRÁVEL MUNDO NOVO, após a eleição de Thaddeus Ross como presidente dos Estados Unidos, Sam Wilson se encontra no meio de um incidente internacional e deve trabalhar para deter os verdadeiros cérebros por trás dele.",
      "imgdestaque": "imgs/capitaoamerica.webp"
    }
  ]

let tophoje = [

    

]

document.addEventListener("DOMContentLoaded", function() {


    detalheFilmes();
    document.querySelector('#imgcarousel').classList.add('imgfade');
    mudarIndex();

});

