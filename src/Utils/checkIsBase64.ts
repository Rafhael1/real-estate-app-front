const checkIsBase64 = (str: string) => {
	const base64regex = new RegExp(
		'^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$'
	);
	return base64regex.test(str);
};

export default checkIsBase64;
