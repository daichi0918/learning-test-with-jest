// canの型を定義
type CanType = {
  flavor: string;
  ounces: number;
};
// can1とcan2はそれぞれ同じプロパティと同じ値を持つ
const can1: CanType = {
  flavor: 'grapefruit',
  ounces: 12,
};

const can2: CanType = {
  flavor: 'grapefruit',
  ounces: 12,
};
// can3はcan2の参照を持つ
const can3: CanType = can2;

// Canクラス
class Can {
  flavor: string;
  ounces: number;
  constructor({ flavor, ounces }: CanType) {
    this.flavor = flavor;
    this.ounces = ounces;
  }
}
// can4はCanクラスで生成されたオブジェクトでcan1、can2と同じプロパティを持つ
const can4 = new Can({
  flavor: 'grapefruit',
  ounces: 12,
});

// can1 と can2 は等しくないと評価される
test('can1 and can2 are not the exact same instance', () => {
  expect(can1).not.toBe(can2);
});
// can2 と can3 は等しいと評価される
test('can2 and can3 are the same instance', () => {
  expect(can2).toBe(can3);
});

// can1 と can2 は等しいと評価される
test('can1 and can2 have the same properties', () => {
  expect(can1).toEqual(can2);
});
// can2 と can4 は等しいと評価される
test('can2 and can4 have the same properties', () => {
  expect(can2).toEqual(can4);
});

test('"0" should be Truthy', () => {
  expect('0').toBeTruthy();
});
test('0 should be Falsy', () => {
  expect(0).toBeFalsy();
});

test('should be null', () => {
  expect(null).toBe(null);
  expect(null).toBeNull();
});

test('should be undefined', () => {
  expect(undefined).toBe(undefined);
  expect(undefined).toBeUndefined();
});

test('should be null or undefined', () => {
  let a; // undefined
  expect(a == null).toBe(true);
  a = null; // null
  expect(a == null).toBe(true);
});

const hoge = () => ({ hoge: 'hogehoge', number: 0 });
test('hoge return anything', () => {
  // 期待値がnullやundefinedではないことを評価
  expect(hoge()).toEqual(expect.anything());
  // 期待値の一部のプロパティがnullやundefinedではないことを評価
  expect(hoge()).toEqual({
    hoge: 'hogehoge',
    number: expect.anything(),
  });
  // 期待値の一部のプロパティnumberがNumber型であることを評価
  expect(hoge()).toEqual({
    hoge: 'hogehoge',
    number: expect.any(Number),
  });
});

test('0.1 + 0.2 returns 0.3', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3); // デフォルトでは小数点以下2桁までを評価する
});
test('0.301 and 0.3 are different when numDigits is 3', () => {
  expect(0.3 + 0.001).not.toBeCloseTo(0.3, 3); // 小数点以下3桁目まで評価する場合、0.3と0.301は等しくないと評価する
});

// toBeGreaterThan
test('0.1 + 0.2 is greater than 0.3', () => {
  expect(0.1 + 0.2).toBeGreaterThan(0.3);
  expect(0.1 + 0.2 > 0.3).toBe(true);
});
// toBeGreaterThanOrEqual
test('0.1 + 0.2 is greater than 0.3 or 0.1 + 0.2 equals to 0.30000000000000004', () => {
  expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.3);
  expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.30000000000000004);
  expect(0.1 + 0.2 >= 0.3).toBe(true);
  expect(0.1 + 0.2 >= 0.30000000000000004).toBe(true);
});

// toBeLessThan
test('0.1+0.2 is less than 0.4', () => {
  expect(0.1 + 0.2).toBeLessThan(0.4);
  expect(0.1 + 0.2 < 0.4).toBe(true);
});
// toBeLessThanOrEqual
test('0.1 + 0.2 is less than 0.4 or 0.1 + 0.2 equals to 0.30000000000000004', () => {
  expect(0.1 + 0.2).toBeLessThanOrEqual(0.4);
  expect(0.1 + 0.2).toBeLessThanOrEqual(0.30000000000000004);
  expect(0.1 + 0.2 <= 0.4).toBe(true);
  expect(0.1 + 0.2 <= 0.30000000000000004).toBe(true);
});

// 配列の要素がプリミティブ型の場合
const fruitList = ['Apple', 'Lemon', 'Orange'];
// 1つの要素が含まれていることを検証
test('contains Apple in fruitList', () => {
  expect(fruitList).toContain('Apple');
});
// 複数の要素が含まれていることを検証
test('contains Apple and Orange in fruitList', () => {
  expect(fruitList).toEqual(expect.arrayContaining(['Apple', 'Orange']));
});
// 配列の要素がオブジェクト型の場合
const itemList = [
  { name: 'Apple', price: 100 },
  { name: 'Lemon', price: 150 },
  { name: 'Orange', price: 120 },
];
// 1つの要素が含まれていることを検証
test('contains Apple in itemList', () => {
  expect(itemList).toContainEqual({ name: 'Apple', price: 100 });
});
// 複数の要素が含まれていることを検証
test('contains Apple and Orange in itemList', () => {
  expect(itemList).toEqual(
    expect.arrayContaining([
      { name: 'Apple', price: 100 },
      { name: 'Orange', price: 120 },
    ])
  );
});

const ciBuild = {
  number: 1,
  duration: 12000,
  state: 'success',
  triggerParameters: {
    is_scheduled: true,
  },
  type: 'scheduled_pipeline',
  actor: {
    login: 'Taka',
  },
};
// 1つのプロパティを検証
test('build state should be success', () => {
  expect(ciBuild).toHaveProperty('state', 'success');
});
// ネストしたプロパティを検証
test('actor should be Taka', () => {
  expect(ciBuild).toHaveProperty('actor.login', 'Taka');
});
// 複数のプロパティを検証
test('triggered by the scheduled pipeline', () => {
  expect(ciBuild).toEqual(
    expect.objectContaining({
      triggerParameters: expect.objectContaining({ is_scheduled: true }),
      type: 'scheduled_pipeline',
    })
  );
});
