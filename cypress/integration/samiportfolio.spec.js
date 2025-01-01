describe('My Application', () => {
    it('should load the homepage', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Welcome to My Application');
    });
    
    it('should navigate to the about page', () => {
        cy.visit('http://localhost:3000');
        cy.get('a[href="/about"]').click();
        cy.contains('About Us');
    });
    
    it('should submit the contact form', () => {
        cy.visit('http://localhost:3000/contact');
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('john@example.com');
        cy.get('textarea[name="message"]').type('Hello!');
        cy.get('form').submit();
        cy.contains('Thank you for your message!');
    });
});