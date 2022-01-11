const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

const teamContainer = document.querySelector('.team-container'); 

function teamMember(teamContainer, team) {

  teamContainer.innerHTML = ''

  for (let i = 0; i < team.length; i++) {
    const member = team[i];
  
    teamContainer.innerHTML += 
    `<div class="team-card">
    <div class="card-image">
      <img
        src="img/${member.image}"
        alt="${member.name}"
      />
    </div>
    <div class="card-text">
      <h3>${member.name}</h3>
      <p>${member.role}</p>
    </div>
    </div>`
  } 
}


const button = document.getElementById('addMemberButton');
button.addEventListener('click', function() {
  const addName = document.getElementById('name').value;
  const addRole = document.getElementById('role').value;
  const addImage = document.getElementById('image').value;

  const newMember = {
    name: addName,
    role: addRole,
    image: addImage,
  }

  team.push(newMember);
  teamMember(teamContainer, team)
})