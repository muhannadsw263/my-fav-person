const text = `11/11: عيد ولادتي الحقيقية في عينيكِ
حبيبتي التي سرقت مني القلب والروح،
التاريخ اليوم هو 11/11، ولكنه بالنسبة لي ليس مجرد تاريخ. إنه رمز لقلبينا وقد أصبحا واحداً (1+1)، ثم تضاعف العشق حتى أصبح اثنان يتشابكان في الأبدية (11/11).
أنتِ لستِ حبيبتي وحسب، أنتِ موطني الذي لا أبحث عنه، وأمني الذي لا أخاف منه، وجنوني الذي أحتفل به.
مشاعري تجاهك... كيف أصفها؟ إنها ليست مجرد "حب". إنها شعور مقدس، إدمان رائع، إعصار من الشوق يجتاح كل ما فيني. كل نبضة في صدري تنادي باسمك، وكل تفكير في رأسي هو وجهك.
وجودك بجانبي ليس إضافة، إنه المحتوى الأساسي لهذه الحياة. أنتِ الدفء الذي أبحث عنه عندما تجمدني الدنيا، والنور الذي يكشف لي جمال هذا العالم.
أعدكِ، بهذا اليوم المزدوج والمميز، أن عشقي لكِ سيبقى في تصاعد مستمر، يوماً بعد يوم، نبضة بعد نبضة، حتى آخر نفس.
أحبكِ بكل كياني... أحبكِ أكثر مما تتخيلين، وأكثر مما أستطيع أن أكتب، وأكثر مما يسمح به المنطق!
مغرمكِ وإلى الأبد،`;

const startBtn = document.getElementById("startBtn");
const messageEl = document.getElementById("message");
const gallery = document.querySelector(".gallery");
const heartsEl = document.getElementById("hearts");
const audio = document.getElementById("bg-music");
let i = 0;

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none"; // Hide Button
  messageEl.classList.remove("hidden");
  gallery.classList.remove("hidden");
  heartsEl.classList.remove("hidden");

  // Play Audio
  audio.play();

  // Write the Text
  typeWriter();
});

function typeWriter() {
  if (i < text.length) {
    messageEl.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  } else {
    showPhotos();
    createHearts();
  }
}

function showPhotos() {
  const photos = document.querySelectorAll(".gallery img");
  photos.forEach((photo, index) => {
    setTimeout(() => {
      photo.classList.remove("hidden"); // Remove the class
      photo.style.opacity = "1";        // إظهار تدريجي
    }, index * 1500); // كل صورة تظهر بعد 1.5 ثانية من اللي قبلها
  });
}

function createHearts() {
  for (let j = 0; j < 20; j++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    heartsEl.appendChild(heart);
  }
}

const sky = document.querySelector('.sky');

// إنشاء 50 نجمة عشوائية
for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + 'vh';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = (2 + Math.random() * 3) + 's';
  sky.appendChild(star);
}