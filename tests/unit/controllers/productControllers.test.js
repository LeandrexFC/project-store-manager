const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai')
const productsController = require('../../../src/controllers/product.controller')
// const productsServices = require('../../../src/services/validations/products.service')
const sinonChai = require('sinon-chai')

chai.use(sinonChai);

describe('Tests of Controller from products', function () {
  it('verifys if returns the correct status', async function () {
    // Arrange

    // sinon.stub(productsServices, 'validateNullId').resolves()

    const req = {
      params: {
      id: 2
    }}
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    // Act
    const result = await productsController.productControllerId(req, res)
    // Assert
    expect(res.status).to.have.been.calledWith(200);
  })
  it('verifys if returns the correct status', async function () {
    // Arrange

    // sinon.stub(productsServices, 'validateNullId').resolves()

    const req = {
      params: {
      id: 2
    }}
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    // Act
    const result = await productsController.productController(req, res)
    // Assert
    expect(res.status).to.have.been.calledWith(200);
  })

  // afterEach(function () {
  //   sinon.restore();
  // });

})