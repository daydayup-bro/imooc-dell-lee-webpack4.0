import { add } from "./math.js";


if (module.hot) {
  module.hot.accept(function() {
  })
  // 关闭指定子模块的HMR
  // module.hot.decline('./extra.js')
}
