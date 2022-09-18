export default interface inputInterface {
    name: string;
    label?: string | undefined;
    placeHolder?: string;
    registerName?: string;
    value?: any;
    disabled?: boolean;
    register: (registerName: any) => any;
    errors?: {
        name?: {
        type?: string;
        message?: string;
        }
    },
}