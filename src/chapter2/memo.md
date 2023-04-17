# 前後処理が実行されるタイミング

- beforeAll: describe 内で定義されているすべてのテストの実行前に 1 回実行される
- beforeEach: describe 内で定義されているそれぞれのテストの実行前に 1 回実行される
- afterAll: describe 内で定義されているすべてのテストの終了後に 1 回実行される
- afterEach: describe 内で定義されているそれぞれのテストの終了後に 1 回実行される

# テストをスキップ

- describe.skip or xdescribe: グループ内のテストケースすべてをスキップ
- test.skip or xtest: テストケースをスキップ
- it.skip or xit: テストケースをスキップ
