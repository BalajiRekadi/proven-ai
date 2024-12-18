import * as XLSX from 'xlsx'

const downloadXLSX = (data: any, filename: string) => {
  // 3. Convert the object to a worksheet
  const ws = XLSX.utils.json_to_sheet(data);

  // 4. Create a workbook with the worksheet
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  // 5. Download the Excel file
  XLSX.writeFile(wb, `${filename}.xlsx`);
};

export default downloadXLSX;
