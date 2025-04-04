import Skill from "../classes/skill.js";

const skills = [
    {
        name: "Attack",
        type: "damage",

        value: 10,
        cost: 0,

        effects: []

    },
    {
        name: "Heal",
        type: "heal",

        value: 40,
        cost: 4,

        effects: []
    },
    {
        name: "Smash",
        type: "damage",

        value: 15,
        cost: 3,
        
        effects: []
    },
    {
        name: "Barrage",
        type: "damage",

        value: 20,
        cost: 7,

        effects: []
    },
    {
        name: "Fireball",
        type: "damage",

        value: 35,
        cost: 12,

        effects: []
    },
    {
        name: "Thunder",
        type: "damage",

        value: 10,
        cost: 8,

        effects: [
            {status: "stunned", chance: 0.2}
        ]
    },
    {
        name: "Annihilation",
        type: "damage",

        value: 70,
        cost: 25,

        effects: [
            {status: "discombobulated", chance: 0.4},
        ]
    },
]

/**
 * Gets the data of the skill by it's name
 * @param {*} name 
 */
function getSkillByName(name){
    for(const skill of skills){
        if(skill.name === name){
            return new Skill(skill);
        }
    }

    return {err: "no skill found"};
}

export {skills , getSkillByName};