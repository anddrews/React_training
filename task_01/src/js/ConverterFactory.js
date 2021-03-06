import ConverterLength from './ConverterLength';
import ConverterTime from './ConverterTime';
import Converter from './Converter';



class ConverterFactory {

  constructor () {
    this.measures = {};
    this.measures.length = new ConverterLength('','').getMeasuresList();
    this.measures.time = new ConverterTime('','').getMeasuresList();
  }

  createConverter ({from, to}) {
    function getMeasureType (measure, arr, type) {
      return arr.some( item => item === measure) && type;
    }

    for (let key in this.measures) {
      let fromType = getMeasureType(from, this.measures[key], key);
      let toType = getMeasureType(to, this.measures[key], key);

      if ( fromType === toType ) {
        switch (fromType) {
          case ('length'):
          {
            return new ConverterLength(from, to);
          }
          case ('time'):
          {
            return new ConverterTime(from, to);
          }
          default : {
            return new Converter(from, to);
          }
        }
      }
    }
  }
}

export default ConverterFactory;