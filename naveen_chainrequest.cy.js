describe('Http request ' , ()=>{

    let token = "b4816e052b3b277b241417a030ce7c555657b010d52fb68c35a7c33ca368fc0c"

    let random_text = ""
    let email_text = ""

 
 
    it.only("HTTP POST Request - fixture " , ()=>{

        var pattern = "ABCDFGGHHHHGH"
        for(var i =0;i<10;i++){
            random_text += pattern.charAt(Math.floor(Math.random()*pattern.length))
            email_text = random_text + '@gmail.com'
            console.log(email_text)
        }

        cy.fixture("createuser").then((my_fixture) =>{

            const request_body = my_fixture

            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers:{
                   'authorization' : "Bearer "+token
               },
                body: {
                    "name" : my_fixture.name,
                    "gender" : my_fixture.gender,
                    "email" : email_text,
                    "status" : my_fixture.status
    
                }
               })
               .then((response) =>{
                   cy.log(JSON.stringify(response))

                   const user_id = response.body.id

                    cy.log("user is user id - manjula" + user_id )

                   expect(response.status).to.eq(201)
                   expect(response.body).has.property('email' , email_text)


                

                cy.log("user is user id - manjula" + user_id )

                cy.request({
                    method:'GET',
                    url : "https://gorest.co.in/public/v2/users/" + user_id,
                    headers:{
                        'authorization' : "Bearer "+token
                    }


                }).then((res) =>{

                    expect(res.status).to.eq(200)

                    expect(res.body).has.property('id' , user_id)
                    expect(res.body).has.property('email' , email_text)
                    

                })


               })
        })

    })

})


