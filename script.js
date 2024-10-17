const hospital = ['joao','gustavo','guilherme','thierry']
while(hospital){
let choice = prompt(`os seus pacientes são:\n ${hospital}\n\n1-CONSULTAR PACINTE\n2-NOVO PACIENTE\n3-SAIR `)

if(choice = 1){
   hospital.shift()

}
else if (choice = 2){
 let nova = prompt('qual o nome do novo paciente?')
 hospital.push(nova)
 
}
