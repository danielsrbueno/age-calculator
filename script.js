const inpDia = document.querySelector("#inpDia");
const inpMes = document.querySelector("#inpMes");
const inpAno = document.querySelector("#inpAno");
const erroDia = document.querySelector("#erroDia");
const erroMes = document.querySelector("#erroMes");
const erroAno = document.querySelector("#erroAno");
const outDia = document.querySelector("#outDia");
const outMes = document.querySelector("#outMes");
const outAno = document.querySelector("#outAno");
const button = document.querySelector("#button");

const data = new Date();
const diaUser = String(data.getDate()).padStart(2, '0');
const mesUser = String(data.getMonth()).padStart(2,'0');
const anoUser = String(data.getFullYear()).padStart(2, '0');
const dataUser = `${diaUser}/${mesUser}/${anoUser}`;

button.addEventListener('click', ()=> {
    if (inpDia.value == "" || inpMes.value == "" || inpAno.value == ""){
        if (inpDia.value == "") {
        erroDia.setAttribute('erro', 'Preencha este campo');
        inpDia.setAttribute('class', 'erro');
        }
        if (inpMes.value == "") {
            erroMes.setAttribute('erro', 'Preencha este campo');
            inpMes.setAttribute('class', 'erro');
        }
        if (inpAno.value == "") {
            erroAno.setAttribute('erro', 'Preencha este campo');
            inpAno.setAttribute('class', 'erro');
        }
    }
    else {
        const dataInp = `${inpAno.value}-${(inpMes.value).padStart(2, '0')}-${(inpDia.value).padStart(2, '0')}`;
        function validacao(dataInp) {
            let aux = new Date(dataInp);
            return !isNaN(aux.getTime());
        }
        function validacaoFevereiro() {
            if (inpMes.value == 2) {
                if (inpDia.value <= 29) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        function validacaoTrinta() {
            if (inpMes.value == 4 || inpMes.value == 6 || inpMes.value == 9 || inpMes.value == 11) {
                if (inpDia.value <= 30){
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        if (validacao(dataInp) && inpAno.value <= anoUser && validacaoFevereiro() && validacaoTrinta()) {
            erroDia.removeAttribute('erro');
            erroMes.removeAttribute('erro');
            erroAno.removeAttribute('erro');
            inpDia.removeAttribute('class');                
            inpMes.removeAttribute('class');
            inpAno.removeAttribute('class');

            let aux1 = new Date(dataInp);
            const diferencaMs = Math.abs(data.getTime() - aux1.getTime());
             const diferencaDia = Math.ceil(diferencaMs / (1000 * 3600 * 24));
            const resultAno = (diferencaDia / 365.25);
            const resultMes = (diferencaDia % 365.25 / 30.4375);
            const resultDia = (diferencaDia % 365 % 30.4375);

             if (parseInt(resultAno) > 1) {
                  outAno.innerHTML = ("<i><span>" + parseInt(resultAno) + "</span> anos</i>");
               }
              else {
                  outAno.innerHTML = ("<i><span>" + parseInt(resultAno) + "</span> ano</i>");
              }

              if (parseInt(resultMes) > 1) {
                 outMes.innerHTML = ("<i><span>" + parseInt(resultMes) + "</span> meses</i>");
             }
             else {
                  outMes.innerHTML = ("<i><span>" + parseInt(resultMes) + "</span> mês</i>");
                }

            if (parseInt(resultDia) > 1) {
                  outDia.innerHTML = ("<i><span>" + parseInt(resultDia - 1) + "</span> dias</i>");
            }
            else {
                outDia.innerHTML = ("<i><span>" + parseInt(resultDia - 1) + "</span> dia</i>");
            }
        }
        else {
            erroDia.setAttribute('erro', 'Digite uma data válida');
            inpDia.setAttribute('class', 'erro');
            inpMes.setAttribute('class', 'erro');
            inpAno.setAttribute('class', 'erro');
        }
    }
});

const questionMark = document.querySelector('#questionMark');
const about = document.querySelector('#about');
const exit = document.querySelector('.exit');

questionMark.addEventListener('click', ()=> {
    if (about.classList.contains('exiting') == true) {
        about.removeAttribute('class', 'exiting');
    }
    about.style.display = "flex";
});

exit.addEventListener('click', ()=> {
    about.setAttribute('class', 'exiting');
    setTimeout(()=> {
        about.style.display = "none";
    }, 799);
    
    
});