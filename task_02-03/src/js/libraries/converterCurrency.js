
import Converter from './converter';

export default class ConverterCurrency extends Converter {
    constructor (from, to) {
        super(from, to);
        this.ratios = {
            byn: 1,
            usd: 1.9,
            euro: 2.18,};
        this.ratio = this.getRatio();
    };

    getRatio() {
        return this.ratios[this.from]/this.ratios[this.to];
    };
    
    setCustomRatio (from, to , ratio) {
        this.ratios[from] = 1;
        this.ratios[to] = ratio;
    }
}
