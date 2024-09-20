const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

let db;

const connectDB = async()=> {
    if(db) return db;
    try{
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
        const client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });
          db = await client.db('next-hero')
          return db;
    }
    catch(error){
        console.log(error)
    }
}

export default connectDB;







// const womProductsCollection = client.db("Bkash").collection("wom-ecomerce");