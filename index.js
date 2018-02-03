function getFirstSelector(selector) {
  const lis = document.getElementById('app').querySelectorAll(selector);
  return lis[0];
}

function nestedTarget() {
  return document.querySelector('div');
}