import {graph} from './graph';

const getMiddleValue = (obj) => {
    let summ = 0;
    let counter = 0;
    let currentObject = obj;
    
    const recursion = (object) => {
        if (object.children === undefined) {
            summ += object.value;
            counter++;
        } else {
            summ += object.value;
            counter++;
            currentObject = object.children;
            currentObject.forEach(element => recursion(element));
        }
    };

    recursion(currentObject);

    return summ / counter;
};

const getMinimunValue = (obj) => {
    let minimunValue = obj.value;
    let currentObject = obj;
    let result;
    
    const condition = (obj) => {  
        if (minimunValue > obj.value) {
            minimunValue = obj.value;
            result = obj;
        }
    }

    const recursion = (object) => {
        if (object.children === undefined) {
            condition(object);
        } else {
            condition(object);
            currentObject = object.children;
            currentObject.forEach(element => recursion(element));
        }
    };

    recursion(currentObject);
    
    return result;
};

const getMaximumValue = (obj) => {
    let maximumValue = obj.value;
    let currentObject = obj;
    let result;

    const condition = (obj) => {  
        if (maximumValue < obj.value) {
            maximumValue = obj.value;
            result = obj;
        }
    }

    const recursion = (object) => {
        if (object.children === undefined) {
            condition(object);
        } else {
            condition(object);
            currentObject = object.children;
            currentObject.forEach(element => recursion(element));
        }
    };

    recursion(currentObject);

    return result;
};

console.log(getMiddleValue(graph));
console.log(getMinimunValue(graph));
console.log(getMaximumValue(graph));