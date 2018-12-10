var HashnodeCrowdsale = artifacts.require("./CryptoCrowdsale.sol");

module.exports = function(deployer) {
  const startTime = 1544400060; // Yesterday
  const endTime = 1552176060; // Today + 20 days
  deployer.deploy(HashnodeCrowdsale, 
    startTime, 
    endTime,
	12,
    "0x5AD25bF79C3a81eaBB5f8C494be5C441d002Bb0d", // Replace this wallet address with the last one (10th account) from Ganache UI. This will be treated as the beneficiary address. 
	200 * 1000000000000000000,
	50000 * 1000000000000000000
  );
}