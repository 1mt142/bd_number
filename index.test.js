const { bnToEnNum, enToBnWord } = require("./index");

// bnToEnNum
test("৮৯৭৪২৩৬৩৬৯৬ === 89742363696", () => {
  expect(bnToEnNum("৮৯৭৪২৩৬৩৬৯৬")).toBe("89742363696");
});

// enToBnWord
test("1 === এক", () => {
  expect(enToBnWord("50")).toBe("পঞ্চাশ");
});
