import { toast } from "react-toastify";

export const displayError = err =>
	toast.error(err.message.split(":")[1].trim().replace('.', " 😭"));
