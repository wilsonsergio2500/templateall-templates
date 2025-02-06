import { BaseAssetType, FormOnStateType } from "@models/index";

export interface I{Name_pascalized}StateModel {
    loading: boolean;
    busy: boolean;
    current: {Name_pascalized}Type | null;
    form: FormOnStateType<{Name_pascalized}Type>
  }

  export type {Name_pascalized}Type = BaseAssetType | {

  }