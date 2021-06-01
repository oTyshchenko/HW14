import {graph} from './graph';

const getMiddleValue = (obj) => {
    let summ = 0;
    let counter = 0;
    let currentObject = obj;
    
    const recursion = (o) => {
        if (o.children === undefined) {
            summ += o.value;
            counter++;
        } else {
            summ += o.value;
            counter++;
            currentObject = o.children;
            currentObject.forEach(element => {
                recursion(element);
            });
        }
    };

    recursion(currentObject);

    return summ / counter;
};

const getMinimunValue = (obj) => {
    let minimunValue = obj.value;
    let currentObject = obj;
    let result;

    const recursion = (object) => {
        if (object.children === undefined) {
            if (minimunValue > object.value) {
                  minimunValue = object.value;
                  result = object;
            }
        } else {
            if (minimunValue > object.value) {
                minimunValue = object.value;
                result = object;
            }
            currentObject = object.children;
            currentObject.forEach(element => {
                recursion(element);
            });
        }
    };

    recursion(currentObject);
    
    return result;
};

const getMaximumValue = (obj) => {
    let maximumValue = obj.value;
    let currentObject = obj;
    let result;

    const recursion = (object) => {
        if (object.children === undefined) {
            if (maximumValue < object.value) {
                maximumValue = object.value;
                result = object;
            }
        } else {
            if (maximumValue < object.value) {
                maximumValue = object.value;
                result = object;
            }
            currentObject = object.children;
            currentObject.forEach(element => {
                recursion(element);
            });
        }
    };

    recursion(currentObject);

    return result;
};

console.log(getMiddleValue(graph));
console.log(getMinimunValue(graph));
console.log(getMaximumValue(graph));