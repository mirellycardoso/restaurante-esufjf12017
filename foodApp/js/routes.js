angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('cardPio', {
    url: '/page3',
    templateUrl: 'templates/cardPio.html',
    controller: 'cardPioCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('cadastroDeCliente1De2', {
    url: '/page4',
    templateUrl: 'templates/cadastroDeCliente1De2.html',
    controller: 'cadastroDeCliente1De2Ctrl'
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('pedidos', {
    url: '/page6',
    templateUrl: 'templates/pedidos.html',
    controller: 'pedidosCtrl'
  })

  .state('pizzaItaliana', {
    url: '/page7',
    templateUrl: 'templates/pizzaItaliana.html',
    controller: 'pizzaItalianaCtrl'
  })

  .state('pizzaPortuguesa', {
    url: '/page30',
    templateUrl: 'templates/pizzaPortuguesa.html',
    controller: 'pizzaPortuguesaCtrl'
  })

  .state('cocaCola2L', {
    url: '/page25',
    templateUrl: 'templates/cocaCola2L.html',
    controller: 'cocaCola2LCtrl'
  })

  .state('pagamento2De2', {
    url: '/page8',
    templateUrl: 'templates/pagamento2De2.html',
    controller: 'pagamento2De2Ctrl'
  })

  .state('cadastro', {
    url: '/page9',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('cadastroDeProprietRio', {
    url: '/page10',
    templateUrl: 'templates/cadastroDeProprietRio.html',
    controller: 'cadastroDeProprietRioCtrl'
  })

  .state('pratosPrincipais', {
    url: '/page11',
    templateUrl: 'templates/pratosPrincipais.html',
    controller: 'pratosPrincipaisCtrl'
  })

  .state('cadastroDeFuncionario', {
    url: '/page12',
    templateUrl: 'templates/cadastroDeFuncionario.html',
    controller: 'cadastroDeFuncionarioCtrl'
  })

  .state('configuraEs', {
    url: '/page13',
    templateUrl: 'templates/configuraEs.html',
    controller: 'configuraEsCtrl'
  })

  .state('novaCategoria', {
    url: '/page15',
    templateUrl: 'templates/novaCategoria.html',
    controller: 'novaCategoriaCtrl'
  })

  .state('cadastrarPrato', {
    url: '/page16',
    templateUrl: 'templates/cadastrarPrato.html',
    controller: 'cadastrarPratoCtrl'
  })

  .state('meusFuncionRios', {
    url: '/page17',
    templateUrl: 'templates/meusFuncionRios.html',
    controller: 'meusFuncionRiosCtrl'
  })

  .state('editarFuncionRio', {
    url: '/page18',
    templateUrl: 'templates/editarFuncionRio.html',
    controller: 'editarFuncionRioCtrl'
  })

  .state('editarPrato', {
    url: '/page19',
    templateUrl: 'templates/editarPrato.html',
    controller: 'editarPratoCtrl'
  })

  .state('pedido1', {
    url: '/page20',
    templateUrl: 'templates/pedido1.html',
    controller: 'pedido1Ctrl'
  })

  .state('alterarSenha', {
    url: '/page14',
    templateUrl: 'templates/alterarSenha.html',
    controller: 'alterarSenhaCtrl'
  })

  .state('funcionario1', {
    url: '/page21',
    templateUrl: 'templates/funcionario1.html',
    controller: 'funcionario1Ctrl'
  })

  .state('combos', {
    url: '/combos',
    templateUrl: 'templates/combos.html',
    controller: 'combosCtrl'
  })

  .state('pizzaCocaCola', {
    url: '/page23',
    templateUrl: 'templates/pizzaCocaCola.html',
    controller: 'pizzaCocaColaCtrl'
  })

  .state('bebidas', {
    url: '/page26',
    templateUrl: 'templates/bebidas.html',
    controller: 'bebidasCtrl'
  })

  .state('gerenciamento', {
    url: '/page27',
    templateUrl: 'templates/gerenciamento.html',
    controller: 'gerenciamentoCtrl'
  })

  .state('fecharServiOs', {
    url: '/page28',
    templateUrl: 'templates/fecharServiOs.html',
    controller: 'fecharServiOsCtrl'
  })

  .state('tempoMDio', {
    url: '/page29',
    templateUrl: 'templates/tempoMDio.html',
    controller: 'tempoMDioCtrl'
  })

  .state('condimentos', {
    url: '/page31',
    templateUrl: 'templates/condimentos.html',
    controller: 'condimentosCtrl'
  })

  .state('novoCondimento', {
    url: '/page32',
    templateUrl: 'templates/novoCondimento.html',
    controller: 'novoCondimentoCtrl'
  })

  .state('alterarStatus', {
    url: '/page33',
    templateUrl: 'templates/alterarStatus.html',
    controller: 'alterarStatusCtrl'
  })

  .state('menu.pedidosComunsMS', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedidosComunsMS.html',
        controller: 'pedidosComunsMSCtrl'
      }
    }
  })

  .state('menu.receitaMS', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/receitaMS.html',
        controller: 'receitaMSCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page24')


});