const { expect } = require('chai');
const sinon = require('sinon');
const sales = require('./Mocks/sales.mock')
const connection = require('../../../src/models/connection')
const models = require('../../../src/models/sales.model')


describe('Tests of Sales Model', function () {
  it('Insert correctly having the params', async function () {
    //  arrange
     sinon.stub(connection, 'execute').resolves()
    
    // act
    const finalResult = await models.insertSalesProducts({ productId: 1, quantity: 3, id: 3 })

    // assert
    expect(finalResult.id).to.be.equal(3)
  })
  it('Returns all Sales', async function () {
    sinon.stub(connection, 'execute').resolves([sales])


    const finalResult = await models.findAllSales()

    expect(finalResult).to.be.deep.equal(sales)

  })
  
  afterEach(function () {
    sinon.restore();
  });
})