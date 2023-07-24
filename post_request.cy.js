describe('Http request ' , ()=>{

   const requestBody = {
    tourist_name : "Mike",
    tourist_email : "ssananuslakp@gmail.com",
    tourist_location : "London"

   }

   const requestBody2 = {
    tourist_name : Math.random().toString(5).substring(2),
    tourist_email : Math.random().toString(5).substring(2) +"@gmail.com",
    tourist_location : "London"

   }

    it("HTTP POST Request - 1" , ()=>{

        cy.request({
        method: 'POST',
        url: 'restapi.adequateshop.com/api/tourist',
        body: requestBody
       })
       .then((response)=>{
        expect(response.status).to.eq(201);

        expect(response.body.tourist_name).to.eq("Mike");
        expect(response.body.tourist_email).to.eq("ssananuslakp@gmail.com");
       })

    })


    it("HTTP POST Request - Dynamically generate " , ()=>{

        cy.request({
        method: 'POST',
        url: 'restapi.adequateshop.com/api/tourist',
        body: requestBody2
       })
       .then((response)=>{
        expect(response.status).to.eq(201);

        expect(response.body.tourist_name).to.eq(requestBody2.tourist_name);
        expect(response.body.tourist_email).to.eq(requestBody2.tourist_email);
       })

    })


    it.only("HTTP POST Request - fixture " , ()=>{

        cy.fixture("tourist").then((my_fixture) =>{

            const request_body = my_fixture

            cy.request({
                method: 'POST',
                url: 'restapi.adequateshop.com/api/tourist',
                body: requestBody2
               })
               .then((response)=>{
                expect(response.status).to.eq(201);
        
                expect(response.body.tourist_name).to.eq(requestBody2.tourist_name);
                expect(response.body.tourist_email).to.eq(requestBody2.tourist_email);

        })



    })

})


})
