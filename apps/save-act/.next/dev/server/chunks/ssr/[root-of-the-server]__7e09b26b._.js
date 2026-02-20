module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/packages/ui/public/civic-badge.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/civic-badge.b034c074.png");}),
"[project]/packages/ui/public/civic-badge.png.mjs { IMAGE => \"[project]/packages/ui/public/civic-badge.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$public$2f$civic$2d$badge$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/packages/ui/public/civic-badge.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$public$2f$civic$2d$badge$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 409,
    height: 449,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR42gHoABf/ADo8PWxqZ2e+t66l7MvKu/qxsKHmgX50szo5NlMAPEJN0n9raf/DkX3/zrue/7aXcP+/sZf/gH52xwB/YVrWso2D/6WShf+kl3//eGlb/4l+b/9qZl3PAIyGhNa+wL3/urak/52ReP+OhXL/sKmV/4uIfc4AcHJy2ImMgP+Ihnr/cG5r/21qYv+WkHv/gXxw0ACPWk7uk2Zd/5RoY/+aaWX/k2dj/5ZsY/+VY1bvAFQ8Nqx+Y1vuf2Rj/21ZXP9/Y2H/gmlh8lxEP7cACQkJDjc1MFR2ZVjJblpP+npnWdI8OjRfCgoKEYGKfMLiY/thAAAAAElFTkSuQmCC"
};
}),
"[project]/packages/ui/dist/components/AccessibilityProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccessibilityProvider",
    ()=>AccessibilityProvider,
    "useAccessibility",
    ()=>useAccessibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const AccessibilityContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AccessibilityProvider({ children }) {
    const [fontSize, setFontSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("normal");
    const [dyslexiaFont, setDyslexiaFont] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reduceMotion, setReduceMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // New states
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHighContrast, setIsHighContrast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Derived state for Save Act compatibility
    const isLargeText = fontSize !== "normal";
    const toggleLargeText = ()=>{
        setFontSize((prev)=>prev === "normal" ? "large" : "normal");
    };
    const toggleDarkMode = ()=>setIsDarkMode((prev)=>!prev);
    const toggleHighContrast = ()=>setIsHighContrast((prev)=>!prev);
    // Load prefs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedSize = localStorage.getItem("a11y-font-size");
        const storedDyslexia = localStorage.getItem("a11y-dyslexia") === "true";
        const storedMotion = localStorage.getItem("a11y-motion") === "true";
        const storedDark = localStorage.getItem("a11y-dark") === "true";
        const storedContrast = localStorage.getItem("a11y-contrast") === "true";
        if (storedSize) setFontSize(storedSize);
        if (storedDyslexia) setDyslexiaFont(storedDyslexia);
        if (storedMotion) setReduceMotion(storedMotion);
        if (storedDark) setIsDarkMode(storedDark);
        if (storedContrast) setIsHighContrast(storedContrast);
        setMounted(true);
    }, []);
    // Persist & Apply Font Size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        localStorage.setItem("a11y-font-size", fontSize);
        const root = document.documentElement;
        root.classList.remove("text-normal", "text-large", "text-xl");
        if (fontSize !== "normal") root.classList.add(`text-${fontSize}`);
    }, [
        fontSize,
        mounted
    ]);
    // Persist & Apply Dyslexia Font
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        localStorage.setItem("a11y-dyslexia", String(dyslexiaFont));
        const root = document.documentElement;
        if (dyslexiaFont) root.classList.add("font-dyslexic");
        else root.classList.remove("font-dyslexic");
    }, [
        dyslexiaFont,
        mounted
    ]);
    // Persist & Apply Reduce Motion
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        localStorage.setItem("a11y-motion", String(reduceMotion));
        const root = document.documentElement;
        if (reduceMotion) root.classList.add("motion-reduce-forced");
        else root.classList.remove("motion-reduce-forced");
    }, [
        reduceMotion,
        mounted
    ]);
    // Persist & Apply Dark Mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        localStorage.setItem("a11y-dark", String(isDarkMode));
        const root = document.documentElement;
        if (isDarkMode) root.classList.add("dark");
        else root.classList.remove("dark");
    }, [
        isDarkMode,
        mounted
    ]);
    // Persist & Apply High Contrast
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        localStorage.setItem("a11y-contrast", String(isHighContrast));
        const root = document.documentElement;
        if (isHighContrast) root.classList.add("high-contrast");
        else root.classList.remove("high-contrast");
    }, [
        isHighContrast,
        mounted
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AccessibilityContext.Provider, {
        value: {
            fontSize,
            setFontSize,
            dyslexiaFont,
            setDyslexiaFont,
            reduceMotion,
            setReduceMotion,
            isDarkMode,
            toggleDarkMode,
            isHighContrast,
            toggleHighContrast,
            isLargeText,
            toggleLargeText
        },
        children: children
    });
}
function useAccessibility() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AccessibilityContext);
    if (context === undefined) {
        throw new Error("useAccessibility must be used within an AccessibilityProvider");
    }
    return context;
}
}),
"[project]/packages/ui/dist/components/Header.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-ssr] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-ssr] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gavel.js [app-ssr] (ecmascript) <export default as Gavel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$public$2f$civic$2d$badge$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$packages$2f$ui$2f$public$2f$civic$2d$badge$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/packages/ui/public/civic-badge.png.mjs { IMAGE => "[project]/packages/ui/public/civic-badge.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$AccessibilityProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/AccessibilityProvider.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Header({ titlePrefix = "US" }) {
    const { isDarkMode, toggleDarkMode, isHighContrast, toggleHighContrast, isLargeText, toggleLargeText } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$AccessibilityProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccessibility"])();
    const [showProjectsMenu, setShowProjectsMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Helper to switch text size classes based on accessibility setting
    const getTextSize = (normal, large)=>isLargeText ? large : normal;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("header", {
                className: "bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-[100] transition-colors",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "max-w-4xl mx-auto px-6 h-16 flex items-center justify-between",
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3 group",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                    className: "relative h-14 w-auto aspect-[3/2] overflow-hidden transition-transform group-hover:scale-105",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$public$2f$civic$2d$badge$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$packages$2f$ui$2f$public$2f$civic$2d$badge$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "US Civic Action Logo",
                                        fill: true,
                                        className: "object-contain"
                                    })
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("h1", {
                                            className: `font-black text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors hidden md:block uppercase ${getTextSize('text-lg', 'text-2xl')}`,
                                            children: [
                                                titlePrefix,
                                                " CIVIC ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                    className: "text-emerald-700 dark:text-emerald-500",
                                                    children: "ACTION"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                            className: `font-bold text-slate-500 dark:text-slate-400 tracking-wide uppercase hidden md:block ${getTextSize('text-xs', 'text-base')}`,
                                            children: "The People's Voice"
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("nav", {
                            className: "flex items-center gap-4",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: `font-bold text-slate-900 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors ${getTextSize('text-sm', 'text-lg')}`,
                                    children: "Home"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/transparency",
                                    className: `font-bold text-slate-900 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors ${getTextSize('text-sm', 'text-lg')}`,
                                    children: "Transparency"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "relative py-4",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
                                            onClick: ()=>setShowProjectsMenu(!showProjectsMenu),
                                            className: `font-bold text-slate-900 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1 ${getTextSize('text-sm', 'text-lg')}`,
                                            children: [
                                                "Tools & Resources ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: `w-4 h-4 transition-transform ${showProjectsMenu ? 'rotate-180' : ''}`
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                            className: `absolute top-full right-0 w-56 pt-2 transition-all duration-200 z-50 transform ${showProjectsMenu ? 'opacity-100 visible translate-y-0' : 'hidden opacity-0 invisible translate-y-2'}`,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden p-1",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("a", {
                                                        href: "https://us-civic-action.github.io/SAVE_ACT-Verifier/",
                                                        onClick: ()=>setShowProjectsMenu(false),
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: `flex items-start gap-3 px-4 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-black dark:hover:text-white rounded-lg transition-colors group/item`,
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "mt-0.5",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                    className: "w-4 h-4 text-blue-600 dark:text-blue-400"
                                                                })
                                                            }),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                                children: [
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                        className: "mb-0.5",
                                                                        children: "Save Act Verifier"
                                                                    }),
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                                                        className: "font-normal text-slate-500 dark:text-slate-400 text-[10px] leading-tight group-hover/item:text-slate-700 dark:group-hover/item:text-slate-300",
                                                                        children: "Check voting requirements"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/",
                                                        onClick: ()=>setShowProjectsMenu(false),
                                                        className: `flex items-start gap-3 px-4 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-black dark:hover:text-white rounded-lg transition-colors group/item`,
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "mt-0.5",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__["Gavel"], {
                                                                    className: "w-4 h-4 text-blue-600 dark:text-blue-400"
                                                                })
                                                            }),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                                children: [
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                        className: "mb-0.5",
                                                                        children: "US Civic Action App"
                                                                    }),
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                                                        className: "font-normal text-slate-500 dark:text-slate-400 text-[10px] leading-tight group-hover/item:text-slate-700 dark:group-hover/item:text-slate-300",
                                                                        children: "Track bills & hearings"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                    onClick: toggleDarkMode,
                                    className: "p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors",
                                    "aria-label": "Toggle Dark Mode",
                                    children: isDarkMode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        className: "w-5 h-5 text-yellow-400"
                                    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        className: "w-5 h-5 text-slate-600"
                                    })
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("a", {
                                    href: "https://buy.stripe.com/cNi9ATgtb3vv9f6g1Sawo02",
                                    target: "_blank",
                                    className: `font-bold text-white bg-indigo-600 hover:bg-indigo-700 py-2.5 px-4 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5 ${getTextSize('text-sm', 'text-lg')}`,
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                            className: "w-4 h-4"
                                        }),
                                        " ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Support"
                                        })
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                    onClick: ()=>setShowSettings(true),
                                    className: "md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-xl transition-colors",
                                    "aria-label": "Accessibility Settings",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        className: "w-5 h-5"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            showSettings && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "fixed inset-0 z-[110] flex items-center justify-center p-4",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: "absolute inset-0 bg-slate-950/80 backdrop-blur-sm",
                        onClick: ()=>setShowSettings(false)
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: `relative w-full max-w-sm rounded-[2.5rem] shadow-2xl border p-8 animate-in zoom-in-95 duration-200 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`,
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "flex items-center justify-between mb-8",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("h3", {
                                        className: `font-black uppercase tracking-[0.2em] flex items-center gap-2 ${getTextSize('text-sm', 'text-lg')}`,
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                className: "w-4 h-4 text-blue-500"
                                            }),
                                            "Accessibility"
                                        ]
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                        onClick: ()=>setShowSettings(false),
                                        className: "p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        })
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "space-y-4",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
                                        onClick: toggleDarkMode,
                                        className: `w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${isDarkMode ? 'border-blue-500 bg-blue-500/10' : 'border-slate-50 bg-slate-50'}`,
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    isDarkMode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                        className: "w-5 h-5 text-blue-500"
                                                    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                        className: "w-5 h-5 text-slate-500"
                                                    }),
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: `font-bold uppercase tracking-wider ${getTextSize('text-xs', 'text-base')}`,
                                                        children: "Dark Mode"
                                                    })
                                                ]
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                className: `w-10 h-6 rounded-full relative transition-colors ${isDarkMode ? 'bg-blue-600' : 'bg-slate-300'}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: `absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${isDarkMode ? 'translate-x-5' : 'translate-x-1'}`
                                                })
                                            })
                                        ]
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
                                        onClick: toggleHighContrast,
                                        className: `w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${isHighContrast ? 'border-blue-500 bg-blue-500/10' : 'border-slate-50 bg-slate-50'}`,
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-5 h-5 text-slate-500"
                                                    }),
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: `font-bold uppercase tracking-wider ${getTextSize('text-xs', 'text-base')}`,
                                                        children: "High Contrast"
                                                    })
                                                ]
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                className: `w-10 h-6 rounded-full relative transition-colors ${isHighContrast ? 'bg-blue-600' : 'bg-slate-300'}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: `absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${isHighContrast ? 'translate-x-5' : 'translate-x-1'}`
                                                })
                                            })
                                        ]
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
                                        onClick: toggleLargeText,
                                        className: `w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${isLargeText ? 'border-blue-500 bg-blue-500/10' : 'border-slate-50 bg-slate-50'}`,
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                                        className: "w-5 h-5 text-slate-500"
                                                    }),
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: `font-bold uppercase tracking-wider ${getTextSize('text-xs', 'text-base')}`,
                                                        children: "Large Text"
                                                    })
                                                ]
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                className: `w-10 h-6 rounded-full relative transition-colors ${isLargeText ? 'bg-blue-600' : 'bg-slate-300'}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: `absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${isLargeText ? 'translate-x-5' : 'translate-x-1'}`
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                className: `mt-8 text-slate-600 dark:text-slate-400 font-bold uppercase tracking-[0.2em] leading-relaxed ${getTextSize('text-[10px]', 'text-sm')}`,
                                children: "Preferences are saved locally to this browser."
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
}),
"[project]/packages/ui/dist/components/Footer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-ssr] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-ssr] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-ssr] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$AccessibilityProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/AccessibilityProvider.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Footer() {
    const { isDarkMode, isLargeText } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$AccessibilityProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccessibility"])();
    const getTextSize = (normal, large)=>isLargeText ? large : normal;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("footer", {
        className: `py-12 px-4 border-t transition-colors ${isDarkMode ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'}`,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: "space-y-4 max-w-sm",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                                        className: `font-black text-black dark:text-white uppercase tracking-tighter ${getTextSize('text-sm', 'text-lg')}`,
                                        children: "US Civic Action"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                        className: `text-slate-700 dark:text-slate-300 font-medium ${getTextSize('text-xs', 'text-base')}`,
                                        children: "Independent. Non-partisan."
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                className: `text-slate-600 dark:text-slate-400 leading-relaxed ${getTextSize('text-[10px]', 'text-sm')}`,
                                children: "We are 100% ad-free and tracking-free. Running our servers relies entirely on user support."
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: "flex flex-col items-center md:items-end gap-6 w-full md:w-auto",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: "flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-4",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("a", {
                                    href: "/",
                                    className: `font-bold text-slate-800 dark:text-slate-200 hover:text-blue-900 dark:hover:text-blue-400 transition-colors ${getTextSize('text-xs', 'text-base')}`,
                                    children: "Home"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("a", {
                                    href: "/transparency",
                                    className: `font-bold text-slate-800 dark:text-slate-200 hover:text-blue-900 dark:hover:text-blue-400 transition-colors ${getTextSize('text-xs', 'text-base')}`,
                                    children: "Transparency"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("a", {
                                    href: "https://buy.stripe.com/cNi9ATgtb3vv9f6g1Sawo02",
                                    target: "_blank",
                                    className: `flex items-center gap-2 bg-[#5F3DC4] hover:bg-[#5233ac] text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 ${getTextSize('text-xs', 'text-base')}`,
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                            className: "bg-white/20 p-1 rounded-full",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                                className: "w-3 h-3"
                                            })
                                        }),
                                        "Support the project"
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        className: `text-slate-500 dark:text-slate-400 font-medium text-center ${getTextSize('text-[10px]', 'text-sm')}`,
                        children: "\u00A9 2026 US Civic Action. Not affiliated with any state or federal government."
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: `flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-900/30 ${getTextSize('text-[9px]', 'text-sm')}`,
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                        className: "w-3 h-3"
                                    }),
                                    "Works Offline"
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("a", {
                                href: "https://github.com/us-civic-action/SAVE_ACT-Verifier",
                                target: "_blank",
                                className: `inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all ${isDarkMode ? 'bg-slate-900 text-slate-300 hover:bg-slate-800' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} ${getTextSize('text-[10px]', 'text-sm')}`,
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                                        className: "w-3 h-3"
                                    }),
                                    "Open Source Project"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
}),
"[project]/packages/ui/dist/components/AccessibilityMenu.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccessibilityMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$AccessibilityProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/AccessibilityProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function AccessibilityMenu() {
    const { fontSize, setFontSize, dyslexiaFont, setDyslexiaFont, reduceMotion, setReduceMotion } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$AccessibilityProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccessibility"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: "relative",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "text-granite-500 hover:text-granite-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider",
                title: "Accessibility Settings",
                "aria-label": "Open accessibility menu",
                "aria-expanded": isOpen,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: "text-base",
                        children: "\u267F"
                    }),
                    " A11y"
                ]
            }),
            isOpen && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: "fixed inset-0 z-40 bg-transparent",
                        onClick: ()=>setIsOpen(false)
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: "absolute bottom-full right-0 mb-3 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-granite-200 dark:border-slate-700 p-4 z-50 text-left",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                                className: "text-sm font-black text-granite-900 dark:text-slate-100 mb-3 border-b border-granite-100 dark:border-slate-700 pb-2",
                                children: "Reference Tools"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "space-y-4",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("label", {
                                                className: "text-xs font-bold text-granite-500 dark:text-slate-400 block mb-2",
                                                children: "Text Size"
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                className: "flex bg-granite-100 dark:bg-slate-700 rounded-lg p-1",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                                        onClick: ()=>setFontSize("normal"),
                                                        className: `flex-1 py-1 rounded-md text-sm font-bold transition-all ${fontSize === 'normal' ? 'bg-white dark:bg-slate-600 shadow-sm text-granite-900 dark:text-white' : 'text-granite-600 dark:text-slate-400'}`,
                                                        children: "Aa"
                                                    }),
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                                        onClick: ()=>setFontSize("large"),
                                                        className: `flex-1 py-1 rounded-md text-base font-bold transition-all ${fontSize === 'large' ? 'bg-white dark:bg-slate-600 shadow-sm text-granite-900 dark:text-white' : 'text-granite-600 dark:text-slate-400'}`,
                                                        children: "Aa"
                                                    }),
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                                        onClick: ()=>setFontSize("xl"),
                                                        className: `flex-1 py-1 rounded-md text-lg font-bold transition-all ${fontSize === 'xl' ? 'bg-white dark:bg-slate-600 shadow-sm text-granite-900 dark:text-white' : 'text-granite-600 dark:text-slate-400'}`,
                                                        children: "Aa"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("label", {
                                                htmlFor: "dyslexia-toggle",
                                                className: "text-sm font-medium text-granite-800 dark:text-slate-200",
                                                children: [
                                                    "Dyslexia Font",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "block text-xs text-granite-400 font-normal",
                                                        children: "Enhanced readability"
                                                    })
                                                ]
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                                id: "dyslexia-toggle",
                                                onClick: ()=>setDyslexiaFont(!dyslexiaFont),
                                                className: `w-11 h-6 rounded-full transition-colors flex items-center px-0.5 ${dyslexiaFont ? 'bg-nh-green-500' : 'bg-granite-300 dark:bg-slate-600'}`,
                                                "aria-pressed": dyslexiaFont,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: `w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${dyslexiaFont ? 'translate-x-5' : 'translate-x-0'}`
                                                })
                                            })
                                        ]
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("label", {
                                                htmlFor: "motion-toggle",
                                                className: "text-sm font-medium text-granite-800 dark:text-slate-200",
                                                children: [
                                                    "Reduce Motion",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "block text-xs text-granite-400 font-normal",
                                                        children: "Stop animations"
                                                    })
                                                ]
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                                id: "motion-toggle",
                                                onClick: ()=>setReduceMotion(!reduceMotion),
                                                className: `w-11 h-6 rounded-full transition-colors flex items-center px-0.5 ${reduceMotion ? 'bg-nh-green-500' : 'bg-granite-300 dark:bg-slate-600'}`,
                                                "aria-pressed": reduceMotion,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: `w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${reduceMotion ? 'translate-x-5' : 'translate-x-0'}`
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                className: "mt-4 pt-3 border-t border-granite-100 dark:border-slate-700 text-center",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                    onClick: ()=>{
                                        setFontSize("normal");
                                        setDyslexiaFont(false);
                                        setReduceMotion(false);
                                    },
                                    className: "text-xs text-granite-400 hover:text-granite-600 dark:text-slate-500 dark:hover:text-slate-300 underline",
                                    children: "Reset Settings"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
}),
"[project]/packages/ui/dist/components/ThemeProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const initialState = {
    theme: "system",
    setTheme: ()=>null
};
const ThemeProviderContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(initialState);
function ThemeProvider({ children, defaultTheme = "system", storageKey = "civic-ui-theme" }) {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultTheme);
    // Load from storage AND handle system listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            // eslint-disable-next-line
            setTheme(saved);
        }
    }, [
        storageKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Logic to actually apply classes
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }
    }, [
        theme
    ]);
    const value = {
        theme,
        setTheme: (theme)=>{
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        }
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ThemeProviderContext.Provider, {
        value: value,
        children: children
    });
}
const useTheme = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeProviderContext);
    if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
}),
"[project]/packages/ui/dist/components/ThemeToggle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/ThemeProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ThemeToggle() {
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // eslint-disable-next-line
        setMounted(true);
    }, []);
    const toggleTheme = ()=>{
        if (theme === 'system') {
            const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(isSystemDark ? "light" : "dark");
        } else {
            setTheme(theme === "dark" ? "light" : "dark");
        }
    };
    if (!mounted) return null; // Avoid hydration mismatch
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
        onClick: toggleTheme,
        className: "p-2 rounded-full bg-gray-100 dark:bg-card-border hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors",
        "aria-label": "Toggle Dark Mode",
        children: theme === "dark" || theme === "system" && ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches ? // Sun Icon
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "text-yellow-500",
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "5"
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("line", {
                    x1: "12",
                    y1: "1",
                    x2: "12",
                    y2: "3"
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("line", {
                    x1: "12",
                    y1: "21",
                    x2: "12",
                    y2: "23"
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("line", {
                    x1: "4.22",
                    y1: "4.22",
                    x2: "5.64",
                    y2: "5.64"
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("line", {
                    x1: "18.36",
                    y1: "18.36",
                    x2: "19.78",
                    y2: "19.78"
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("line", {
                    x1: "1",
                    y1: "12",
                    x2: "3",
                    y2: "12"
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("line", {
                    x1: "21",
                    y1: "12",
                    x2: "23",
                    y2: "12"
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("line", {
                    x1: "4.22",
                    y1: "19.78",
                    x2: "5.64",
                    y2: "18.36"
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("line", {
                    x1: "18.36",
                    y1: "5.64",
                    x2: "19.78",
                    y2: "4.22"
                })
            ]
        }) : // Moon Icon
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "text-gray-700",
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            })
        })
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7e09b26b._.js.map