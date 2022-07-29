import { VariantType } from "notistack";

export interface IAlert {
  type: VariantType | 'clear';
  msg: string
}

const AlertReducer = (state: any, action: IAlert) => {
  switch (action.type) {
    case "success":
      state = action;
      return state;
    case "error":
      state = action;
      return state;
    case "warning":
      state = action;
      return state;
    case "info":
      state = action;
      return state;
    case "clear":
      state = action;
      return state;
    default:
      state = action;
      return state;
  }
};

export { AlertReducer };