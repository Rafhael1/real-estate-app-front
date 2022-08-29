import { ReactElement } from 'react';
export interface FieldTypes {
	input: unknown;
	label?: string;
	color?:
		| 'primary'
		| 'secondary'
		| 'error'
		| 'info'
		| 'success'
		| 'warning'
		| 'default'
		| undefined;
	size?: 'small' | 'medium' | undefined;
	icon: ReactElement;
	variant?: 'standard' | 'filled' | 'outlined';
	type: string;
	autoFocus: boolean;
	required: boolean;
	style: never;
}
