<?php
    /**
    * 
    */
    class User {
        private $servername;
        private $username;
        private $password;
        private $dbname;
        
        public function __construct() {
            $this->servername = "127.0.0.1";
            $this->username = "root";
            $this->password = "root";
            $this->dbname = "restaurante";
        } 

        public function cadastrarProduto($nome, $preco, $descricao){
            $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
            
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            if (!is_string($nome) || is_numeric($nome) || !is_float($preco) || !is_string($descricao) || is_numeric($descricao)){
                echo "Erro! O nome e descrição não podem ser números";
                return false;
            }

            $sql = "INSERT INTO produtos VALUES(NULL, '$nome', $preco, '$descricao')";

            if ($conn->query($sql) === TRUE) {
                echo "Produto Cadastrado!";
                return true;
            } else {
                echo "Erro!: " . $sql . "<br>" . $conn->error;
                return false;
            }

            $conn->close();
        }   
    }