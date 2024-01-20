const spreadsheetId = '1MfQjpDdIEQdx0g_PXjAHiwUKaYtVmM-WwOhwUlVoAZU';
const sheetName = 'Respuestas_pruebas';
const apiKey = 'AIzaSyAnKtoEapc41RnXlfDeM-jgoOm4AMrCWsk';

/*
FORM REAL->
const spreadsheetId = '1PRrHuSSFbtuo-8FCM1Dbu7fcVGtfzKQeUIMjBW3sUB4';
const sheetName = 'intenciones';
*/

export const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;