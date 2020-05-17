import axios from "axios";
import { toast } from "react-toastify";

export const displayError = (err) =>
  toast.error(err.message.split(":")[1].trim().replace(".", ""));

export const sortFn = (a, b) => {
  var dateA = new Date(a.createdAt).getTime();
  var dateB = new Date(b.createdAt).getTime();
  return dateA < dateB ? 1 : -1;
};

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "twitter-build");

  let toastId = null;
  const { data } = await axios.request({
    method: "POST",
    url: process.env.REACT_APP_CLOUDINARY_URL,
    data: formData,
    onUploadProgress: (p) => {
      const progress = p.loaded / p.total;

      if (toastId === null) {
        toastId = toast("Upload in progress", {
          progress,
          bodyClassName: "upload-progress-bar",
        });
      } else {
        toast.update(toastId, {
          progress,
        });
      }
    },
  });

  toast.dismiss(toastId);

  return data.secure_url;
};
