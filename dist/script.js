const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const text = btn.previousElementSibling; // p 標籤
    text.classList.toggle("expanded");       // 切換 class

    if (text.classList.contains("expanded")) {
      btn.textContent = "收起全文";
    } else {
      btn.textContent = "展開全文";
    }
  });
});