// import { NextFunction, Request, Response } from "express";
// import { DependenciesData } from "../entities/interface";

// export = (dependencies: DependenciesData): any => {
//     const {
//         useCases: { getUserProfile_UseCase },
//     } = dependencies
 
//     const getProfile = async (req: Request, res: Response, next: NextFunction) => {
//         try {
//             const { userId } = req.body
//             const userProfile = await getUserProfile_UseCase(dependencies).execute({
//                 userId
//             })
//             if (!userProfile) {
//                 throw new Error("No such profile found");
//             }
//             res.send({
//                 data: userProfile
//             })
//         } catch (error) {
//             throw new Error(error);
//         }
//     }
//     return getProfile
// }