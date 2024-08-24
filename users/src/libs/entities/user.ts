export interface UserData {
    name: string
    email: string
    isBlocked: boolean
}

export class UserProfile {
    name: string
    email: string
    isBlocked: boolean

    constructor({ name, email, isBlocked }: UserData) {
        this.name = name
        this.email = email
        this.isBlocked = isBlocked
    }
}