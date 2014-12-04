/**
 * Created by 世宁 on 14-12-4.
 */
angular.element(document).ready(function(){
    var listViewDemo = angular.module('listViewDemo',['td-list-view']);
    listViewDemo.controller('testController',['listViewService',function(listViewService){

    }]);
    angular.bootstrap(angular.element('html'),['listViewDemo']);
});