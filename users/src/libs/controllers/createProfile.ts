import { NextFunction, Request, Response } from "express";
import { DependenciesData } from "../entities/interface";

export = (dependencies: DependenciesData): any => {
    const {
        useCases: { createProfile_UseCase },
    } = dependencies

    const createPrfile = async (req: Request, res: Response, next: NextFunction) => {
        console.log("%%%^%%%%");
        
        try {
            const { name, email, isBlocked } = req.body
            const userProfile = await createProfile_UseCase(dependencies).execute({
                name, email, isBlocked
            })
            if (userProfile) {
                res.send({
                    success: true,
                    data: userProfile
                })
            } else {
                res.send({
                    success: false,
                    message: "Something went error"
                })
            }
        } catch (error) {
            throw new Error(error);
        }
    }
    return createPrfile
}