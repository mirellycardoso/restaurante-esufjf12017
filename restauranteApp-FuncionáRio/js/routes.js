angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('cadastro', {
    url: '/page5',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('cadastroDeProprietRio', {
    url: '/page6',
    templateUrl: 'templates/cadastroDeProprietRio.html',
    controller: 'cadastroDeProprietRioCtrl'
  })

  .state('cadastroDeCliente1De2', {
    url: '/page7',
    templateUrl: 'templates/cadastroDeCliente1De2.html',
    controller: 'cadastroDeCliente1De2Ctrl'
  })

  .state('pagamento2De2', {
    url: '/page8',
    templateUrl: 'templates/pagamento2De2.html',
    controller: 'pagamento2De2Ctrl'
  })

  .state('selecionarMesas', {
    url: '/page9',
    templateUrl: 'templates/selecionarMesas.html',
    controller: 'selecionarMesasCtrl'
  })

  .state('menu.cardPio', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cardPio.html',
        controller: 'cardPioCtrl'
      }
    }
  })

  .state('menu.pizzaItaliana', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pizzaItaliana.html',
        controller: 'pizzaItalianaCtrl'
      }
    }
  })

  .state('menu.pratosPrincipais', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pratosPrincipais.html',
        controller: 'pratosPrincipaisCtrl'
      }
    }
  })

  .state('menu.pedidos', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedidos.html',
        controller: 'pedidosCtrl'
      }
    }
  })

  .state('configuraEs', {
    url: '/page14',
    templateUrl: 'templates/configuraEs.html',
    controller: 'configuraEsCtrl'
  })

  .state('menu.pedido1', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedido1.html',
        controller: 'pedido1Ctrl'
      }
    }
  })

  .state('alterarSenha', {
    url: '/page16',
    templateUrl: 'templates/alterarSenha.html',
    controller: 'alterarSenhaCtrl'
  })

$urlRouterProvider.otherwise('/page4')


});