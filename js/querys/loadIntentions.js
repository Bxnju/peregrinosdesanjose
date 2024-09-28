const spreadsheetId = '1MfQjpDdIEQdx0g_PXjAHiwUKaYtVmM-WwOhwUlVoAZU';
const sheetName = 'Respuestas_pruebas';
const apiKey = 'AIzaSyAnKtoEapc41RnXlfDeM-jgoOm4AMrCWsk';

export const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
