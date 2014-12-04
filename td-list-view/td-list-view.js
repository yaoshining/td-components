/**
 * Created by 世宁 on 14-12-4.
 */
(function(window,angular){
    'use strict'
    angular.module('td-list-view',['ng']).service('listViewService',['$log',function($log){
        $log.info('listViewService');
    }]).directive('tdListView',[function(){
            return {
                restrict: "A",
                template: 'listView.tpl.html',
                replace: false,
                transclude: false,
                scope:false,
                compile: function compile(tElement,tAttrs,transclude){
                    return {
                        pre: function preLink(scope, iElement, iAttrs, controller) {

                        },
                        post: function postLink(scope, element, iAttrs, controller) {
                            alert(1);
                        }
                    }
                }
            }
        }]);
})(window,window.angular)