
export default interface inputInterface {
    name: string;
    label?: string|undefined;
    placeHolder: string;
    register: (val:string, obj?: object) => any;
    registerName: string;
}