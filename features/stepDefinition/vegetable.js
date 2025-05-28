import { Given,When,Then } from '@cucumber/cucumber';
import { expect } from 'chai';  // Using Expect style


  /**
   * This step sets up the vegetable and the initial amount
   * 
   * @param {string} type Vegetable to be added into the list.
   * @param {int} amount The quantity to be set.
   */
  Given('I have {int} {string}', async function (amount, type) {
    this.vegetable.set(type, amount); // Set vegetable to the number provided
  });

  /**
   * This step performs the subtract 
   * 
   * @param {string} type Vegetable to be used.
   * @param {int} amount The quantity that needs to be subtract.
   */
  When('I eat {int} {string}', function (amount, type) {
    this.vegetable.eat(type, amount); // Decrease vegetable by the number eaten
  });

  /**
   * This step performs the salad 
   * 
   * @param {dataTable} dataTable Table list with the vegetables and quantity used for the salad.
   */
  When('I make a salad with', function (dataTable) {
    const data = dataTable.hashes();
    for (const row of data) {
      this.vegetable.eat(row.vegetable, row.amount);
    }
    this.vegetable.makeSalad();
  });

  /**
   * This step verifies if the result after the subtract is the expected 
   * 
   * @param {string} expectedResult Vegetable to be be used for subtract.
   */
  Then('The result should be {string}', function (expectedResult) {
     expect(String(this.vegetable.vegetableInventory.carrots)).to.eql(expectedResult, `The result: ${expectedResult}`);
  });

  /**
   * This step verifies if the quantity left is the correct 
   * 
   * @param {string} type Vegetable to be used.
   * @param {int} expectedAmount The quantity to vetify.
   */
  Then('I should have {int} {string}', function (expectedAmount, type) {
    expect(this.vegetable.vegetableInventory[type]).to.eql(expectedAmount, `The amount of ${expectedAmount} ${type} is not the expected.`);
  });

  /**
   * This step verifies if the quantity of salads is the correct 
   * 
   * @param {int} expectedAmount The quantity to vetify.
   */
  Then('I should have {int} salad', function (expectedAmount) {
    expect(this.vegetable.salad).to.eql(expectedAmount, `The amount of ${expectedAmount} is not the correct for salad.`);
  });


