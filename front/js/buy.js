const form = document.querySelector(".form");
const message = document.querySelector("#message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  message.textContent = "جاري الإرسال...";

  try {
    const res = await fetch("http://localhost:3000/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "حدث خطأ");
    }

    message.textContent = "تم الإرسال بنجاح ✅";

    form.reset();
  } catch (err) {
    message.textContent = "حدث خطأ ❌ حاول مرة أخرى";
    console.error(err);
  }
});
