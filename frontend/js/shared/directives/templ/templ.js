
export default (ngModule) =>{
    ngModule.directive('templ', templDirective);

    function templDirective($log){
        require('./templ.less');

        return{
            restrict: 'E',
            scope: {},
            template: require('./templ.html'),
            controllerAs: 'vm',
            controller: function (){
                const vm = this;
                vm.greeting = 'This is template';
            } 
        };
    };
}