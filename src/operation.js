class Operation {

    multiplication_number(a, num) {
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < a[0].length; j++) {
                a[i][j] = a[i][j] * Math.trunc(num);
            }
          }
          return a;
    }
    
}
  
module.exports = { Operation };