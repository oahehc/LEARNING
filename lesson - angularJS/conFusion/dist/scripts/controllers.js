'use strict';

angular.module('confusionApp')
        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
            $scope.dishes = menuFactory.getDishes();
                        
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

        .controller('FeedbackController', ['$scope', function($scope) {            
            $scope.sendFeedback = function() {                
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
            $scope.dish = menuFactory.getDish(parseInt($stateParams.id,10));
        }])

        .controller('DishCommentController', ['$scope', function($scope) {
            $scope.newComment = {
                                 author:"",
                                 rating:5,
                                 comment:"",
                                 date:""
                                }
            
            $scope.submitComment = function () {
                console.log($scope.newComment);

                //This is how you record the date
                $scope.newComment.date = new Date().toISOString();
                
                //Push your comment into the dish's comment array
                $scope.dish.comments.push($scope.newComment);
                
                //clear input
                $scope.newComment = {
                                     author:"",
                                     rating:5,
                                     comment:"",
                                     date:""
                                    };
                //reset form to pristine
                $scope.commentForm.$setPristine();
            }
        }])

        //implement the IndexController and AboutController
        .controller('IndexController', ['$scope','menuFactory','corporateFactory', function($scope,menuFactory,corporateFactory) {
            $scope.feature = menuFactory.getDish(0);
            $scope.promotion = menuFactory.getPromotion();
            $scope.leader = corporateFactory.getLeader(3);
            
        }])
        .controller('AboutController', ['$scope','corporateFactory', function($scope,corporateFactory) {
            $scope.leaders = corporateFactory.getLeaders();
            
        }])

;
