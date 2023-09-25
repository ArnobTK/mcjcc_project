"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheetIDs_1 = require("./spreadsheetIDs");
/**
 * Data in IDs Sheet is formatted as follows:
 *  Column A: Court Name
 *  Column B: Court ID
 *  Column C: Building where court is housed
 */
let sheet = SpreadsheetApp.openById(spreadsheetIDs_1.MCWCR_SSID).getSheets();
