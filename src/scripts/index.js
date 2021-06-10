import { graph } from './graph';

const getMiddleValue = (obj) => obj.children.reduce((acc, el) => {
    if (el.children) {
        const { sum, counter } = getMiddleValue(el);
        return {
            sum: acc.sum + sum,
            counter: acc.counter + counter
        }
    } else {
        return {
            sum: acc.sum + el.value,
            counter: ++acc.counter
        }
    }
}, { sum: obj.value, counter: 1 });

const result = getMiddleValue(graph);
console.log(result.sum / result.counter);

const getMin = (a, b) => a.value < b.value ? a : b;
const getMinValue = (obj) =>
    obj.children.reduce((max, el) =>
        (el.children) ? getMin(getMinValue(el), max) : getMin(el, max), obj);

console.log(getMinValue(graph));

const getMax = (a, b) => a.value > b.value ? a : b;
const getMaxValue = (obj) =>
    obj.children.reduce((max, el) =>
        (el.children) ? getMax(getMaxValue(el), max) : getMax(el, max), obj);

console.log(getMaxValue(graph));