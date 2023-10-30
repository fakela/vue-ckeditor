export default class MyUploadAdapter {
    constructor(loader) {
      // The file loader instance to use during the upload.
      this.loader = loader;
    }
  
    // Starts the upload process.
    upload() {
      return this.loader.file.then((file) => {
        return new Promise((resolve, reject) => {
          // Your image upload logic goes here.
          // Replace this with your actual upload endpoint.
          const uploadUrl = 'https://your-upload-api.com/upload';
  
          const xhr = new XMLHttpRequest();
          xhr.open('POST', uploadUrl, true);
          xhr.setRequestHeader('Authorization', 'Bearer ' + 'YOUR_API_TOKEN'); // Optional: Set authorization header
  
          xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
              if (xhr.status === 200 || xhr.status === 201) {
                // Upload successful, resolve with the uploaded image URL.
                const response = JSON.parse(xhr.responseText);
                resolve({
                  default: response.url,
                });
              } else {
                // Upload failed, reject with an error message.
                reject('Upload failed');
              }
            }
          };
  
          const formData = new FormData();
          formData.append('file', file);
  
          xhr.send(formData);
        });
      });
    }
  
    // Aborts the upload process.
    abort() {
      // Implement this method if needed.
    }
  }