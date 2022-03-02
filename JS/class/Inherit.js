// 클래스 상속 Inherit의 이해
// 클래스의 상속은 앞서 만들어 놓은 클래스의 기능들을 그대로 가져다 쓸 수 있으면서도, 상속받은 클래스의 고유한 기능을
// 추가할 수 있기 때문에 체계적으로 구조화 된 서비스를 개발하는데 아주 중요한 역할을 합니다.

// 키워드
// 1. extends - 상속받을 클래스를 지정하는 지시자입니다.
//class ChildClass extends ParentClass {}
// 이런 방식으로 부모 클래스(Parent Class)를 상속받게 됩니다. 호출하지 않으면 부모 클래스의 생성자에서 초기화한 변수나
// 메서드를 사용할 수 없게 됩니다.

// 2. super - 부모 클래스의 생성자(constructor()) 를 호출합니다. 자식 클래스의 생성자에서 호출하며,
// 부모 클래스의 생성자를 호출합니다.
// class ChildClass2 extends ParentClass {
//   constructor(param) {
//     super(param);
//     //자식 클래스에서 추가로 사용할 변수 설정
//   }
//   //추가 메서드 작성
// }

// 클래스 상속 구현예시
class Person {
  constructor(firstname, lastname, age, gender) {
    this.name = { first: firstname, last: lastname };
    this.age = age;
    this.gender = gender;
  }
  getAge(firstname, lastname) {
    return this.age;
  }
  getGender(firstname, lastname) {
    return this.gender;
  }
}
// Person 을 상속 받아 Teacher 클래스 생성
class Teacher extends Person() {
  constructor(firstname, lastname, age, gender, subject) {
    super(firstname, lastname, age, gender);
    this.subject = subject;
  }
  getSubject(firstname, lastname) {
    return this.subject;
  }
}
// Person 을 상속 받아 Student 클래스 생성
class Student extends Person() {
  constructor(firstname, lastname, age, gender, grade) {
    super(firstname, lastname, age, gender);
    this.grade = grade;
  }
  getGrade(firstname, lastname) {
    return this.grade;
  }
}
let teacher = new Teacher("라", "이언", 5, "male", "math");
let student = new Student("어", "피치", 4, "female", 3);

console.log(teacher.getSubject("라", "이언"));
console.log(student.getAge("어", "피치"));
console.log(student.getSubject("어", "피치"));
