export interface Cat {
  id: number;
  url: string;
  width: number;
  height: number;
  // this is optional when you search with categories
  name: string;
  categorie: number;
  categorie_name: string;
}

// [{"breeds":[],"categories":[{"id":2,"name":"space"}],"id":"5eg","url":"https://cdn2.thecatapi.com/images/5eg.jpg","width":883,"height":500}]

// BREEDS
// [{"breeds":[{"weight":{"imperial":"6 - 12","metric":"3 - 7"},"id":"beng","name":"Bengal","cfa_url":"http://cfa.org/Breeds/BreedsAB/Bengal.aspx","vetstreet_url":"http://www.vetstreet.com/cats/bengal","vcahospitals_url":"https://vcahospitals.com/know-your-pet/cat-breeds/bengal","temperament":"Alert, Agile, Energetic, Demanding, Intelligent","origin":"United States","country_codes":"US","country_code":"US","description":"Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.","life_span":"12 - 15","indoor":0,"lap":0,"adaptability":5,"affection_level":5,"child_friendly":4,"cat_friendly":4,"dog_friendly":5,"energy_level":5,"grooming":1,"health_issues":3,"intelligence":5,"shedding_level":3,"social_needs":5,"stranger_friendly":3,"vocalisation":5,"bidability":3,"experimental":0,"hairless":0,"natural":0,"rare":0,"rex":0,"suppressed_tail":0,"short_legs":0,"wikipedia_url":"https://en.wikipedia.org/wiki/Bengal_(cat)","hypoallergenic":1}],"id":"sPMOo3Jn2","url":"https://cdn2.thecatapi.com/images/sPMOo3Jn2.jpg","width":880,"height":1100}]

// IMAGES SEARCH EXAMPLE
// [{"breeds":[],"id":"28f","url":"https://cdn2.thecatapi.com/images/28f.jpg","width":400,"height":598},{"breeds":[],"id":"3cf","url":"https://cdn2.thecatapi.com/images/3cf.jpg","width":612,"height":612},{"breeds":[],"id":"99l","url":"https://cdn2.thecatapi.com/images/99l.jpg","width":800,"height":600},{"breeds":[],"id":"d0m","url":"https://cdn2.thecatapi.com/images/d0m.jpg","width":1200,"height":1600},{"breeds":[{"weight":{"imperial":"8 - 16","metric":"4 - 7"},"id":"sibe","name":"Siberian","cfa_url":"http://cfa.org/Breeds/BreedsSthruT/Siberian.aspx","vetstreet_url":"http://www.vetstreet.com/cats/siberian","vcahospitals_url":"https://vcahospitals.com/know-your-pet/cat-breeds/siberian","temperament":"Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate","origin":"Russia","country_codes":"RU","country_code":"RU","description":"The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ","life_span":"12 - 15","indoor":0,"lap":1,"alt_names":"Moscow Semi-longhair, HairSiberian Forest Cat","adaptability":5,"affection_level":5,"child_friendly":4,"dog_friendly":5,"energy_level":5,"grooming":2,"health_issues":2,"intelligence":5,"shedding_level":3,"social_needs":4,"stranger_friendly":3,"vocalisation":1,"experimental":0,"hairless":0,"natural":1,"rare":0,"rex":0,"suppressed_tail":0,"short_legs":0,"wikipedia_url":"https://en.wikipedia.org/wiki/Siberian_(cat)","hypoallergenic":1}],"id":"YLN2chAIF","url":"https://cdn2.thecatapi.com/images/YLN2chAIF.jpg","width":1697,"height":1131}]
