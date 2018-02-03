function getFirstSelector(selector) {
  const lis = document.getElementById('app').querySelectorAll(selector);
  return lis[0];
}

function nestedTarget() {
  return document.querySelector('div');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) +1;
  }
}
