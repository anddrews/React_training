
import ConverterFactory from './ConverterFactory';

const convertions = {
 from: 'sec',
 to: 'min'
};

let converter = new ConverterFactory().createConverter(convertions);
let value = 60;
console.log(`result convertion ${value}  from ${convertions.from} to ${convertions.to} is ${converter.convert(value)}`);