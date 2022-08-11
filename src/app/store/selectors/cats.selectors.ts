import { createFeatureSelector } from "@ngrx/store";
import { Cat } from "types";
import { State } from "../state/cats.state";

export const getCatsList = (state: State) => state['store'].cats
