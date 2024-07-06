import { backendUrl } from "@/app/constants";
import axios from "axios";
import { Visite } from "../types/visite";

export class VisiteService {
  private static baseUrl = backendUrl + "/visites";

  private static instance: VisiteService;

  private constructor() {}

  public static getInstance(): VisiteService {
    if (!VisiteService.instance) {
      VisiteService.instance = new VisiteService();
    }

    return VisiteService.instance;
  }

  static async getVisites(): Promise<Visite[]> {
    const response = await axios.get<Visite[]>(this.baseUrl);
    return response.data;
  }
}
