
const skills: string[] = ['Bash', 'Counter', 'Healing'];



//Podemos incluir una propiedad hometown pero al ponerle un ? que significa que podría no estar.
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
};

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

strider.hometown = "Rivendell";


console.table(strider, skills);

export {};