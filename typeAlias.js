"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var coordinate = { x: 34, y: 2 };
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age = 84;
function calculateEarnings(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Brasil",
    artist: "Robson",
    numStreams: 251584,
    credits: { producer: "Hudson", writer: "Maria" },
};
calculateEarnings(mySong);
printSong(mySong);
