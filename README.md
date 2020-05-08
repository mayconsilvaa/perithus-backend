<h4 align="center">
  🚀 Projeto Gestor Financeiro - Perithus (Back-End)
</h4>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;
</p>
<br>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](mongodb.com)

## 💻 Projeto

O Gestor Financeiro é um projeto que visa auxiliar na educação econômica e entender melhor como faturar, lucrar com a venda e distribuição dos produtos.

## BACK-END

## :heavy_check_mark: Feito:

- Permitir o cadastro do distribuidor e utilizar e-mail e senha como forma de autenticação, login no sistema.
- Permitir o registro da quantidade de sabonetes comprados em uma data
- Realizar o cálculo dos impostos devidos por mês e ano de referência
- Permitir a consulta de produtos e impostos por mês e ano de referência
- Permitir marcar o imposto como PAGO
- Editar e Excluir um registro criado por ele

## :x: Pendente:

- Calcular 18,5%
- Listar os valores do lote e valor unitário do produto

| Route               |  Params            | Type |
| ------------------- | ------------------- |------|      
|  /users             | name,email,password | post |      
|  /login |  email, password | post      | 
|/product | year, month | get |
|/product |name, quantity, date, price | post|
|/product | productId | get |
|/product | productId | put |
|/product | productId | delete |
|/tribute | year, mont | get |
|/tribute | year, month | post|
|/tribute | productId | get |
|/tribute | productId | put |
|/tribute | productId | delete |



---

Feito com ♥ by Maycon
