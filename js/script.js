(function (d) {
    var config = {
            kitId: "qcm6xmp",
            scriptTimeout: 3000,
            async: true,
        },
        h = d.documentElement,
        t = setTimeout(function () {
            h.className =
                h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
    h.className += " wf-loading";
    tk.src = "https://use.typekit.net/" + config.kitId + ".js";
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || (a && a != "complete" && a != "loaded")) return;
        f = true;
        clearTimeout(t);
        try {
            Typekit.load(config);
        } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s);
})(document);

// ハンバーガーメニュー
$(function () {
    $(".sp_btn, .sp_nav li").on("click", function () {
        $(".sp_nav").fadeToggle();
        $(".sp_btn").toggleClass("open");
    });
});

// ローディング
$(function () {
    var webStorage = function () {
        if (sessionStorage.getItem("access")) {
            /*
          2回目以降アクセス時の処理
        */
            $(".loading").hide();
        } else {
            /*
          初回アクセス時の処理
        */
            sessionStorage.setItem("access", "true"); // sessionStorageにデータを保存
            $(".loading-animation").addClass("is-active"); // loadingアニメーションを表示
            setTimeout(function () {
                $(".loading").fadeOut(300);
            }, 3000);
        }
    };
    webStorage();
});

// フェードイン
// animation呼び出し
const scrollTrigger = document.querySelectorAll(".js-scroll-trigger");

// animation呼び出し
if (scrollTrigger.length) {
    scrollAnimation(scrollTrigger);
}

// animation関数
function scrollAnimation(trigger) {
    window.addEventListener("scroll", function () {
        for (var i = 0; i < trigger.length; i++) {
            let position = trigger[i].getBoundingClientRect().top,
                scroll =
                    window.pageYOffset || document.documentElement.scrollTop,
                offset = position + scroll,
                windowHeight = window.innerHeight;

            if (scroll > offset - windowHeight + 200) {
                trigger[i].classList.add("is-active");
            }
        }
    });
}
