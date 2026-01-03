// 1. Language Database
const translations = {
    en: {
        "nav-guides": "Guides", "nav-donate": "Help Now",
        "hero-h1": "785 Million People Lack Clean Water.", "hero-p": "Providing DIY life-saving filtration guides and funding clean water.",
        "btn-filter": "Learn to Filter", "btn-donate-hero": "Donate $10",
        "guides-title": "Water Solution Guides", "guide-1-title": "The Bio-Sand Filter",
        "guide-1-desc": "Uses sand and gravel to remove 99% of bacteria and parasites.", "view-btn": "View Instructions",
        "donate-h2": "Change a Life Today", "donate-p": "Your contribution helps us distribute filtration kits to families in need.", "donate-final": "Donate via Secure Portal"
    },
    sw: { // Swahili
        "nav-guides": "Miongozo", "nav-donate": "Saidia Sasa",
        "hero-h1": "Watu Milioni 785 Hawana Maji Safi.", "hero-p": "Tunatoa miongozo ya kuchuja maji na kufadhili miradi ya maji safi.",
        "btn-filter": "Jifunze Kuchuja", "btn-donate-hero": "Changia $10",
        "guides-title": "Miongozo ya Kusafisha Maji", "guide-1-title": "Kichujio cha Mchanga",
        "guide-1-desc": "Hutumia mchanga na kokoto kuondoa 99% ya bakteria.", "view-btn": "Soma Maelekezo",
        "donate-h2": "Badilisha Maisha Leo", "donate-p": "Mchango wako unatusaidia kusambaza vifaa vya kuchuja maji kwa familia.", "donate-final": "Changia Sasa"
    },
    ha: { // Hausa
        "nav-guides": "Hanyoyi", "nav-donate": "Taimaka Yanzu",
        "hero-h1": "Mutane Miliyan 785 Ba Su Da Ruwa Mai Kyau.", "hero-p": "Muna ba da jagororin tace ruwa da tallafawa samar da ruwa.",
        "btn-filter": "Koyi Tace Ruwa", "btn-donate-hero": "Ba da $10",
        "guides-title": "Hanyoyin Tace Ruwa", "guide-1-title": "Tace Ruwa da Yashi",
        "guide-1-desc": "Yana amfani da yashi da duwatsu don kawar da kwayoyin cuta.", "view-btn": "Duba Yadda Ake Yi",
        "donate-h2": "Canza Rayuwar Wani Yau", "donate-p": "Taimakonka zai ba da ruwa mai kyau ga iyali guda.", "donate-final": "Taimaka Yanzu"
    },
    yo: { // Yoruba
        "nav-guides": "Ìtọ́ni", "nav-donate": "Rànlọ́wọ́ Báyìí",
        "hero-h1": "Ọ̀pọ̀lọpọ̀ ènìyàn kò ní omi mímọ́.", "hero-p": "A ń pèsè ìtọ́ni fún títọ́ omi àti owó fún iṣẹ́ omi mímọ́.",
        "btn-filter": "Kọ́ Bí A Ṣe Ń Tọ́ Omi", "btn-donate-hero": "Fi $10 Ṣe Ìrànlọ́wọ́",
        "guides-title": "Ìtọ́ni fún Omi Mímọ́", "guide-1-title": "Ìtọ́ Omi pẹ̀lú Iyanrìn",
        "guide-1-desc": "Lílo iyanrìn láti yọ kòkòrò àrùn kúrò nínú omi.", "view-btn": "Wo Ìtọ́ni",
        "donate-h2": "Yí Rayé Ẹnìkan Padà Lónìí", "donate-p": "Ìrànlọ́wọ́ rẹ yóò pèsè omi mímọ́ fún ẹbí kan.", "donate-final": "Fi Ìrànlọ́wọ́ Lọ́wọ́"
    }
};

// 2. Technical Guide Content
const guideContent = {
    biosand: {
        title: "Building a Bio-Sand Filter",
        html: `
            <div class="guide-header-box">
                <p><strong>Goal:</strong> Transform dirty pond or river water into drinking water using biology.</p>
            </div>
            
            <h3>Preparation:</h3>
            <p>1. Find a clean plastic drum or concrete container. 2. Install a PVC pipe at the bottom that curves up to the top.</p>
            <h3>Layering (Bottom to Top):</h3>
            <ul>
                <li><strong>Gravel (5cm):</strong> Prevents the outlet pipe from clogging.</li>
                <li><strong>Coarse Sand (5cm):</strong> Supports the fine sand.</li>
                <li><strong>Fine Sand (40cm):</strong> This is the main filter. Must be washed until the water runs clear.</li>
            </ul>
            <div class="warning-alert">
                <strong>Crucial:</strong> The sand must always stay covered by 5cm of water. After 21 days, a "Bio-layer" grows on top that eats germs.
            </div>
        `
    },
    sodis: {
        title: "Solar Disinfection (SODIS)",
        html: `
            <div class="guide-header-box">
                <p><strong>Goal:</strong> Use UV radiation to kill bacteria in clear water.</p>
            </div>
            
            <h3>Instructions:</h3>
            <p>1. Use clear <strong>PET</strong> plastic bottles (under 2 Liters). Glass will not work.</p>
            <p>2. Fill the bottle 3/4 full and shake for 20 seconds to oxygenate it. Then fill it full.</p>
            <p>3. Place on a metal roof or reflective surface in direct sunlight.</p>
            <p>4. Wait <strong>6 hours</strong> (sunny) or <strong>2 days</strong> (cloudy).</p>
        `
    }
};

// 3. Application Logic
const langSelect = document.getElementById('language-select');
const modal = document.getElementById("guideModal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close");

// Change Language
langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = translations[lang][key];
    });
});

// Modal Pop-ups
document.querySelectorAll('.open-guide').forEach(btn => {
    btn.onclick = function() {
        const key = this.getAttribute('data-guide');
        const data = guideContent[key];
        modalBody.innerHTML = `<h2>${data.title}</h2><hr style="margin:15px 0; border:0; border-top:1px solid #eee;">${data.html}`;
        modal.style.display = "block";
    }
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

// Donation Toggles
document.querySelectorAll('.amt-btn').forEach(btn => {
    btn.onclick = function() {
        document.querySelectorAll('.amt-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('custom-amt').value = '';
    }
});