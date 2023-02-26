import {connect, model, models, Schema} from "mongoose"
//const connectionString = 'mongodb+srv://user1:z6118324@cluster0.a9a3ze2.mongodb.net/stock'
const connectionString = process.env.MONGODB_URI
export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method: ", req.method)

    if (req.method === 'GET') {
        const docs = await Product.find()
        res.status(200).json(docs)
    } else if (req.method === 'POST') {
        console.log(req.body)
        //res.status(200).json(req.body)
          const doc = await Product.create(req.body)
          res.status(201).json(doc)
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}



const productSchema = new Schema({ 
    code: String,
    name: String,
    price: String,
});

console.log("Mongoose Models", models)
const Product = models?.product || model('product', productSchema);