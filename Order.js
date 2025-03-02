export class Order {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.ORDERING;
        aReturn.push("Welcome to Sakura Tea Shop! What kind of drink would you like today?");
        aReturn.push("<h3>Drink Menu</h3><ul><li>Milk Tea</li> <li>Fruit Tea</li> </ul>");
        return aReturn;
      },

      ORDERING: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.TOPPINGS;
        if (sInput.toLowerCase().startsWith('m')) {
          aReturn.push("One Milk Tea coming up! What topping would you like?");
          aReturn.push("<h3>Toppings</h3><ul><li>Tapioca Pearls</li> <li>Rainbow Jelly</li> </ul>");
          return aReturn;
        } else {
          aReturn.push("One Fruit Tea coming up! What topping would you like?")
          aReturn.push("<h3>Toppings</h3><ul><li>Tapioca Pearls</li> <li>Rainbow Jelly</li> </ul>");
        }
        return aReturn;
      },

      TOPPINGS: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.SIZING;
        if (sInput.toLowerCase().startsWith('t')) {
          aReturn.push("Tapioca Pearls selected! What size drink will you have?")
          aReturn.push("<h3>Sizes</h3><ul><li>Large</li> <li>Regular</li> </ul>");
        } else {
          aReturn.push("Rainbow Jelly selected! What size drink will you have?")
          aReturn.push("<h3>Sizes</h3><ul><li>Large</li> <li>Regular</li> </ul>");
        }
        return aReturn;
      },

      SIZING: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.UPSELLING;
        if (sInput.toLowerCase().startsWith('l')) {
          aReturn.push("One large tea coming up! Would you like a bubble waffle with that for $3.00?");
        } else {
          aReturn.push("One regular tea coming up! Would you like a bubble waffle with that for $3.00?");

        }
        return aReturn;
      },

      UPSELLING: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('y')) {
          aReturn.push("Thank You for choosing Sakura Tea! Your order of a tea and bubble waffle has been placed!");
          aReturn.push("Your total is $10.50. Your order number is " + Math.floor(Math.random() * 100) + 1);
          let d = new Date();
          d.setMinutes(d.getMinutes() + 15);
          aReturn.push(`Your order will be ready at ${d.toTimeString()}. Please pick it up at 127 Brew St., Brantford.`);
        } else {
          aReturn.push("Thank You for choosing Sakura Tea! Your order of a tea has been placed!");
          aReturn.push("Your total is $7.50. Your order number is " + Math.floor(Math.random() * 100) + 1);
          let d = new Date();
          d.setMinutes(d.getMinutes() + 15);
          aReturn.push(`Your order will be ready at ${d.toTimeString()}. Please pick it up at 127 Brew St., Brantford.`);
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