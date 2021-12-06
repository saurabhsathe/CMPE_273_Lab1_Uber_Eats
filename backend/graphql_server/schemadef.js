const { gql } = require("apollo-server");

module.exports = gql`
 type Restaurant {
    resteraunt_name:String!
        address:String!
        zipcode:String!
        restdp:String!
        contact:String!
        owner_email:String!
        pickup_drop:String!
        diet:String!
        city:String!
        restdesc:String!    
  },
  type Query {
      getRestos:[Restaurant]
  }
  `;
