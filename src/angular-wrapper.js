(function() {
  angular
    .module('beauby.jsonApiDataStore', [])
    .factory('JsonApiDataStore', function() {
      return {
        store: JsonApiDataStore,
        Model: JsonApiDataStoreModel
      };
    });
  <%= contents %>
})();
