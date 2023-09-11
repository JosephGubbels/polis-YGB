//barely-modified version of embed JS at https://pol.is/embed.js
! function() {
    var t = window.polis = window.polis || {},
        e = !window.polis._hasRun;
    t._hasRun = 1;
    var i = [],
        a = window.location.protocol + "//pol.is",
        o = {};

    function r(t, e) {
        if ("string" != typeof e) return {};
        e.charAt(0) === t && (e = e.slice(1));
        for (var i = e.split("&"), a = {}, o = 0; o < i.length; o++) {
            var r = i[o].split("=");
            a[r[0]] = decodeURIComponent(r[1])
        }
        return a
    }
    t.on = t.on || {}, t.on.vote = t.on.vote || [], t.on.doneVoting = t.on.doneVoting || [], t.on.write = t.on.write || [], t.on.resize = t.on.resize || [], t.on.init = t.on.init || [];
    var d = r("#", window.location.hash),
        n = r("?", window.location.search),
        u = d.xid || n.xid;

    function s(t) {
        return {
            conversation_id: t.getAttribute("data-conversation_id"),
            site_id: t.getAttribute("data-site_id"),
            page_id: t.getAttribute("data-page_id"),
            parent_url: t.getAttribute("data-parent_url"),
            xid: t.getAttribute("data-xid") || u,
            x_name: t.getAttribute("data-x_name"),
            x_profile_image_url: t.getAttribute("data-x_profile_image_url"),
            border: t.getAttribute("data-border"),
            border_radius: t.getAttribute("data-border_radius"),
            padding: t.getAttribute("data-padding"),
            height: t.getAttribute("data-height"),
            demo: t.getAttribute("data-demo"),
            ucv: t.getAttribute("data-ucv"),
            ucw: t.getAttribute("data-ucw"),
            ucsh: t.getAttribute("data-ucsh"),
            ucst: t.getAttribute("data-ucst"),
            ucsd: t.getAttribute("data-ucsd"),
            ucsv: t.getAttribute("data-ucsv"),
            ucsf: t.getAttribute("data-ucsf"),
            build: t.getAttribute("data-build"),
            ui_lang: t.getAttribute("data-ui_lang"),
            subscribe_type: t.getAttribute("data-subscribe_type"),
            show_vis: t.getAttribute("data-show_vis"),
            show_share: t.getAttribute("data-show_share"),
            bg_white: t.getAttribute("data-bg_white"),
            auth_needed_to_vote: t.getAttribute("data-auth_needed_to_vote"),
            auth_needed_to_write: t.getAttribute("data-auth_needed_to_write"),
            auth_opt_fb: t.getAttribute("data-auth_opt_fb"),
            auth_opt_tw: t.getAttribute("data-auth_opt_tw"),
            auth_opt_allow_3rdparty: t.getAttribute("data-auth_opt_allow_3rdparty"),
            dwok: t.getAttribute("data-dwok"),
            topic: t.getAttribute("data-topic")
        }
    }

    function _(t, e) {
        var o = document.createElement("iframe"),
            r = [];
        e.parent_url = e.parent_url || window.location + "";
        var d = "polis_",
            n = [];

        function u(t) {
            null !== e[t] && void 0 !== e[t] && n.push(t + "=" + encodeURIComponent(e[t]))
        }
        if (e.conversation_id) e.demo && r.push("demo"), r.push(e.conversation_id), d += e.conversation_id;
        else {
            if (!e.site_id) return void alert("Error: need data-conversation_id or data-site_id");
            if (r.push(e.site_id), d += e.site_id, !e.page_id) return void alert("Error: need data-page_id when using data-site_id");
            r.push(e.page_id), d += "_" + e.page_id, u("demo")
        }
        var s = a + "/" + r.join("/");
        u("parent_url"), e.parent_url && n.push("referrer=" + encodeURIComponent(document.referrer)), u("build"), u("xid"), u("x_name"), u("x_profile_image_url"), u("ucv"), u("ucw"), u("ucsh"), u("ucst"), u("ucsd"), u("ucsv"), u("ucsf"), u("ui_lang"), u("subscribe_type"), u("show_vis"), u("show_share"), u("bg_white"), u("auth_needed_to_vote"), u("auth_needed_to_write"), u("auth_opt_fb"), u("auth_opt_tw"), u("auth_opt_allow_3rdparty"), u("dwok"), u("topic"), n.length && (s += "?" + n.join("&")), o.src = s, o.width = "100%", o.style.maxWidth = window.innerWidth + "px", o.height = e.height || 930, o.style.border = e.border || "1px solid #ccc", o.style.borderRadius = e.border_radius || "4px", o.style.padding = e.padding || "4px", o.style.backgroundColor = "#00693c", o.id = d, o.setAttribute("data-test-id", "polis-iframe"), t.appendChild(o), i.push(o)
    }
    e && window.addEventListener("message", (function(e) {
        var i = e.data || {};
        if (e.origin.replace(/^https?:\/\//, "").match(/(^|\.)pol.is$/)) {
            for (var r = t.on[i.name] || [], d = [], n = 0; n < r.length; n++) d.push(r[n]({
                iframe: document.getElementById("polis_" + i.polisFrameId),
                data: i
            }));
            if (i && "init" === i.name)
                for (var u = 0; u < t.on.init.length; u++) t.on.init[u](i);
            if ("cookieRedirect" === i && function() {
                    var t = new Date(Date.now() + 1e3).toUTCString(),
                        e = "_polistest_cookiesenabled";
                    document.cookie = e + "=1; expires=" + t;
                    var i = -1 != document.cookie.indexOf(e);
                    return document.cookie = e + "=; expires=" + new Date(0).toUTCString(), i
                }() && (window.location = a + "/api/v3/launchPrep?dest=" + function(t) {
                    var e, i = "";
                    for (e = 0; e < t.length; e++) i += ("000" + t.charCodeAt(e).toString(16)).slice(-4);
                    return i
                }(window.location + "")), "resize" === i.name) {
                for (var s = !1, _ = 0; _ < d.length; _++) !0 === d[_] && (s = !0);
                if (!s) {
                    console.log(i.polisFrameId);
                    var l = "polis_" + i.polisFrameId,
                        c = document.getElementById(l),
                        g = i.height;
                    (g > o[l] || void 0 === o[l]) && (o[l] = g, c.setAttribute("height", g))
                }
            }
        }
    }), !1);
    for (var l = document.getElementsByClassName("polis"), c = 0; c < l.length; c++) {
        var g = l[c];
        if (g.children && g.children.length);
        else _(g, s(g))
    }
}();
