export interface Patient {
  uuid: string;
  name: string;
  surname: string;
  birthDate: string; 
  socialSecurityNumber: string;
}

export interface CreatePatientDto {
  name: string;
  surname: string;
  birthDate: string;
  socialSecurityNumber: string;
}
