
export default class Converter {
    constructor (from, to) {
        this.from = from;
        this.to = to;
        this.ratio = 1;
    };

    convert (value) {
      if (this.ratio == 1) {
        return value;
      } else {
        return (this.ratio * value).toFixed(2);
      }
    };

    getMeasuresList () {
      let measuresList = [];
      for (let key in this.ratios ) {
        measuresList.push(key);
      }
      return measuresList;
    }
}