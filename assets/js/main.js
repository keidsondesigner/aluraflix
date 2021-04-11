const filmsList = ["https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYjJiZmE5ZDgtYWUxZi00MWI1LTg2MmEtZmUwZGE2YzRkNTE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

const nameFilms = ["Liga da Justiça", "Godzilla vs Kong", "WandaVision", "Falcão e Soldado Invnl", "Vingadores", "O Cavaleiro das Trevas"]

const linkFilms = ["https://www.imdb.com/title/tt12361974/?ref_=hm_fanfav_tt_i_1_pd_fp1", "https://www.imdb.com/title/tt5034838/?ref_=hm_fanfav_tt_i_2_pd_fp1", "https://www.imdb.com/title/tt9140560/?ref_=hm_fanfav_tt_i_3_pd_fp1", "https://www.imdb.com/title/tt9208876/?ref_=hm_fanfav_tt_i_4_pd_fp1", "https://www.imdb.com/title/tt4154796/?ref_=hm_fanfav_tt_i_6_pd_fp1", "https://www.imdb.com/title/tt0468569/?ref_=hm_fanfav_tt_i_10_pd_fp1"]


for (let i = 0; i < filmsList.length; i++) {

    const film = "<div class=post><a href=" + linkFilms[i] + " target=_blank rel=external > <img src=" + filmsList[i] + "><p>" + nameFilms[i] + "</p></div>"
    document.querySelector('#container-post').insertAdjacentHTML("beforeend", film)
}

function buttonAddFilm() {
    
    const inputFilm = document.querySelector("#inputFilm")

    const filmsFav = inputFilm.value
    if (filmsFav.endsWith(".jpg")){

        const newImg = "<img src=" + filmsFav + ">"
        document.querySelector('#newFilms').insertAdjacentHTML("beforeend", newImg)

    } else {
        alert("Seu link deve terminar em:  linkdofilme.jpg")
    }
}