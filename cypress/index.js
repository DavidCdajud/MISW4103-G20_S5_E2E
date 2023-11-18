const fs = require('fs');
const resemble = require('resemblejs');
const imagePaths = [
    //Escenario 2
    'screenshots/v3.42/caso2/1-inicioSesion.png',
    'screenshots/v5.68/caso2/1-inicioSesion.png',

    'screenshots/v3.42/caso2/2-dashboard.png',
    'screenshots/v5.68/caso2/2-settings.png',

    'screenshots/v3.42/caso2/3-labs.png',
    'screenshots/v5.68/caso2/3-labs.png',

    'screenshots/v3.42/caso2/5-delete-confirmation.png',
    'screenshots/v5.68/caso2/5-delete-confirmation.png',

    'screenshots/v3.42/caso2/7-import-successful.png',
    'screenshots/v5.68/caso2/7-import-successful.png',
    //Escenario 4
    'screenshots/v3.42/caso4/1-inicioSesion.png',
    'screenshots/v5.68/caso4/1-inicioSesion.png',

    'screenshots/v3.42/caso4/5-validation-code-injection.png',
    'screenshots/v5.68/caso4/4-validate.png',
    //Escenario 6
    'screenshots/v3.42/caso6/1admin.png.png',
    'screenshots/v5.68/caso6/1admin.png.png',

    'screenshots/v3.42/caso6/2homepage.png.png',
    'screenshots/v5.68/caso6/2homepage.png.png',

    'screenshots/v3.42/caso6/3profile.png.png',
    'screenshots/v5.68/caso6/3profile.png.png',

    'screenshots/v3.42/caso6/4profile.png.png',
    'screenshots/v5.68/caso6/4datos.png.png',

    'screenshots/v3.42/caso6/5datosEditados.png.png',
    'screenshots/v5.68/caso6/5datosEditados.png.png',

    'screenshots/v3.42/caso6/6confirmarEdicion.png.png',
    'screenshots/v5.68/caso6/6confirmarEdicion.png.png',

    'screenshots/v3.42/caso6/7datosNuevos.png.png',
    'screenshots/v5.68/caso6/7datosNuevos.png.png',

    'screenshots/v3.42/caso6/8datosAnteriores.png.png',
    'screenshots/v5.68/caso6/8datosAnteriores.png.png',

    'screenshots/v3.42/caso6/9confirmarDatosAnteriores.png.png',
    'screenshots/v5.68/caso6/9confirmarDatosAnteriores.png.png',
    //Escenario 9
    'screenshots/v3.42/caso9/1admin.png.png',
    'screenshots/v5.68/caso9/1admin.png.png',

    'screenshots/v3.42/caso9/2homepage.png.png',
    'screenshots/v5.68/caso9/2homepage.png.png',

    'screenshots/v3.42/caso9/3newMember.png.png',
    'screenshots/v5.68/caso9/3editMember.png.png',

    'screenshots/v3.42/caso9/4invalidEmailValidate.png.png',
    'screenshots/v5.68/caso9/4invalidEmailValidate.png.png',

    'screenshots/v3.42/caso9/5volverMembers.png.png',
    'screenshots/v5.68/caso9/5volverMembers.png.png',

    'screenshots/v3.42/caso9/6validarMiembroNoCreado.png.png',
    'screenshots/v5.68/caso9/6ValidarNoEditado.png.png',
    //Escenario 12
    'screenshots/v3.42/caso12/1-after-navigating-to-pages.png',
    'screenshots/v5.68/caso12/01-after-navigating-to-pages.png',

    'screenshots/v3.42/caso12/2.after-clicking-new-page.png',
    'screenshots/v5.68/caso12/02-after-clicking-new-page.png',

    'screenshots/v3.42/caso12/3.after-typing-title.png',
    'screenshots/v5.68/caso12/03-after-typing-title.png',

    'screenshots/v3.42/caso12/4.after-clicking-publish.png',
    'screenshots/v5.68/caso12/04-after-clicking-publish.png',

    'screenshots/v3.42/caso12/6.after-publishing.png',
    'screenshots/v5.68/caso12/05-after-publish-success.png',
    //Escenario 13
    'screenshots/v3.42/caso13/1-after-login.png',
    'screenshots/v5.68/caso13/1-after-navigating-to-post-creation.png',

    'screenshots/v3.42/caso13/2-post-title.png',
    'screenshots/v5.68/caso13/2-after-typing-title.png',

    'screenshots/v3.42/caso13/3-post-content.png',
    'screenshots/v5.68/caso13/3-after-typing-content.png',

    'screenshots/v3.42/caso13/4-after-clicking-publish.png',
    'screenshots/v5.68/caso13/4-after-clicking-publish.png',

    'screenshots/v3.42/caso13/6-after-publishing.png',
    'screenshots/v5.68/caso13/5-after-publish-success.png',
    //Escenario 14
    'screenshots/v3.42/caso14/1-after-visiting-page.png',
    'screenshots/v5.68/caso14/1-after-visiting-tags.png',

    'screenshots/v3.42/caso14/2.before-creating-tag.png',
    'screenshots/v5.68/caso14/2-before-creating-tag.png',

    'screenshots/v3.42/caso14/3.after-entering-tag-info.png',
    'screenshots/v5.68/caso14/3-after-entering-tag-info.png',

    'screenshots/v3.42/caso14/4.after-saving-tag.png',
    'screenshots/v5.68/caso14/4-after-saving-tag.png',

    'screenshots/v3.42/caso14/5.after-tag-created.png',
    'screenshots/v5.68/caso14/5-after-tag-created.png',
    //Escenario 15
    'screenshots/v3.42/caso15/1.before-toggle.png',
    'screenshots/v5.68/caso15/1-dashboard-initial.png',

    'screenshots/v3.42/caso15/2.after-first-toggle.png',
    'screenshots/v5.68/caso15/2-dashboard-after-toggle-to-dark.png',

    'screenshots/v3.42/caso15/3.after-second-toggle.png',
    'screenshots/v5.68/caso15/2-dashboard-after-toggle-to-light.png',
    //Escenario 17
    'screenshots/v3.42/caso17/Post-TimeZone.png',
    'screenshots/v5.68/caso17/Post-TimeZone.png',

    'screenshots/v3.42/caso17/Pre-TimeZone.png',
    'screenshots/v5.68/caso17/Pre-TimeZone.png',

    'screenshots/v3.42/caso17/SavedSettings.png',
    'screenshots/v5.68/caso17/SavedSettings.png',

    'screenshots/v3.42/caso17/Settings_TimeZone.png',
    'screenshots/v5.68/caso17/Settings_TimeZone.png',
    //Escenario 18
    'screenshots/v3.42/caso18/Post-Tweet.png',
    'screenshots/v5.68/caso18/Post-XCard.png',

    'screenshots/v3.42/caso18/pre-Tweet.png',
    'screenshots/v5.68/caso18/Pre-XCard.png',

    'screenshots/v3.42/caso18/SavedTweet.png',
    'screenshots/v5.68/caso18/Saved_XCard.png',

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

        htmlReport += section;

        if (i + 2 === imagePaths.length) {
            generateFinalReport();
        }
    });
}

function generateFinalReport() {
    
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

    try {
        fs.writeFileSync('./reporte_resemblejs/informe_resultados.html', finalHtmlReport);
        console.log('Informe generado con éxito. Consulta el archivo "informe_comparacion.html".');
    } catch (error) {
        console.error('Error al escribir el archivo:', error.message);
    }
}