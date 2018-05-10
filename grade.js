const ALUNO = 0;
const DISCIPLINAS = 1;
const CH = 1;
const EQUIVALENTE = 3;
const CREDITOS = 2;
const NOME_DISCIPLINA = 0;

// matricula :[nome,[disciplinas cursadas]]

lista_de_disciplinas = [12535353,12535354,12535355,12535356];

alunos = {
          20131114000102:["marcos maerli pereira",[1,1,1,0]],
          20135363636363:["maria joana souza",    [0,0,1,1]],
          20193845465656:["maria maria maria",    [0,1,1,1]]
};


//id:[nome,carga horaria,creditos]
old_disciplinas = {
    12535353:["fisica geral 1",30,1],
    12535354:["fisica geral 2",30,5],
    12535355:["fisica geral 3",30,3],
    12535356:["fisica geral 4",30,3]
}
//id:[nome,carga horaria,creditos,disciplina correspondente]
new_disciplinas = {
    12643545:["matematica 1",20,2,12535353],
    12643546:["portugues 2",20,2,12535354],
    12643547:["geometria",20,2,12535355],
    12643548:["filosofia",20,2,12535356]
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
    for(let i in aluno_disciplinas){
      let cursou = aluno_disciplinas[i] == 1;

      let id_disciplina = lista_de_disciplinas[i];

       if(cursou){
            console.log(`${old_disciplinas[id_disciplina][0]} \t ok \t ${old_disciplinas[id_disciplina][CH]}`);
        }else{
            console.log(`${old_disciplinas[id_disciplina][0]} \t not \t ${old_disciplinas[id_disciplina][CH]}`);
        }
    }
}


function mudarGrade(aluno){
    let aluno_disciplinas = alunos[aluno][DISCIPLINAS];
    let total_antiga_ch = 0;
    let total_antiga_creditos = 0;
    let total_nova_ch = 0;
    let total_nova_creditos = 0;

    console.log('\n\t Aluno(a):' + alunos[aluno][ALUNO]);

    for(let i in new_disciplinas){
        let correspondente = new_disciplinas[i][EQUIVALENTE];
        let index = lista_de_disciplinas.indexOf(correspondente);
        let cursou = aluno_disciplinas[index] == 1;

        let nome_new_disciplina = new_disciplinas[i][NOME_DISCIPLINA];
        let ch_new_disciplina = new_disciplinas[i][CH];
        let cr_new_diciplina = new_disciplinas[i][CREDITOS];

        let nome_old_disciplina = old_disciplinas[correspondente][NOME_DISCIPLINA];
        let ch_old_disciplina = old_disciplinas[correspondente][CH];
        let cr_old_diciplina = old_disciplinas[correspondente][CREDITOS];

        if(cursou){
          total_antiga_ch += old_disciplinas[correspondente][CH];
          total_antiga_creditos += old_disciplinas[correspondente][CREDITOS];

          total_nova_ch += new_disciplinas[i][CH];
          total_nova_creditos += new_disciplinas[i][CREDITOS];

          console.log(`
          ${nome_new_disciplina} [${ch_new_disciplina}hrs] [${cr_new_diciplina}] \t ${nome_old_disciplina} [${ch_old_disciplina}hrs] [${cr_old_diciplina}] \t ok
          `);

        }else{
          console.log(`
          ${nome_new_disciplina} [${ch_new_disciplina}hrs] [${cr_new_diciplina}] \t ${nome_old_disciplina} [${ch_old_disciplina}hrs] [${cr_old_diciplina}] \t x
          `);
        }
    }
    console.log("\t Antiga grade");
    console.log(`\t carga horaria -> ${total_antiga_ch} \t creditos -> ${total_antiga_creditos}`);

    console.log("\t Nova grade");
    console.log(`\t carga horaria -> ${total_nova_ch} \t creditos -> ${total_nova_creditos}`);
}


mudarGrade(20131114000102);
