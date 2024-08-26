import express from "express";
import { DependenciesData } from "../libs/entities/interface";
import userRoutes from './user'

export const routes = (dependencies: DependenciesData) => {
    const routes = express.Router()
    
    const user = userRoutes(dependencies)
 
    routes.use('/user', user)

    return routes
}