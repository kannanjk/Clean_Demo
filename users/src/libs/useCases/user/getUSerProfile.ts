import { DependenciesData } from "libs/entities/interface";

export const getUserProfile_UseCase = (dependencies: DependenciesData) => {
    const {
        repository: { userRepository }
    } = dependencies

    if (!userRepository) {
        throw new Error("The user repository should be dependencie");
    }
    const execute = ({ userId }: { userId: string }) => {
        return userRepository.getUser(userId)
    }
    return { 
        execute 
    }
}