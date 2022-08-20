import maskMoney from './maskMoney';

test('Mask money function', () => {
	expect(maskMoney('123')).toEqual('€1.23');
});
