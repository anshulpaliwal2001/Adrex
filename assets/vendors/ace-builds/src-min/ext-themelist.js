define("ace/ext/themelist", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var r = [["Chrome"], ["Clouds"], ["Crimson Editor"], ["Dawn"], ["Dreamweaver"], ["Eclipse"], ["GitHub"], ["IPlastic"], ["Solarized Light"], ["TextMate"], ["Tomorrow"], ["Xcode"], ["Kuroir"], ["KatzenMilch"], ["SQL Server", "sqlserver", "light"], ["Ambiance", "ambiance", "dark"], ["Chaos", "chaos", "dark"], ["Clouds Midnight", "clouds_midnight", "dark"], ["Dracula", "", "dark"], ["Cobalt", "cobalt", "dark"], ["Gruvbox", "gruvbox", "dark"], ["Green on Black", "gob", "dark"], ["idle Fingers", "idle_fingers", "dark"], ["krTheme", "kr_theme", "dark"], ["Merbivore", "merbivore", "dark"], ["Merbivore Soft", "merbivore_soft", "dark"], ["Mono Industrial", "mono_industrial", "dark"], ["Monokai", "monokai", "dark"], ["Nord Dark", "nord_dark", "dark"], ["Pastel on dark", "pastel_on_dark", "dark"], ["Solarized Dark", "solarized_dark", "dark"], ["Terminal", "terminal", "dark"], ["Tomorrow Night", "tomorrow_night", "dark"], ["Tomorrow Night Blue", "tomorrow_night_blue", "dark"], ["Tomorrow Night Bright", "tomorrow_night_bright", "dark"], ["Tomorrow Night 80s", "tomorrow_night_eighties", "dark"], ["Twilight", "twilight", "dark"], ["Vibrant Ink", "vibrant_ink", "dark"]];
    t.themesByName = {}, t.themes = r.map(function (e) {
        var n = e[1] || e[0].replace(/ /g, "_").toLowerCase(),
            r = {caption: e[0], theme: "ace/theme/" + n, isDark: e[2] == "dark", name: n};
        return t.themesByName[n] = r, r
    })
});
(function () {
    window.require(["ace/ext/themelist"], function (m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();
            