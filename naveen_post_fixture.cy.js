describe('Http request ' , ()=>{

 
    let token = "b4816e052b3b277b241417a030ce7c555657b010d52fb68c35a7c33ca368fc0c"

 
 
     it.only("HTTP POST Request - fixture " , ()=>{
 
         cy.fixture("createuser").then((my_fixture) =>{
 
             const request_body = my_fixture
 
             cy.request({
                 method: 'POST',
                 url: 'https://gorest.co.in/public/v2/users',
                 headers:{
                    'authorization' : "Bearer "+token
                },
                 body: request_body
                })
                .then((response) =>{
                    cy.log(JSON.stringify(response))
                    expect(response.status).to.eq(201)
                    expect(response.body).has.property('email' , my_fixture.email)
                })
         })
 
 
 
     })
 
 })
 

 