// ১. কার্ডগুলোতে মাউস নিলে ছোট এনিমেশন ইফেক্ট
const cards = document.querySelectorAll('.glass');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = "0 0 25px rgba(57, 255, 20, 0.2)";
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = "none";
    });
});

// ২. AI Bot এ ক্লিক করলে মেসেজ দেখানো
const aiBtn = document.getElementById('aiBtn');
aiBtn.addEventListener('click', () => {
    alert("সবুজ শিকড় AI অ্যাসিস্ট্যান্ট খুব শীঘ্রই আসছে! এটি আপনাকে গাছ শনাক্ত করতে সাহায্য করবে।");
});

// ৩. স্ক্রল করলে হেডার এর ব্যাকগ্রাউন্ড পরিবর্তন
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = "#050a05";
        header.style.padding = "10px 8%";
    } else {
        header.style.background = "rgba(0, 0, 0, 0.8)";
        header.style.padding = "20px 8%";
    }
});

// ৪. ডার্ক মোড / ফিউচারিস্টিক পার্টিকেল সিমুলেশন (কনসোল লগ)
console.log("সবুজ শিকড় প্ল্যাটফর্ম লোড হয়েছে...");
