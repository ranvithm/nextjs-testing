import db from './model'
db.sequelize.sync()
const User = db.users

export default async (req, res) => {

    let { name = "ranjithkumar", email = "ran@g.com" } = req.body
    try {

        const user = await User.findOne({
            where: { email: email }
        })
        if (user) {
            return res.status(200).send(user)
        }
        const newUser = await User.create({
            name,
            email
        })
        res.status(201).send(newUser)
    } catch (error) {
        console.error(error)
        res.status(500).send("Error in signup. Please try again.")
    }
}