define( [
    '../../app' ,
    '../../directives/index-des'
] , function ( controllers ) {
    controllers.controller( 'IndexController' , ['$scope' ,function ( $s ) {
                $s.des = '这里是登录进来之后的首页，刷新本页会重新跳回到登录界面（因为我没有把登录状态记录在 localStorage里）';
            }
        ] )
    		.controller( 'TestController' , ['$scope' ,function ( $s ) {
                $s.test ="123213213";
            }
        ] );
} );

