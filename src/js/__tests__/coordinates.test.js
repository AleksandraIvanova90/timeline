import Coordinates from "../Coordinates";
test("метод validInput должен вернуть true", () => {
  expect(Coordinates.validInput("[1.11111, 2.22222]")).toBeTruthy();
  expect(Coordinates.validInput("[11.11111, 22.22222]")).toBeTruthy();
  expect(Coordinates.validInput("[1.11111,2.22222]")).toBeTruthy();
  expect(Coordinates.validInput("1.11111, 2.22222")).toBeTruthy();
  expect(Coordinates.validInput("11.11111, -2.22222")).toBeTruthy();
  expect(Coordinates.validInput("1, 2")).toBeTruthy();
  expect(Coordinates.validInput("1,2")).toBeTruthy();
});

test("метод validInput должен вернуть false", () => {
  expect(Coordinates.validInput("[111.11111, 2.22222]")).toBeFalsy();
  expect(Coordinates.validInput("[11.11111 2.22222]")).toBeFalsy();
});
