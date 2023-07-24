describe('Http request ' , ()=>{

    it("HTTP GET Request" , ()=>{

        cy.request('GET' , 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal' , 200);

    })


    it("HTTP POST Request" , ()=>{

       cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts/',
        body:{
            title : "Test  post",
            body : "This is post call",
            userId : 1
        }
       })
       .its('status')
       .should('equal' , 200);

    })


    it("HTTP PUT REQUEST" , ()=>{
        cy.request({
            method: "PUT",
            url : "https://jsonplaceholder.typicode.com/posts/1",
            body:{
            title : "Test  post - updating for PUT",
            body : "This is post call",
            userId : 1,
            id : 1
            }

        }).its('status')
        .should('equal' , 200);
    })

    it("HTTP DELETE REQUEST" , ()=>{
        cy.request({
            method: "DELETE",
            url : "https://jsonplaceholder.typicode.com/posts/1"
            

        }).its('status')
        .should('equal' , 200);
    })



})
