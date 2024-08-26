import createProfile from "./createProfile"
import getProfile from "./getProfile"


export = (dependencies: any) => {

    return {
        createProfile: createProfile(dependencies),
        getProfile: getProfile(dependencies)
    }
}