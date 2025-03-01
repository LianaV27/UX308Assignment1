export class Order {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.ORDERING;
        aReturn.push("Welcome to Liana's Tea Shop. What kind of drink would you like today?");
        aReturn.push("<h2>Drink Menu</h2><ul><li>Milk Tea</li> <li>Fruit Tea</li> </ul>");
        return aReturn;
      },
      ORDERING: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        // SET DRINK
        if (sInput.toLowerCase().startsWith('m')) {
          let drink = 'milk tea';
        }
        else if (sInput.toLowerCase().startsWith('f')) {
          let drink = 'fruit tea';
        }
        // SET SIZE
        aReturn.push("What size would you like?");
        aReturn.push("<ul><li>Large</li> <li>Regular</li>");
        if (sInput.toLowerCase().startsWith('l')) {
          let size = 'large';
        }
        else if (sInput.toLowerCase().startsWith('r')) {
          let size = 'regular';
        }

        // SET TOPPING
        aReturn.push("What topping would you like?");
        aReturn.push("<ul><li>Tapioca</li> <li>Jelly</li>");
        if (sInput.toLowerCase().startsWith('t')) {
          let size = 'tapioca';
        }
        else if (sInput.toLowerCase().startsWith('j')) {
          let size = 'jelly';
        }

        // SET UPSELL
        aReturn.push("Would you like a bubble waffle with that for $3?");
        aReturn.push("<ul><li>Large</li> <li>Regular</li>");
        if (sInput.toLowerCase().startsWith('y')) {
          let upsell = ' and a bubble waffle.';
        }
        else {
          let upsell = '.';
        }
        aReturn.push("you have ordered a " + size + " " + drink + " with " + topping + upsell);
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