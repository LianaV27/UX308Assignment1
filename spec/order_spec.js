import { Order } from '../Order.js';

describe("Tests all stages of an order", function () {
    // TEST WELCOME MESSAGE
    it("tests hello", function () {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("hello");
        expect(aResults[0]).toBe("<h3>Welcome to Sakura Tea Shop!🌸</h3> What kind of drink would you like today?");
    });

    // TEST ORDERING STATE
    it("tests milk tea", function () {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("milk tea");
        expect(aResults[0]).toBe("One Milk Tea coming up! What topping would you like?");
    });

    it("tests fruit tea", function () {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("fruit tea");
        expect(aResults[0]).toBe("One Fruit Tea coming up! What topping would you like?");
    });

    // TEST TOPPING STATE
    it("tests tapioca pearls", function () {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("milk tea");
        const aResults = oOrder.handleInput("tapioca pearls");
        expect(aResults[0]).toBe("Tapioca Pearls selected! What size drink will you have?");
    });

    it("tests rainbow jelly", function () {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("fruit tea");
        const aResults = oOrder.handleInput("rainbow jelly");
        expect(aResults[0]).toBe("Rainbow Jelly selected! What size drink will you have?");
    });

    // TEST SIZING STATE
    it("tests large", function () {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("milk tea");
        oOrder.handleInput("tapioca pearls");
        const aResults = oOrder.handleInput("large");
        expect(aResults[0]).toBe("One large tea coming up! Would you like a bubble waffle with that for $3.00?");
    });

    it("tests regular", function () {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("fruit tea");
        oOrder.handleInput("rainbow jelly");
        const aResults = oOrder.handleInput("regular");
        expect(aResults[0]).toBe("One regular tea coming up! Would you like a bubble waffle with that for $3.00?");
    });

    // TEST WAFFLING STATE
    it("tests yes", function () {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("milk tea");
        oOrder.handleInput("tapioca pearls");
        oOrder.handleInput("large");
        const aResults = oOrder.handleInput("yes");
        expect(aResults[0]).toBe("<h3>Thank You for choosing Sakura Tea!🌸</h3> Your order of a tea and bubble waffle has been placed!");
    });

    it("tests no", function () {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("fruit tea");
        oOrder.handleInput("rainbow jelly");
        oOrder.handleInput("regular");
        const aResults = oOrder.handleInput("no");
        expect(aResults[0]).toBe("<h3>Thank You for choosing Sakura Tea!🌸</h3> Your order of a tea has been placed!");
    });
});

