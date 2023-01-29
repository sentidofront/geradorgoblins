
const characterTable = {
    goblin: ["Verde Claro (+2 Combate, +2 Conhecimento, +1 Habilidade, +1 Sorte.)", "Verde (+2 Combate, +1 Conhecimento, +1 Habilidade, +2 Sorte)", "Verde Escuro (+2 Combate, +1 Conhecimento, +2 Habilidade, +1 Sorte)", "Vermelho (+1 Combate, +2 Conhecimento, +2 Habilidade, +1 Sorte)", "Amarelo (+1 Combate, +1 Conhecimento, +2 Habilidade, +2 Sorte)", "Azul (+1 Combate, +2 Conhecimento, +1 Habilidade,"],
    class: ["Mercenario (+1 Combate, +1 Habilidades)", "Cacador (+1 Combate, +1 Sorte)", "Gatuno (+1 Habilidade, +1 Conhecimento)", "Piromaniaco (+1 Habilidade, +1 Sorte)", "Lider (+1 Combate, +1 Conhecimento)", "Xama (+1 Conhecimento, +1 Sorte)"],
    failures: ["Gordo", "Fedorento", "Fala Errado","Insano", "Cicatrizes", "Anomalia" ],
    explosiveweapons: ["1 Pistola (distancia; dano 4) e Elmo (proteçao 1)", "2 Pistolas (distancia; dano 4)", " 3 Galinhas Explosivas (distancia; dano 4 em todos ate 3m)", "Pistola(distancia; dano 4) e 2 Galinhas Explosivas(distancia; dano 4 em todos ate 3m)", "Canhao (distancia; dano 8; Carregar [2 turnos])"],
    martialweapons: ["1 Espada (dano 3) e Escudo (proteçao 1)", "Machado (dano 4) e Elmo (proteçao 1)", "2 Machadinhas* (dano 3)", "Espadona (dano 5)", "2 Espadas (dano 3) e Armadura (proteçao 1)", "Adaga*, Espada e Armadura (proteçao 1)" ],
    lightweapons: ["2 Adagas* (dano 2)", "Adaga* (dano 2) e Escudo (proteçao 1)", "Arco Simples (distancia; dano 2)", "Arco Composto (distancia; dano 3)", "4 Adagas* (dano 2)", "Besta (distancia; dano 3) e Elmo (proteçao 1)"],
    anomalias: ["Manchas Rosas", "Manchas Rosas", "Orelhas no Suvaco", "Corcunda", "Braco extra Atrofiado", [Math.floor(Math.random() * 6) + 1] + " - Olhos Adicionais", "Olhos Gigantes", "Maos Gigantes", "Duas Cabecas", "Dupla Anomalia"],
    anomalia1: ["Manchas Rosas", "Manchas Rosas", "Orelhas no Suvaco", "Corcunda", "Braco extra Atrofiado", [Math.floor(Math.random() * 6) + 1] + " - Olhos Adicionais", "Olhos Gigantes", "Maos Gigantes", "Duas Cabecas"],
    anomalia2: ["Manchas Rosas", "Manchas Rosas", "Orelhas no Suvaco", "Corcunda", "Braco extra Atrofiado", [Math.floor(Math.random() * 6) + 1] + " - Olhos Adicionais", "Olhos Gigantes", "Maos Gigantes", "Duas Cabecas"],
    nomegoblin: ["Pegue um objeto que esteja perto, Jogue-o no chão. O som que der será o nome do seu goblin.", "Pegue a segunda sílaba do seu nome e junte com a primeira.", "Pegue a segunda sílaba do seu sobrenome e junte com a segunda sílaba do seu nome.", "Pense em uma palavra grande. Pegue a primeira sílaba e junte com a última", "Faça uma pergunta qualquer para alguém. Pegue a primeira silaba que ele disser, e junte com a última silaba.", "Onomatopéia estranha de algo gosmento e goblinóide explodindo."],
  }
  
  function generateCharacter() {

    let character = {};
    character.goblin = characterTable.goblin[Math.floor(Math.random() * characterTable.goblin.length)];
    character.class = characterTable.class[Math.floor(Math.random() * characterTable.class.length)];
    character.failures = characterTable.failures[Math.floor(Math.random() * characterTable.failures.length)];
    character.anomalias = characterTable.anomalias[Math.floor(Math.random() * characterTable.anomalias.length)];
    character.anomalia1 = characterTable.anomalia1[Math.floor(Math.random() * characterTable.anomalia1.length)];
    character.anomalia2 = characterTable.anomalia2[Math.floor(Math.random() * characterTable.anomalia2.length)];
    character.explosiveweapons = characterTable.explosiveweapons[Math.floor(Math.random() * characterTable.explosiveweapons.length)];
    character.lightweapons = characterTable.lightweapons[Math.floor(Math.random() * characterTable.lightweapons.length)];
    character.martialweapons = characterTable.martialweapons[Math.floor(Math.random() * characterTable.martialweapons.length)];
    character.nomegoblin = characterTable.nomegoblin[Math.floor(Math.random() * characterTable.nomegoblin.length)];
 
    document.write("<div id='gobulingobulin'>");
    document.write("<h1 id=gobulingobulin> GERADOR DE GOBLINS. </h2>");
    document.write("<h3 id='goblin-text'>" + " Se você não tem idéia de como criar um nome, use a recomendação aleatoria a seguir -->  " + JSON.stringify(character.nomegoblin) + "</h3>");
    document.write("<h1 id='greensmallthing-text'> Coloração do Goblin (Atributos Base) </h1>" + "<h3 id='goblin-text'>" +  JSON.stringify(character.goblin) + "</h3>");
    document.write("<h1 id='greensmallthing-text'> Ocupação do Goblin (Atributos Adicionais & Habilidades) </h1>" + "<h3 id='goblin-text'>" + JSON.stringify(character.class) + "</h3>");
    document.write("<h1 id='greensmallthing-text'> Falhas do Goblin & Equipamento  </h1>"+ "<h3 id='goblin-text'>" + "Falhas = " + JSON.stringify(character.failures) + "</h3>");

    if (character.failures === "Anomalia") {
      if(character.anomalias === "Dupla Anomalia"){
          document.write("<h3 id='goblin-text'>" + JSON.stringify(character.anomalia1) + " e " + JSON.stringify(character.anomalia2) + "</h3>");
      } else {
          document.write("<h3 id='goblin-text'>" + JSON.stringify(character.anomalias) + "</h3>");
      }
    }   
  
    if (character.class === "Mercenario (+1 Combate, +1 Habilidades)") {
      document.write("<h3 id='goblin-text'>" + JSON.stringify(character.martialweapons) + "</h3>");
    }
 
    if (character.class === "Cacador (+1 Combate, +1 Sorte)") {
      document.write("<h3 id='goblin-text'>" + JSON.stringify(character.lightweapons) + "</h3>");
    }

    if (character.class === "Gatuno (+1 Habilidade, +1 Conhecimento)") {
      document.write("<h3 id='goblin-text'>" + JSON.stringify(character.lightweapons) + "</h3>");

    }
    if (character.class === "Piromaniaco (+1 Habilidade, +1 Sorte)") {
      document.write("<h3 id='goblin-text'>" + JSON.stringify(character.explosiveweapons) + "</h3>");

    }
    if (character.class === "Lider (+1 Combate, +1 Conhecimento)") {
      document.write("<h3 id='goblin-text'>" + JSON.stringify(character.martialweapons) + "</h3>");
    }
    if (character.class === "Xama (+1 Conhecimento, +1 Sorte)") {
      document.write("<h3 id='goblin-text'>" + "Cajado (Dano 1), mas comeca com 8 pontos de magia" + "</h3>");
    }

    
    document.write("<button id='goblinButton' onclick='location.reload(); playAudio();'>MATE SEU GOBLIN </button>");   
    document.write("</div>")
    
    
    return character;
  }

console.log(generateCharacter());
