const convertToBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default convertToBase64;

// const reader = new FileReader();
// reader.readAsDataURL(file as Blob);
// reader.onload = () => {
//   return reader.result as string;
// };
