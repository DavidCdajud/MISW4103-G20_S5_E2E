const fs = require('fs');
const resemble = require('resemblejs');

// Define las rutas de las imágenes que deseas comparar
const image1Path = 'screenshots/v3.42/caso2/1-inicioSesion.png';
const image2Path = 'screenshots/v5.68/caso2/1-inicioSesion.png';

// Carga las imágenes
const image1 = fs.readFileSync(image1Path);
const image2 = fs.readFileSync(image2Path);

// Compara las imágenes
// Configuración de opciones para la comparación de imágenes
const options = {
    output: {
        errorColor: {
            red: 255,
            green: 0,
            blue: 255
        },
        errorType: 'movement',
        transparency: 0.3,
        largeImageThreshold: 1200,
        useCrossOrigin: false,
        outputDiff: true
    },
    scaleToSameSize: true,
    ignore: 'antialiasing'
};

// Compara las imágenes
resemble(image1).compareTo(image2).onComplete(function(data) {
    console.log("Porcentaje de diferencia: " + data.rawMisMatchPercentage);

    // Puedes ajustar un umbral para determinar si las imágenes son lo suficientemente similares
    const threshold = 5; // Puedes ajustar este valor según tus necesidades

    if (data.rawMisMatchPercentage > threshold) {
        console.log("Las imágenes son diferentes.");
    } else {
        console.log("Las imágenes son similares.");
    }

    // Muestra información adicional
    console.log("Dimensiones:");
    console.log("Ancho de la imagen 1: " + data.dimension.width);
    console.log("Alto de la imagen 1: " + data.dimension.height);
    console.log("Ancho de la imagen 2: " + data.dimension.width);
    console.log("Alto de la imagen 2: " + data.dimension.height);
    
    console.log("Porcentaje de diferencia (raw): " + data.rawMisMatchPercentage);
    console.log("Porcentaje de diferencia: " + data.misMatchPercentage);
    console.log("Diff bounds: " + JSON.stringify(data.diffBounds));
    console.log("Tiempo de análisis: " + data.analysisTime + " ms");

    // Guarda la imagen comparativa
    fs.writeFileSync('compare.png', data.getBuffer());
});

function browser(b, info){
    console.log("b");
    return `<div class="browser" id="test0">
    <div class="btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="before-${b}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="after-${b}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`;
}

function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title>VRT Report</title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}">${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${Object.keys(resInfo).map(b => browser(b, resInfo[b])).join('')}
            </div>
        </body>
    </html>`;
}