/* 急寻厕所 · 原型公共函数 */

// 大号醒目 Toast
let _toastTimer = null;
function toast(msg, ms) {
  ms = ms || 2200;
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  // 强制重排以重启动画
  void el.offsetWidth;
  el.classList.add("show");
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function () { el.classList.remove("show"); }, ms);
}

// 违规内容检测（命中返回命中词，未命中返回 null）
function checkViolation(text) {
  for (var i = 0; i < VIOLATION_WORDS.length; i++) {
    if (text.indexOf(VIOLATION_WORDS[i]) !== -1) return VIOLATION_WORDS[i];
  }
  return null;
}

// 弹层开关
function showOverlay(sel) { document.querySelector(sel).classList.add("show"); }
function hideOverlay(sel) { document.querySelector(sel).classList.remove("show"); }

// 带地点的检索加载跳转（模拟自动检索）
function goSearch(pageUrl, loadingText) {
  var ov = document.getElementById("loadingOverlay");
  document.getElementById("loadingText").textContent = loadingText || "正在找附近的厕所…";
  ov.classList.add("show");
  setTimeout(function () { location.href = pageUrl; }, 1100);
}
