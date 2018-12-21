// ローカルストレージ操作関連
util = {
  getItems: function() {
    var items = localStorage.getItem('my_items');
    if(items !== null) {
      return JSON.parse(items);
    } else {
      return [];
    }
  },
  getItem: function(index) {
    var items = this.getItems();
    return items[index];
  },
  addItem: function(memo) {
    var items = this.getItems();
    items.unshift(memo);
    localStorage.setItem('my_items', JSON.stringify(items));
  },
  changeItem: function(index, memo) {
    var items = this.getItems();
    items[index] = memo;
    localStorage.setItem('my_items', JSON.stringify(items));
  },
  removeItem: function(index) {
    var items = this.getItems();
    items.splice(index, 1);
    localStorage.setItem('my_items', JSON.stringify(items));
  }
};