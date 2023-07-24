/// <reference types = "Cypress" />

import dataJson from '../fixtures/createuser'


describe('Get request for gorest' , ()=>{

    let token = "b4816e052b3b277b241417a030ce7c555657b010d52fb68c35a7c33ca368fc0c"

    let random_text = ""
    let email_text = ""

    it('post users', ()=>{

        var pattern = "ABCDFGGHHHHGH"
        for(var i =0;i<10;i++){
            random_text += pattern.charAt(Math.floor(Math.random()*pattern.length))
            email_text = random_text + '@gmail.com'
            console.log(email_text)
        }

        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                'authorization' : "Bearer "+token
            },
            body:{
                "name" : "Test automation",
                "gender" : "male",
                "email" : email_text,
                "status" : "active"

            }
        }).then((response) =>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(201)
            expect(response.body).has.property('email' , email_text)
        })
    })


    it('post users by fixture', ()=>{

        var pattern = "ABCDFGGHHHHGH"
        for(var i =0;i<10;i++){
            random_text += pattern.charAt(Math.floor(Math.random()*pattern.length))
            email_text = random_text + '@gmail.com'
            console.log(email_text)
        }

        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                'authorization' : "Bearer "+token
            },
            body:{
                "name" : dataJson.name,
                "gender" : "male",
                "email" : email_text,
                "status" : "active"

            }
        }).then((response) =>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(201)
            expect(response.body).has.property('email' , email_text)
        })
    })



})