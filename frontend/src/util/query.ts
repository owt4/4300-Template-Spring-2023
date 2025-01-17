import axios from "axios";
import { BaseRecipe, FullRecipe } from "./types";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const searchRecipes = (query: string, pantry: string[], config: string) => {
  return client.post<FullRecipe[]>(`/recipes`, { query, pantry, config });
};

export const searchRecipe = (id: number) => {
  return client.get<FullRecipe>(`/recipes/${id}`);
};
