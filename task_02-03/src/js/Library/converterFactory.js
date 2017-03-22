import ConverterLength from './ConverterLength';
import ConverterTime from './ConverterTime';
import Converter from './Converter';

export default class ConverterFactory {

  constructor () {
    this.values = {
      mm: 'length',
      sm: 'length',
      dm: 'length',
      m: 'length',
      sec: 'time',
      min: 'time',
      hour: 'time',
    }
  }

  createConverter ({from, to}) {
    if (this.values[from] === this.values[to]) {
      switch (from) {
        case ('mm'):
        case ('sm'):
        case ('dm'):
        case ('m'):
          {
          return new ConverterLength(from, to);
          }
        case ('sec'):
        case ('min'):
        case ('hour'):
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