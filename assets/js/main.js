/* 
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/

// M0
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: './assets/img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: './assets/img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: './assets/img/walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: './assets/img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: './assets/img/scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: './assets/img/barbara-ramos-graphic-designer.jpg',
    },
]
//console.log(team);

for(let i = 0; i < team.length; i++) {

    const member = team[i]
    const markup_member = `
    <div class="col">
        <div class="card">
            <img src="${member.foto}" class="card-img-top">
            <div class="card-body">
                <h3>
                    ${member.nome} 
                </h3>
                <p>
                    ${member.ruolo}
                </p>
            </div>
            
        </div>
    </div>`
    const crad_el = document.querySelector('.row')
    crad_el.insertAdjacentHTML('beforeend', markup_member) 
}

