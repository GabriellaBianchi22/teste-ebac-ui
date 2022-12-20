/// <reference types="cypress" />

context('funcionalidade Login' , () =>{

    it('Deve fazer login com sucesso' , () =>{
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').type('gaby.mulico@hotmail.com')
cy.get('#password').type('Bg250918*')
cy.get('.woocommerce-form > .button').click()

cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('contain' , 'Olá')

        })

    it('Deve exibir uma mensagem de erro ao inserir usuário ou senha inválido' , () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('gaby.muko@hotmail.com')
        cy.get('#password').type('Bg25555')
        cy.get('.woocommerce-form > .button').click()    

        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido.')
    })
        })