/// <reference types="cypress" />

context('funcionalidade Login' , () =>{

    it('Deve fazer login com sucesso' , () =>{
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').type('gaby.mulico@hotmail.com')
cy.get('#password').type('Bg250918*')
cy.get('.woocommerce-form > .button').click()
        })

        it('Deve exibir uma mensagem de erro ao inserir usuário ou senha inválido', () =>{

        })
})