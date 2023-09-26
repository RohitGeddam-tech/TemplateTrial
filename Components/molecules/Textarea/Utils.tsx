export interface TextareaProps {
  state?: "default" | "disabled" | "filled" | "success" | "warning" | "error";
  required?: boolean;
  helper?: boolean;
  helperIcon?: boolean;
  helperText?: string;
  styles?: Object;
  label?: string;
  handleChange?: any;
  value?: string;
  characterCounter?: boolean;
  characterTotal?: number;
  characterValue?: number;
}
