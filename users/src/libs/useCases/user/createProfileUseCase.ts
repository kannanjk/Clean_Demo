import { UserData, UserProfile } from "../../entities";

export const createProfile_UseCase = (dependencies: any) => {
    const { repository: { userRepository } } = dependencies;
    if (!userRepository)
        throw new Error("the user repository should be dependencis")

    const execute = ({
        name,
        email, 
        isBlocked
    }: UserData) => {
        const userProfile = new UserProfile({ name, email, isBlocked })
        return userRepository.createUser(userProfile)
    }
    return {
        execute
    }
}