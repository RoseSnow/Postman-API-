$(function () {
    // 变量赋值
    const $root = $('#root'); // 根节点
    const $wrapper = $root.find('.wrapper'); // 最外层容器
    const $menu = $wrapper.find('.left-menu'); // 菜单栏
    const $content = $wrapper.find('.right-content'); // 内容显示
    const $goBack = $('.goBackTop');

    // jsonp回调函数
    window.cb = (data) => postman.renderDomMenuTree(data); // 渲染菜单

    // 滚动距离
    const scrollXPage = (distance) => console.log('滚动到:' + distance + 'px');

    // postman实例
    const postman = {
        url: './mock/data.json',
        count: 0,
        isShow: 1,
        init() { // 初始化
            this.fetchData();
            this.bindEvent();
        },
        bindEvent() {
            let flag = true
            var _self = this;
            $menu.on('click', '.link', function () { // 一级目录
                if (!flag) return false;
                flag = false;
                const $this = $(this); // link
                const $navTree = $this.parent().parent(); // nav-tree
                const isClose = $navTree.hasClass('tree-close'); // 是否是关闭状态
                $this.children('.icon') // icon
                        .removeClass(isClose ? 'glyphicon-triangle-right' : 'glyphicon-triangle-bottom')
                            .addClass(isClose ? 'glyphicon-triangle-bottom' : 'glyphicon-triangle-right')
                                .end() // link
                                    .siblings() // api || nav-tree-child-tree
                                        .slideToggle(300, 'linear', () => flag = true)
                                            .parent() // nav-item
                                                .find('.nav-tree')
                                                        .removeClass('tree-close')
                                                            .addClass('tree-close')
                                                                .children() // nav-item
                                                                    .find('.icon') // 所有icon
                                                                        .removeClass('glyphicon-triangle-bottom')
                                                                            .addClass('glyphicon-triangle-right')
                                                                                .parent() // link
                                                                                    .siblings()
                                                                                        .slideUp();
                isClose ? $navTree.removeClass('tree-close') : $navTree.addClass('tree-close');
                }).on('click', '.api', function () {
                });
            $goBack.on('click', function () {
                $('.title').trigger('click');
            });
            $content.on('scroll', function () {
                if($(this).scrollTop() >= 200){
                    $goBack.fadeIn(1000); // 开始淡入
                } else{
                    $goBack.stop(true,true).fadeOut(1000); // 如果小于等于 200 淡出
                }
            })
        },
        renderDomMenuTree(data) { // 遍历生成菜单树
            if (Object.prototype.toString(data) !== '[object Object]') {
                alert('json数据格式错误');
                return false;
            }
            const params = JSON.parse(JSON.stringify(data));
            $('.name').text((params.info || {}).name);
            $('.title').click(function () {
                $content.stop(true).animate({scrollTop: $('.name').offset().top}, 300, () => {
                    scrollXPage($('.name').offset().top)
                });
            });
            this.recursive(params.item, $menu, true);
        },
        renderDomContent(data) { // 生成右侧内容区域
            var _self = this;
            if (data.item) {
                const nameTemp = $('.name-tpl').clone().removeClass('name-tpl'); // 名称模板
                nameTemp.attr('id', this.count).find('h3').text(data.name);
                $content.append(nameTemp);
            } else {
                const { request, name, response } = data;
                const { method, body, header, url } = request;
                const contentTemp = $('.content-tpl').clone().removeClass('content-tpl'); // 内容模板
                contentTemp.attr('id', this.count).children('.title-wrapper')
                                .children()
                                    .eq(0)
                                        .addClass(`method-${(method || '').toLowerCase()}`)
                                            .text(method)
                                                .next()
                                                    .text(name)
                                                        .parent()
                                                            .next()
                                                                .text((url || {}).raw);
                if ((header || []).length) {
                    const str = header.reduce((pre, cur) => {
                        pre += `<div class="row">
                                    <div class="col-md-3 key">${cur.key}</div>
                                    <div class="col-md-9 value">${cur.value}</div>
                                </div>`;
                        return pre;
                    }, '');
                    contentTemp.children('.api-body')
                                    .find('.header')
                                        .removeClass('none')
                                            .children()
                                                .eq(0)
                                                    .text('Header')
                                                        .next()
                                                            .append(str);
                }
                if ((body || {}).mode) {
                    contentTemp.children('.api-body')
                                    .find('.body')
                                        .removeClass('none')
                                            .children()
                                                .eq(0)
                                                    .text('Body')
                                                        .next()
                                                            .text(body[body.mode]);
                }
                if (((url || {}).query || []).length) {
                    const str = url.query.reduce((pre, cur) => {
                        pre += `<div class="row">
                                    <div class="col-md-3 key">${cur.key}</div>
                                    <div class="col-md-9 value">${cur.value}</div>
                                </div>`;
                        return pre;
                    }, '');
                    contentTemp.children('.api-body')
                                    .find('.params')
                                        .removeClass('none')
                                            .children()
                                                .eq(0)
                                                    .text('Params')
                                                        .next()
                                                            .append(str);
                }
                if ((response || []).length) {
                    response.forEach(n => {
                        contentTemp.children('.api-body')
                        .find('.resp')
                            .removeClass('none')
                                .children()
                                    .eq(0)
                                        .children()
                                            .eq(0)
                                                .text('Response')
                                                    .next()
                                                        .addClass(n.code === 200 ? 'status-success' : 'status-fail')
                                                            .text(`${n.code || 404} ${n.status || 'Not Fund'}`)
                                                                .parent()
                                                                    .next()
                                                                        .children()
                                                                            .eq(0)
                                                                                .text(n.body || '')
                                                                                    .next()
                                                                                        .on('click' ,function () {
                                                                                            _self.copyText($(this).siblings());
                                                                                        });
                    });
                }
                $content.append(contentTemp);
            }
        },
        recursive(data, wrapper, isFirst) {
            data.forEach((ele, index) => {
                this.count++;
                const $tpl = $('.tpl').clone().removeClass('tpl'); // 模板克隆
                const $navItem = $tpl.find('.nav-item'); // nav-item
                const $link = $navItem.find('.link'); // link
                const $api = $link.next(); // api
                $link.remove(); // 删除模板多余的link模板
                $api.remove(); // 删除模板多余的api模板
                this.renderDomContent(ele)
                if (ele.item) {
                    $link.attr('href', '#' + this.count).children()
                            .eq(0) // icon
                                .addClass('glyphicon-triangle-right')
                                    .next() // pathname
                                        .text(ele.name)
                                            .parent() // link
                                                .appendTo($navItem)
                                                    .parent() // nav-item
                                                        .appendTo($tpl)
                                                            .parent() // tpl
                                                                .addClass('tree-close')
                                                                    .addClass('nav-tree-child-tree');
                    !isFirst && $tpl.hide();
                    wrapper.append($tpl);
                    this.recursive(ele.item, $navItem);
                } else {
                    const method = (ele.request || {}).method;
                    $api.attr('href', '#' + this.count).children() // method || url
                            .eq(0) // method
                                .addClass(`method-${(method || '').toLowerCase()}`)
                                    .text(method)
                                        .next() // url
                                            .text(ele.name)
                                                .parent() // api
                                                    .hide()
                                                        .appendTo(wrapper);
                }
            });
        },
        fetchData() { // 请求json数据
            const script = document.createElement('script');
            const body = document.body;
            script.src = this.url;
            script.onload = () => body.removeChild(script)
            body.appendChild(script);
        },
        copyText(selector) { // 复制文本
            const _self = this;
            if (!_self.isShow) return;
            _self.isShow = false;
            copyText(selector.get(0));
            let alertModal = $('.info-modal');
            if (!alertModal.get(0)) {
                alertModal = $(`
                    <div class="alert alert-success info-modal" role="alert">复制成功</div>
                `).css({position: 'absolute', top: '10px', left: '50%', textAlign: 'center'});
                alertModal.appendTo('body').animate({opacity: 0}, 3000, function () {
                    _self.isShow = true;
                });
            } else {
                alertModal.animate({opacity: 1}, 0, function () {
                    _self.isShow = true;
                })
                .animate({opacity: 0}, 3000, function () {
                    _self.isShow = true;
                });
            }
        }
    };

    postman.init();
});