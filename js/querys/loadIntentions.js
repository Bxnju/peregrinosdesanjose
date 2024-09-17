const spreadsheetId = 'id_sheet';
const sheetName = 'intenciones';
const apiKey = 'id_api';

export const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
