describe('Auth token', ()=>{
    let authToken = null;

    before("Create token", ()=>{
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:{
                clientName : 'ABC',
                clientEmail :"manjud@gmail.com"

            }
        }).then((response) =>{

            authToken = response.body.accessToken;

        });
    });


    it("Using  token", ()=>{
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer'+ authToken
            },
            body:{
                "bookId" : 1,
                "customerName": "xyyzabc"
            }
        }).then((response) =>{

            expect(response.status).to.eq(201);
            expect(response.body.created).to.eq(true);

        });
    });


    it("creating order and fetch the order", ()=>{

        cy.request({
            method:'GET',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer'+ authToken
            },
            cookies:{
                'cookieName' : 'mycookie'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).has.length(1);

        })

    })

})