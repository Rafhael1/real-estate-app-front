const maskMoney = (value: any): string => {
	if (value) {
		const valueAsNumber = value.replace(/\D+/g, '');
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'EUR'
		}).format(valueAsNumber / 100);
	}
	return;
};

export default maskMoney;
