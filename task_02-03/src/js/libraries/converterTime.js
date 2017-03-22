
import Converter from './converter';

export default class ConverterTime extends Converter {
    constructor (from, to) {
        super(from, to);
        this.ratios = {
            sec: 1,
            min: 60,
            hour: 3600,};
        this.ratio = this.getRatio();
    };

    getRatio() {
        return this.ratios[this.from]/this.ratios[this.to];
    };
}
