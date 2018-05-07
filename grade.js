const ALUNO = 0;
const DISCIPLINAS = 1;
const CH = 1;
const EQUIVALENTE = 3;
const CREDITOS = 2;

// matricula :[nome,[disciplinas cursadas]]
alunos = {
20131114000102:["marcos maerli pereira",[12535353,12535355,12535354]],
20135363636363:["maria joana souza",[]]
};


//id:[nome,carga horaria,creditos]
old_disciplinas = {
    12535353:["fisica geral1",30,1],
    12535354:["fisica geral2",30,5],
    12535355:["fisica geral3",30,3],
    12535356:["fisica geral4",30,3]
}
//id:[nome,carga horaria,creditos,disciplina correspondente]
new_disciplinas = {
    12643545:["fisica 1",20,2,12535353],
    12643546:["fisica 2",20,2,12535354],
    12643547:["fisica 3",20,2,12535355],
    12643548:["fisica 4",20,2,12535356]
}

function novaGradeEquivalencia(){
    console.log("antiga \t carga \t cred \t nova \t carga \t credi");
    for(let i in new_disciplinas){
        let old = old_disciplinas[new_disciplinas[i][EQUIVALENTE]];
        let _new = new_disciplinas[i];
        console.log(`${old[0]} \t ${old[1]} \t ${old[2]} \t ${_new[0]} \t ${_new[1]} ${_new[2]}`);
    }
}

//ver historico do aluno

function verHistorico(aluno){
    let aluno_disciplinas = alunos[aluno][DISCIPLINAS];
    console.log("disciplina \t completa \t carga");
    for(let i in old_disciplinas){
       if(aluno_disciplinas.some(x => x == i)){
            console.log(`${old_disciplinas[i][0]} \t ok \t ${old_disciplinas[i][CH]}`);
        }else{
            console.log(`${old_disciplinas[i][0]} \t not \t ${old_disciplinas[i][CH]}`);
        }
    }
}


function mudarGrade(aluno){
    let aluno_disciplinas = alunos[aluno][DISCIPLINAS];
    let total_antiga_ch = 0;
    let total_antiga_creditos = 0;
    let total_nova_ch = 0;
    let total_nova_creditos = 0;
    for(let i in new_disciplinas){
        let correspondente = new_disciplinas[i][EQUIVALENTE];
        if(aluno_disciplinas.some(x => x == correspondente)){
            total_antiga_ch += old_disciplinas[correspondente][CH];
            total_antiga_creditos += old_disciplinas[correspondente][CREDITOS];

            total_nova_ch += new_disciplinas[i][CH];
            total_nova_creditos += new_disciplinas[i][CREDITOS];
        }
    }
    console.log("antiga");
    console.log(`carga horaria -> ${total_antiga_ch} \t creditos -> ${total_antiga_creditos}`);

    console.log("nova");
    console.log(`carga horaria -> ${total_nova_ch} \t creditos -> ${total_nova_creditos}`);
}

