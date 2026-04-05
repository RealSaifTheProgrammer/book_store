const form = document.querySelector(".form");
const message = document.querySelector("#message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const submitBtn = form.querySelector('button[type="submit"]');

  // Show loading state
  message.textContent = "جاري الإرسال...";
  message.style.display = "block";
  message.className = "";
  submitBtn.disabled = true;
  submitBtn.textContent = "جاري الإرسال...";

  // Add artificial delay to see the message (remove in production)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const res = await fetch(
      "https://book-store-backend-liart.vercel.app/api/leads",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      },
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "حدث خطأ");
    }

    message.textContent = "✅ تم الإرسال بنجاح";
    message.className = "success";
    submitBtn.disabled = false;
    submitBtn.textContent = "إرسـال";
    setTimeout(() => {
      form.reset();
      message.style.display = "none"; // Hide message after reset
      message.textContent = "";
    }, 3000); // Wait 3 seconds before resetting

    // Don't auto-clear - let user see it
    // setTimeout(() => {
    //   message.style.display = "none";
    // }, 5000);
  } catch (err) {
    message.textContent = "حدث خطأ حاول تغيير البريد الالكتروني";
    message.className = "error";
    console.error(err);
    submitBtn.disabled = false;
    submitBtn.textContent = "إرسـال";
  }
});

form.addEventListener("reset", () => {
  message.style.display = "none";
  message.textContent = "";
  message.className = "";
});
