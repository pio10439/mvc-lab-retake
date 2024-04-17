const http = require("http");
const { getHTMLDocumentStart, getHTMLDocumentEnd } = require("./htmlGenerator");
const { getCars, getCarInformation, getCarAge } = require("./cars");



const PORT = 3000;

const requestListener = (_request, response) => {
    const cars = getCars();
    console.log(cars);
    response.setHeader("Content-Type", "text/html");
    response.write(getHTMLDocumentStart());
    response.write('<body>');
    const carId = 1;
    const carInformation = getCarInformation(carId);
    const carAge = getCarAge(carId);
    response.write(`<p>${carInformation}</p>`)
    response.write(`<p> ${carAge} </p>`)
    response.write('</body>');
    response.write(getHTMLDocumentEnd());
    response.end();
}


const SERVER = http.createServer(requestListener);


SERVER.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});