const pgp = require('pg-promise')({
    noWarnings: true
})

const db = pgp(`postgres://postgres:Gain@1234@localhost:4432/infoxd`)


export default async (req, res) => {
    try {
        console.log(db)
        const product = await db.any('Select * frem applications')

        res.status(200).json(product)

    } catch (error) {
        // console.error(error);
        res.status(500).send({message: ["Error creating on the server"], error: error})
    }
}