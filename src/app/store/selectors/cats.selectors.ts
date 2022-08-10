import { createFeatureSelector } from "@ngrx/store";
import { Cat } from "types";

export const getCatsList = createFeatureSelector<Cat[]>('cats')
