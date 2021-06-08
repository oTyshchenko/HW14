import {graph} from './graph';

const getMiddleValue = (obj) => {
    let summ = 0;
    let counter = 0;
    let currentObject = obj;
    
    const recursion = (object) => {
        summ += object.value;
        counter++;
        if (object.children !== undefined) {
            currentObject = object.children;
            currentObject.forEach(element => recursion(element));
        } 
    };

    recursion(currentObject);

    return summ / counter;
};
console.log(getMiddleValue(graph));

const getMinValue = (obj) => {
    return obj.children.reduce((min, el) => {
        if (el.children !== undefined) {
            if(getMinValue(el).value < min.value) {
                min = getMinValue(el);
            }
        } else if (el.value < min.value) {
            min = el;
        }
        return min;
    }, obj);  
};
console.log(getMinValue(graph));

const getMaxValue = (obj) => {
    return obj.children.reduce((max, el) => {
        if (el.children !== undefined) {
            if(getMaxValue(el).value > max.value) {
                max = getMaxValue(el);
            }
        } else if (el.value > max.value) {
            max = el;
        }
        return max;
    }, obj);   
};
console.log(getMaxValue(graph));