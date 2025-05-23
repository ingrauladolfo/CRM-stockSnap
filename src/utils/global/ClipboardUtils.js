// src/utils/clipboardUtils.js
export const handleClipboardAction = (e, action, showAlert) => {
  e.preventDefault();
  const messages = {
    copy: "No se puede copiar el contenido.",
    paste: "No se puede pegar el contenido.",
    cut: "No se puede cortar el contenido.",
  };
  showAlert(messages[action]);
};
