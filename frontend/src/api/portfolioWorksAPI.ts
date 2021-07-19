import { WorkParameter } from "../models/WorkParameter";
import { get } from "./http"

export const getPortfolioWorks = async () => {
  return await get<WorkParameter[]>("/v1/works")
}

export const getPortfolioWork = async (id: number) => {
  return await get<WorkParameter>(`/v1/works/${id}`)
}

export const getPortfolioWorkForApplicationName = async (name: string) => {
  return await get<WorkParameter>(`/v1/works/${name}`)
}