import { schema } from '../../database/mongo'

const { User } = schema

export = {
    createUser: async (user: any) => {
        const mongooseObject = User.build(user)
        return await mongooseObject.save()
    }
}
