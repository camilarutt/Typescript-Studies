/* #########################################################
      This is the file for the lessons about TYPE ALIAS,
  the basic syntax, the possible of integration and limitations
########################################################### */
var coordinate = { x: 34, y: 2 }; // inserting values on a variable
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
} // using the type as a parameter in a function. This function expects an object as return value
var age = 84; // valid
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
printSong(mySong); // Brasil - Robson
var myPoint = { x: 1, y: 3 }; // it accepts to not having y
var user = {
    id: 12558,
    username: "robsona",
};
console.log(user.id); // valid "122558"
var happyFace = {
    height: 4,
    color: "yellow",
};
var granja = {
    pigglets: 7,
    breed: "Galinha Preta",
    age: 9,
};
