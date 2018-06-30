angular.module('conFusion.controllers', [])

.controller('AppCtrl', function($scope,$ionicModal,$localStorage,$ionicPlatform,$cordovaCamera,$cordovaImagePicker) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Create the login modal
  $scope.loginData = $localStorage.getObject('userinfo','{}'); //check localstorage to get user information
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $localStorage.storeObject('userinfo',$scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
    
    
  // create register modal
  $scope.registration = {};
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.registerform = modal;
  });
      $scope.closeRegister = function() {
        $scope.registerform.hide();
      };
      $scope.register = function() {
        $scope.registerform.show();
      };
      $scope.doRegister = function() {
        console.log('Doing register', $scope.registration);
        $timeout(function() {
          $scope.closeRegister();
        }, 1000);
      };
    
    $ionicPlatform.ready(function(){
    //setting camera plugin
        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false            
        };
        $scope.takePicture = function(){
            $cordovaCamera.getPicture(options).then(function(imageData){
                $scope.registration.imgSrc = "data:image/jpeg;base64," + imageData;
            },function(err){
                console.log(err);
            });
            $scope.registerform.show();
        }
    //setting album plugin
        var options = {
            maximumImagesCount: 1,
            width: 100,
            height: 100,
            quality: 50
        };
        $scope.selectPicture = function(){
            $cordovaImagePicker.getPictures(options)
            .then(function (results) {
                $scope.registration.imgSrc = "data:image/jpeg;base64," + results[0];
                console.log('Image URI: ' + results[0]);
            }, function(err) {
                console.log(err);
            });   
            $scope.registerform.show();  
        }
    })
  
    

  // Create the reserve modal
  $scope.reservation = {};
  $ionicModal.fromTemplateUrl('templates/reserve.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.reserveform = modal;
  });
      $scope.closeReserve = function() {
        $scope.reserveform.hide();
      };
      $scope.reserve = function() {
        $scope.reserveform.show();
      };
      $scope.doReserve = function() {
        console.log('Doing reservation', $scope.reservation);
        $timeout(function() {
          $scope.closeReserve();
        }, 1000);
      };
})

.controller('MenuController',['$scope', 'dishes', 'favoriteFactory', 'baseURL', '$ionicListDelegate', '$ionicPlatform', '$cordovaLocalNotification', '$cordovaToast', function ($scope, dishes, favoriteFactory, baseURL, $ionicListDelegate, $ionicPlatform, $cordovaLocalNotification, $cordovaToast) {

    $scope.baseURL = baseURL;
    $scope.tab = 1;
    $scope.filtText = '';
//    $scope.showDetails = false;
//    $scope.showMenu = false;
    $scope.dishes = dishes;

    $scope.select = function(setTab) {
        $scope.tab = setTab;

        if (setTab === 2) {
            $scope.filtText = "appetizer";
        }
        else if (setTab === 3) {
            $scope.filtText = "mains";
        }
        else if (setTab === 4) {
            $scope.filtText = "dessert";
        }
        else {
            $scope.filtText = "";
        }
    };

    $scope.isSelected = function (checkTab) {
        return ($scope.tab === checkTab);
    };

    $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
    };
    
    
    $scope.addFavorite = function(index){
        console.log("index is " + index);
        favoriteFactory.addToFavorites(index);
        $ionicListDelegate.closeOptionButtons();
        
        $ionicPlatform.ready(function () {
            $cordovaLocalNotification.schedule({
                id: 1,
                title: "Added Favorite",
                text: $scope.dishes[index].name
            }).then(function () {
                console.log('Added Favorite '+$scope.dishes[index].name);
            },
            function () {
                console.log('Failed to add Notification ');
            });

            $cordovaToast
              .show('Added Favorite '+$scope.dishes[index].name, 'long', 'center')
              .then(function (success) {
                  // success
              }, function (error) {
                  // error
              });
        });
        
        
        
    }
}])

.controller('DishDetailController', ['$scope','$stateParams','dish','menuFactory','baseURL','$ionicPopover','favoriteFactory','$ionicModal','$timeout', function($scope, $stateParams,dish, menuFactory, baseURL,$ionicPopover,favoriteFactory,$ionicModal,$timeout) {

    $scope.baseURL = baseURL;
    $scope.dish = dish;
    
    //popover for more function
    $ionicPopover.fromTemplateUrl('templates/myPopover.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });
    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };
    $scope.closePopover = function() {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });  
    
    
    /*add to favorite function for popover*/
    $scope.addFavoritePlus = function(){
        console.log("index is " + $stateParams.id);
        favoriteFactory.addToFavorites(parseInt($stateParams.id,10));
        $scope.popover.hide();
    }
    

      // Create the comment modal that we will use later   
      $scope.newComment = {rating:5, comment:"", author:"", date:""};
      $ionicModal.fromTemplateUrl('templates/comment.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.commentform = modal;
      });
      $scope.closeComment = function() {
        $scope.commentform.hide();
      };
      $scope.comment = function() {
        $scope.commentform.show();
        $scope.popover.hide();
      };
      $scope.doComment = function() {
        $scope.newComment.date = new Date().toISOString();
        console.log('Doing comment', $scope.newComment);
        $scope.dish.comments.push($scope.newComment);
        menuFactory.update({id:$scope.dish.id},$scope.dish);
        $scope.newComment = {rating:5, comment:"", author:"", date:""};
        $scope.commentform.hide();
      };
    
    
}])

.controller('IndexController', ['$scope','baseURL','dish','promotion','corporate',function($scope,baseURL,dish,promotion,corporate) {            
    $scope.baseURL = baseURL;
    $scope.leader = corporate;
    $scope.dish = dish;
    $scope.promotion = promotion;
}])

.controller('AboutController', ['$scope','baseURL','corporates', function($scope,baseURL,corporates) {
    $scope.baseURL = baseURL;
    $scope.leaders = corporates;
}])

.controller('FavoritesController', ['$scope','dishes','favorites', 'favoriteFactory', 'baseURL', '$ionicListDelegate','$ionicPopup','$ionicLoading','$timeout', function ($scope,dishes,favorites,favoriteFactory,baseURL,$ionicListDelegate,$ionicPopup,$ionicLoading,$timeout) {

    $scope.baseURL = baseURL;
    $scope.shouldShowDelete = false;    
    //show loading message at begin
//    $ionicLoading.show({
//        template: '<ion-spinner></ion-spinner> Loading...'
//    });
    
    //get favorites and dish data
    $scope.favorites = favorites;    
    $scope.dishes = dishes;

    //show delete button
    $scope.toggleDelete = function () {
        $scope.shouldShowDelete = !$scope.shouldShowDelete;
        console.log($scope.shouldShowDelete);
    }    
    //delete function
    $scope.deleteFavorite = function (index) {
        var confirmPopup = $ionicPopup.confirm({
           title: 'Confirm Delete',
           template: 'Are you sure you want to delete this item?'
        });
        confirmPopup.then(function(res){ 
             if(res){ 
                 console.log('Ok to delete'); 
                 favoriteFactory.deleteFromFavorites(index); 
             }else{ 
                 console.log('Canceled delete'); 
             } 
        })        
        $scope.shouldShowDelete = false;
    }
    
}])

.filter('favoriteFilter', function () {
    return function (dishes, favorites) {
        var out = [];
        for (var i = 0; i < favorites.length; i++) {
            for (var j = 0; j < dishes.length; j++) {
                if (dishes[j].id === favorites[i].id)
                    out.push(dishes[j]);
            }
        }
        return out;
    }
})
;


//.controller('DishCommentController', ['$scope', 'menuFactory', function($scope,menuFactory) {
//
//    $scope.mycomment = {rating:5, comment:"", author:"", date:""};
//
//    $scope.submitComment = function () {
//
//        $scope.mycomment.date = new Date().toISOString();
//        console.log($scope.mycomment);
//
//        $scope.dish.comments.push($scope.mycomment);
//menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);
//
//        $scope.commentForm.$setPristine();
//
//        $scope.mycomment = {rating:5, comment:"", author:"", date:""};
//    }
//    
//    
//}])



//.controller('ContactController', ['$scope', function($scope) {
//
//    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
//
//    var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
//
//    $scope.channels = channels;
//    $scope.invalidChannelSelection = false;
//
//}])


//.controller('FeedbackController', ['$scope', 'feedbackFactory', function($scope,feedbackFactory) {
//
//    $scope.sendFeedback = function() {
//
//        console.log($scope.feedback);
//
//        if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
//            $scope.invalidChannelSelection = true;
//            console.log('incorrect');
//        }
//        else {
//            $scope.invalidChannelSelection = false;
//            feedbackFactory.save($scope.feedback);
//            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
//            $scope.feedback.mychannel="";
//            $scope.feedbackForm.$setPristine();
//            console.log($scope.feedback);
//        }
//    };
//}])
