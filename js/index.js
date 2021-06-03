        window.onfocus = function () {
        document.title = '哇~欢迎回来~(=・ω・=)';

};
        window.onblur = function () {
        document.title = '不要抛弃我~(ﾉ’T口T‘)ﾉ ';
};



console.info("Hello~");

console.log("这里是XW的网站，欢迎访问！");
console.log("玩得愉快！");

$(function () {
    //绑定滚动条事件
    //绑定滚动条事件
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        if (sTop >= 300) {
            if ($(".pic").is(":visible")) {
                try {
                    $(".pic").slideUp();
                } catch (e) {
                    $(".pic").hide();
                }
            }
        }
        else {
            if (!$(".pic").is(":visible")) {
                try {
                    $(".pic").slideDown();
                } catch (e) {
                    $(".pic").show();
                }
            }
        }
    });
})



function link(li) {
    window.open(li)
}

function blur() {
    document.getElementById("nc").style.display = "none";
    document.documentElement.style.filter = "blur(10px)"
    window.alert('我好像近视了？')

}


