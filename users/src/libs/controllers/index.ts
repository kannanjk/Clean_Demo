import createProfile from "./createProfile"


export = (dependencies: any) => {

    return {
        createProfile: createProfile(dependencies)
    }
}