// import excel 
import * as EXCEL from 'xlsx';
import * as fs from 'fs';

interface TestRecord {
    username : string;
    password : string;

}

export function readExcelFile(filePath: string){

    const file = fs.readFileSync(filePath);

    const workbook = EXCEL.read(file);

    const sheetNames = workbook.Sheets[workbook.SheetNames[0]]

    const rawData : any[] = EXCEL.utils.sheet_to_json(sheetNames,{header:1});

    const record:TestRecord[]=rawData.slice(1).map((column:any)=>({
        username : column[0],
        password : column[1]
    }))

    return record;
}
