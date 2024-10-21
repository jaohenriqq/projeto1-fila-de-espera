let hospital = ['joao','gustavo','guilherme','thierry']
let pick2 = prompt(`Hospital aberto,\nEscreva 1 para iniciar`)
while(pick2 !=3) {
    let pick = prompt(`os seus pacientes são:\n ${hospital}\n\n1-CONSULTAR PACIENTE\n2-NOVO PACIENTE\n3-SAIR `)
    if(pick==1){
        hospital.shift()
    }
    else if(pick == 2){
        let name =prompt('qual o nome do paciente?')
        hospital.push(name)
    }
    else{ pick=3
        alert('programa encerrado')
        break
    }
 }
    
