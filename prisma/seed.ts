import { PrismaClient, Testament, Group } from '@prisma/client';

const prisma = new PrismaClient();

const countryData = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Åland Islands', code: 'AX' },
  { name: 'Albania', code: 'AL' },
  { name: 'Algeria', code: 'DZ' },
  { name: 'American Samoa', code: 'AS' },
  { name: 'Andorra', code: 'AD' },
  { name: 'Angola', code: 'AO' },
  { name: 'Anguilla', code: 'AI' },
  { name: 'Antarctica', code: 'AQ' },
  { name: 'Antigua and Barbuda', code: 'AG' },
  { name: 'Argentina', code: 'AR' },
  { name: 'Armenia', code: 'AM' },
  { name: 'Aruba', code: 'AW' },
  { name: 'Australia', code: 'AU' },
  { name: 'Austria', code: 'AT' },
  { name: 'Azerbaijan', code: 'AZ' },
  { name: 'Bahamas', code: 'BS' },
  { name: 'Bahrain', code: 'BH' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Barbados', code: 'BB' },
  { name: 'Belarus', code: 'BY' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Belize', code: 'BZ' },
  { name: 'Benin', code: 'BJ' },
  { name: 'Bermuda', code: 'BM' },
  { name: 'Bhutan', code: 'BT' },
  { name: 'Bolivia', code: 'BO' },
  { name: 'Bosnia and Herzegovina', code: 'BA' },
  { name: 'Botswana', code: 'BW' },
  { name: 'Bouvet Island', code: 'BV' },
  { name: 'Brazil', code: 'BR' },
  { name: 'British Indian Ocean Territory', code: 'IO' },
  { name: 'Brunei Darussalam', code: 'BN' },
  { name: 'Bulgaria', code: 'BG' },
  { name: 'Burkina Faso', code: 'BF' },
  { name: 'Burundi', code: 'BI' },
  { name: 'Cambodia', code: 'KH' },
  { name: 'Cameroon', code: 'CM' },
  { name: 'Canada', code: 'CA' },
  { name: 'Cape Verde', code: 'CV' },
  { name: 'Cayman Islands', code: 'KY' },
  { name: 'Central African Republic', code: 'CF' },
  { name: 'Chad', code: 'TD' },
  { name: 'Chile', code: 'CL' },
  { name: 'China', code: 'CN' },
  { name: 'Christmas Island', code: 'CX' },
  { name: 'Cocos (Keeling) Islands', code: 'CC' },
  { name: 'Colombia', code: 'CO' },
  { name: 'Comoros', code: 'KM' },
  { name: 'Congo', code: 'CG' },
  { name: 'Congo, The Democratic Republic of the', code: 'CD' },
  { name: 'Cook Islands', code: 'CK' },
  { name: 'Costa Rica', code: 'CR' },
  { name: 'Croatia', code: 'HR' },
  { name: 'Cuba', code: 'CU' },
  { name: 'Cyprus', code: 'CY' },
  { name: 'Czech Republic', code: 'CZ' },
  { name: 'Denmark', code: 'DK' },
  { name: 'Djibouti', code: 'DJ' },
  { name: 'Dominica', code: 'DM' },
  { name: 'Dominican Republic', code: 'DO' },
  { name: 'Ecuador', code: 'EC' },
  { name: 'Egypt', code: 'EG' },
  { name: 'El Salvador', code: 'SV' },
  { name: 'Equatorial Guinea', code: 'GQ' },
  { name: 'Eritrea', code: 'ER' },
  { name: 'Estonia', code: 'EE' },
  { name: 'Ethiopia', code: 'ET' },
  { name: 'Falkland Islands (Malvinas)', code: 'FK' },
  { name: 'Faroe Islands', code: 'FO' },
  { name: 'Fiji', code: 'FJ' },
  { name: 'Finland', code: 'FI' },
  { name: 'France', code: 'FR' },
  { name: 'French Guiana', code: 'GF' },
  { name: 'French Polynesia', code: 'PF' },
  { name: 'French Southern Territories', code: 'TF' },
  { name: 'Gabon', code: 'GA' },
  { name: 'Gambia', code: 'GM' },
  { name: 'Georgia', code: 'GE' },
  { name: 'Germany', code: 'DE' },
  { name: 'Ghana', code: 'GH' },
  { name: 'Gibraltar', code: 'GI' },
  { name: 'Greece', code: 'GR' },
  { name: 'Greenland', code: 'GL' },
  { name: 'Grenada', code: 'GD' },
  { name: 'Guadeloupe', code: 'GP' },
  { name: 'Guam', code: 'GU' },
  { name: 'Guatemala', code: 'GT' },
  { name: 'Guernsey', code: 'GG' },
  { name: 'Guinea', code: 'GN' },
  { name: 'Guinea-Bissau', code: 'GW' },
  { name: 'Guyana', code: 'GY' },
  { name: 'Haiti', code: 'HT' },
  { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
  { name: 'Holy See (Vatican City State)', code: 'VA' },
  { name: 'Honduras', code: 'HN' },
  { name: 'Hong Kong', code: 'HK' },
  { name: 'Hungary', code: 'HU' },
  { name: 'Iceland', code: 'IS' },
  { name: 'India', code: 'IN' },
  { name: 'Indonesia', code: 'ID' },
  { name: 'Iran, Islamic Republic Of', code: 'IR' },
  { name: 'Iraq', code: 'IQ' },
  { name: 'Ireland', code: 'IE' },
  { name: 'Isle of Man', code: 'IM' },
  { name: 'Israel', code: 'IL' },
  { name: 'Italy', code: 'IT' },
  { name: 'Jamaica', code: 'JM' },
  { name: 'Japan', code: 'JP' },
  { name: 'Jersey', code: 'JE' },
  { name: 'Jordan', code: 'JO' },
  { name: 'Kazakhstan', code: 'KZ' },
  { name: 'Kenya', code: 'KE' },
  { name: 'Kiribati', code: 'KI' },
  { name: 'Korea, Republic of', code: 'KR' },
  { name: 'Kuwait', code: 'KW' },
  { name: 'Kyrgyzstan', code: 'KG' },
  { name: 'Latvia', code: 'LV' },
  { name: 'Lebanon', code: 'LB' },
  { name: 'Lesotho', code: 'LS' },
  { name: 'Liberia', code: 'LR' },
  { name: 'Libyan Arab Jamahiriya', code: 'LY' },
  { name: 'Liechtenstein', code: 'LI' },
  { name: 'Lithuania', code: 'LT' },
  { name: 'Luxembourg', code: 'LU' },
  { name: 'Macao', code: 'MO' },
  { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
  { name: 'Madagascar', code: 'MG' },
  { name: 'Malawi', code: 'MW' },
  { name: 'Malaysia', code: 'MY' },
  { name: 'Maldives', code: 'MV' },
  { name: 'Mali', code: 'ML' },
  { name: 'Malta', code: 'MT' },
  { name: 'Marshall Islands', code: 'MH' },
  { name: 'Martinique', code: 'MQ' },
  { name: 'Mauritania', code: 'MR' },
  { name: 'Mauritius', code: 'MU' },
  { name: 'Mayotte', code: 'YT' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Micronesia, Federated States of', code: 'FM' },
  { name: 'Moldova, Republic of', code: 'MD' },
  { name: 'Monaco', code: 'MC' },
  { name: 'Mongolia', code: 'MN' },
  { name: 'Montserrat', code: 'MS' },
  { name: 'Morocco', code: 'MA' },
  { name: 'Mozambique', code: 'MZ' },
  { name: 'Myanmar', code: 'MM' },
  { name: 'Namibia', code: 'NA' },
  { name: 'Nauru', code: 'NR' },
  { name: 'Nepal', code: 'NP' },
  { name: 'Netherlands', code: 'NL' },
  { name: 'Netherlands Antilles', code: 'AN' },
  { name: 'New Caledonia', code: 'NC' },
  { name: 'New Zealand', code: 'NZ' },
  { name: 'Nicaragua', code: 'NI' },
  { name: 'Niger', code: 'NE' },
  { name: 'Nigeria', code: 'NG' },
  { name: 'Niue', code: 'NU' },
  { name: 'Norfolk Island', code: 'NF' },
  { name: 'Northern Mariana Islands', code: 'MP' },
  { name: 'Norway', code: 'NO' },
  { name: 'Oman', code: 'OM' },
  { name: 'Pakistan', code: 'PK' },
  { name: 'Palau', code: 'PW' },
  { name: 'Palestinian Territory, Occupied', code: 'PS' },
  { name: 'Panama', code: 'PA' },
  { name: 'Papua New Guinea', code: 'PG' },
  { name: 'Paraguay', code: 'PY' },
  { name: 'Peru', code: 'PE' },
  { name: 'Philippines', code: 'PH' },
  { name: 'Pitcairn', code: 'PN' },
  { name: 'Poland', code: 'PL' },
  { name: 'Portugal', code: 'PT' },
  { name: 'Puerto Rico', code: 'PR' },
  { name: 'Qatar', code: 'QA' },
  { name: 'Reunion', code: 'RE' },
  { name: 'Romania', code: 'RO' },
  { name: 'Russian Federation', code: 'RU' },
  { name: 'RWANDA', code: 'RW' },
  { name: 'Saint Helena', code: 'SH' },
  { name: 'Saint Kitts and Nevis', code: 'KN' },
  { name: 'Saint Lucia', code: 'LC' },
  { name: 'Saint Pierre and Miquelon', code: 'PM' },
  { name: 'Saint Vincent and the Grenadines', code: 'VC' },
  { name: 'Samoa', code: 'WS' },
  { name: 'San Marino', code: 'SM' },
  { name: 'Sao Tome and Principe', code: 'ST' },
  { name: 'Saudi Arabia', code: 'SA' },
  { name: 'Senegal', code: 'SN' },
  { name: 'Serbia and Montenegro', code: 'CS' },
  { name: 'Seychelles', code: 'SC' },
  { name: 'Sierra Leone', code: 'SL' },
  { name: 'Singapore', code: 'SG' },
  { name: 'Slovakia', code: 'SK' },
  { name: 'Slovenia', code: 'SI' },
  { name: 'Solomon Islands', code: 'SB' },
  { name: 'Somalia', code: 'SO' },
  { name: 'South Africa', code: 'ZA' },
  { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
  { name: 'Spain', code: 'ES' },
  { name: 'Sri Lanka', code: 'LK' },
  { name: 'Sudan', code: 'SD' },
  { name: 'Suriname', code: 'SR' },
  { name: 'Svalbard and Jan Mayen', code: 'SJ' },
  { name: 'Swaziland', code: 'SZ' },
  { name: 'Sweden', code: 'SE' },
  { name: 'Switzerland', code: 'CH' },
  { name: 'Syrian Arab Republic', code: 'SY' },
  { name: 'Taiwan, Province of China', code: 'TW' },
  { name: 'Tajikistan', code: 'TJ' },
  { name: 'Tanzania, United Republic of', code: 'TZ' },
  { name: 'Thailand', code: 'TH' },
  { name: 'Timor-Leste', code: 'TL' },
  { name: 'Togo', code: 'TG' },
  { name: 'Tokelau', code: 'TK' },
  { name: 'Tonga', code: 'TO' },
  { name: 'Trinidad and Tobago', code: 'TT' },
  { name: 'Tunisia', code: 'TN' },
  { name: 'Turkey', code: 'TR' },
  { name: 'Turkmenistan', code: 'TM' },
  { name: 'Turks and Caicos Islands', code: 'TC' },
  { name: 'Tuvalu', code: 'TV' },
  { name: 'Uganda', code: 'UG' },
  { name: 'Ukraine', code: 'UA' },
  { name: 'United Arab Emirates', code: 'AE' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'United States', code: 'US' },
  { name: 'United States Minor Outlying Islands', code: 'UM' },
  { name: 'Uruguay', code: 'UY' },
  { name: 'Uzbekistan', code: 'UZ' },
  { name: 'Vanuatu', code: 'VU' },
  { name: 'Venezuela', code: 'VE' },
  { name: 'Viet Nam', code: 'VN' },
  { name: 'Virgin Islands, British', code: 'VG' },
  { name: 'Virgin Islands, U.S.', code: 'VI' },
  { name: 'Wallis and Futuna', code: 'WF' },
  { name: 'Western Sahara', code: 'EH' },
  { name: 'Yemen', code: 'YE' },
  { name: 'Zambia', code: 'ZM' },
  { name: 'Zimbabwe', code: 'ZN' },
];

const bibleBooks = [
  { name: 'Genesis', chapters: 50, verses: 1533, testament: Testament.OLD, group: Group.PENTATEUCH },
  { name: 'Exodus', chapters: 40, verses: 1213, testament: Testament.OLD, group: Group.PENTATEUCH },
  { name: 'Leviticus', chapters: 27, verses: 859, testament: Testament.OLD, group: Group.PENTATEUCH },
  { name: 'Numbers', chapters: 36, verses: 1288, testament: Testament.OLD, group: Group.PENTATEUCH },
  { name: 'Deuteronomy', chapters: 34, verses: 959, testament: Testament.OLD, group: Group.PENTATEUCH },
  { name: 'Joshua', chapters: 24, verses: 658, testament: Testament.OLD, group: Group.HISTORICAL },
  { name: 'Judges', chapters: 21, verses: 618, testament: Testament.OLD, group: Group.HISTORICAL },
  { name: 'Ruth', chapters: 4, verses: 85, testament: Testament.OLD, group: Group.HISTORICAL },
  { name: '1 Samuel', chapters: 31, verses: 810, testament: Testament.OLD, group: Group.HISTORICAL },
  { name: '2 Samuel', chapters: 24, verses: 695, testament: Testament.OLD, group: Group.HISTORICAL },
  { name: '1 Kings', chapters: 22, verses: 816, testament: Testament.OLD, group: Group.HISTORICAL },
  { name: '2 Kings', chapters: 25, verses: 719, testament: Testament.OLD, group: Group.HISTORICAL },
  { name: '1 Chronicles', chapters: 29, verses: 942, testament: Testament.OLD, group: Group.HISTORICAL },
  { name: '2 Chronicles', chapters: 36, verses: 822, testament: Testament.OLD, group: Group.HISTORICAL },
  { name: 'Ezra', chapters: 10, verses: 280, testament: Testament.OLD, group: Group.HISTORICAL },
  { name: 'Nehemiah', chapters: 13, verses: 406, testament: Testament.OLD, group: Group.HISTORICAL },
  { name: 'Esther', chapters: 10, verses: 167, testament: Testament.OLD, group: Group.HISTORICAL },
  { name: 'Job', chapters: 42, verses: 1070, testament: Testament.OLD, group: Group.POETIC },
  { name: 'Psalms', chapters: 150, verses: 2461, testament: Testament.OLD, group: Group.PSALMS },
  { name: 'Proverbs', chapters: 31, verses: 915, testament: Testament.OLD, group: Group.POETIC },
  { name: 'Ecclesiastes', chapters: 12, verses: 222, testament: Testament.OLD, group: Group.POETIC },
  { name: 'Song of Solomon', chapters: 8, verses: 117, testament: Testament.OLD, group: Group.POETIC },
  { name: 'Isaiah', chapters: 66, verses: 1292, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Jeremiah', chapters: 52, verses: 1364, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'lamentations', chapters: 5, verses: 154, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Ezekiel', chapters: 48, verses: 1273, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Daniel', chapters: 12, verses: 357, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Hosea', chapters: 14, verses: 197, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Joel', chapters: 3, verses: 72, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Amos', chapters: 9, verses: 146, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Obadiah', chapters: 1, verses: 21, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Jonah', chapters: 4, verses: 48, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Micah', chapters: 7, verses: 105, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Nahum', chapters: 3, verses: 47, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Habakkuk', chapters: 3, verses: 56, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Zephaniah', chapters: 3, verses: 53, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Haggai', chapters: 2, verses: 38, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Zechariah', chapters: 14, verses: 211, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Malachi', chapters: 4, verses: 55, testament: Testament.OLD, group: Group.PROPHETS },
  { name: 'Matthew', chapters: 28, verses: 1071, testament: Testament.NEW, group: Group.GOSPELS },
  { name: 'Mark', chapters: 16, verses: 678, testament: Testament.NEW, group: Group.GOSPELS },
  { name: 'Luke', chapters: 24, verses: 1151, testament: Testament.NEW, group: Group.GOSPELS },
  { name: 'John', chapters: 21, verses: 879, testament: Testament.NEW, group: Group.GOSPELS },
  { name: 'Acts', chapters: 28, verses: 1007, testament: Testament.NEW, group: Group.GOSPELS },
  { name: 'Romans', chapters: 16, verses: 433, testament: Testament.NEW, group: Group.EPISTLES },
  { name: '1 Corinthians', chapters: 16, verses: 437, testament: Testament.NEW, group: Group.EPISTLES },
  { name: '2 Corinthians', chapters: 13, verses: 257, testament: Testament.NEW, group: Group.EPISTLES },
  { name: 'Galatians', chapters: 6, verses: 149, testament: Testament.NEW, group: Group.EPISTLES },
  { name: 'Ephesians', chapters: 6, verses: 155, testament: Testament.NEW, group: Group.EPISTLES },
  { name: 'Philippians', chapters: 4, verses: 104, testament: Testament.NEW, group: Group.EPISTLES },
  { name: 'Colossians', chapters: 4, verses: 95, testament: Testament.NEW, group: Group.EPISTLES },
  { name: '1 Thessalonians', chapters: 5, verses: 89, testament: Testament.NEW, group: Group.EPISTLES },
  { name: '2 Thessalonians', chapters: 3, verses: 47, testament: Testament.NEW, group: Group.EPISTLES },
  { name: '1 Timothy', chapters: 6, verses: 133, testament: Testament.NEW, group: Group.EPISTLES },
  { name: '2 Timothy', chapters: 4, verses: 83, testament: Testament.NEW, group: Group.EPISTLES },
  { name: 'Titus', chapters: 3, verses: 46, testament: Testament.NEW, group: Group.EPISTLES },
  { name: 'Philemon', chapters: 1, verses: 25, testament: Testament.NEW, group: Group.EPISTLES },
  { name: 'Hebrews', chapters: 13, verses: 303, testament: Testament.NEW, group: Group.EPISTLES },
  { name: 'James', chapters: 5, verses: 108, testament: Testament.NEW, group: Group.EPISTLES },
  { name: '1 Peter', chapters: 5, verses: 105, testament: Testament.NEW, group: Group.EPISTLES },
  { name: '2 Peter', chapters: 3, verses: 61, testament: Testament.NEW, group: Group.EPISTLES },
  { name: '1 John', chapters: 5, verses: 105, testament: Testament.NEW, group: Group.EPISTLES },
  { name: '2 John', chapters: 1, verses: 13, testament: Testament.NEW, group: Group.EPISTLES },
  { name: '3 John', chapters: 1, verses: 14, testament: Testament.NEW, group: Group.EPISTLES },
  { name: 'Jude', chapters: 1, verses: 25, testament: Testament.NEW, group: Group.EPISTLES },
  { name: 'Revelation', chapters: 22, verses: 404, testament: Testament.NEW, group: Group.EPISTLES },
];

const difficulties = [
  { name: 'popular' },
  { name: 'faith' },
  { name: 'new creation realities' },
  { name: 'christ' },
  { name: 'everlasting' },
  { name: 'eternal' },
];

const rankList = [
  { name: 'babe' },
  { name: 'child' },
  { name: 'young believer' },
  { name: 'charity' },
  { name: 'father' },
  { name: 'elder' },
];

async function main() {
  console.log(`Start seeding ...`);
  // seed countries
  for (const u of countryData) {
    const countries = await prisma.country.create({
      data: u,
    });
  }
  console.log(`Seeded Countries Table`);

  // seed bible books
  for (const book of bibleBooks) {
    const books = await prisma.book.create({
      data: book,
    });
  }
  console.log(`Seeded Books Table`);

  //seed game difficulties
  for (const difficulty of difficulties) {
    const query = await prisma.gameDifficulty.create({
      data: difficulty,
    });
  }
  console.log(`Seeded Game Difficulties Table`);

  //seed game ranks
  for (const rank of rankList) {
    const ranks = await prisma.rank.create({
      data: rank,
    });
  }
  console.log(`Seeded Ranks Table`);

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
