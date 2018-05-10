alunos = {
          20131114000102:["marcos maerli pereira",[1,1,1,0]],
          20135363636363:["maria joana souza",    [0,0,1,1]],
          20193845465656:["maria maria maria",    [0,1,1,1]]
};

n = {

}

function parse(t,m) {
  return parseInt(t,m).toString(36)
}

for(let i in alunos){
   n[parse(i,10)] = [alunos[i][0],parse(1 + alunos[i][1].join(''),2)];
}
console.log(n);
