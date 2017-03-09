import { 
    DashboardController,
    AccountSettingController,
    SignupController,
    LoginController,
    AdminDashboardController
} from './components/controllers.es6';

import { 
    AccountService,
    AuthService
} from './components/services.es6';

angular
    .module('tracker', [
        'ui.router',
        'ui.bootstrap',
        'angularMoment',
        'angular-storage',
        'angular-jwt',
    ])
    .constant('TEMPLATE_URL', 'app/templates/')
    .constant('API_URL', 'http://localhost:8080/api/')
    .service('AccountService', AccountService)
    .service('AuthService', AuthService)
    .controller('DashboardController', DashboardController)
    .controller('AccountSettingController', AccountSettingController)
    .controller('SignupController', SignupController)
    .controller('LoginController', LoginController)
    .controller('AdminDashboardController', AdminDashboardController);
;
