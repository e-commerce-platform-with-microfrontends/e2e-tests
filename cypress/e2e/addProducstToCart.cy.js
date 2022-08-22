describe('addProductsToCart', () => {
  it('should add products to cart', () => {
    cy.visit('http://localhost:3000/products/');

    cy.get('#go-to-product-details-1').click();
    cy.get('#add-to-cart').click();
    cy.get('#cart-count').should('have.text', '1');

    cy.get('#go-back').click();

    cy.get('#go-to-product-details-5').click();
    cy.get('#add-to-cart').click();
    cy.get('#cart-count').should('have.text', '2');
    
    cy.get('#go-to-cart').click();

    cy.url().should('contains', 'http://localhost:3000/cart/');

    cy.get('#cart-total').should('have.text', 'Total: 804.95');
  });
});
