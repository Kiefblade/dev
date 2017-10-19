var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

/* function printLyrics() {
    for (var i = 0; i < lyrics.length; i++) {
    console.log(lyrics[i] + " ");
  }
}
printLyrics();

function printLyricsBackwards() {
    for (var i = lyrics.length; i >= 0; i--) {
      console.log(lyrics[i] + " ");
    }
}
printLyricsBackwards();
*/
function printEveryOther() {
  for (var i = 0; i < lyrics.length; i+=2) {
    console.log(lyrics[i] + " ");
  }
}
printEveryOther();
