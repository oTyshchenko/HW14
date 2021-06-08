import {graph} from './graph';

let counter = 1;
const getMiddleValue = (obj) => {
    return obj.children.reduce((sum, el) => {
        counter++;
        el.children !== undefined ? sum += getMiddleValue(el) : sum += el.value;
        return sum;
    }, obj.value);  
};
console.log(getMiddleValue(graph)/counter);

const getMinValue = (obj) => {
    return obj.children.reduce((max, el) => {
        if (el.children !== undefined) {
            if(getMinValue(el).value < max.value) {
                max = getMinValue(el);
            }
        } else if (el.value < max.value) {
            max = el;
        }
        return max;
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