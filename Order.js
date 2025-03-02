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
        this.stateCur = this.OrderState.TOPPINGS;
        if (sInput.toLowerCase().startsWith('m')) {
          aReturn.push("One Milk Tea coming up! What topping would you like?");
          aReturn.push("<h2>Toppings</h2><ul><li>Tapioca Pearls</li> <li>Rainbow Jelly</li> </ul>");
        return aReturn;
        } else {
          aReturn.push("One Fruit Tea coming up! What topping would you like?")
          aReturn.push("<h2>Toppings</h2><ul><li>Tapioca Pearls</li> <li>Rainbow Jelly</li> </ul>");
        }
        return aReturn;
      },
      TOPPINGS: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.SIZING;
        if (sInput.toLowerCase().startsWith('t')) {
          aReturn.push("Tapioca Pearls selected! What size drink will you have?")
          aReturn.push("<h2>Sizes</h2><ul><li>Large</li> <li>Regular</li> </ul>");
        } else {
          aReturn.push("Rainbow Jelly selected! What size drink will you have?")
          aReturn.push("<h2>Sizes</h2><ul><li>Large</li> <li>Regular</li> </ul>");
       }
        return aReturn;
      },
      SIZING: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.UPSELLING;
        if (sInput.toLowerCase().startsWith('l')) {
         aReturn.push("One large tea coming up! Would you like a bubble waffle with that?");
        } else {
          aReturn.push("One regular tea coming up! Would you like a bubble waffle with that?");
          aReturn.push("Maybe next time");
       }
        return aReturn;
      },

      UPSELLING: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('y')) {
         aReturn.push("Thank You! Your order of a tea and bubble waffle has been placed!");
         aReturn.push("Your order number is " + Math.floor(Math.random() * 100) + 1);
         aReturn.push("Please pick it up at 127 Brew St., Brantford at ${d.toTimeString()}");
        } else {
          aReturn.push("Thank You! Your order of a tea has been placed!");
          aReturn.push("Your order number is " + Math.floor(Math.random() * 100) + 1);;
          aReturn.push("Please pick it up at 127 Brew St., Brantford at ${d.toTimeString()}");
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