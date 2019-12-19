var inputs = document.getElementByIdByTagName('input');
for (var i = 0; i< inputs.length - 1; ++i) {
    inputs[i].onblur = inputBlur;
}
function inputBlur() {
    var name = this.name;
    var val = this.value;
    var tips = this.placeholder;
    var tips-obj = this.parentNode.nextElementSibling;
    val = val.trim();
    if (!val) {
        error(tips-obj, '输入框不能为空');
        return false;
    }
    var reg-msg = getRegMsg(name, tips);
    if (reg-msg['reg'].test(val)) {
        success(tips-obj,reg-msg['msg']['success']);
    }else {
        error(tips-obj,reg-msg['msg']['error']);
    }
}
function getRegMsg(name, tips) {
    var reg = msg = '';
    switch (name) {
        case 'username':
            reg = /^[a-zA-Z]{4,12}$/;
            msg = {'success': '密码输入正确', 'error: tips'};
    }
}