function triangle(value1, type1, value2, type2){
    let a, b, c, alpha, beta;
    if(!value1 || !type1 || !value2 || !type2){
        console.log("Wrong input");
        return 'failed';
    }
    if(value1 <= 0 || value2 <= 0){
        console.log("Zero or negative input");
        return 'failed';
    }
    if (type1 === 'leg' && type2 === 'hypotenuse') {
        a = value1;
        c = value2;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.atan(a / b) * (180 / Math.PI);
        beta = 90 - alpha;
      } else if (type1 === 'hypotenuse' && type2 === 'leg') {
        c = value1;
        a = value2;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.atan(a / b) * (180 / Math.PI);
        beta = 90 - alpha;
      } else if (type1 === 'leg' && type2 === 'opposite angle') {
        a = value1;
        alpha = value2;
        beta = 90 - alpha;
        b = a / Math.tan(alpha * (Math.PI / 180));
        c = Math.sqrt(a * a + b * b);
      } else if (type1 === 'opposite angle' && type2 === 'leg') {
        alpha = value1;
        a = value2;
        beta = 90 - alpha;
        b = a / Math.tan(alpha * (Math.PI / 180));
        c = Math.sqrt(a * a + b * b);
      } else if (type1 === 'leg' && type2 === 'adjacent angle') {
        a = value1;
        beta = value2;
        alpha = 90 - beta;
        b = a * Math.tan(alpha * (Math.PI / 180));
        c = Math.sqrt(a * a + b * b);
      } else if (type1 === 'adjacent angle' && type2 === 'leg') {
        beta = value1;
        a = value2;
        alpha = 90 - beta;
        b = a * Math.tan(alpha * (Math.PI / 180));
        c = Math.sqrt(a * a + b * b);
      } else if (type1 === 'hypotenuse' && type2 === 'angle') {
        c = value1;
        alpha = value2;
        beta = 90 - alpha;
        a = c * Math.cos(alpha * (Math.PI / 180));
        b = c * Math.sin(alpha * (Math.PI / 180));
      } else if (type1 === 'angle' && type2 === 'hypotenuse') {
        alpha = value1;
        c = value2;
        beta = 90 - alpha;
        a = c * Math.cos(alpha * (Math.PI / 180));
        b = c * Math.sin(alpha * (Math.PI / 180));
      } else if (type1 === 'leg' && type2 === 'leg') {
        a = value1;
        b = value2;
        c = Math.sqrt(a * a + b * b);
        alpha = Math.atan(a / b) * (180 / Math.PI);
        beta = 90 - alpha;
      } else {
        console.log('Сheck the argument types');
        return 'failed';
      }
      if (a >= c || b >= c || alpha >= 90 || beta >= 90) {
        console.log('Incorrect triangle');
        return 'failed';
      }
      
      console.log(`a = ${a}`);
      console.log(`b = ${b}`);
      console.log(`c = ${c}`);
      console.log(`alpha = ${alpha}°`);
      console.log(`beta = ${beta}°`);
      
      return 'success';
}
function Instructions() {
    console.log("The function should take arguments in the following order:");
    console.log("1. The value of the first argument");
    console.log("2. The type of the first argument('leg'  'hypotenuse'  'adjacent angle'  'opposite angle'  'angle'(when the hypotenuse is given))");
    console.log("3. The value of the second argument");
    console.log("4. The type of the second argument('leg'  'hypotenuse'  'adjacent angle'  'opposite angle'  'angle'(when the hypotenuse is given))");
    console.log("For example:");
    console.log('triangle(60, "opposite angle", 5, "leg");');
}
Instructions();