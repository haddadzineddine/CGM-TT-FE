import { backendUrl } from "@/app/constants";
import axios, { AxiosResponse } from "axios";
import { CreateVisiteDto, UpdateVisiteDto, Visite } from "../types/visite";
import { Update } from "next/dist/build/swc";

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

  static async getVisite(uuid: string): Promise<Visite> {
    const response = await axios.get<Visite>(`${this.baseUrl}/${uuid}`);
    return response.data;
  }

  static async createVisite(
    visite: CreateVisiteDto
  ): Promise<AxiosResponse<Visite, any>> {
    return await axios.post<Visite>(this.baseUrl, visite);
  }

  static async updateVisite(
    uuid: string,
    visite: UpdateVisiteDto
  ): Promise<AxiosResponse<Visite, any>> {
    return await axios.patch<Visite>(`${this.baseUrl}/${uuid}`, visite);
  }
}
