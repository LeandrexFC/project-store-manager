const { expect } = require('chai');
const sinon = require('sinon');
const product = require('./Mocks/product.mock')
const connection = require('../../../src/models/connection')
const filters = require('../../../src/models/talker.model')

describe('Tests of model from products', function () {
  it('verifys if the product null return the correct message', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([!product])

    // Act
    const finalResult = await filters.findAllProducts();

    // Assert
    expect(finalResult).to.be.deep.equal(product)

  })
  it('return an especify product when using the method get with a id params', async function () {
    // const product = { id: 2, name: 'Traje de encolhimento' };
    sinon.stub(connection, 'execute').resolves([product[0]]);

  // Act
  const finalResult = await filters.findProductsByID(1);

  // Assert
  expect(finalResult).to.deep.equal(product[0]);

  })

  afterEach(function () {
    sinon.restore();
  });

})