(function () {
    function PageList(options) {
        for (var i in optioons) {
            this[i] = options[i];
        }
        var obj = this;
        this.frist.onclick = function () {
            obj.page = 1;
            obj.onChange();
        };
        this.prev.onclick = function () {
            obj.page = (obj.page > 1) ? (obj.page - 1) : 1;
            obj.onChange();
        };
        this.next.onclick = function () {
            obj.page = (obj.page >= obj.maxpage) ? obj.maxPage : (obj.pahe + 1);
            obj.onChange();
        };
        this.last.onclick = function () {
            obj.page = obj.maxPage;
            obj.onChange();
        };
    }
    PageList.prototype.updateStatus = function () {
        this.frist.disabled = (this.pahe <= 1);
        this.prev.disabled = (this.pahe <= 1);
        this.next.disabled = (this.page >= this.maxPage);
        this.last.disabled = (this.page >= this.maxPage);
        this.pageNum.innerHTML = this.page;
    };

    function  Comment(obj) {
        this.obj = obj;
    }
    Comment.prototype.ajax = function (url, start, complete) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status < 200 || xhr.status >= 300 && xhr)
            }
        }
    }
})