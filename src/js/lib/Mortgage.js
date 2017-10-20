module.exports = class Mortgage {
    constructor(principal, interest, term) {
        this.principal = principal;
        this.interest = interest;
        this.term = term;
    }


    get monthlyPayment() {

    }

    calcPayment() {
        var mthlyPmt =
            this.principle * (mthlyInt() * Math.pow(1 + mthlyInt(), totLength()) / (Math.pow(1 + mthlyInt(), totLength()) - 1 ));
        return mthlyPmt;
    }

    mthlyInt() {
        return (this.interest / 100) / 12;
    }

    totLength() {
        return this.term * 12;
    }
};

