document.addEventListener("DOMContentLoaded", function() {
    const moeda = document.getElementById("moeda");
    const imagemMoeda = document.getElementById("imagemMoeda");
    const jogarBtn = document.getElementById("jogarBtn");
    const resultado = document.getElementById("resultado");
    const body = document.body;

    jogarBtn.addEventListener("click", function() {
        imagemMoeda.classList.add("rotate");

        
        setTimeout(function() {
            const ladoMoeda = Math.random() < 0.5 ? "cara" : "coroa"; 

            if (ladoMoeda === "cara") {
                imagemMoeda.src = "cara.png"; 
                resultado.textContent = "Caiu Cara!";
                body.style.backgroundColor = "#9400d3"; 
            } else {
                imagemMoeda.src = "coroa.png";
                resultado.textContent = "Caiu Coroa!";
                body.style.backgroundColor = "#daa520"; 
            }
            
            imagemMoeda.classList.remove("rotate");
        }, 1000); 
    });
});
