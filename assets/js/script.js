class Multimedia {
    #url;

    constructor(url){
        this.#url = url + '?';
    }

    getUrl(){
        return this.#url;
    }

    setUrl(nuevaUrl){
        this.#url = nuevaUrl;
    }

    setInicio(){
        return "Este método es para realizar un cambio en la URL del video"
    }
}

class Reproductor extends Multimedia {
    #id;

    constructor(url, id){
        super(url);
        this.#id = id;
    }

    getId(){
        return this.#id;
    }
    
    playMultimedia(url){
        console.log(url)
        if(url){
            cargarVideo.cargar(this.getId(),url);
        }else{
            cargarVideo.cargar(this.getId(), this.getUrl());
        }
    }

    setInicio(segundos = 0){
        let nuevaUrl;
        if(this.getUrl().includes('autoplay=1')){
            nuevaUrl = this.getUrl() + `&start=${segundos}`
        }else {
            nuevaUrl = this.getUrl() + `start=${segundos}`
        }
        this.setUrl(nuevaUrl);
    }
    autoPlay() {
        let nuevaUrl;
        if(this.getUrl().includes('start')){
            nuevaUrl = this.getUrl() + '&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1'
        }else {
            nuevaUrl = this.getUrl() + 'rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1'
        }
        this.setUrl(nuevaUrl);
    }
}

let cargarVideo = (function(){
    //parte privada
    let cargarPrivado = function(id,url){
        document.getElementById(id).setAttribute('src',url);
    };


    //parte publica
    return {
        cargar: function(id, url){
            cargarPrivado(id,url);
        }
    }
})()

let movie = new Reproductor('https://www.youtube.com/embed/kZIiSxUhAuM', 'peliculas');
movie.setInicio(7);
movie.autoPlay();
movie.playMultimedia();

let music = new Reproductor('https://www.youtube.com/embed/zzHouyi6t4g', 'musica');
music.autoPlay();
music.playMultimedia();


let serie = new Reproductor('https://www.youtube.com/embed/kx0nBaS_q50', 'series');
serie.autoPlay();
serie.playMultimedia();

