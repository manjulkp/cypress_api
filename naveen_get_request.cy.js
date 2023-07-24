/// <reference types = "Cypress" />


describe('Get request for gorest' , ()=>{

    let token = "b4816e052b3b277b241417a030ce7c555657b010d52fb68c35a7c33ca368fc0c"

    it('get users', ()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                'authorization' : "Bearer "+token
            }
        }).then((response) =>{
            expect(response.status).to.eq(200)
            // expect(response.body.meta.pagination-limit).to.eq(20)
        })
    })


    it('get users by id ', ()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users/3826951',
            headers:{
                'authorization' : "Bearer "+token
            }
        }).then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq("Bhaumik Kaniyar IV")
        })
    })

})