
// 1. Full Multi-Language Database
const translations = {
    en: {
        "nav-guides": "Guides", "nav-impact": "Impact", "nav-donate": "Help Now",
        "hero-h1": "Clean Water is a Human Right.", "hero-p": "A library of life-saving filtration techniques.",
        "btn-quiz": "Water Quality Check", "btn-filter": "View All Guides",
        "impact-title": "Our Global Progress", "stat-liters": "Liters Purified", "stat-families": "Families Helped", "stat-filters": "Filters Built",
        "guides-title": "Water Solution Library", "view-btn": "Instructions",
        "guide-cloth-title": "Cloth Pre-Filter", "guide-cloth-desc": "Removing silt and parasites using woven cotton.",
        "guide-1-title": "Bio-Sand Filter", "guide-1-desc": "Biological filtration system for home use.",
        "guide-2-title": "SODIS Method", "guide-2-desc": "Solar disinfection using sunlight UV.",
        "stories-title": "Community Voices", "share-title": "Add Your Story", "btn-submit": "Post Experience",
        "donate-h2": "Fund a Filter Today", "donate-final": "Donate Now"
    },
    sw: { // Swahili
        "nav-guides": "Miongozo", "nav-impact": "Matokeo", "nav-donate": "Saidia",
        "hero-h1": "Maji Safi ni Haki ya Kila Mtu.", "btn-quiz": "Pima Ubora wa Maji",
        "impact-title": "Maendeleo Yetu", "view-btn": "Maelekezo"
    },
    ha: { // Hausa
        "nav-guides": "Jagora", "nav-impact": "Tasiri", "nav-donate": "Taimaka",
        "hero-h1": "Ruwa Mai Tsabta Haƙƙin Dan Adam Ne.", "btn-quiz": "Duba Ingancin Ruwa"
    },
    yo: { // Yoruba
        "nav-guides": "Itọsọna", "nav-impact": "Ipa", "nav-donate": "Ranlọwọ",
        "hero-h1": "Omi Mímọ́ Jẹ́ Ẹ̀tọ́ Ọmọnìyàn.", "btn-quiz": "Ṣayẹwo Didara Omi"
    }
};

// 2. Educational Content (Included Diagrams)
const guideContent = {
    cloth: {
        title: "Cloth Pre-Filter",
        html: ` <p>Essential for removing large particles and visible mud.</p><h4>Steps:</h4><ol><li>Fold a cotton cloth 8 times.</li><li>Stretch it over a clean vessel.</li><li>Pour water through slowly.</li></ol>`
    },
    biosand: {
        title: "Bio-Sand Filter",
        html: ` <p>Provides high-volume clean water for an entire family.</p><ul><li><strong>Top Layer:</strong> Bio-layer (eats bacteria).</li><li><strong>Middle:</strong> Fine sand.</li><li><strong>Bottom:</strong> Coarse gravel.</li></ul>`
    },
    sodis: {
        title: "SODIS Solar Disinfection",
        html: ` <p>Uses UV rays to kill pathogens for free.</p><h4>Steps:</h4><ol><li>Fill clear plastic bottles.</li><li>Place on a reflective surface (like metal).</li><li>Expose to sun for 6 hours.</li></ol>`
    }
};

// 3. UI Logic: Language Switcher
document.getElementById('language-select').onchange = (e) => {
    const lang = e.target.value;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
};

// 4. UI Logic: Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const update = () => {
            const current = +counter.innerText;
            const increment = target / 60;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(update, 30);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        update();
    });
}

// 5. Logic: Diagnostic Tool
function checkWaterQuality() {
    const isCloudy = confirm("Is your water cloudy or muddy?");
    const hasFuel = confirm("Do you have access to fire/fuel?");
    
    if (isCloudy) {
        alert("DIAGNOSIS: You must use the CLOTH or BIO-SAND filter first to remove dirt.");
    } else if (hasFuel) {
        alert("DIAGNOSIS: BOILING is your safest and fastest option for disinfection.");
    } else {
        alert("DIAGNOSIS: Use the SODIS method—put clear water in the sun for 6 hours.");
    }
}

// 6. Logic: Modal & Stories
const modal = document.getElementById("guideModal");
const modalBody = document.getElementById("modalBody");

document.querySelectorAll('.open-guide').forEach(btn => {
    btn.onclick = () => {
        const key = btn.getAttribute('data-guide');
        modalBody.innerHTML = `<h2>${guideContent[key].title}</h2><hr style="margin:20px 0;">${guideContent[key].html} <br><button onclick="window.print()" class="btn-primary" style="margin-top:20px;">Print Manual</button>`;
        modal.style.display = "block";
    };
});

document.querySelector(".close").onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; };

// Initializers
window.onload = () => {
    animateCounters();
    const grid = document.getElementById('storiesGrid');
    const stories = [{name:"Musa", location:"Kenya", text:"The Bio-Sand filter saved our village from typhoid."}];
    grid.innerHTML = stories.map(s => `<div class="story-card"><h4>${s.name} (${s.location})</h4><p>"${s.text}"</p></div>`).join('');
};
