app.factory('FlashCardFactory', function ($http) {
    return {
      flashCards: [],
      getFlashCards: function (cat) {
        var config = {};
        if (cat) config.params = {category: cat};
        return $http.get('/cards', config)
        .then(function (res) {
          console.log(res.data)
          return res.data;
        });
      }
    }
  })