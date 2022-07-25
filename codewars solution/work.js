// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
    findSmallestInt(args){
    return Math.min(...args)
    }
} 


// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle){
    return 2 * Math.PI * circle.radius;
} 


// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj){
    const arr = []
    for(item in obj) {
    if(item.length === 5) {
    arr.push(item)
    } 
    if(typeof obj[item] === 'string' && obj[item].length === 5) {
    arr.push(obj[item])
    }  
    }
    return arr
}