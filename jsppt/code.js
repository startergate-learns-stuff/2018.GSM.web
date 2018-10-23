/*var scores = new Array(88,45,90);

for (var score = 0; score < scores.length; score++) {
  switch (scores[score] / 10 - scores[score] % 10 / 10) {
    case 9:
    case 10:
      console.log("수");
      break;
    case 8:
      console.log("우");
      break;
    case 6:
    case 7:
      console.log("미");
      break;
    case 4:
    case 5:
      console.log("양");
      break;
    default:
      console.log("가");
      break;
  }
  console.log(scores[score]/10);
}
*/

var a = new Array("미세먼지", "비리유치원명단", "한국파나마", "환희유치원");

for (var variable in a) {
  console.log(variable + " : " + a[variable]);
}
