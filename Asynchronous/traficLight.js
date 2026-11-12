function traficLight(){
    return Promise.resolve(["red", "yellow", "green"])
}

function redColor(colors){
    return new Promise((resolve) => {

        setTimeout(() => {  
            console.log(colors[0]);      
            resolve(colors)
        }, 3000);

    });
}

function greenColor(colors){

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(colors[2]);
            resolve(colors);
        }, 2000);
    });

}


function yellowColor(colors){

    return new Promise((resolve) => {
        
        setTimeout(() => {
            console.log(colors[1]);
            resolve(colors);
        }, 1000);
    });

}

function trafficLightSystem(){
        traficLight()
        .then(redColor)
        .then(yellowColor)
        .then(greenColor)
        .then(() => trafficLightSystem());
}

trafficLightSystem();

