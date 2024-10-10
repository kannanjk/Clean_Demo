export interface DependenciesData {
    useCases: useCaseData
    repository: repositoryData
}

export interface repositoryData {
    userRepository: any
    
}

export interface useCaseData {
    createProfile_UseCase: any;
    getUserProfile_UseCase: any; 
    // updateProfile_UseCase:any
} 