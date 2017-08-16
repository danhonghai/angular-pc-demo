/**
 * 一个用户登录服务。
 * 每次切换状态（state）时都会检查用户是否已登录，
 * 若没有则跳到登录界面。
 */
define( [ '../app' ] , function ( services ) {
    services.factory( 'UserLogin' , [
        '$q' , '$state' , '$http' , '$rootScope' , function ( $q , $state , $http , $rootScope ) {
            return true;
        }
    ] ).run( [
        '$rootScope' , '$urlRouter' , 'UserLogin' ,
        function ( $rootScope , $urlRouter , UserLogin ) {
            
        }
    ] );
} );


