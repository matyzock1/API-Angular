interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Te necesito",
    details: {
        author: "Anuel", 
        year: 2018
    }
}

// const song = 'Nueva cancion';


//Podemos desestructurar el objeto para rescatar solo una variable.
const { song:anotherSong, songDuration, details } = audioPlayer;
const { author:songAuthor, year:yearSong } = details;


console.log('Song: ', anotherSong);
console.log('Duration: ', songDuration);
console.log('Author: ', songAuthor);
console.log('Año: ', yearSong);

//Desestructuracion de arreglos donde ignoramos las  primeras posiciones y si trunks no existe indicará un msj de notfound.
const [, , trunks = 'Not Found']:string[] = ["Goku", "Vegeta"];

console.log(trunks);

export {};