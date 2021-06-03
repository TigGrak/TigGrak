         $(function () {
        var ua = navigator.userAgent;
        if (ua.indexOf("HarmonyOS") != -1) {
        document.getElementById("hitokoto").innerHTML= "『&nbsp;&nbsp;&nbsp;你好，HarmonyOS&nbsp;&nbsp;』 ";
        document.getElementById("hitokoto").style.color = "#1b69fd"
    } else
        {
             $.ajax({
                 type: "GET",
                 url: "https://v1.hitokoto.cn/?encode=text&max_length=20",
                 dataType: "text",
                 success: function (data) {
                     console.info(data);
                     document.getElementById("hitokoto").innerHTML= "『&nbsp;&nbsp;&nbsp;"+data+"&nbsp;&nbsp;』 ";

                 }
             });
        }})

function change() {
             $.ajax({
                 type: "GET",
                 url: "https://v1.hitokoto.cn/?encode=text&max_length=20",
                 dataType: "text",
                 success: function (data) {
                     console.info(data);
                     document.getElementById("hitokoto").innerHTML= "『&nbsp;&nbsp;&nbsp;"+data+"&nbsp;&nbsp;』 ";
                     document.getElementById("hitokoto").style.color = "powderblue";

                                  }
             });
         };



