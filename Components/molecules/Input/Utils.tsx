// interface errorProps {
//   isError: boolean;
//   text: string;
// }
// interface adornmentProps {
//   value: "suffix" | "prefix";
//   text: string;
// }
// interface countProps {
//   value: number | undefined;
//   total: number | undefined;
// }
// interface helperTextProps {
//   value: boolean;
//   text: string;
//   helperIcon: boolean;
// }

export interface InputProps {
  adornment?: boolean;
  adornmentType?:"suffix" | "prefix";
  adornmentValue?:string;
  size?: "small" | "medium" | "large";
  state?: "default" | "disabled" | "filled" | "success" | "warning" | "error";
  required?: boolean;
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  leading?: string;
  trailing?: string;
  helper?: boolean;
  helperIcon?: boolean;
  helperText?: string;
  styles?: Object;
  name?: string;
  label?: string;
  text?: string;
  type?: string;
  handleChange?: any;
  value?: string;
  characterCounter?: boolean;
  characterTotal?: number;
  characterValue?: number;
  handleClear?: any;
}
