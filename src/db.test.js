import { MongoClient } from "mongodb";
import { expect } from "chai";
import { getUserByUsername } from './db'

describe('getUserByUsername', () => {
    it('get the correct user from the database given a username', async  () => {
       const client = await MongoClient.connect(
        `mongodb://localhost:27017/TEST_DB`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
       )
       const db = client.db('TEST_DB')

       // tests

       const fakedata = [
        {
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com'
        },
        {
            id: '124',
            username: 'wrong',
            email: 'wrong@wrong.com'
        }

    ]
       client.close()
    })
})