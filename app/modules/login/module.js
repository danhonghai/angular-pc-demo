define( [
    '../../app'
] , function ( controllers ) {
    controllers.controller( 'LoginController' , [
            '$scope' , '$state' , 'UserLogin' ,
            function ( $s , $state , UserLogin ) {
                $s.formData = {
                    username : '' ,
                    password : ''
                };

                $s.login = function () {
                    $state.go('logged.index')
                };
            }
        ] );
} );

