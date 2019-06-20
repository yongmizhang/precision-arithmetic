import PA from '../src/index';

test('精度校准', () => {
	expect(PA.strip(0.09999999999999998)).toBe(0.1);
	expect(PA.strip(1.0000000000000001)).toBe(1);
});

test('小数位长度', () => {
	expect(PA.digitLength(123.4567890123)).toBe(10);
	expect(PA.digitLength(1.23e-5)).toBe(7);
	expect(PA.digitLength(1.23E-5)).toBe(7);
	expect(PA.digitLength(1.233467e-5)).toBe(11);
	expect(PA.digitLength(123.45e-5)).toBe(7);
	expect(PA.digitLength(1.23e-10)).toBe(12);
	expect(PA.digitLength(1.23e1)).toBe(1);
	expect(PA.digitLength(1e20)).toBe(0);
	expect(PA.digitLength(1.12345e20)).toBe(0);
	expect(PA.digitLength(1.123e30)).toBe(0);
	expect(PA.digitLength(1.123e-100)).toBe(103);
});

test('小数转整数', () => {
	expect(PA.float2Int(1e-1)).toBe(1);
	expect(PA.float2Int(1e-6)).toBe(1);
	expect(PA.float2Int(1e-7)).toBe(1);
	expect(PA.float2Int(1e-13)).toBe(1);
	expect(PA.float2Int(1.123e30)).toBe(1.123e30);
	expect(PA.float2Int(1.6e-30)).toBe(16);
	expect(PA.float2Int(1.234567e-13)).toBe(1234567);
	expect(PA.float2Int(1.2345678912345e10)).toBe(12345678912345);
	// expect(PA.float2Int(0.000000123456)).toBe(123456);
	expect(PA.float2Int(1.23456e-7)).toBe(123456);
	expect(PA.float2Int(1.23456e-7)).toBe(123456);
});

test('测试加法', () => {
	expect(1.31).toBe(1.31);
	expect(PA.add(1, 90)).toBe(91);
	expect(PA.add(10, 0.701)).toBe(10.701);
	expect(PA.add(-1, 0.7, -0.9)).toBe(-1.2);
	expect(PA.add(-2, -0.71)).toBe(-2.71);
	expect(PA.add(268.34, 0.83)).toBe(269.17);
	expect(PA.add(0.1, 0.2)).toBe(0.3);
	expect(PA.add(2.3, 2.4)).toBe(4.7);
	expect(PA.add(-1.6, -1)).toBe(-2.6);
	expect(PA.add(-2.0, 63)).toBe(61);
	expect(PA.add(-3, 7)).toBe(4);
	expect(PA.add(-221, 38)).toBe(-183);
	expect(PA.add(-1, 0)).toBe(-1);
	expect(PA.add(2.018, 0.001)).toBe(2.019);
	expect(PA.add(1.3224e10, 1.3224e3)).toBe(13224001322.4);
	expect(PA.add(1.6e-30, 1.6e-30)).toBe(3.2e-30);

	expect(PA.add(0.1, 0.2, 0.3)).toBe(0.6);
});

test('测试减法', () => {
	expect(PA.sub(268.34, 0.83)).toBe(267.51);
	expect(PA.sub(21, 0.83, 0.1)).toBe(20.07);
	expect(PA.sub(-1.1, 0.1, -1.1)).toBe(-0.1);
	expect(PA.sub(0.07, 0.01)).toBe(0.06);
	expect(PA.sub(0.7, 0.1)).toBe(0.6);
	expect(PA.sub(1.0, 0.9)).toBe(0.1);
	expect(PA.sub(1, 0)).toBe(1);
	expect(PA.sub(1, -0)).toBe(1);
	expect(PA.sub(-1, 0)).toBe(-1);
	expect(PA.sub(-1, -0)).toBe(-1);
	expect(PA.sub(1, 22)).toBe(-21);
	expect(PA.sub(8893568.397103781249, -7.29674059550)).toBe(8893575.693844376749);
	expect(PA.sub(105468873, 0)).toBe(105468873);

	expect(PA.sub(1.23e5, 10)).toBe(122990);
	expect(PA.sub(1.23e-5, 1.0023)).toBe(-1.0022877);
	expect(PA.sub(1.3224e10, 21)).toBe(13223999979);
	expect(PA.sub(1.3224e10, 1.3224e3)).toBe(13223998677.6);
	expect(PA.sub(1.7e-30, 0.1e-30)).toBe(1.6e-30);

	expect(PA.sub(6, 3, 2)).toBe(1);
	expect(PA.sub(6, 3, 2, 1, 2, 3)).toBe(-5);
});

test('测试乘法', () => {
	expect(PA.mult(0.7, 0.1)).toBe(0.07);
	expect(PA.mult(1.1, 10)).toBe(11);
	expect(PA.mult(268.34, 100, 1)).toBe(26834);
	expect(PA.mult(-0.1, 0.7, -0.1)).toBe(0.007);
	expect(PA.mult(0.07, 100)).toBe(7);
	expect(PA.mult(0.7, 0.1)).toBe(0.07);
	expect(PA.mult(3, 0.3)).toBe(0.9);
	expect(PA.mult(118762317358.75, 1e-8)).toBe(1187.6231735875);
	expect(PA.mult(0.362, 100)).toBe(36.2);
	expect(PA.mult(1.1, 1.1)).toBe(1.21);
	expect(PA.mult(2.018, 1000)).toBe(2018);
	expect(PA.mult(5.2, -3.8461538461538462)).toBe(-20);
	expect(PA.mult(1.22, -1.639344262295082)).toBe(-2);
	expect(PA.mult(2.5, -0.92)).toBe(-2.3);
	expect(PA.mult(-2.2, 0.6363636363636364)).toBe(-1.4);
	// expect(PA.mult(-3, 2.3333333333333335)).toBe(7);
	// expect(PA.mult(-0.076, -92.10526315789471)).toBe(7);
	expect(PA.mult(8.0, -0.3625)).toBe(-2.9);
	expect(PA.mult(6.6, 0.30303030303030304)).toBe(2);
	expect(PA.mult(10.0, -0.8)).toBe(-8);
	expect(PA.mult(-1.1, -7.272727272727273)).toBe(8);

	expect(PA.mult(-1.23e4, 20)).toBe(-246000);
	expect(PA.mult(1.7e-30, 1.5e20)).toBe(2.55e-10);

	expect(PA.mult(2, 2, 3)).toBe(12);
	expect(PA.mult(2, 2, 3, 0.1)).toBe(1.2);

	expect(PA.mult(0.000000123456, 0.000000123456)).toBe(1.5241383936e-14);
	expect(PA.mult(1.23456e-7, 1.23456e-7)).toBe(1.5241383936e-14);
});

test('测试除法', () => {
	expect(PA.div(0.7, 0.1, 0.1)).toBe(70);
	expect(PA.div(268.34, 100)).toBe(2.6834);
	expect(PA.div(-1.1, 0.1)).toBe(-11);
	expect(PA.div(1.21, 1.1)).toBe(1.1);
	expect(PA.div(4750.49269435, 4)).toBe(1187.6231735875);
	expect(PA.div(0.9, 3)).toBe(0.3);
	expect(PA.div(36.2, 0.362)).toBe(100);
	expect(PA.div(-20, 5.2)).toBe(-3.8461538461538462);
	expect(PA.div(-2, 1.22)).toBe(-1.639344262295082);
	expect(PA.div(-2.3, 2.5)).toBe(-0.92);
	expect(PA.div(-1.4, -2.2)).toBe(0.6363636363636364);
	expect(PA.div(7, -3)).toBe(-2.3333333333333335);
	expect(PA.div(7, -0.076)).toBe(-92.10526315789471);
	expect(PA.div(-2.9, 8.0)).toBe(-0.3625);
	expect(PA.div(2, 6.6)).toBe(0.30303030303030304);
	expect(PA.div(-8, 10.0)).toBe(-0.8);
	expect(PA.div(8, -1.1)).toBe(-7.272727272727273);

	expect(PA.div(-1.23e4, 20)).toBe(-615);
	expect(PA.div(2.55e-10, 1.7e-30)).toBe(1.5e20);

	expect(PA.div(12, 3, 2)).toBe(2);
});