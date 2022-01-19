//unCurring
function orderSet(burger, beverage) {
  console.log("세트: " + burger + ", " + beverage);
}
orderSet("치즈버거", "콜라");

//Curring
//한번에 인수를 하나만 받는 함수를 커링이라고 하며, 파샬 어플리케이션 이라고도함.
function orderSet2(burger) {
  return function (beverage) {
    console.log("세트: " + burger + ", " + beverage);
  };
}
let order = orderSet2("치즈버거");
order("콜라");
order("커피");
order("스무디");

//파라메터가 많은 경우 ex
function orderSet3(burger) {
  return function orderBeverage(beverage) {
    return function orderSide(side) {
      return function orderKetchup(yn) {
        return function orderChicken(count) {
          console.log(
            "세트: " +
              burger +
              ", " +
              beverage +
              ", " +
              side +
              ", 캐첩(" +
              yn +
              "), 조각치킨(" +
              count +
              "개)"
          );
        };
      };
    };
  };
}
let order2 = orderSet3("불고기버거")("콜라");
order2("프렌치후라이")("Y")("2");

//order3를 화살표 함수를 사용한 예
const orderSet4 = (burger) => (beverage) => (side) => (yn) => (count) => {
  console.log(
    "세트: " +
      burger +
      ", " +
      beverage +
      ", " +
      side +
      ", 캐첩(" +
      yn +
      "), 조각치킨(" +
      count +
      "개)"
  );
};
let order3 = orderSet4("갈릭버거")("콜라");
order3("프렌치후라이")("N")("2");
