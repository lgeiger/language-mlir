describe("MLIR grammar", () => {
  let grammar;
  beforeEach(() => {
    waitsForPromise(() => atom.packages.activatePackage("language-mlir"));

    runs(() => {
      grammar = atom.grammars.grammarForScopeName("source.mlir");
    });
  });

  return it("parses the grammar", () => {
    expect(grammar).toBeTruthy();
    expect(grammar.scopeName).toBe("source.mlir");
  });
});
