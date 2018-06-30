beforeEach(module('confusionApp')); //load controller's module
var MenuController, scope, $httpBackend;
beforeEach(inject(function($controller,_$httpBackend_,$rootScope, menuFactory){
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET("http://localhost:3000/dishes").respond({...});
    scope = $rootScope.$new();
    MenuController = $controller('MenuController',{$scope:scope, menuFactory:menuFactory});
    $httpBackend.flush();    
}))


export.config{
    allScriptsTimeout: 11000,
    specs: ['e2e/*.js'],
    capabilities: {'browserName':'chrome'},
    baseUrl: 'http://localhost:3001/',
    framework: 'jasmine',
    directConnect: true,
    jasmineNodeOpts: {defaultTimeoutInterval: 30000}
};


'use strict'
describe('conFusion App E2E Testing', function(){
    it('should automatically redirect to / when location hash/fragment is empty',function(){
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });
});

describe('menu 0 item',function(){
    beforeEach(function(){
        browser.get('index.html#/menu/0');
    });
    it('should have a name', function(){
        var name = element(by.binding('dish.name'));
        expect(name.getText()).toEqual('Uthapizza Hot $4.99');
    });
})


it('should show the first comment author as', function(){
    element(by.mode('orderText')).sendKeys('author');
    expect(element.all(by.repeater('comment in dish.comments')).count()).toEqual(5);
    var author = element.all(by.repeater('comment in dish.commemts')).firsh().element(by.binding('comment.author'));
    expect(author.getText()).toContain('25 Cent');
})