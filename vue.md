1. vue为什么需要使用虚拟DOM
  * vue的每个数据都有监听器，watch太多，项目庞大后性能影响特别明显，vue2的时候使用虚拟dom watcher 只到组件层，一个组件只有一个warcher,组件内部使用 dom diff
2. vue 的dom diff 和 react 的diff 相比有什么不同  
