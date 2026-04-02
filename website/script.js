// MATRIX EFFECT
const matrix = document.getElementById('matrix');
const chars = "0123456789";

for (let i = 0; i < 50; i++) {
  const col = document.createElement('div');
  col.className = 'column';
  col.style.left = i * 2 + '%';
  col.style.animationDuration = (Math.random() * 3 + 2) + 's';

  let text = '';
  for (let j = 0; j < 30; j++) {
    text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
  }

  col.innerHTML = text;
  matrix.appendChild(col);
}
// TYPEWRITER WITH LOADING EFFECT
const typeElement = document.getElementById("typeText");
const baseText = "Accessing system";

let i = 0;

function typeBase() {
  if (i < baseText.length) {
    typeElement.textContent += baseText.charAt(i);
    i++;
    setTimeout(typeBase, 50);
  } else {
    loadingDots();
  }
}

let dotCount = 0;
function loadingDots() {
    if (dotCount < 6) { // 3 cycles of dots
        typeElement.textContent = baseText + '█'.repeat(dotCount % 2);
        dotCount++;
        setTimeout(loadingDots, 400);
    } else {
        flashWelcome();
    }
}



let flashOn = true;
let flashCycles = 0;

function flashWelcome() {
    if (flashCycles < 100) { // flash 6 times
        typeElement.textContent = baseText + (flashOn ? '... WELCOME' : '...');
        flashOn = !flashOn;
        flashCycles++;
        setTimeout(flashWelcome, 300);
    } else {
        typeElement.textContent = baseText + '... WELCOME';
    }
}

typeBase();
typeWelcome();

// flashWelcome();


// TERMINAL FIX
const terminal = document.getElementById("terminal");
const input = document.getElementById("terminalInput");

terminal.innerHTML = '> system ready<br>type "help"<br><br>';

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();
    let output = '';

    switch(cmd) {
      case 'help':
        output = 'commands: about, skills, projects, contact, clear';
        break;
      case 'about':
        output = 'IT Engineer focused on troubleshooting and systems.';
        break;
      case 'skills':
        output = 'networking | systems | hardware';
        break;
      case 'projects':
        output = 'network setups, printer fixes, server deployments';
        break;
      case 'contact':
        output = 'tyronnenel4@gmail.com';
        break;
      case 'clear':
        terminal.innerHTML = '';
        input.value = '';
        return;
      default:
        output = 'unknown command';
    }

    terminal.innerHTML += `> ${cmd}<br>${output}<br><br>`;
    terminal.scrollTop = terminal.scrollHeight;
    input.value = '';
  }
});

