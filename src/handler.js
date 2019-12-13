"use strict";

module.exports.main = async function(context, req) {
  var doc = context.bindings.inputDocument;

  // 出力バインディングを使ってCosmos DBにデータを保存
  if (doc != null) {
    // 既存データがある場合は更新
    context.bindings.outputDocument = JSON.stringify({
      id: doc.id,
      title: req.body.title,
      description: req.body.description
    });
  } else {
    // 新規追加
    context.bindings.outputDocument = JSON.stringify({
      title: req.body.title, // idは自動採番
      description: req.body.description
    });
  }

  // HTTPレスポンスを作成
  context.res = {
    status: 201,
    body: {
      result: "success",
      docId: doc === null ? "new" : doc.id
    }
  };
  context.done();
};
