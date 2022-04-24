export default (error: any) => {
  return {
    message: error.response.data.userMessage,
    color: 'error'
  };
};
