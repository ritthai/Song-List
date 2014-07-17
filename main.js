(function () {

  var songs = window.songs;

  var init = function () {
    showAllExceptDislikedSongs(songs);
  };

  window.showSongs = function () {
    printSongs(songs);
  };

  var showAllExceptDislikedSongs = window.showAllExceptDislikedSongs = function () {
    var filteredSongs = filterOutDislikedSongs(songs);
    printSongs(filteredSongs);
  };

  window.showSongsFilteredByRating = function (rating) {
    var filteredSongs = filterSongsByRating(songs, rating);
    printSongs(filteredSongs);
  };

  window.showObscureSongs = function () {
    var filteredSongs = filterForObscureSongs(songs);
    printSongs(filteredSongs);
  };

  window.showNonObscureSongs = function () {
    var filteredSongs = filterForNonObscureSongs(songs);
    printSongs(filteredSongs);
  };

  window.showJson = function () {
    printJson(songs);
  };

  var filterOutDislikedSongs = function (songs) {
    var filteredSongs = [],
        song = null,
        i;
    for (i = 0; i < songs.length; i++) {
      song = songs[i];
      if (song.rating !== 1) { filteredSongs.push(song); }
    }
    return filteredSongs;
  };

  var filterSongsByRating = function (songs, rating) {
    var filteredSongs = [],
        song = null,
        i;
    for (i = 0; i < songs.length; i++) {
      song = songs[i];
      if (song.rating === rating) { filteredSongs.push(song); }
    }
    return filteredSongs;
  };

  var filterForObscureSongs = function (songs) {
    var filteredSongs = [],
        song = null,
        i;
    for (i = 0; i < songs.length; i++) {
      song = songs[i];
      if (song.isObscure) { filteredSongs.push(song); }
    }
    return filteredSongs;
  };

  var filterForNonObscureSongs = function (songs) {
    var filteredSongs = [],
        song = null,
        i;
    for (i = 0; i < songs.length; i++) {
      song = songs[i];
      if (!song.isObscure) { filteredSongs.push(song); }
    }
    return filteredSongs;
  };

  var printSongs = function (songs) {
    var output = "<table>" +
        "<tr> <th>Artist</th> <th>Title</th> <th>Rating</th> <th>Website</th> </tr>";
    for (var i = 0; i < songs.length; i++) {
      output += "<tr>" +
        "<td>" + songs[i].artist + "</td>" + "<td>" +
        "<a href=\"http://www.youtube.com/results?search_query=" +
        (songs[i].artist + " " + songs[i].title).replace(/\s/g, "+") + "\">" + songs[i].title + "</a>" +
        "</td>" +
        "<td>" + (songs[i].hasOwnProperty("rating") ? songs[i].rating : "") + "</td>" +
        "<td>" + (songs[i].hasOwnProperty("website") ? songs[i].website : "") + "</td>" +
        "</tr>";
    }
    output += '</table>';
    document.getElementById("songs").innerHTML = output;
  };

  var printJson = function (jsonData) {
    var output = "<pre>" + JSON.stringify(jsonData, null, "\t") + "</pre>";
    document.getElementById("songs").innerHTML = output;
  };

  init();
}());
