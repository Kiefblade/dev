var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

function printLyrics() {
    console.log(lyrics.join(" "));
}
printLyrics();

function printLyricsBackwards() {
      console.log(lyrics.reverse().join(" "));
}

printLyricsBackwards();

function printEveryOther() {
  var moreLyrics = [];
  for (var i = 0; i < lyrics.length; i+=2) {
      moreLyrics.push(lyrics + " ")
  }
      console.log(moreLyrics.join);
}
printEveryOther();
