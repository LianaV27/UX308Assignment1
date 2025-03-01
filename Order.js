export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
          let aReturn = [];
          this.stateCur = this.OrderState.ORDERING;
          aReturn.push("Welcome to Liana's Tea Shop.");
          aReturn.push("What kind of drink would you like today?");
          aReturn.push("<h2>Drink Menu</h2><ul><li>Milk Tea</li> <li>Fruit Tea</li> </ul>");
          return aReturn;
        },
        ORDERING: (sInput) => {
          let aReturn = [];
          this.isDone = true;
          if (sInput.toLowerCase().startsWith('m')) {
            let drink = 'milk tea';
            aReturn.push("What size would you like?");
            aReturn.push("<ul><li>Large</li> <li>Medium</li>");
            aReturn.push("What topping would you like?");
            aReturn.push("<ul><li>Boba</li> <li>Jelly</li>");
            aReturn.push("you have ordered" + drink);
          } 
          else if (sInput.toLowerCase().startsWith('s')){
            aReturn.push("Thanks for trying our reservation system");
            aReturn.push("Maybe next time");
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