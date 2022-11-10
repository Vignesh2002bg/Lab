class Block{
constructor(timestamp, data, previousHash = &#39;&#39;) {
this.previousHash = previousHash;
this.timestamp = timestamp;
this.data = data;
11
this.hash = this.calculateHash();
this.nonce = 0;
}
mineBlock():
mineBlock(difficulty) {
/ Keep changing the nonce until the hash of our block starts with
enough zero&#39;s.
while (this.hash.substring(0, difficulty) !== Array(difficulty
+ 1).join(&quot;0&quot;)) {
this.nonce++;
this.hash = this.calculateHash();
}
console.log(&quot;BLOCK MINED: &quot; + this.hash);
}
Calculate:
calculateHash() {
returnSHA256(this.index+this.previousHash+this.timestamp+
this.nonce).toString();
JSON.stringify(this.data) +
}
Class:
constructor() {
this.chain = [this.createGenesisBlock()];
this.difficulty = 3;
}
addBlock:
addBlock(newBlock) {
newBlock.previousHash = this.getLatestBlock().hash;
newBlock.mineBlock(this.difficulty);
this.chain.push(newBlock);
}
