import { userRepository } from "../libs/app/repositry/mongo";
import { createProfile_UseCase } from "../libs/useCases";
import { getUserProfile_UseCase } from "../libs/useCases";

const useCases = {
    createProfile_UseCase,
    getUserProfile_UseCase
    
}

const repository = {
    userRepository, 
}

export = {
    useCases,
    repository
}