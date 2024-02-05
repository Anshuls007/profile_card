const artistsData = [
  {
    name: "Dua Lipa",
    birthYear: 1995,
    country: "United Kingdom",
    genres: ["Pop", "Dance"],
    hitSongs: ["Don't Start Now", "New Rules"],
    description: "Dua Lipa is known for her captivating pop and dance music.",
  },
  {
    name: "Katy Perry",
    birthYear: 1984,
    country: "United States",
    genres: ["Pop"],
    hitSongs: ["Firework", "Roar"],
    description:
      "Katy Perry is a global pop sensation with numerous chart-topping hits.",
  },
  {
    name: "Billie Eilish",
    birthYear: 2001,
    country: "United States",
    genres: ["Pop", "Alternative"],
    hitSongs: ["Bad Guy", "Ocean Eyes"],
    description:
      "Billie Eilish is a young and influential artist known for her unique style and impactful lyrics.",
  },
  {
    name: "Taylor Swift",
    birthYear: 1989,
    country: "United States",
    genres: ["Pop", "Country"],
    hitSongs: ["Love Story", "Shake It Off"],
    description:
      "Taylor Swift is a versatile artist with a blend of pop and country influences.",
  },
  {
    name: "Ariana Grande",
    birthYear: 1993,
    country: "United States",
    genres: ["Pop", "R&B"],
    hitSongs: ["Thank U, Next", "7 Rings"],
    description:
      "Ariana Grande is recognized for her powerful voice and a mix of pop and R&B styles.",
  },
  {
    name: "Lana Del Rey",
    birthYear: 1985,
    country: "United States",
    genres: ["Indie Pop", "Alternative"],
    hitSongs: ["Summertime Sadness", "Video Games"],
    description:
      "Lana Del Rey is known for her dreamy and cinematic approach to music.",
  },
];
const centeredDiv = document.getElementById("container");
const main = document.createElement("dev");
main.id = "main";

const searchMain = document.createElement("dev");
searchMain.className = "search-main";
const search = document.createElement("input");
search.placeholder = "Search Here..";
search.className = "search-bar";
searchMain.appendChild(search);
centeredDiv.appendChild(searchMain);
const searchDiv = document.createElement("div");
searchDiv.className = "suggest-container";

function searchDropDown(artistList) {
  searchDiv.innerHTML = "";
  if(artistList.length != 0){
  artistList.map(artist => {
    const searchData = document.createElement("div");
    const artistData = document.createTextNode(artist.name);
    searchData.appendChild(artistData);
    searchDiv.appendChild(searchData);
    searchData.addEventListener("click", () => displayProfileCard([artist]));
  });
}
  searchMain.appendChild(searchDiv);
}

function displayProfileCard(artistList) {
  searchDiv.innerHTML = "";
  main.innerHTML = '';
  artistList.map((items) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card-container";

    const cardDiv1 = document.createElement("div");
    cardDiv1.className = "div1";

    const cardDiv2 = document.createElement("div");
    cardDiv2.className = "div2";

    const profile =
      items.profile ||
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/singer-37-1174640.png?f=webp";
    const profileImage = document.createElement("img");
    profileImage.className = "card-image";
    profileImage.src = profile;
    cardDiv1.appendChild(profileImage);

    const artistName = document.createElement("p");
    const nameData = document.createTextNode(`${items.name}`);
    artistName.className = "card-name";
    artistName.appendChild(nameData);
    cardDiv1.appendChild(artistName);

    cardDiv.appendChild(cardDiv1);

    const artistdescription = document.createElement("i");
    const descriptionData = document.createTextNode(`"${items.description}"`);
    artistdescription.className = "card-description";
    artistdescription.appendChild(descriptionData);
    cardDiv2.appendChild(artistdescription);

    const artistBirth = document.createElement("p");
    const birthData = document.createTextNode(`BirthYear: ${items.birthYear}`);
    artistBirth.appendChild(birthData);
    cardDiv2.appendChild(artistBirth);

    const artistCountry = document.createElement("p");
    const countryData = document.createTextNode(`Country: ${items.country}`);
    artistCountry.appendChild(countryData);
    cardDiv2.appendChild(artistCountry);

    const artistGenres = document.createElement("p");
    const genresData = document.createTextNode(`Genres: ${items.genres}`);
    artistGenres.appendChild(genresData);
    cardDiv2.appendChild(artistGenres);

    const artistHitSongs = document.createElement("p");
    const hitSongsData = document.createTextNode(`hitSongs: ${items.hitSongs}`);
    artistHitSongs.appendChild(hitSongsData);
    cardDiv2.appendChild(artistHitSongs);

    cardDiv.appendChild(cardDiv2);
    main.appendChild(cardDiv);
  });
}
function getArtistById(artistName) {
  if(artistName){
  const artistList = artistsData.filter(artist => artist.name.toLowerCase().includes(artistName));
  searchDropDown(artistList);
  }
}

function debounce(func, timeout = 800) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
const debouncedSearch = debounce(function () {
  if(search.value != ""){
    getArtistById(search.value);
    }else{
      displayProfileCard(artistsData);
    }
});
centeredDiv.appendChild(main);
displayProfileCard(artistsData);
search.addEventListener('input',debouncedSearch);
