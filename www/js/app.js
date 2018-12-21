//Plusアイコン押下時
function onNewButtonClick() {
  document.querySelector('#navi').pushPage('input.html');

}

//保存ボタン押下時
function onSaveButtonClick() {
  var memo = document.querySelector('#memoText').value;
  util.addItem(memo);
  document.querySelector('#navi').popPage();
}

//各ページが表示されたとき
document.addEventListener('show', function(event){
  var page = event = event.target;
  //一覧画面が表示されたとき
  if (page.id === 'listPage'){
    //ons-list要素を初期化
    var list = page.querySelector('#memoList');
    list.innerHTML = '';
    //メモの件数分、ons-list-item要素を挿入
    var items = util.getItems();
    items.forEach(function(memo){
      ons.createElement('<ons-list-item>' + memo + '</ons-list-item>', {append:list});
    });

  }
});