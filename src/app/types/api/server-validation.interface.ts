export interface IServerFieldValidations {
  rule: string;
  data: any;
}

export interface IServerFormValidations {
  message: string;
  data: IServerFormValidationField;
}

export interface IServerFormValidationField {
  [key: string]: IServerFieldValidations[] | IServerFormValidationField;
}
