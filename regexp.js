// 添加 u 修饰符匹配双字节的中文（暂不被支持）
var result = /^.$/u.test('我');
console.log(result);