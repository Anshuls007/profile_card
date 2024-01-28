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
// centeredDiv.style.position = "absolute";
// centeredDiv.style.top = "50%";
// centeredDiv.style.left = "50%";
// centeredDiv.style.transform = "translate(-50%, -50%)";
// centeredDiv.style.border = "2px solid";
artistsData.map((items) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "yourDesiredId";

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

  const artistName = document.createElement("h3");
  const nameData = document.createTextNode(`${items.name}`);
  artistName.className = "card-name";
  artistName.appendChild(nameData);
  cardDiv1.appendChild(artistName);
  
  cardDiv.appendChild(cardDiv1);

  const artistdescription = document.createElement("p");
  const descriptionData = document.createTextNode(`${items.description}`);
  artistName.className = "card-description";
  artistdescription.appendChild(descriptionData);
  cardDiv2.appendChild(artistdescription);

  const artistBirth = document.createElement("p");
  const birthData = document.createTextNode(`BirthYear: ${items.birthYear}`);
  artistName.className = "card-birth";
  artistBirth.appendChild(birthData);
  cardDiv2.appendChild(artistBirth);

  const artistCountry = document.createElement("p");
  const countryData = document.createTextNode(`Country: ${items.country}`);
  artistName.className = "card-country";
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

  centeredDiv.appendChild(cardDiv);
});