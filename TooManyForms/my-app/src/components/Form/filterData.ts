import userInterface from "../AllUsers/userInterface";
import { initialForm } from "./initialForm";

export const filterData = (data: userInterface | any) => {
    const { name = "", username = "", email = "", address: { street = "", city = "", zipcode = "" } = {}, phone = "", website = "" } = data;
    const rightData = {
        name,
        username,
        email,
        street,
        city,
        zipcode,
        phone,
        website
    };

    const resultData = JSON.parse(JSON.stringify(initialForm));
    resultData.forEach((element: { name: string, value: string; }) => {
        if (rightData.hasOwnProperty(element.name)) {
              // @ts-ignore
            element.value = rightData[element.name];
        }
    })

    return resultData
}