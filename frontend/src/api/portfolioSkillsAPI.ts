import SkillParameter from "../models/SkillParameter";
import { get } from "./http";

export const getPortfolioSkillList = async () => {
  return await get<SkillParameter[]>("/v1/skills");
};

export const getPortfolioSkill = async (id: Number) => {
  return await get<SkillParameter>(`/v1/skills/${id}`);
};

export const getPortfolioSkillTypeList = async () => {
  return await get<string[]>(`/v1/skills/type`);
};
