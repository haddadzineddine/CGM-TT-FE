import { Patient } from "@/app/patients/types/patient";

export interface Visite {
  uuid: string;
  visiteDate: string;
  type: "AT_HOME" | "AT_HOSPITAL"; 
  reason: string;
  familyHistory: string;
  patient: Patient;
}
