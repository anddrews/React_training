
import ConverterFactory, { measures } from './ConverterFactory';

const conversions = {
 from: 'mm',
 to: 'm'
};

let converter = new ConverterFactory().createConverter(conversions);
let value = 60;
console.log(`result conversion ${value}  from ${conversions.from} to ${conversions.to} is ${converter.convert(value)}`);