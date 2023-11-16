window.addEventListener( 'DOMContentLoaded', function () {
  
    const button = document.querySelector('.roll');

      function dice () {

          const firstSide = document.getElementById('side1');
          const secondSide = document.getElementById('side2');
          const result = document.getElementById('result');

          const side1 = Math.floor( Math.random() * 6 ) + 1;
          const side2 = Math.floor( Math.random() * 6 ) + 1;
          const total = side1 + side2;
          

          firstSide.innerHTML = side1;
          secondSide.innerHTML = side2;

          result.innerHTML = 'You rolled ' + total + '.';

          if (side1 === side2) {
              result.innerHTML += ' Doubles!! You got a free roll';
          }
      }

      button.addEventListener('click', dice);

  });
