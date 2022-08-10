class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }


    guess() {
        if(this.min != this.max) {
            return this.middle = Math.ceil((this.min + this.max) / 2);
        }
        else {
            return this.middle = Math.floor((this.min + this.max) / 2);
        }
    }

    lower() {
        if(this.min < this.max) {
            this.max = this.middle;
        }
        else {
            this.max = this.middle - 2;
        }
    }

    greater() {
        if(this.min != this.max) {
            this.min = this.middle;
        }
        else {
            this.min = this.middle + 1;
        }
    }
}

module.exports = GuessingGame;
