export interface FieldTypes {
    input: unknown,
    label?: string,
    color?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "default" | undefined,
    size?: "small" | "medium" | undefined,
    icon: Element,
    variant?: "standard" | "filled" | "outlined"
    type: string,
    required: boolean,
    style: never
}