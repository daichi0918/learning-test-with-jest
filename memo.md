# 2 章

## toBe、toEqual、toStrictEqual の使い分け

### toBe を利用するケース

- プリミティブ値を評価
- 同じオブジェクトの参照を持つ変数であることを評価(例えば引数として渡したオブジェクトの
  変数がリターンされることを確認するなど)

### toEqual を利用するケース

- オブジェクトのプロパティの値の評価

### toStrictEqual を利用するケース

- 生成元のクラス名や undefined なプロパティ、配列内の未定義の要素と undefined の評価を含 めた厳密なオブジェクトの評価

## 偽値(Falsy)として評価される値

- false
- 0
- -0
- 0n
- ""
- null
- undefined - NaN
