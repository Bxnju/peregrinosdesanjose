const spreadsheetId = '1PRrHuSSFbtuo-8FCM1Dbu7fcVGtfzKQeUIMjBW3sUB4';
const sheetName = 'intenciones';
const apiKey = 'AIzaSyAnKtoEapc41RnXlfDeM-jgoOm4AMrCWsk';

export const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
