const { calcTotal } = require('../js/pricing');

test('student discount: 2 tickets', function () { assertEq(calcTotal(2, false, true), 619); });
test('no discount for regular price', function () { assertEq(calcTotal(2, false), 724); });
test('member and student: only the bigger discount', function () { assertEq(calcTotal(2, true, true), 584); });
test('member discount: 2 tickets', function () { assertEq(calcTotal(2, true), 584); });