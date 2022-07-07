"reach 0.1";

export const main = Reach.App(() => {
  const A = Participant("Alice", {
    // Specify Alice's interact interface here
    getInfo: Fun([], Tuple(Address, Token)),
    log: Fun(true, Null),
  });
  const B = Participant("Bob", {
    // Specify Bob's interact interface here
  });

  init();

  // The first one to publish deploys the contract
  A.publish();
  commit();
  // The second one to publish always attaches
  B.publish();
  commit();
  // write your program here

  B.publish();
  const Buyers = new Set();

  A.only(() => {
    const [buyerAddress, tokenId] = declassify(interact.getInfo());

    check(buyerAddress == B, "Should be Bob");
  });

  commit();
  A.publish(buyerAddress, tokenId);
  Buyers.insert(buyerAddress);
  A.interact.log("Added Address to Set: ", buyerAddress);

  commit();
  A.pay([[5555555, tokenId]]);
  A.interact.log("Moving money into contract");

  commit();
  A.publish();

  if (Buyers.member(B)) {
    transfer([[balance(tokenId), tokenId]]).to(B);
    A.interact.log("Bob is authorized! Money incoming.");
  } else {
    transfer([[balance(tokenId), tokenId]]).to(A);
    A.interact.log("We do not know you. Shoo!");
  }

  commit();
  exit();
});
