function solution(s) {
  let a = s.toLowerCase().split(" ");
  let b = [];
  let c = [];

  for (let i = 0; i < a.length; i++) {
    b.push([a[i][0]]);
  }
  for (let j = 0; j < a.length; j++) {
    c.push(b[j].join("").toUpperCase() + a[j].slice(1, a[j].length));
  }

  return c.join(" ");
}
