const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

//const bListPkmn = pokemon.filter( p => p.name[0] === "B" );
//const pkmnIds = pokemon.map( p => p.id )
//Divisible por 3
const divisibles_tres = pokemon.filter (p => p.id % 3 === 0);
console.log(`Divisibles por 3 :`);
console.log(divisibles_tres);
//Objetos de pokemon que son de tipo Fuego
const tipo_fuego = pokemon.filter (p => p.types.includes ("fire"));
console.log(`Objetos de pokemon que son de tipo Fuego :`);
console.log(tipo_fuego);
//Una variedad de pokemon que tienen mas de un tipo
const mas_de_un_tipo = pokemon.filter( p => p.types[1])
console.log(`Una variedad de pokemon que tienen mas de un tipo :`);
console.log(mas_de_un_tipo);
//Una matriz con solo los nombres de los pokemon
const names = pokemon.map( p => p.name )
console.log(`Una matriz con solo los nombres de los pokemon :`);
console.log(names);
//Listar los nombres con mayor de identificacion a 99
const names_mayor_99 = pokemon.filter( p => p.id > 99 )
console.log(`Listar los nombres con mayor de identificacion a 99 :`);
console.log(names_mayor_99.map (p => p.name));
//Listar el nombre de los pokemon con el tipo unico sea veneno
const tipo_veneno = pokemon.filter (p => p.types.includes ("poison"));
console.log(`Listar el nombre de los pokemon con el tipo unico sea veneno : `);
console.log(tipo_veneno.map (p => p.name));
//Una matriz que contiene solo el primer tipo de todos los Pokemon cuyo segundo tipo es "volador" 
const primer_tipo = pokemon.filter (p => p.types.slice(1).includes ("flying"));
console.log(`Una matriz que contiene solo el primer tipo de todos los Pokemon cuyo segundo tipo es "volador" : `);
console.log(primer_tipo.map(p => p.name));
//un recuento de la cantidad de pokémon que son de tipo "normal"
const recuento = pokemon.filter (p => p.types.includes ("normal"));
console.log(`Un recuento de la cantidad de pokémon que son de tipo "normal" : `);
console.log(recuento.length);
