import ConverterLength from './converterLength';
import ConverterTime from './converterTime';
import ConverterCurrency from './converterCurrency';
import Converter from './converter';



class ConverterFactory {

  constructor () {
    this.measures = {};
    this.measures.length = new ConverterLength().getMeasuresList();
    this.measures.time = new ConverterTime().getMeasuresList();
    this.measures.currency = new ConverterCurrency().getMeasuresList();
  }

  createConverter ({from, to}) {
    function getMeasureType (measure, arr, type) {
      return arr.some( item => item === measure) && type;
    }

    for (let key in this.measures) {
      let fromType = getMeasureType(from, this.measures[key], key);
      let toType = getMeasureType(to, this.measures[key], key);

      if ( fromType && toType && fromType === toType ) {
        switch (fromType) {
          case ('length'):
          {
            return new ConverterLength(from, to);
          }
          case ('time'):
          {
            return new ConverterTime(from, to);
          }
          case ('currency'):
          {
            return new ConverterCurrency(from, to);
          }
          default : {
            return new Converter(from, to);
          }
        }
      }
    }
  }

  getMeasures(converterType) {
    return this.measures[converterType];
  }
}

export default ConverterFactory;