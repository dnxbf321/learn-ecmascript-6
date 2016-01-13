const world = 'world';

var txt = `hello world`;

var txt2 = `
hello world
`;

var txt3 = `hello ${world}`;

console.log(txt);
console.log(txt2);
console.log(txt3);


var message = SaferHTML`<p>Lily has sent you a message.</p>`;
function SaferHTML(templateData) {
  var s = templateData[0];
  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);

    s += arg.replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    s += templateData[i];
  }
  return s;
}