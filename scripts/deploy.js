async function main(){

const Contract =
await ethers.deployContract(
"ArcSpaceVault"
);

await Contract.waitForDeployment();

console.log(
"Contract:",
await Contract.getAddress()
);

}

main().catch(console.error);
