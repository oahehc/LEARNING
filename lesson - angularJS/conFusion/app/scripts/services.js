'use strict';

angular.module('confusionApp')
    .constant("baseURL","http://localhost:3000/")
    .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL){
        
        this.getDishes = function(){
            //return $http.get(baseURL+"dishes");
            return $resource(baseURL+"dishes/:id",null,{'update':{method:'PUT'}});
        };
//        this.getDish = function(index){
//            return $http.get(baseURL+"dishes/"+index);
//        };
    
        // implement a function named getPromotion that returns a selected promotion.
        this.getPromotion = function(){
            //return promotions[0];
            return $resource(baseURL+"promotions/:id",null,{'update':{method:'PUT'}});
            //return $resource(baseURL+"promotions/:id",null,{'update':{method:'PUT'}});
        };  
        
        this.getFeedback = function(){
            //return promotions[0];
            return $resource(baseURL+"feedback/:id",null,{'update':{method:'PUT'}});
            //return $resource(baseURL+"promotions/:id",null,{'update':{method:'PUT'}});
        };  
    }])
    .service('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL){
        this.getLeaders = function(){
            //return $resource(baseURL+"leadership/:id",null,{'update':{method:'PUT'}});
            return $resource(baseURL+"leadership/:id",null,{'update':{method:'PUT'}});
        };    
    
        // Implement two functions, one named getLeaders,the other named getLeader(index)
//        corpfac.getLeaders = function(){
//            return leadership;
//        };
//        corpfac.getLeader = function(index){
//            return leadership[index];
//        };   
    }])

;