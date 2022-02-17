function isSubset(array1, array2) {
  let largerArray;
  let smallerArray;
  let hashTable = {};

  //어느 배열이 더 작은지 알아낸다.
  if (array1 > array2) {
    largerArray = array1;
    smallerArray = array2;
  } else {
    largerArray = array2;
    smallerArray = array1;
  }

  // largerArray의 모든 항목을 hashTable에 저장한다.
  for (const value of largerArray) {
    hashTable[value] = true;
  }

  // smallerArray의 각 항목을 순회하며
  // hashTable에 없는 항목이면 false를 반환한다.
  for (const value of smallerArray) {
    if (hashTable[value]) {
      return false;
    }
  }

  // false를 반환하지 않고 코드에서 여기까지 왔다면
  // smallerArray의 모든 항목이 largerArray에 들어 있다는 뜻이다.
  return true;
}

// * for ... of  반복가능한 객체( Array, Map, Set, String, TypedArray, arguments )에 대해서 반복하고
// 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성합니다.

// const array1 = ['a', 'b', 'c'];

// for (const element of array1) {
//   console.log(element);
// }

// // expected output: "a"
// // expected output: "b"
// // expected output: "c"
