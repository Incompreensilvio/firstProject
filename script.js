function toggleMode (){
   const html = document.documentElement

    html.classList.toggle('light') //usamos uma funçao q ja existe para mudar a classe


    const img = document.querySelector("#profile img")
    const txtFooter = document.querySelector("#rodape")

    if (html.classList.contains('light')) {//se na classe conter ligth
        img.setAttribute('src', './assets/avatar.png')
        txtFooter.innerHTML = "Never Fucking Give Up 👊"
    }else{
        img.setAttribute('src', './assets/oavatar.png')
        txtFooter.innerHTML = "Nunca pense em desistir 👊"
    }




}