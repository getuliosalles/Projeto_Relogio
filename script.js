var inicio = false, hora_inicio, init_cronom, hora_atual, time_past, hora, minut, seg, miliseg, h, m, s, milis, tempo, horas, minutos, segundos, dia_semana, dia_mes, mes, ano, init_hora

function add_zero(number){
    if(number < 10){
        return '0'+`${number}`
    }else{
        return `${number}`
    }
}

document.getElementById('comecar_parar').onclick = function(){

    

    if(!inicio){
        inicio = true
        document.getElementById('comecar_parar').innerHTML = 'Parar'

        if(!hora_inicio){
        hora_inicio = new Date().getTime()
        }else{
            hora_inicio = new Date().getTime() - time_past
        }

        init_cronom = window.setInterval(function(){
            hora_atual = new Date().getTime()
            time_past = hora_atual - hora_inicio

           h = add_zero(hora = Math.floor(time_past / 3600000))
            resto = time_past - (hora * 3600000)

           m = add_zero(minut = Math.floor(resto / 60000))
            resto -= (minut * 60000)

           s = add_zero(seg = Math.floor(resto / 1000))
            resto -= (seg * 1000)

            function add_milis(number){
                if(number < 100){
                    return '0' + `${number}`
                }else{
                    return `${number}`
                }
            }            

           milis = add_milis(add_zero(miliseg = resto))

            document.getElementById('cronometro').innerHTML = `${h}:${m}:${s}  ${milis}`
            document.getElementById('hora').innerHTML = h
            document.getElementById('minut').innerHTML = m
            document.getElementById('seg').innerHTML = s
            document.getElementById('milis').innerHTML = milis


        },10)

    }else{
        inicio = false
        window.clearInterval(init_cronom)
        document.getElementById('comecar_parar').innerHTML = 'Começar'
    }
}

document.getElementById('zerar').onclick = function(){
    time_past = 0
    hora_inicio = new Date().getTime()
    document.getElementById('cronometro').innerHTML = "00:00:00  000"
    document.getElementById('hora').innerHTML = '00'
    document.getElementById('minut').innerHTML = '00'
    document.getElementById('seg').innerHTML = '00'
    document.getElementById('milis').innerHTML = '000'
}


document.getElementById('relogio').onclick = () =>{
    hora_inicio = new Date().getTime()

init_hora = window.setInterval(function(){

   

    tempo = new Date()
    horas = tempo.getHours()
    minutos = tempo.getMinutes()
    segundos = tempo.getSeconds()

    dia_mes = tempo.getDate()
    mes = tempo.getMonth() + 1
    ano = tempo.getFullYear()

    // miliseg = tempo.getTime()
    // mseg = miliseg - hora_inicio
    console.log(horas,minutos,segundos)
    document.getElementById('hora').innerHTML = add_zero(horas)
    document.getElementById('minut').innerHTML = add_zero(minutos)
    document.getElementById('seg').innerHTML = add_zero(segundos)
    document.getElementById('milis').innerHTML = `${dia_mes} / ${mes} / ${ano}`
},10)


// document.getElementById('cronometro').innerHTML = `${horas}:${minutos}:${segundos}`


    
    

}