// 同步加载
import _ from "lodash";

console.log(_.join(['a', 'b', 'c']))
// 此处省略十万行
console.log(_.join(['a', 'b', 'c']))


// -----------------------------

// 异步加载
// function getComponent() {
//   // magic comment （魔法注释）
//   return import(/* webpackChunkName:"lodash" */ "lodash").then(({ default: _ }) => {
//     var element = document.createElement('div');

//     element.innerHTML = _.join(['Hal', 'Sun'], '-');

//     return element;
//   });
// }

// getComponent().then((element) => {
//   document.bodu.appendChild(element);
// })