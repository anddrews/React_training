
import Converter from './converter';

export default class ConverterLength extends Converter {
    constructor (from, to) {
        super(from, to);
        this.ratios = {
            mm: 1,
            sm: 10,
            dm: 100,
            m: 1000,};
        this.ratio = this.getRatio();
    };

    getRatio() {
        return this.ratios[this.from]/this.ratios[this.to];
    };
}
