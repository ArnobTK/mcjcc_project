type Court = {
  id: number;
  center: string;
};

enum centers {
  SWRCC = "Southwest Regional Court Center",
  NWRCC = "Northwest Regional Court Center",
  DJC = "Downtown Justice Center",
  NERCC = "Northeast Regional Court Center",
  SRCC = "Santan Regional Court Center",
  SERPSF = "Southeast Regional Public Service Facility",
  P = "209 E Pima St",
}

const courtIDs = new Map<string, Court>([
  [
    "Downtown",
    {
      id: 3822,
      center: centers.DJC,
    },
  ],
  [
    "Arcadia Biltmore",
    {
      id: 3823,
      center: centers.DJC,
    },
  ],
  [
    "White Tank",
    {
      id: 3824,
      center: centers.SWRCC,
    },
  ],
  [
    "San Marcos",
    {
      id: 3825,
      center: centers.SRCC,
    },
  ],
  [
    "East Mesa",
    {
      id: 3825,
      center: centers.SERPSF,
    },
  ],
  [
    "Ironwood",
    {
      id: 3827,
      center: centers.P,
    },
  ],
  [
    "Manistee",
    {
      id: 3828,
      center: centers.NWRCC,
    },
  ],
  [
    "Dreamy Draw",
    {
      id: 3829,
      center: centers.NERCC,
    },
  ],
  [
    "Moon Valley",
    {
      id: 3830,
      center: centers.NERCC,
    },
  ],
  [
    "Arrowhead",
    {
      id: 3831,
      center: centers.NWRCC,
    },
  ],
  [
    "McDowell Mountain",
    {
      id: 3832,
      center: centers.NERCC,
    },
  ],
  [
    "South Mountain",
    {
      id: 3833,
      center: centers.DJC,
    },
  ],
  [
    "University Lakes",
    {
      id: 3834,
      center: centers.SRCC,
    },
  ],
  [
    "Agua Fria",
    {
      id: 3835,
      center: centers.SWRCC,
    },
  ],
  [
    "West Mesa",
    {
      id: 3836,
      center: centers.SERPSF,
    },
  ],
  [
    "West McDowell",
    {
      id: 3837,
      center: centers.DJC,
    },
  ],
  [
    "Hassayampa",
    {
      id: 3838,
      center: centers.NWRCC,
    },
  ],
  [
    "Encanto",
    {
      id: 3839,
      center: centers.DJC,
    },
  ],
  [
    "Maryvale",
    {
      id: 3840,
      center: centers.SWRCC,
    },
  ],
  [
    "San Tan",
    {
      id: 3841,
      center: centers.SRCC,
    },
  ],
  [
    "North Mesa",
    {
      id: 3842,
      center: centers.SERPSF,
    },
  ],
  [
    "Kyrene",
    {
      id: 3843,
      center: centers.SRCC,
    },
  ],
  [
    "North Valley",
    {
      id: 3844,
      center: centers.NWRCC,
    },
  ],
  [
    "Desert Ridge",
    {
      id: 3873,
      center: centers.NERCC,
    },
  ],
  [
    "Highland",
    {
      id: 4553,
      center: centers.SERPSF,
    },
  ],
  [
    "Country Meadows",
    {
      id: 4554,
      center: centers.SWRCC,
    },
  ],
]);

// Spreadsheet IDs are Strings
// Sheet IDs are Integers

// SSID: Spreadsheet ID
const quotaWatcherSSID = "1DlcbsHkYK6LlKyi8SB3NQf50Q31zZC0imsyG6d6Osp4";

const quotaSheetID = 0;
const urlFetchLimit = 20000;
const urlFetchedRow = 17;
const urlFetchedCol = 2;

const testSSID = "17LZcy8ZhZ1l5lO088wr-84_q2yus3GpdIjsxr-Ebcqs";

const testSheetID = 0;
