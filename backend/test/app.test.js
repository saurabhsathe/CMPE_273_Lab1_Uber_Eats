const assert = require('assert');
const axios = require('axios')


//Testing login for customers
describe('POST customer Login API call', () => {
    const dummyCustomer = {email: "mary.doe@gmail.com", password: "saurabh@123",usertype:"customer"};
    it('should return login successful message', async () => {
        const response = await axios.post('http://localhost:3001/customerlogin', dummyCustomer);
        
        assert.strictEqual(response.status, 200);
    });
});

describe('Get Restaurants API call', () => {
    
    it('should return list of restaurants present in the database, right now there are 6', async () => {
        const response = await axios.get('http://localhost:3001/getallResto');
        //console.log(response.data)
        assert.strictEqual(response.data.length, 6);
    });
});

describe('POST API call for placing order for an authorized user', () => {
    axios.defaults.headers.common['authorization'] = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTkwNTZjMDFkYjI0NWQzZGFmZjdmMjkiLCJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsInVzZXJfdHlwZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjM2OTIzOTExfQ.ROdxoWZwa_TcKNf6q85AG1SGaOyLtbyEyrVFu129_T8"
    let data={
        customer_email:"mary.doe@gmail.com",
        restaurant_name:"Nick the greek",
        restaurant_zipcode:"95113",
        amount:200,
        delivery_address:"43 W Santa Clara St, San Jose, CA",
        order_status:"placed",
        instructions:"Would love if more fries accompanies",
        user_type:"customer"
    }
    
    
    it('should be able to successfully place order', async () => {
        const response = await axios.post("http://localhost:3001/placeOrder",data);
        console.log(response.data)
        assert.strictEqual(response.status,200);
    });
});



describe('POST API call for updating order for an authorized restaurant', () => {
    let data={
        id:"6190f099dc66a1e35cf86d7f",
        status:"on the way"
    }
    
    
    it('should be able to successfully place order', async () => {
        axios.defaults.headers.common['authorization'] = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdkYjIwZWNlN2U5ODAwMGQxMjgzOGIiLCJyZXN0ZXJhdW50X25hbWUiOiJQYW5kYSBFeHByZXNzIiwiemlwY29kZSI6Ijk1MTI2IiwicmVzdGRwIjoiaHR0cHM6Ly91YmVyZWF0c3Jlc3RhdXJhbnRpbWFnZXMuczMuYW1hem9uYXdzLmNvbS9QYW5kYSUyMEV4cHJlc3M5NTEyNi5wbmciLCJ1c2VyX3R5cGUiOiJvd25lciIsImlhdCI6MTYzNjkyNjA0MiwiZXhwIjoxNjM3OTM0MDQyfQ.yQGB3WFMRC8ORTVxobXit2jDrpv01R_igs0RvRmB9cU"
        const response = await axios.post("http://localhost:3001/updateOrder",data);
        assert.strictEqual(response.status,200);
    });
});

describe('GET API call for getting dishes of the restaurant', () => {

    
    it('should be able to successfully return list of dishes for a restaurant', async () => {
        let data={
            resteraunt_name:"Panda Express",
            zipcode:"95126",
         
        }
        const response = await axios.post("http://localhost:3001/getDishes",data);
        assert.strictEqual(response.data.length,2);
    });
});



//JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdkYjIwZWNlN2U5ODAwMGQxMjgzOGIiLCJyZXN0ZXJhdW50X25hbWUiOiJQYW5kYSBFeHByZXNzIiwiemlwY29kZSI6Ijk1MTI2IiwicmVzdGRwIjoiaHR0cHM6Ly91YmVyZWF0c3Jlc3RhdXJhbnRpbWFnZXMuczMuYW1hem9uYXdzLmNvbS9QYW5kYSUyMEV4cHJlc3M5NTEyNi5wbmciLCJ1c2VyX3R5cGUiOiJvd25lciIsImlhdCI6MTYzNjkyNjA0MiwiZXhwIjoxNjM3OTM0MDQyfQ.yQGB3WFMRC8ORTVxobXit2jDrpv01R_igs0RvRmB9cU