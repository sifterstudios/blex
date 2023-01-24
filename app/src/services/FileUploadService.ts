import http from "../http-common";

const upload = (file: File, onUploadProgress: any): Promise<any> => {
	let formData = new FormData();

	formData.append("file", file);

	return http.post("/document/upload", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
		onUploadProgress,
	});
};
const getFiles = () : Promise<any> => {
return http.get("/document");
};

const FileUploadService = {
upload,
getFiles,
};
export default FileUploadService;
