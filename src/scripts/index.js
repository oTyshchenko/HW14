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
            currentObject = o.children;
            currentObject.forEach(element => {
                recursion(element);
                  summ += element.value;
                  counter++;
            });
        }
    };

    recursion(currentObject);

    return summ / counter;
};

const getMinimunValue = (obj) => {
    let minimunValue = obj.value;
    let currentObject = obj;

    const recursion = (object) => {
        if (object.children === undefined) {
            if (minimunValue >= object.value) {
                  minimunValue = object.value;
            }
        } else {
            currentObject = object.children;
            currentObject.forEach(element => {
                recursion(element);
                if (minimunValue >= currentObject.value) {
                    minimunValue = currentObject.value;
                }
            });
        }
    };

    recursion(currentObject);
    
    return minimunValue;
};

const getMaximumValue = (obj) => {
    let maximumValue = obj.value;
    let currentObject = obj;

    const recursion = (object) => {
        if (object.children === undefined) {
            if (maximumValue <= object.value) {
                maximumValue = object.value;
            }
        } else {
            currentObject = object.children;
            currentObject.forEach(element => {
                recursion(element);
                if (maximumValue <= currentObject.value) {
                    maximumValue = currentObject.value;
                }
            });
        }
    };

    recursion(currentObject);

    return maximumValue;
};

console.log(getMiddleValue(graph));
console.log(getMinimunValue(graph));
console.log(getMaximumValue(graph));