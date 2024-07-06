import { backendUrl } from "@/app/constants";
import { Patient } from "../types/patient";
import axios from "axios";

export class PatientService {
  private static baseUrl = backendUrl + "/patients";

  private static instance: PatientService;

  private constructor() {}

  public static getInstance(): PatientService {
    if (!PatientService.instance) {
      PatientService.instance = new PatientService();
    }

    return PatientService.instance;
  }

  static async getPatients(): Promise<Patient[]> {
    const response = await axios.get<Patient[]>(this.baseUrl);
    return response.data;
  }
}
