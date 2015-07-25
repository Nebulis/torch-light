// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .controller('ButtonController', function($cordovaFlashlight, $timeout, $ionicPlatform) {

  var vm = this;
  vm.active = false;
  $ionicPlatform.ready(function(){

    $cordovaFlashlight.available().then(function(availability) {

      vm.toggle = function() {
        vm.active = !vm.active;
        $timeout(function() {$cordovaFlashlight.toggle();}, 500);
      }
    })
    $ionicPlatform.on('pause', function() {
      $cordovaFlashlight.switchOff();
    });
    $ionicPlatform.on('resume', function() {
      if(vm.active) {
        $cordovaFlashlight.switchOn();
      }
    });
  });
})
