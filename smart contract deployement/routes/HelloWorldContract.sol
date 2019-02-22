pragma solidity ^0.4.0;

contract HelloWorldContract {
  event Hi();
  function sayHi() constant returns (string){
    emit Hi();
    return 'Hello World';
  }
}