pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract CryptoToken is MintableToken {
  string public name = "Tycoon Tokens";
  string public symbol = "CTY";
  uint8 public decimals = 18;
}