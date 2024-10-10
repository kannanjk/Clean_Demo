import express from "express";
import { DependenciesData } from "../libs/entities/interface";
import userController from '../libs/controllers'

export = (dependencies: DependenciesData) => {
    
    const router = express.Router()
    const { createProfile, getProfile} = userController(dependencies)

    router.post('/creatProfile', createProfile)
    router.post('/getUser', getProfile)
    // router.put('/updateUser', getProfile)

    return router
}