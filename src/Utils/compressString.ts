const compressString = (str: string) => {
  let res = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    const cur = str[i];
    const next = str[i + 1];
    if (cur === next) {
      count++;
    } else {
      res += cur + String(count);
      count = 1;
    }
  }
  return res.length < str.length ? res : str;
};

export default compressString;
