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

console.log(getMiddleValue(graph))

const getMinValue = (obj) => {

    const recursion = (max, el) => {
        if (el.children !== undefined) {
            if(getMinValue(el) < max) {
                max = getMinValue(el);
            }
        } else if (el.value < max) {
            max = el.value;
        }
        return max;
    }

    return obj.children.reduce(recursion, obj.value);
}
console.log(getMinValue(graph));

const getMaxValue = (obj) => {

    const recursion = (max, el) => {
        if (el.children !== undefined) {
            if(getMaxValue(el) > max) {
                max = getMaxValue(el);
            }
        } else if (el.value > max) {
            max = el.value;
        }
        return max;
    }

    return obj.children.reduce(recursion, obj.value);
}
console.log(getMaxValue(graph));