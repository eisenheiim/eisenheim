let menuIcon = document.querySelector("#menu-icon");
let navMenu = document.querySelector(".navbar");

const form = document.getElementById("contactForm");
const status = document.getElementById("statusMessage");
menuIcon.onclick= () => {
  navMenu.classList.toggle("active"); // menüyü aç/kapa
  menuIcon.classList.toggle("bx-x");  // ikon animasyonu için
};

document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault(); // Sayfa yenilenmesin


const data = {
  fullName: document.getElementById("fullName").value,
  email: document.getElementById("email").value,
  phone: document.getElementById("phone").value,
  message: document.getElementById("message").value
};

try {
  const response = await fetch("http://127.0.0.1:8000/send-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  console.log("result:", result);     // 🔥 EKLE

  form.reset()
  status.innerText = result.message || "Mesajınız gönderildi ✅";
  status.style.display = "block";
  status.style.color = "green";
  
  setTimeout(() => {
    status.style.display = "none";
  }, 3000);

  
  
  
} catch (error) {
  document.getElementById("status").innerText = "Mesaj gönderilirken bir hata oluştu.";
}
});

