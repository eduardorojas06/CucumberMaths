import { setWorldConstructor } from '@cucumber/cucumber';

class VegetableModel {

    constructor() {
        this.vegetableInventory  = [];
        this.salad = 0;
    }
 
    /**
     * This method subtract two integers.
     *
     * @param {string} type Vegetable used for the operation.
     * @param {int} amount The quantity that needs to be subtract.
     */
    eat(type, amount) {
        if(this.vegetableInventory[type] >= amount) {
            this.vegetableInventory[type] -= amount;
        } else {
            // If the amount is greater than what it's in stock
             this.vegetableInventory[type] = `Not enough ${type} to eat`; 
        }
    }

    /**
     * This method set the quantity value by vegetable.
     *
     * @param {string} type Vegetable used for the operation.
     * @param {int} amount The quantity that needs to be set.
     */
    set(type, amount) {
        this.vegetableInventory[type] = amount;
    }

    // This method count the salads made
    makeSalad() {
        this.salad += 1;
    }
}

class VegetableWorld {
  constructor() {
    this.vegetable = new VegetableModel();
  }
}

setWorldConstructor(VegetableWorld)