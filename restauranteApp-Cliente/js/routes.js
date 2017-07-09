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

  .state('abrirConta', {
    url: '/page9',
    templateUrl: 'templates/abrirConta.html',
    controller: 'abrirContaCtrl'
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

  .state('menu.cocaCola2L', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cocaCola2L.html',
        controller: 'cocaCola2LCtrl'
      }
    }
  })

  .state('menu.batataFritaPorO', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/batataFritaPorO.html',
        controller: 'batataFritaPorOCtrl'
      }
    }
  })

  .state('menu.sucoDeLaranja', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sucoDeLaranja.html',
        controller: 'sucoDeLaranjaCtrl'
      }
    }
  })

  .state('configuraEs', {
    url: '/page12',
    templateUrl: 'templates/configuraEs.html',
    controller: 'configuraEsCtrl'
  })

  .state('alterarSenha', {
    url: '/page13',
    templateUrl: 'templates/alterarSenha.html',
    controller: 'alterarSenhaCtrl'
  })

  .state('editarPagamento', {
    url: '/page14',
    templateUrl: 'templates/editarPagamento.html',
    controller: 'editarPagamentoCtrl'
  })

  .state('menu.fecharConta1De2', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fecharConta1De2.html',
        controller: 'fecharConta1De2Ctrl'
      }
    }
  })

  .state('menu.fecharConta2De2', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fecharConta2De2.html',
        controller: 'fecharConta2De2Ctrl'
      }
    }
  })

  .state('menu.pratosPrincipais', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pratosPrincipais.html',
        controller: 'pratosPrincipaisCtrl'
      }
    }
  })

  .state('menu.carrinho', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carrinho.html',
        controller: 'carrinhoCtrl'
      }
    }
  })

  .state('menu.bebidas', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bebidas.html',
        controller: 'bebidasCtrl'
      }
    }
  })

  .state('historicoDePedidos', {
    url: '/page21',
    templateUrl: 'templates/historicoDePedidos.html',
    controller: 'historicoDePedidosCtrl'
  })

  .state('detalhesDaCompra', {
    url: '/page22',
    templateUrl: 'templates/detalhesDaCompra.html',
    controller: 'detalhesDaCompraCtrl'
  })

  .state('detalhesDaCompra2', {
    url: '/page23',
    templateUrl: 'templates/detalhesDaCompra2.html',
    controller: 'detalhesDaCompra2Ctrl'
  })

  .state('menu.combos', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/combos.html',
        controller: 'combosCtrl'
      }
    }
  })

  .state('menu.pizzaCocaCola', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pizzaCocaCola.html',
        controller: 'pizzaCocaColaCtrl'
      }
    }
  })

  .state('menu.entradas', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/entradas.html',
        controller: 'entradasCtrl'
      }
    }
  })

  .state('menu.meusPedidos', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meusPedidos.html',
        controller: 'meusPedidosCtrl'
      }
    }
  })

  .state('menu.pedido1', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedido1.html',
        controller: 'pedido1Ctrl'
      }
    }
  })

  .state('menu.opiniO', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/opiniO.html',
        controller: 'opiniOCtrl'
      }
    }
  })

  .state('menu.cupom', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cupom.html',
        controller: 'cupomCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page4')


});