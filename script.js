//https://developer.themoviedb.org/reference/movie-popular-list

async function getMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQwMzcwNjYwZGQyMGVjY2FlM2ZkNTRhZjExYWVjYyIsInN1YiI6IjY0YWFjOGI5OWM5N2JkMDBjNWY4ODQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NcXCdiw2ywuyrIGAP0TwNgrrb-zDmL4SQRALU6LLXhg'
    }
  };
  try {
    return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
  } catch (error) {
    console.log(error)
  }
}

// const data = {
//   page: 1,
//   results: [
//     {
//       adult: false,
//       backdrop_path: "/gMJngTNfaqCSCqGD4y8lVMZXKDn.jpg",
//       genre_ids: [28, 12, 878],
//       id: 640146,
//       original_language: "en",
//       original_title: "Ant-Man and the Wasp: Quantumania",
//       overview:
//         "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
//       popularity: 8567.865,
//       poster_path: "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
//       release_date: "2023-02-15",
//       title: "Ant-Man and the Wasp: Quantumania",
//       video: false,
//       vote_average: 6.5,
//       vote_count: 1886,
//     },
//     {
//       adult: false,
//       backdrop_path: "/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg",
//       genre_ids: [16, 12, 10751, 14, 35],
//       id: 502356,
//       original_language: "en",
//       original_title: "The Super Mario Bros. Movie",
//       overview:
//         "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
//       popularity: 6572.614,
//       poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
//       release_date: "2023-04-05",
//       title: "The Super Mario Bros. Movie",
//       video: false,
//       vote_average: 7.5,
//       vote_count: 1456,
//     },
//     {
//       adult: false,
//       backdrop_path: "/nDxJJyA5giRhXx96q1sWbOUjMBI.jpg",
//       genre_ids: [28, 35, 14],
//       id: 594767,
//       original_language: "en",
//       original_title: "Shazam! Fury of the Gods",
//       overview:
//         'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
//       popularity: 4274.232,
//       poster_path: "/2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg",
//       release_date: "2023-03-15",
//       title: "Shazam! Fury of the Gods",
//       video: false,
//       vote_average: 6.9,
//       vote_count: 1231,
//     },
//     {
//       adult: false,
//       backdrop_path: "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
//       genre_ids: [878, 12, 28],
//       id: 76600,
//       original_language: "en",
//       original_title: "Avatar: The Way of Water",
//       overview:
//         "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
//       popularity: 3365.913,
//       poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
//       release_date: "2022-12-14",
//       title: "Avatar: The Way of Water",
//       video: false,
//       vote_average: 7.7,
//       vote_count: 7535,
//     },
//     {
//       adult: false,
//       backdrop_path: "/xwA90BwZXTh8ke3CVsQlj8EOkFr.jpg",
//       genre_ids: [28, 12, 36, 18, 10752],
//       id: 948713,
//       original_language: "en",
//       original_title: "The Last Kingdom: Seven Kings Must Die",
//       overview:
//         "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
//       popularity: 3119.049,
//       poster_path: "/7yyFEsuaLGTPul5UkHc5BhXnQ0k.jpg",
//       release_date: "2023-04-14",
//       title: "The Last Kingdom: Seven Kings Must Die",
//       video: false,
//       vote_average: 7.4,
//       vote_count: 232,
//     },
//     {
//       adult: false,
//       backdrop_path: "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
//       genre_ids: [18, 28],
//       id: 677179,
//       original_language: "en",
//       original_title: "Creed III",
//       overview:
//         "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.",
//       popularity: 2856.222,
//       poster_path: "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
//       release_date: "2023-03-01",
//       title: "Creed III",
//       video: false,
//       vote_average: 7.3,
//       vote_count: 1192,
//     },
//     {
//       adult: false,
//       backdrop_path: "/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg",
//       genre_ids: [35, 9648, 28],
//       id: 638974,
//       original_language: "en",
//       original_title: "Murder Mystery 2",
//       overview:
//         "After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.",
//       popularity: 1879.655,
//       poster_path: "/s1VzVhXlqsevi8zeCMG9A16nEUf.jpg",
//       release_date: "2023-03-28",
//       title: "Murder Mystery 2",
//       video: false,
//       vote_average: 6.5,
//       vote_count: 864,
//     },
//     {
//       adult: false,
//       backdrop_path: "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg",
//       genre_ids: [27, 53],
//       id: 713704,
//       original_language: "en",
//       original_title: "Evil Dead Rise",
//       overview:
//         "Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
//       popularity: 1696.367,
//       poster_path: "/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg",
//       release_date: "2023-04-12",
//       title: "Evil Dead Rise",
//       video: false,
//       vote_average: 7,
//       vote_count: 207,
//     },
//     {
//       adult: false,
//       backdrop_path: "/ouB7hwclG7QI3INoYJHaZL4vOaa.jpg",
//       genre_ids: [16, 10751, 14, 12, 35, 18],
//       id: 315162,
//       original_language: "en",
//       original_title: "Puss in Boots: The Last Wish",
//       overview:
//         "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
//       popularity: 1347.259,
//       poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
//       release_date: "2022-12-07",
//       title: "Puss in Boots: The Last Wish",
//       video: false,
//       vote_average: 8.3,
//       vote_count: 5331,
//     },
//     {
//       adult: false,
//       backdrop_path: "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
//       genre_ids: [28, 53, 80],
//       id: 603692,
//       original_language: "en",
//       original_title: "John Wick: Chapter 4",
//       overview:
//         "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
//       popularity: 1320.735,
//       poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
//       release_date: "2023-03-22",
//       title: "John Wick: Chapter 4",
//       video: false,
//       vote_average: 8,
//       vote_count: 1211,
//     },
//     {
//       adult: false,
//       backdrop_path: "/nDmPjKLqLwWyd4Ssti8HCdhW5cZ.jpg",
//       genre_ids: [28],
//       id: 1048300,
//       original_language: "en",
//       original_title: "Adrenaline",
//       overview:
//         "A female FBI agent holidaying in Eastern Europe with her family gets her life upside down when her daughter is kidnapped. She has to team up with a criminal on the run to save her daughter before time runs out.",
//       popularity: 1460.629,
//       poster_path: "/qVzRt8c2v4gGBYsnaflXVVeQ9Lh.jpg",
//       release_date: "2022-12-15",
//       title: "Adrenaline",
//       video: false,
//       vote_average: 4,
//       vote_count: 4,
//     },
//     {
//       adult: false,
//       backdrop_path: "/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
//       genre_ids: [53, 35, 80],
//       id: 804150,
//       original_language: "en",
//       original_title: "Cocaine Bear",
//       overview:
//         "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
//       popularity: 1175.491,
//       poster_path: "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
//       release_date: "2023-02-22",
//       title: "Cocaine Bear",
//       video: false,
//       vote_average: 6.4,
//       vote_count: 878,
//     },
//     {
//       adult: false,
//       backdrop_path: "/54IXMMEQKlkPXHqPExWy98UBmtE.jpg",
//       genre_ids: [27],
//       id: 1008005,
//       original_language: "es",
//       original_title: "La niña de la comunión",
//       overview:
//         "Spain, late 1980s. Newcomer Sara tries to fit in with the other teens in this tight-knit small town in the province of Tarragona. If only she were more like her extroverted best friend, Rebe. They go out one night at a nightclub, on the way home, they come upon a little girl holding a doll, dressed for her first communion. And that's when the nightmare begins.",
//       popularity: 1154.3,
//       poster_path: "/sP6AO11a7jWgsmT9T8j9EGIWAaZ.jpg",
//       release_date: "2023-02-10",
//       title: "The Communion Girl",
//       video: false,
//       vote_average: 6.5,
//       vote_count: 58,
//     },
//     {
//       adult: false,
//       backdrop_path: "/tFaC1Fb1sv1dALB0i9Avi76MHmn.jpg",
//       genre_ids: [10751, 28, 12],
//       id: 946310,
//       original_language: "nl",
//       original_title: "De Piraten van Hiernaast II: De Ninja's van de Overkant",
//       overview:
//         "The pirates feel right at home in Sandborough, but the atmosphere cools right down when the ninjas come to live in the street. After all, pirates and ninjas are sworn enemies!  While pirate captain Hector Blunderbuss struggles to get rid of his new neighbours, son Billy and ninja daughter Yuka become friends. The pirates challenge the ninjas to the ultimate battle at the village's annual hexathlon. Who will win the match? Ninjas are faster and more agile of course, but pirates are the best cheats in all of the seven seas...",
//       popularity: 1159.928,
//       poster_path: "/uDsvma9dAwnDPVuCFi99YpWvBk0.jpg",
//       release_date: "2022-04-20",
//       title: "Pirates Down the Street II: The Ninjas from Across",
//       video: false,
//       vote_average: 6.4,
//       vote_count: 22,
//     },
//     {
//       adult: false,
//       backdrop_path: "/rPSJAElGxOTko1zK6uIlYnTMFxN.jpg",
//       genre_ids: [80],
//       id: 1104040,
//       original_language: "en",
//       original_title: "Gangs of Lagos",
//       overview:
//         "A group of friends who each have to navigate their own destiny, growing up on the bustling streets and neighborhood of Isale Eko, Lagos.",
//       popularity: 1138.252,
//       poster_path: "/nGwFsB6EXUCr21wzPgtP5juZPSv.jpg",
//       release_date: "2023-04-07",
//       title: "Gangs of Lagos",
//       video: false,
//       vote_average: 5.6,
//       vote_count: 21,
//     },
//     {
//       adult: false,
//       backdrop_path: "/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",
//       genre_ids: [878, 12, 53, 28],
//       id: 700391,
//       original_language: "en",
//       original_title: "65",
//       overview:
//         "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
//       popularity: 1077.09,
//       poster_path: "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
//       release_date: "2023-03-02",
//       title: "65",
//       video: false,
//       vote_average: 6.3,
//       vote_count: 763,
//     },
//     {
//       adult: false,
//       backdrop_path: "/5Y5pz0NX7SZS9036I733F7uNcwK.jpg",
//       genre_ids: [27, 53],
//       id: 758323,
//       original_language: "en",
//       original_title: "The Pope's Exorcist",
//       overview:
//         "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
//       popularity: 1073.229,
//       poster_path: "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg",
//       release_date: "2023-04-05",
//       title: "The Pope's Exorcist",
//       video: false,
//       vote_average: 6.5,
//       vote_count: 143,
//     },
//     {
//       adult: false,
//       backdrop_path: "/m1fgGSLK0WvRpzM1AmZu38m0Tx8.jpg",
//       genre_ids: [28],
//       id: 842945,
//       original_language: "en",
//       original_title: "Supercell",
//       overview:
//         "Good-hearted teenager William always lived in hope of following in his late father’s footsteps and becoming a storm chaser. His father’s legacy has now been turned into a storm-chasing tourist business, managed by the greedy and reckless Zane Rogers, who is now using William as the main attraction to lead a group of unsuspecting adventurers deep into the eye of the most dangerous supercell ever seen.",
//       popularity: 942.178,
//       poster_path: "/gbGHezV6yrhua0KfAgwrknSOiIY.jpg",
//       release_date: "2023-03-17",
//       title: "Supercell",
//       video: false,
//       vote_average: 6.3,
//       vote_count: 125,
//     },
//     {
//       adult: false,
//       backdrop_path: "/tYcmm8XtzRdcT6kliCbHuWwLCwB.jpg",
//       genre_ids: [28, 80, 53],
//       id: 849869,
//       original_language: "ko",
//       original_title: "길복순",
//       overview:
//         "At work, she's a renowned assassin. At home, she's a single mom to a teenage daughter. Killing? That's easy. It's parenting that's the hard part.",
//       popularity: 958.517,
//       poster_path: "/taYgn3RRpCGlTGdaGQvnSIOzXFy.jpg",
//       release_date: "2023-02-17",
//       title: "Kill Boksoon",
//       video: false,
//       vote_average: 6.8,
//       vote_count: 184,
//     },
//     {
//       adult: false,
//       backdrop_path: "/eNJhWy7xFzR74SYaSJHqJZuroDm.jpg",
//       genre_ids: [28, 878],
//       id: 1033219,
//       original_language: "en",
//       original_title: "Attack on Titan",
//       overview:
//         "As viable water is depleted on Earth, a mission is sent to Saturn's moon Titan to retrieve sustainable H2O reserves from its alien inhabitants. But just as the humans acquire the precious resource, they are attacked by Titan rebels, who don't trust that the Earthlings will leave in peace.",
//       popularity: 897.66,
//       poster_path: "/qNz4l8UgTkD8rlqiKZ556pCJ9iO.jpg",
//       release_date: "2022-09-30",
//       title: "Attack on Titan",
//       video: false,
//       vote_average: 6.1,
//       vote_count: 105,
//     },
//   ],
//   total_pages: 38029,
//   total_results: 760569,
// };

// puxar informações extras do filme
// https://api.themoviedb.org/3/movie/{movie_id}/
async function getMoreInfo(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQwMzcwNjYwZGQyMGVjY2FlM2ZkNTRhZjExYWVjYyIsInN1YiI6IjY0YWFjOGI5OWM5N2JkMDBjNWY4ODQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NcXCdiw2ywuyrIGAP0TwNgrrb-zDmL4SQRALU6LLXhg",
    },
  };

  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    ).then((response) => response.json());

    return data;
  } catch (error) {
    console.error(err);
  }
}

// quando clicar no botão de assistir trailer
// https://api.themoviedb.org/3/movie/{movie_id}/videos
async function watch(e) {
  const movie_id = e.currentTarget.dataset.id
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQwMzcwNjYwZGQyMGVjY2FlM2ZkNTRhZjExYWVjYyIsInN1YiI6IjY0YWFjOGI5OWM5N2JkMDBjNWY4ODQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NcXCdiw2ywuyrIGAP0TwNgrrb-zDmL4SQRALU6LLXhg",
    },
  };
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
      options
    ).then((response) => response.json());

    const {results} = data

    const youtubeVideo = results.find(video => video.type === 'Trailer')

    window.open(`https://www.youtube.com/watch?v=${youtubeVideo.key}`, 'blank')


  } catch (error) {
    console.log(error);
  }
}

function createMovieLayout({ id, title, stars, image, time, year }) {
  return `
  <div class="movie">
  <div class="title">
    <span>${title}</span>
    <div>
      <img src="/assets/icons/Star.svg" alt="">
      <p>${stars}</p>
    </div>
  </div>

  <div class="poster">
    <img src="https://image.tmdb.org/t/p/w500${image}" alt="Imagem de ${title}">
  </div>
  
  <div class="info">
    <div class="duration">
      <img src="/assets/icons/Clock.svg" alt="">
      <span>${time}</span>
    </div>

    <div class="year">
      <img src="/assets/icons/CalendarBlank.svg" alt="">
      <span>${year}</span>
    </div>
  </div>

  <button onclick="watch(event)" data-id="${id}" >
    <img src="/assets/icons/Play.svg" alt="">
    <span>Assistir Trailer</span>
  </button>
</div>
  `;
}

function select3Videos(results) {
  const random = () => Math.floor(Math.random() * results.length);

  let selectedVideos = new Set();

  while (selectedVideos.size < 3) {
    selectedVideos.add(results[random()].id);
  }

  return [...selectedVideos];
}

function minutesToHourMinutesAndSeconds(minutes) {
  const date = new Date(null);
  date.setMinutes(minutes);
  return date.toISOString().slice(11, 19);
}

async function start() {
  // pegar as sugestões de filmes da API
  const { results } = await getMovies()
  // pegar randomicamente 3 filmes para sugestão
  const best3 = select3Videos(results).map(async (movie) => {
    //pegar informações extras do 3 filmes
    const info = await getMoreInfo(movie);

    // organizar os dados para ....
    const props = {
      id: info.id,
      title: info.title,
      stars: Number(info.vote_average).toFixed(1),
      image: info.poster_path,
      time: minutesToHourMinutesAndSeconds(info.runtime),
      year: info.release_date.slice(0, 4),
    };

    return createMovieLayout(props);
  });
  const output = await Promise.all(best3);

  // substituir o conteúdo dos movies lá no html
  document.querySelector(".movies").innerHTML = output.join("");
}

start();
