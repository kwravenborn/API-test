const MongoClient = require('mongodb').MongoClient

const url = 'mongodb+srv://superAdmin:palmza551@cluster0.aoswi.mongodb.net/sample_weatherdataretryWrites=true&w=majority'
const client = new MongoClient(url, { useNewUrlParser: true })

async function run() {
    try {
        // Creat connection to mongodb
        await client.connect()

        // Connect to data base
        const db = client.db('sample_weatherdata') 

        // Retrieve collection
        const collection = db.collection('data')

        // Query data
        const query = { type: 'FM-13' }
        const weather = await collection.find(query).limit(10)
        console.log(weather)
    } catch(e) {
        console.log(e)
    } finally {
        await client.close()
    }
}

run().catch(console.dir)