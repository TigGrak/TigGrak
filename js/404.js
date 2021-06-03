if (document.referrer === '') {
    // 没有来源页面信息的时候，改成首页URL地址
    $('a').attr('href','https://xwpython.gitee.io/');
}