'use strict';

angular.module('confusionApp')
        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
            $scope.showMenu = false;
            $scope.message = "Loading ...";
            menuFactory.getDishes().query(
                function(response){
                    $scope.dishes = response;
                    $scope.showMenu = true;
                },
                function(response){
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }            
            );
//            $scope.dishes = {};
//            menuFactory.getDishes().then(
//                function(response){
//                    $scope.dishes = response.data;
//                    $scope.showMenu = true;
//                },
//                function(response){
//                    $scope.message = "Error: " + response.status + " " + response.statusText;
//                }
//            );
                        
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
        }])

        .controller('ContactController', ['$scope', function($scope) {
            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
        }])

        .controller('FeedbackController', ['$scope', 'menuFactory', function($scope, menuFactory) {    
              
                          
            
            
            
            $scope.sendFeedback = function() {                
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    //Push data to server
                    menuFactory.getFeedback().save($scope.feedback);               
                    
                    //clear data
                    //console.log($scope.feedback);
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedbackForm.$setPristine();
                }
            };
        }])
        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
            $scope.showDish = false;
            $scope.message = "Loading ...";
            menuFactory.getDishes().get({id:parseInt($stateParams.id,10)}).$promise.then(
                function(response){
                    $scope.dish = response;
                    $scope.showDish = true;
                },
                function(response){
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );
//            $scope.dish = {};
//            menuFactory.getDish(parseInt($stateParams.id,10)).then(
//                function(response){
//                    $scope.dish = response.data;
//                    $scope.showDish = true;
//                },
//                function(response){
//                    $scope.message = "Error: " + response.status + " " + response.statusText;
//                }
//            );
        }])
        .controller('DishCommentController', ['$scope','menuFactory', function($scope,menuFactory) {
            $scope.newComment = {
                                 author:"",
                                 rating:5,
                                 comment:"",
                                 date:""
                                };
            
            $scope.submitComment = function () {
                console.log($scope.newComment);

                //This is how you record the date
                $scope.newComment.date = new Date().toISOString();
                
                //Push your comment into the dish's comment array
                $scope.dish.comments.push($scope.newComment);
                menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish); //update comment to server
                
                //clear input
                $scope.newComment = {
                                     author:"",
                                     rating:5,
                                     comment:"",
                                     date:""
                                    };
                //reset form to pristine
                $scope.commentForm.$setPristine();
            };
        }])
        .controller('IndexController', ['$scope','menuFactory','corporateFactory', function($scope,menuFactory,corporateFactory) {
            $scope.showDish = false;
            $scope.message = "Loading ...";
            menuFactory.getDishes().get({id:0}).$promise.then(
                function(response){
                    $scope.feature = response;
                    $scope.showDish = true;
                },
                function(response){
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );
//            $scope.feature = {};
//            menuFactory.getDish(0).then(
//                function(response){
//                    $scope.feature = response.data;
//                    $scope.showDish = true;
//                },
//                function(response){
//                    $scope.message = "Error: " + response.status + " " + response.statusText;
//                }
//            );
            //scope.promotion = menuFactory.getPromotion();      
            $scope.showPromotion = false;
            $scope.messagePromotion = "Loading ...";       
            menuFactory.getPromotion().get({id:0}).$promise.then(
                function(response){
                    $scope.promotion = response;
                    $scope.showPromotion = true;
                },
                function(response){
                    $scope.messagePromotion = "Error: " + response.status + " " + response.statusText;
                }
            );
            
            //$scope.leader = corporateFactory.getLeader(3);  
            $scope.showLeader = false;
            $scope.messageLeader = "Loading ...";       
            corporateFactory.getLeaders().get({id:3}).$promise.then(
                function(response){
                    $scope.leader = response;
                    $scope.showLeader = true;
                },
                function(response){
                    $scope.messageLeader = "Error: " + response.status + " " + response.statusText;
                }
            );
            
        }])
        .controller('AboutController', ['$scope','corporateFactory', function($scope,corporateFactory) {
            //$scope.leaders = corporateFactory.getLeaders();
            $scope.showLeader = false;
            $scope.messageLeader = "Loading ...";       
            corporateFactory.getLeaders().query(
                function(response){
                    $scope.leaders = response;
                    $scope.showLeader = true;
                },
                function(response){
                    $scope.messageLeader = "Error: " + response.status + " " + response.statusText;
                }
            );          
            
        }])

;
