import { toast } from "react-toastify";

export const displayError = err =>
	toast.error(err.message.split(":")[1].trim().replace('.', " 😭"));

export const sortFn = (a,b) => {  
    var dateA = new Date(a.createdAt).getTime();
    var dateB = new Date(b.createdAt).getTime();
    return dateA < dateB ? 1 : -1;  
}; 
