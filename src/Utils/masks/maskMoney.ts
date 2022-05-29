const maskMoney = (value: any) => {
  const valueAsNumber = value.length >= 0 ? value.replace(/\D+/g, '') : '';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR'
  }).format(valueAsNumber / 100);
};

export default maskMoney;
