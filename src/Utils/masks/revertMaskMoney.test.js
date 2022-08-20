import revertMaskMoney from './revertMaskMoney';

test('Revert mask money function', () => {
	expect(revertMaskMoney('€1,000.00')).toEqual(1000);
});
