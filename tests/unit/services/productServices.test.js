const { expect } = require('chai');
const sinon = require('sinon');
const filter = require('../../../src/services/validations/products.service')

describe('Tests of Services from products', function () {
  it('verifys if the params in url not found return the correct message', async function () {

    // Act
    const finalResult = await filter.validateNullId(999);

    // Assert
    expect(finalResult.type).to.equal('FIELD_REQUIRED');
    expect(finalResult.message).to.equal('Product not found');

  })
  it('verifys if no paramns in url returns the corrects informs', async function () {

    // Act
    const finalResult = await filter.validateNull();

    // Assert
    expect(finalResult.type).to.equal(null);
    expect(finalResult.message).to.equal('');

  })
  // afterEach(function () {
  //   sinon.restore();
  // });

})