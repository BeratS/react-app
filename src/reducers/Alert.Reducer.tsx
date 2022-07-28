import { VariantType } from "notistack";

export interface IAlert {
  type: VariantType | 'clear';
  msg: string
}

const AlertReducer = (state: any, action: IAlert) => {
  switch (action.type) {
    case "success":
      console.log('Success');
      state = action;
      return state;
    case "error":
      console.log('Error', state, action);
      state = action;
      return state;
    case "warning":
      console.log('Warning');
      state = action;
      return state;
    case "info":
      console.log('Info');
      state = action;
      return state;
    case "clear":
      console.log('Clear');
      state = action;
      return state;
    default:
      console.log('Default');
      state = action;
      return state;
  }
};

export { AlertReducer };