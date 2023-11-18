const fs = require('fs');
const resemble = require('resemblejs');
const imagePaths = [
    'screenshots/v3.42/caso2/1-inicioSesion.png',
    'screenshots/v5.68/caso2/1-inicioSesion.png',
    'screenshots/v3.42/caso2/2-dashboard.png',
    'screenshots/v5.68/caso2/2-settings.png',
    'screenshots/v3.42/caso2/3-labs.png',
    'screenshots/v5.68/caso2/3-labs.png'
];

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

let htmlReport = '';

for (let i = 0; i < imagePaths.length; i += 2) {
    const image1Path = imagePaths[i];
    const image2Path = imagePaths[i + 1];

    const image1 = fs.readFileSync(image1Path);
    const image2 = fs.readFileSync(image2Path);

    resemble(image1).compareTo(image2).onComplete(function (data) {

        const threshold = 5;

        const section = `
            <h2>Comparación de Imágenes ${i + 1} y ${i + 2}:</h2>
            <p>Porcentaje de diferencia: ${data.rawMisMatchPercentage}</p>
            ${data.rawMisMatchPercentage > threshold ? '<p>Las imágenes son diferentes.</p>' : '<p>Las imágenes son similares.</p>'}
            
            <h3>Imágenes Comparadas:</h3>
            <div>
                <img src="data:image/png;base64,${image1.toString('base64')}" alt="Imagen ${i + 1}">
                <img src="data:image/png;base64,${image2.toString('base64')}" alt="Imagen ${i + 2}">
            </div>

            <h3>Información Adicional:</h3>
            <ul>
                <li>Dimensiones:</li>
                <ul>
                    <li>isSameDimensions: ${data.isSameDimensions}</li>
                    <li>dimensionDifference: ${data.dimensionDifference}</li>
                </ul>
                <li>Porcentaje de diferencia (raw): ${data.rawMisMatchPercentage}</li>
                <li>Porcentaje de diferencia: ${data.misMatchPercentage}</li>
                <li>diffBounds: ${JSON.stringify(data.diffBounds)}</li>
                <li>Tiempo de análisis: ${data.analysisTime} ms</li>
            </ul>
        `;

        // Agrega la sección al informe HTML
        htmlReport += section;

        // Si hemos procesado todas las comparaciones, genera el informe final
        if (i + 2 === imagePaths.length) {
            generateFinalReport();
        }
    });
}

function generateFinalReport() {
    // Construye el informe HTML completo
    const finalHtmlReport = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Informe de Comparación de Imágenes</title>
            <style>
                img {
                    max-width: 300px;
                    height: auto;
                }
            </style>
        </head>
        <body>
            <h1>Informe de Comparación de Imágenes</h1>
            ${htmlReport}
        </body>
        </html>
    `;

    // Intenta escribir el informe HTML en un archivo
    try {
        fs.writeFileSync('./reporte_resemblejs/informe_resultados.html', finalHtmlReport);
        console.log('Informe generado con éxito. Consulta el archivo "informe_comparacion.html".');
    } catch (error) {
        console.error('Error al escribir el archivo:', error.message);
    }
}