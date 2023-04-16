const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    // 非同期の処理が成功したときはresolve()を呼ぶ setTimeout(() => { resolve(true) }, 1000)
    // 非同期の処理が失敗したときにはreject()を呼ぶ // setTimeout(() => { reject(false) }, 1000)
  });
};
const successCallback = () => {
  console.log('成功した');
};
const failureCallback = () => {
  console.log('失敗した');
};
// thenとcatchを利用した例
doSomethingAsync()
  .then(successCallback)
  .catch(failureCallback)
  // thenのみを利用した例 doSomethingAsync()
  .then(successCallback, failureCallback);

const taskPromise = (name, total) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      total += 1;
      console.log(`${name} finished! Total is ${total}.`);
      resolve(total);
    }, 1000);
  });
};
taskPromise('task-1', 0)
  .then((total) => taskPromise('task-2', total))
  .then((total) => taskPromise('task-3', total))
  .then((total) => taskPromise('task-4', total))
  .then((total) => taskPromise('task-5', total));

const fetchDataWithPromiseResolve = () =>
  new Promise((resolve) => setTimeout(resolve, 1000, 'lemon'));
// .resolvesを利用して成功時の値を受け取る
test('return lemon', () => {
  return expect(fetchDataWithPromiseResolve()).resolves.toBe('lemon');
});
// async/awaitを利用
test('return lemon with async/await', async () => {
  await expect(fetchDataWithPromiseResolve()).resolves.toBe('lemon');
});

const fetchDataWithPromiseReject = () =>
  new Promise((resolve, reject) =>
    setTimeout(reject, 1000, new Error('lemon does notexist'))
  );
// .rejectsを利用して失敗時の値を受け取る
test('failed to return lemon', () => {
  return expect(fetchDataWithPromiseReject()).rejects.toThrow(
    'lemon does not exist'
  );
});
// async/awaitを利用
test('failed to return lemon', async () => {
  await expect(fetchDataWithPromiseReject()).rejects.toThrow(
    'lemon does not exist'
  );
});
