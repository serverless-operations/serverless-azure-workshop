"use strict";

module.exports.main = async function(context, req) {
  var doc = context.bindings.inputDocument;

  // �o�̓o�C���f�B���O���g����Cosmos DB�Ƀf�[�^��ۑ�
  if (doc != null) {
    // �����f�[�^������ꍇ�͍X�V
    context.bindings.outputDocument = JSON.stringify({
      id: doc.id,
      title: req.body.title,
      description: req.body.description
    });
  } else {
    // �V�K�ǉ�
    context.bindings.outputDocument = JSON.stringify({
      title: req.body.title, // id�͎����̔�
      description: req.body.description
    });
  }

  // HTTP���X�|���X���쐬
  context.res = {
    status: 201,
    body: {
      result: "success",
      docId: doc === null ? "new" : doc.id
    }
  };
  context.done();
};
