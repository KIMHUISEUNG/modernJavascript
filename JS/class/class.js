// class 정의하기
// 1. class 클래스명 {} 으로 클래스 외형을 정의합니다.
class Estimate {}

// 2. 클래스 내부에 생성자(constructor) 함수를 정의합니다.
// 클래스 1개에 생성자는 1개만 올 수 있습니다. 필수 함수이며, function 키워드는 사용하지 않습니다.
class Estimate2 {
  constructor() {}
}

// 3. 생성자에 파라메터를 추가합니다.
// new 키워드로 클래스를 생성할 때 인스턴스 변수는 "const" 로 설정하는 것이 기본입니다.
// ES6의 클래스에는 "let unit=[];" 과 같은 변수 선언 X, 메서드만 O.
// 따라서 클래스 객체를 가리키는 this 지시자로 클래스 안에 변수 값을 대입해 동적으로 생성해야 합니다.
class Estimate3 {
  constructor(param) {
    this.unit = param;
  }
}
let unitinfo = [
  { type: "wood", price: 100 },
  { type: "iron", price: 300 },
  { type: "plastic", price: 200 },
];
const estimator3 = new Estimate3(unitinfo);

// 4. 클래스 기본 구조는 다 만들었습니다. 메서드들을 추가해 견적가를 구해봅니다. 클래스 내부의 메서드는 function 키워드를 사용하지 않습니다.
class Estimate4 {
  constructor(param) {
    this.unit = param;
  }
  // 견적가 얻기 메서드
  getEstimate(unittype, width, height) {
    let priceinfo = this.unit.find((item) => item.type == unittype);
    return priceinfo.price * width * height;
  }
  // 배열에 요소 추가 메서드
  addUnit(unit) {
    unit.push(unit);
  }
}
const estimator4 = new Estimate4(unitinfo);
let result = estimator4.getEstimate("wood", 20, 20);
console.log(result);

// &객체를 사용하면 코드가 크고 복잡해 질때 체계적인 개발이 가능하다.
