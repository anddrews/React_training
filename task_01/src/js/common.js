
import ConverterFactory from './ConverterFactory';

const conversions = {
 from: 'sec',
 to: 'min'
};

let converter = new ConverterFactory().createConverter(conversions);
let value = 60;
console.log(`result conversion ${value}  from ${conversions.from} to ${conversions.to} is ${converter.convert(value)}`);