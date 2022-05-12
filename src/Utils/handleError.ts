interface Error {
  response: {
    data: {
      userMessage: string;
    };
  };
}

export default (error: Error): { message: string; color: string } => {
  return {
    message: error.response.data.userMessage,
    color: 'error'
  };
};
