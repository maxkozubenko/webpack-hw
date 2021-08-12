/* eslint-disable indent */

fetch('./story/skills.json')
  .then((response) => response.json())
  .then((json) => {
    setTimeout(() => {
      const skills = document.querySelector('.skills');
      json.skills.forEach((element) => {
        skills.insertAdjacentHTML(
          'beforeend',
          `<div class="skills__item">
              <h3>${element.nameSkill}</h3>
              <h3> Level of knowledge: ${element.rangSkiil}</h3>
          </div>`
        );
      });

      const loader = document.querySelector('.lds-spinner');
      loader.style.display = 'none';
    }, 2000);
  });
