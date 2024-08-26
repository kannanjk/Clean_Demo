import { schema } from '../../database/mongo'

const { User } = schema

export = {
    createUser: async (user: any) => {
        const mongooseObject = User.build(user)
        return await mongooseObject.save()
    },
    getUser: async (id: any) => {
        const user = await User.findOne({ id })
        console.log(user);

        return user
    }
}
