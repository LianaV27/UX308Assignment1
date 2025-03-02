export class Order {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.ORDERING;
        aReturn.push("Welcome to Rich's Acton Rapid Test.");
        aReturn.push("Would you like to reserve a rapid test kit?");
        return aReturn;
      },
      ORDERING: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.TOPPINGS;
        if (sInput.toLowerCase().startsWith('y')) {
          aReturn.push(`Your rapid test is reserved under the phone number ${this.sFrom}`);
          let d = new Date();
          d.setMinutes(d.getMinutes() + 120);
          aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
        } else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time");
        }
        return aReturn;
      },
      TOPPINGS: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.UPSELLING;
        if (sInput.toLowerCase().startsWith('c')) {
         aReturn.push(`cool indeed`);
          aReturn.push(`thanks!!`);
        } else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time");
       }
        return aReturn;
      },
      UPSELLING: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.CONFIRMING;
        if (sInput.toLowerCase().startsWith('c')) {
         aReturn.push(`cool indeed`);
          aReturn.push(`thanks!!`);
        } else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time");
       }
        return aReturn;
      },

      CONFIRMING: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('c')) {
         aReturn.push(`cool indeed`);
          aReturn.push(`thanks!!`);
        } else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time");
       }
        return aReturn;
      }
    };

    this.stateCur = this.OrderState.WELCOMING;
    this.isDone = false;
    this.sFrom = sFrom;
  }
  handleInput(sInput) {
    return this.stateCur(sInput);
  }
  isDone() {
    return this.isDone;
  }
}