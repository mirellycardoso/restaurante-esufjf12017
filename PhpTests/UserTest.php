<?php
require 'user.php';
 
class UserTest extends PHPUnit_Framework_TestCase
{
    private $user;
 
    protected function setUp()
    {
        $this->user = new User();
    }
 
    protected function tearDown()
    {
        $this->user = NULL;
    }
 
    public function testarCadastro()
    {
        $result = $this->user->cadastrarProduto('Frango', 2.50, 'Nah');
        $this->assertEquals(true, $result);
    }
 
}