// =========================
// Get Elements
// =========================

const heroMessage     = document.getElementById('heroMessage')
const heroTitle       = document.getElementById('heroTitle')
const heroDescription = document.getElementById('heroDescription')
const heroButton      = document.getElementById('heroButton')
const heroStats       = document.getElementById('heroStats')
const heroImg         = document.getElementById('heroImg')


// Insert Data To Hero Message
heroMessage.textContent  = `👋 Hello, I'm`

// Insert Data To Hero Title
heroTitle.innerHTML   = `Hello, I’m <br> Brooklyn Gilbert`

// Insert Data To Hero Description
heroDescription.textContent  = `
I'm a Freelance UI/UX Designer and Developer based in London, England.
I strives to build immersive and beautiful web applications through
carefully crafted code and user-centric design.
`

// Insert Data To Hero Button
heroButton.innerHTML = `Say Hello! <i class="ri-arrow-right-long-line"></i>`
heroButton.href = '#contact'


// Create Hero Stat
const heroStatsData  = [
    {statNumber : '15 Y.' , statLabel : 'Experience'        } ,
    {statNumber : '250+'  , statLabel : 'Project Completed' } ,
    {statNumber : '58'    , statLabel : 'Happy Client'      } ,
]

heroStatsData.forEach(item => heroStats.innerHTML += `
    <!-- Hero Stat -->
    <div class="hero__stat">
        <strong class="hero__stat-number">${item.statNumber}</strong>
        <span class="hero__stat-label">${item.statLabel}</span>
    </div>
`)

// Create Hero Img
const heroImageData = {src : 'assets/images/user-me.png' , alt : 'Brooklyn Gilbert'}
heroImg.src = heroImageData.src
heroImg.alt = heroImageData.alt