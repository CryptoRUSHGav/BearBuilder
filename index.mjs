import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [accAlice, accBob] = await stdlib.newTestAccounts(2, startingBalance);
console.log("Hello, Alice and Bob!");

console.log("Launching...");
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const theToken = await stdlib.launchToken(accAlice, "TokTok", "TOK", {
  supply: 1000000000,
});

await accBob.tokenAccept(theToken.id);

console.log("Starting backends...");
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    getInfo: () => {
      console.log("Getting Buyer's Address and Token ID");
      return [accBob, theToken.id];
    },
    log: console.log,
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
  }),
]);

console.log("Goodbye, Alice and Bob!");
