var copyText = function (target) {
    var select = window.getSelection(); // 创建选择对象
    var range = document.createRange(); // 创建返回对象
    range.selectNodeContents(target);
    select.removeAllRanges(); // 清空上一次选中内容
    select.addRange(range); // 添加本次选择内容
    document.execCommand('copy'); // 复制到粘贴板上
    select.removeAllRanges(); // 清空本次选择
};