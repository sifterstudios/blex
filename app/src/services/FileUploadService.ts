import http from "../http-common";

const upload = (file: File, 
				song: string, 
				artist: string, 
				type: string, 
				onUploadProgress: any): Promise<any> => {
	let formData = new FormData();

	formData.append("file", file);
	formData.append("song", song);
	formData.append("artist", artist);
	formData.append("type", type);

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
