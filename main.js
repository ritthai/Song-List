angular.module('songListApp', []);

angular.module('songListApp').controller('SongListCtrl', function ($scope) {
  $scope.songs = window.songs;

  var star = '★';

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
          'http://www.youtube.com/results?search_query=' +
          (song.artist + ' ' + song.title).replace(/\s/g, "+")
        )
      );
  };

  $scope.songIsVisible = function (song) {
    if ($scope.filterRating) {
      return song.rating === $scope.filterRating;
    }
    return true;
  };
});
