import { Patient } from "@/app/patients/types/patient";

export interface Visite {
  uuid: string;
  visiteDate: string;
  type: "AT_HOME" | "AT_OFFICE"; 
  reason: string;
  familyHistory: string;
  patient: Patient;
}

export interface CreateVisiteDto {
  visiteDate: string;
  type: "AT_HOME" | "AT_OFFICE"; 
  reason: string;
  familyHistory: string;
  patientUuid: string;
}

export interface UpdateVisiteDto {
  visiteDate: string;
  type: "AT_HOME" | "AT_OFFICE"; 
  reason: string;
  familyHistory: string;
}
