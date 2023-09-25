import { mirrorMap } from "./mirrorMap";
import { MCWCR_SSID, IDs_SHEETID } from "./spreadsheetIDs";

/**
 * Data in IDs Sheet is formatted as follows:
 *  Column A: Court Name
 *  Column B: Court ID
 *  Column C: Building where court is housed
 */



let sheet = SpreadsheetApp.openById(MCWCR_SSID).getSheets();

