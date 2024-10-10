import { DependenciesData } from "../entities/interface";

export = (dependencies: DependenciesData): any => {
    const {
        useCases: { updateProfile_UseCase }
    } = dependencies
}