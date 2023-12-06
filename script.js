const display = document.getElementById('osszes');

let Szam = '';

function Click(value) {
    
    switch (value) {
      case 'C':
        Szam = '';
        break;
      case '<-':
        Szam = Szam.slice(0, -1);
        break;
      default:
        Szam += value;
        break;
    }

    update();
  }

  function update() {
    display.textContent = Szam;
  }

  function calculate() {
    try {
        Szam = eval(Szam).toString();
        update();
    } catch (error) {
      display.textContent = 'Hiba';
    }
}