const { ApolloServer, gql } = require('apollo-server-lambda');
var faunadb = require('faunadb'),
  q = faunadb.query;

const typeDefs = gql`
  type Query {
 
    GetCard: [vCard]
 
  }
  type Mutation{
    AddData(c1:String,c2:String,c3:String,rec:String,sender:String,msg:String,link:String):vCard
  }
  

  type vCard {
   
    c1: String
    c2: String
    c3: String
    rec: String
    sender: String
    msg: String
    link: String
  }

 
`

const authors = [
  { c1:"s",c2:"s",c3:"23",rec:"usd",sender:"sjs",msg:"sjd",link:"htttps:com"}
]

const resolvers = {
  Query: {
 
    GetCard:async () =>{
      try{
        var adminClient = new faunadb.Client({ secret:'fnAD97NzC0ACB-4NYmuxtoExHXi5ByH57ZnQ0UUh'  });
        const result = await adminClient.query(
          q.Map(
            q.Paginate(q.Match(q.Index("lolly"))),
            q.Lambda(x => q.Get(x))
          )
        )

        console.log(result.data,"data aya k nahi")
        console.log(result.data.ts,"yeh dekh aya k nahi")

        return result.data.map(d=>{
          return {
             c1:d.data.c1,c2:d.data.c2,c3:d.data.c3,
             msg:d.data.msg,sender:d.data.sender,rec:d.data.rec
          }
        })




      }catch(error){console.log(error)}
    }
 
  
  },

  Mutation:{
    AddData:async(_,{c1,c3,c2,msg,rec,sender,link})=>{
      try{
        console.log(msg,c1,"agaya data aidher")
        var adminClient = new faunadb.Client({ secret:'fnAD97NzC0ACB-4NYmuxtoExHXi5ByH57ZnQ0UUh' });
        const result = await adminClient.query(
          q.Create(
            q.Collection('todos'),
            {
              data: {
              c1,c2,c3,msg,rec,sender,link
              }
            },
          )
        )

        // axios
        // .post("https://api.netlify.com/build_hooks/5fe62a44605fe10a40a29ca2")
        // .then(function (response) {
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.error(error,"netlify walay mai error hai");
        // });

        return{c1}

         
       

      }catch(error){console.log(error)}
    }

  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
