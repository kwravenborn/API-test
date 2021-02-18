const MongoClient = require('mongodb').MongoClient

const url = 'mongodb+srv://superAdmin:palmza551@cluster0.aoswi.mongodb.net/sample_weatherdataretryWrites=true&w=majority'
const client = new MongoClient(url, { useNewUrlParser: true,useUnifiedTopology: true})

async function run() {
    try {
        // Creat connection to mongodb
        await client.connect()

        // Connect to data base
        const db = client.db('sample_weatherdata') 

        // Retrieve collection
        const collection = db.collection('data')

        // Query data
        const query = { callLetters: 'RIGG' }
        const weather = await collection.findOne(query)
        console.log(weather)
    } catch(e) {
        console.log(e)
    } finally {
        await client.close()
    }
}

run().catch(console.dir)