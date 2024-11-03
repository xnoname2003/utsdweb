// Nama    : Chaerul Cahyadi
// NPM     : 4523210120
// Matkul  : Desain Web
// Dosen   : Adi Wahyu Pribadi, S.Si., M.Kom
// Web ini ditujukan untuk nilai UTS matakuliah Desain Web

$(document).ready(function () {
    $('.carousel').carousel();
});

function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    trailer.classList.toggle('active');
}

// Data Film
const moviesData = [
    {
        titleName: "joker",
        titleImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Joker_%282019%29_logotype.png/800px-Joker_%282019%29_logotype.png?20200409175950",
        year: "2024",
        rating: "5.3/10",
        duration: "2h 18m",
        genre: "Drama",
        description: "Struggling with his dual identity, failed comedian Arthur Fleck meets the love of his life, Harley Quinn, while incarcerated at Arkham State Hospital.",
        playLink: "#",
        listLink: "#",
        background: "https://image.tmdb.org/t/p/original/AVWlQpVhpudyFsSh3OQIieHHYf.jpg",
        image: "https://m.media-amazon.com/images/M/MV5BYTkyM2JlNjctMmJiOC00ZTZiLWFlNjQtOTMwMjlhNDliZGIwXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        trailer: "https://www.youtube.com/embed/_OKAwz2MsJs?si=3yFNBSJjU_lvGacv"
    },
    {
        titleName: "transformers-one",
        titleImage: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cd278d3d-60e1-4278-91f8-538d45e6eb88/dh96psn-adbf5c7d-e037-4cc3-99c6-bc002f7ac241.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkMjc4ZDNkLTYwZTEtNDI3OC05MWY4LTUzOGQ0NWU2ZWI4OFwvZGg5NnBzbi1hZGJmNWM3ZC1lMDM3LTRjYzMtOTljNi1iYzAwMmY3YWMyNDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SkVRuyjdjT58696GoU7FTtVAqQkbe91zPrhhYZYWuJk",
        year: "2024",
        rating: "7.7/10",
        duration: "1h 44m",
        genre: "Adventure",
        description: "The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but who once were friends bonded like brothers who changed the fate of Cybertron forever.",
        playLink: "#",
        listLink: "#",
        background: "https://image.tmdb.org/t/p/original/j37VQlM7FuhHRRB1z4sFSJ0W4je.jpg",
        image: "https://m.media-amazon.com/images/M/MV5BZWI1ZDY1YTQtMjRkNy00ZDZhLWE3OTItMTIwNzliY2Y1MTZhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/5a09yJU-mCI?si=je7SeHw7x3dCw0KC"
    },
    {
        titleName: "the-wild-robot",
        titleImage: "https://image.tmdb.org/t/p/original/pcQt1ImGE4fcV7IvBglcTpST5jA.png",
        year: "2024",
        rating: "8.3/10",
        duration: "1h 42m",
        genre: "Survival",
        description: "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
        playLink: "#",
        listLink: "#",
        background: "https://image.tmdb.org/t/p/original/ll1msvrkLWWl3g20bgN7g2ua3JA.jpg",
        image: "https://m.media-amazon.com/images/M/MV5BZjM2M2E3YzAtZDJjYy00MDhkLThiYmItOGZhNzQ3NTgyZmI0XkEyXkFqcGc@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/67vbA5ZJdKQ?si=5kQLs7cmhv7LUOu_"
    },
    {
        titleName: "alien-romulus",
        titleImage: "https://image.tmdb.org/t/p/original/7w0r6x1VEjP2Vdbse2XtyyTcsns.svg",
        year: "2024",
        rating: "7.2/10",
        duration: "1h 59m",
        genre: "Horror",
        description: "While scavenging the deep ends of a derelict space station, a group of young space colonists come face to face with the most terrifying life form in the universe.",
        playLink: "#",
        listLink: "#",
        background: "https://image.tmdb.org/t/p/original/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
        image: "https://m.media-amazon.com/images/M/MV5BMDU0NjcwOGQtNjNjOS00NzQ3LWIwM2YtYWVmODZjMzQzN2ExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/GTNMt84KT0k?si=ZN08o4BvpvzGqNAk"
    },
    {
        titleName: "deadpool",
        titleImage: "https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_log_def_03.png",
        year: "2024",
        rating: "7.8/10",
        duration: "2h 8m",
        genre: "Comedy",
        description: "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.",
        playLink: "#",
        listLink: "#",
        background: "https://image.tmdb.org/t/p/original/A4JG9mkAjOQ3XNJy2oji1Jr224R.jpg",
        image: "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/Yd47Z8HYf0Y?si=IzE1_9JI_pAoCb8l"
    },
    {
        titleName: "officer-black-belt",
        titleImage: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABblV_U9TwuUM0No6Gh0jKQQd-Cexd7tkPDDhBx5gqXAn4qYqq9mR-qpArmwwoh0DWIvks8aQ--qYizbeim2E5S1p2psSMhj6lR9bQciZWT_j329oOMxVt1n_x-kqWPlpEKOf-rxCd-9Ga6iop96_-rSXcvgDJv0EPp_yOqijAuDr9cJ4Y3-Rtw.png?r=197",
        year: "2024",
        rating: "6.8/10",
        duration: "1h 48m",
        genre: "Action",
        description: "A talented martial artist who can't walk past a person in need unites with a probation officer to fight and prevent crime as a martial arts officer.",
        playLink: "#",
        listLink: "#",
        background: "https://image.tmdb.org/t/p/original/wSZbtiFIK1fkKZdSRtn2kz2Ttfd.jpg",
        image: "https://m.media-amazon.com/images/M/MV5BNWRkMTAzOGYtOTE4Ny00Yzg3LWExYzAtNDVhNjJjYmIwMTRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/WNkGz6aKFvk?si=cKorbDs1PBH5UDVN"
    },
    {
        titleName: "borderlands",
        titleImage: "https://dx35vtwkllhj9.cloudfront.net/lionsgate/borderlands/images/regions/gb/updates2/tt.png",
        year: "2024",
        rating: "4.5/10",
        duration: "1h 4m",
        genre: "Action",
        description: "An infamous bounty hunter returns to her childhood home, the chaotic planet Pandora, and forms an unlikely alliance with a team of misfits to find the missing daughter of the most powerful man in the universe.",
        playLink: "#",
        listLink: "#",
        background: "https://image.tmdb.org/t/p/original/iMd7QZvS7q1tuHiYYYVpxz6Spn6.jpg",
        image: "https://m.media-amazon.com/images/M/MV5BYmQ2YjI4ZWItNDVmMi00MjdiLTlhODMtYjcyOGQ1MTU2NmY3XkEyXkFqcGc@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/I_-ctcbo26U?si=2GdvkUuw0dZOHvNP"
    }
]

function setInitialBackground() {
    const banner = document.querySelector('.banner');
    const firstMovieBg = moviesData[0].background; 
    banner.style.backgroundImage = `url(${firstMovieBg})`; 
    banner.style.backgroundRepeat = "no-repeat"; 
}
document.addEventListener('DOMContentLoaded', setInitialBackground);

document.getElementById("trailerMovie").src = moviesData[0].trailer;


function renderMovies() {
    const banner = document.querySelector('.banner');

    // Bersihkan konten banner yang ada sebelumnya
    banner.innerHTML = '';

    // Loop untuk membuat setiap konten film
    moviesData.forEach((movie, index) => {
        const contentHTML = `
            <div class="content ${movie.background.split('.')[0]} ${index === 0 ? 'active' : ''}">
                <img src="${movie.titleImage}" alt="" class="movie-title">
                <h4>
                    <span>${movie.year}</span><span><i>${movie.rating}</i></span>
                    <span>${movie.duration}</span><span>${movie.genre}</span>
                </h4>
                <p>${movie.description}</p>
                <div class="button">
                    <a href="${movie.playLink}"><i class="fa-solid fa-play"></i> Watch</a>
                    <a href="${movie.listLink}"><i class="fa-solid fa-plus"></i> My List</a>
                </div>
            </div>
        `;
        banner.insertAdjacentHTML('beforeend', contentHTML);
    });

    // Tambahkan isi content
    moviesData.forEach((movies) => {
        const contents = `
        <div class="content ${movies.titleName}">
                <img src="${movies.titleImage}" alt="" class="movie-title">
                <h4>
                    <span>${movies.year}</span><span><i>${movies.rating}</i></span>
                    <span>${movies.duration}</span><span>${movies.genre}</span>
                </h4>
                <p>${movies.description}</p>
                <div class="button">
                    <a href="${movies.playLink}"><i class="fa-solid fa-play"></i> Watch</a>
                    <a href="${movies.listLink}"><i class="fa-solid fa-plus"></i> My List</a>
                </div>
            </div>
    `;
        banner.insertAdjacentHTML('beforeend', contents);
    });

    // Tambahkan carousel-box di akhir
    const carouselHTML = `
        <div class="carousel-box">
            <div class="carousel">
                ${moviesData
            .map(
                (movie) => `
                        <div class="carousel-item" onclick="changeBg('${movie.background}', '${movie.titleName}', '${movie.trailer}')">
                            <img src="${movie.image}" alt="${movie.titleImage}">
                        </div>
                    `
            )
            .join('')}
            </div>
        </div>
        <a href="#" class="play" onclick="toggleVideo();"><i class="fa-solid fa-circle-play"></i> Watch Trailer</a>
        <ul class="sci">
            <li><a href="https://www.threads.net/@chaerul_cahyadi"><i class="fa-brands fa-threads"></i></a></li>
            <li><a href="https://www.instagram.com/chaerul_cahyadi/"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://github.com/xnoname2003"><i class="fa-brands fa-github"></i></a></li>
        </ul>
    `;
    banner.insertAdjacentHTML('beforeend', carouselHTML);
}

// Panggil fungsi untuk merender movie content
document.addEventListener('DOMContentLoaded', renderMovies);

function changeBg(bg, title, trailer) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    const trailerMovie = document.getElementById("trailerMovie");

    // Ganti latar belakang banner
    banner.style.backgroundImage = `url(${bg})`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    // ubah url trailer
    trailerMovie.src = trailer;

    // Hapus kelas 'active' dari semua konten
    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}
