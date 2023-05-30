export enum AccessType {
  admin = 'admin',
  delegate = 'delegate'
}

export interface AuthRequest {
  email: string
  password: string
}

export interface AuthResponse {
  user: {
    id: number
    name: string
    email: string
    profileImage: string
    type: AccessType
    roles: string[]
  }
  accessToken: string
  expires_at: number
}

export interface ForgotPasswordSendCodeRequest {
  email: string
}

export interface ForgotPasswordValidateCodeRequest {
  code: string
  email: string
}

export interface ForgotPasswordResetRequest {
  code: string
  email: string
  password: string
}
