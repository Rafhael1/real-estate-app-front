const revertMaskMoney = (value) => {
  return value ? parseFloat(value.replace('€', '').replace(',', '')) : null;
};

export default revertMaskMoney;
