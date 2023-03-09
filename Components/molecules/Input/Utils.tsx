// interface errorProps {
//   isError: boolean;
//   text: string;
// }
interface adornmentProps {
  value: "suffix" | "prefix";
  text: string;
}
interface countProps {
  value: number | undefined;
  total: number | undefined;
}
interface helperTextProps {
  value: boolean;
  text: string;
  helperIcon: boolean;
}

export interface InputProps {
  adornment?: adornmentProps;
  size?: "small" | "medium" | "large";
  state?: "default" | "disabled" | "filled" | "success" | "warning" | "error";
  required?: boolean;
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  helperText?: helperTextProps;
  styles?: Object;
  label?: string;
  text?: string;
  type?: string;
  handleChange?: any;
  value?: string;
  characterCounter?: countProps;
  handleClear?: any;
}
