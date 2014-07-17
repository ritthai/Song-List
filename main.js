/*
Copyright (c) 2014 Ritchie Thai

See the file license.txt for copying permission.
*/

angular.module('songListApp', []);

angular.module('songListApp').controller('SongListCtrl', function ($scope) {
  $scope.songs = window.songs;

  var star = '★';

  var searchUrls = {
    'youtube': 'http://www.youtube.com/results?search_query=',
    'grooveshark': 'http://grooveshark.com/#!/search?q='
  };

  $scope.filterRating = false;
  $scope.searchEngine = 'grooveshark';

  $scope.getStars = function (number) {
    var stars = '';
    for (var i = 0; i < number; i++) {
      stars += star;
    }
    return stars;
  };

  $scope.getSongUrl = function (song) {
    return (
      song.url ||
      (
        searchUrls[$scope.searchEngine] +
        encodeURIComponent(song.artist + ' ' + song.title)
      )
    );
  };

  $scope.songIsVisible = function (song) {
    if (!$scope.shouldShowDisliked && song.rating === 1) { return; }
    if ($scope.filterRating) {
      return song.rating === $scope.filterRating;
    }
    return true;
  };

  $scope.songOrderPredicate = function (song) {
    if ($scope.isSortingByRating) {
      return song.rating ? -song.rating : -3.5;
    }
    if ($scope.isSortingByArtist) {
      return song.artist;
    }
    return $scope.songs.indexOf(song);
  };

  $scope.importSongs = function () {
    var importSongsText = $scope.importSongsText || '';
    var lines = importSongsText.split('\n');
    var songsInTextCount = 0;
    var failedImports = '';
    var importedSongs = [];
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (!line) { continue; }
      songsInTextCount++;
      var splitLine = line.split(' - ');
      if (splitLine.length > 2) {
        failedImports += line + '\n';
        continue;
      }
      var song = {
        artist: splitLine.length == 2 ? splitLine[0] : null,
        title: splitLine.length == 2 ? splitLine[1] : splitLine[0]
      };
      importedSongs.push(song);
    }
    alert('Imported ' + importedSongs.length + ' out of ' + songsInTextCount + ' songs in import text' +
          (failedImports ? ('\n failed imports: \n' + failedImports) : '')
         );
    $scope.importedJSON = JSON.stringify(importedSongs, undefined, 2);
  };
});
