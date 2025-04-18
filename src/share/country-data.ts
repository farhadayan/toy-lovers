export interface Country {
  code: string;
  name: string;
  number: string;
}

export const Countries: Country[] = [
  { code: 'AFG', name: 'Afghanistan', number: '004' },
  { code: 'ALB', name: 'Albania', number: '008' },
  { code: 'DZA', name: 'Algeria', number: '012' },
  { code: 'ASM', name: 'American Samoa', number: '016' },
  { code: 'AND', name: 'Andorra', number: '020' },
  { code: 'AGO', name: 'Angola', number: '024' },
  { code: 'AIA', name: 'Anguilla', number: '660' },
  { code: 'ATA', name: 'Antarctica', number: '010' },
  { code: 'ATG', name: 'Antigua and Barbuda', number: '028' },
  { code: 'ARG', name: 'Argentina', number: '032' },
  { code: 'ARM', name: 'Armenia', number: '051' },
  { code: 'ABW', name: 'Aruba', number: '533' },
  { code: 'AUS', name: 'Australia', number: '036' },
  { code: 'AUT', name: 'Austria', number: '040' },
  { code: 'AZE', name: 'Azerbaijan', number: '031' },
  { code: 'BHS', name: 'Bahamas (the)', number: '044' },
  { code: 'BHR', name: 'Bahrain', number: '048' },
  { code: 'BGD', name: 'Bangladesh', number: '050' },
  { code: 'BRB', name: 'Barbados', number: '052' },
  { code: 'BLR', name: 'Belarus', number: '112' },
  { code: 'BEL', name: 'Belgium', number: '056' },
  { code: 'BLZ', name: 'Belize', number: '084' },
  { code: 'BEN', name: 'Benin', number: '204' },
  { code: 'BMU', name: 'Bermuda', number: '060' },
  { code: 'BTN', name: 'Bhutan', number: '064' },
  {
    code: 'BOL',
    name: 'Bolivia (Plurinational State of)',
    number: '068',
  },
  {
    code: 'BES',
    name: 'Bonaire, Sint Eustatius and Saba',
    number: '535',
  },
  { code: 'BIH', name: 'Bosnia and Herzegovina', number: '070' },
  { code: 'BWA', name: 'Botswana', number: '072' },
  { code: 'BVT', name: 'Bouvet Island', number: '074' },
  { code: 'BRA', name: 'Brazil', number: '076' },
  {
    code: 'IOT',
    name: 'British Indian Ocean Territory (the)',
    number: '086',
  },
  { code: 'BRN', name: 'Brunei Darussalam', number: '096' },
  { code: 'BGR', name: 'Bulgaria', number: '100' },
  { code: 'BFA', name: 'Burkina Faso', number: '854' },
  { code: 'BDI', name: 'Burundi', number: '108' },
  { code: 'CPV', name: 'Cabo Verde', number: '132' },
  { code: 'KHM', name: 'Cambodia', number: '116' },
  { code: 'CMR', name: 'Cameroon', number: '120' },
  { code: 'CAN', name: 'Canada', number: '124' },
  { code: 'CYM', name: 'Cayman Islands (the)', number: '136' },
  {
    code: 'CAF',
    name: 'Central African Republic (the)',
    number: '140',
  },
  { code: 'TCD', name: 'Chad', number: '148' },
  { code: 'CHL', name: 'Chile', number: '152' },
  { code: 'CHN', name: 'China', number: '156' },
  { code: 'CXR', name: 'Christmas Island', number: '162' },
  {
    code: 'CCK',
    name: 'Cocos (Keeling) Islands (the)',
    number: '166',
  },
  { code: 'COL', name: 'Colombia', number: '170' },
  { code: 'COM', name: 'Comoros (the)', number: '174' },
  {
    code: 'COD',
    name: 'Congo (the Democratic Republic of the)',
    number: '180',
  },
  { code: 'COG', name: 'Congo (the)', number: '178' },
  { code: 'COK', name: 'Cook Islands (the)', number: '184' },
  { code: 'CRI', name: 'Costa Rica', number: '188' },
  { code: 'HRV', name: 'Croatia', number: '191' },
  { code: 'CUB', name: 'Cuba', number: '192' },
  { code: 'CUW', name: 'Curaçao', number: '531' },
  { code: 'CYP', name: 'Cyprus', number: '196' },
  { code: 'CZE', name: 'Czechia', number: '203' },
  { code: 'CIV', name: "Côte d'Ivoire", number: '384' },
  { code: 'DNK', name: 'Denmark', number: '208' },
  { code: 'DJI', name: 'Djibouti', number: '262' },
  { code: 'DMA', name: 'Dominica', number: '212' },
  {
    code: 'DOM',
    name: 'Dominican Republic (the)',
    number: '214',
  },
  { code: 'ECU', name: 'Ecuador', number: '218' },
  { code: 'EGY', name: 'Egypt', number: '818' },
  { code: 'SLV', name: 'El Salvador', number: '222' },
  { code: 'GNQ', name: 'Equatorial Guinea', number: '226' },
  { code: 'ERI', name: 'Eritrea', number: '232' },
  { code: 'EST', name: 'Estonia', number: '233' },
  { code: 'SWZ', name: 'Eswatini', number: '748' },
  { code: 'ETH', name: 'Ethiopia', number: '231' },
  {
    code: 'FLK',
    name: 'Falkland Islands (the) [Malvinas]',
    number: '238',
  },
  { code: 'FRO', name: 'Faroe Islands (the)', number: '234' },
  { code: 'FJI', name: 'Fiji', number: '242' },
  { code: 'FIN', name: 'Finland', number: '246' },
  { code: 'FRA', name: 'France', number: '250' },
  { code: 'GUF', name: 'French Guiana', number: '254' },
  { code: 'PYF', name: 'French Polynesia', number: '258' },
  {
    code: 'ATF',
    name: 'French Southern Territories (the)',
    number: '260',
  },
  { code: 'GAB', name: 'Gabon', number: '266' },
  { code: 'GMB', name: 'Gambia (the)', number: '270' },
  { code: 'GEO', name: 'Georgia', number: '268' },
  { code: 'DEU', name: 'Germany', number: '276' },
  { code: 'GHA', name: 'Ghana', number: '288' },
  { code: 'GIB', name: 'Gibraltar', number: '292' },
  { code: 'GRC', name: 'Greece', number: '300' },
  { code: 'GRL', name: 'Greenland', number: '304' },
  { code: 'GRD', name: 'Grenada', number: '308' },
  { code: 'GLP', name: 'Guadeloupe', number: '312' },
  { code: 'GUM', name: 'Guam', number: '316' },
  { code: 'GTM', name: 'Guatemala', number: '320' },
  { code: 'GGY', name: 'Guernsey', number: '831' },
  { code: 'GIN', name: 'Guinea', number: '324' },
  { code: 'GNB', name: 'Guinea-Bissau', number: '624' },
  { code: 'GUY', name: 'Guyana', number: '328' },
  { code: 'HTI', name: 'Haiti', number: '332' },
  {
    code: 'HMD',
    name: 'Heard Island and McDonald Islands',
    number: '334',
  },
  { code: 'VAT', name: 'Holy See (the)', number: '336' },
  { code: 'HND', name: 'Honduras', number: '340' },
  { code: 'HKG', name: 'Hong Kong', number: '344' },
  { code: 'HUN', name: 'Hungary', number: '348' },
  { code: 'ISL', name: 'Iceland', number: '352' },
  { code: 'IND', name: 'India', number: '356' },
  { code: 'IDN', name: 'Indonesia', number: '360' },
  {
    code: 'IRN',
    name: 'Iran (Islamic Republic of)',
    number: '364',
  },
  { code: 'IRQ', name: 'Iraq', number: '368' },
  { code: 'IRL', name: 'Ireland', number: '372' },
  { code: 'IMN', name: 'Isle of Man', number: '833' },
  { code: 'ISR', name: 'Israel', number: '376' },
  { code: 'ITA', name: 'Italy', number: '380' },
  { code: 'JAM', name: 'Jamaica', number: '388' },
  { code: 'JPN', name: 'Japan', number: '392' },
  { code: 'JEY', name: 'Jersey', number: '832' },
  { code: 'JOR', name: 'Jordan', number: '400' },
  { code: 'KAZ', name: 'Kazakhstan', number: '398' },
  { code: 'KEN', name: 'Kenya', number: '404' },
  { code: 'KIR', name: 'Kiribati', number: '296' },
  {
    code: 'PRK',
    name: "Korea (the Democratic People's Republic of)",
    number: '408',
  },
  {
    code: 'KOR',
    name: 'Korea (the Republic of)',
    number: '410',
  },
  { code: 'KWT', name: 'Kuwait', number: '414' },
  { code: 'KGZ', name: 'Kyrgyzstan', number: '417' },
  {
    code: 'LAO',
    name: "Lao People's Democratic Republic (the)",
    number: '418',
  },
  { code: 'LVA', name: 'Latvia', number: '428' },
  { code: 'LBN', name: 'Lebanon', number: '422' },
  { code: 'LSO', name: 'Lesotho', number: '426' },
  { code: 'LBR', name: 'Liberia', number: '430' },
  { code: 'LBY', name: 'Libya', number: '434' },
  { code: 'LIE', name: 'Liechtenstein', number: '438' },
  { code: 'LTU', name: 'Lithuania', number: '440' },
  { code: 'LUX', name: 'Luxembourg', number: '442' },
  { code: 'MAC', name: 'Macao', number: '446' },
  { code: 'MDG', name: 'Madagascar', number: '450' },
  { code: 'MWI', name: 'Malawi', number: '454' },
  { code: 'MYS', name: 'Malaysia', number: '458' },
  { code: 'MDV', name: 'Maldives', number: '462' },
  { code: 'MLI', name: 'Mali', number: '466' },
  { code: 'MLT', name: 'Malta', number: '470' },
  { code: 'MHL', name: 'Marshall Islands (the)', number: '584' },
  { code: 'MTQ', name: 'Martinique', number: '474' },
  { code: 'MRT', name: 'Mauritania', number: '478' },
  { code: 'MUS', name: 'Mauritius', number: '480' },
  { code: 'MYT', name: 'Mayotte', number: '175' },
  { code: 'MEX', name: 'Mexico', number: '484' },
  {
    code: 'FSM',
    name: 'Micronesia (Federated States of)',
    number: '583',
  },
  {
    code: 'MDA',
    name: 'Moldova (the Republic of)',
    number: '498',
  },
  { code: 'MCO', name: 'Monaco', number: '492' },
  { code: 'MNG', name: 'Mongolia', number: '496' },
  { code: 'MNE', name: 'Montenegro', number: '499' },
  { code: 'MSR', name: 'Montserrat', number: '500' },
  { code: 'MAR', name: 'Morocco', number: '504' },
  { code: 'MOZ', name: 'Mozambique', number: '508' },
  { code: 'MMR', name: 'Myanmar', number: '104' },
  { code: 'NAM', name: 'Namibia', number: '516' },
  { code: 'NRU', name: 'Nauru', number: '520' },
  { code: 'NPL', name: 'Nepal', number: '524' },
  { code: 'NLD', name: 'Netherlands (the)', number: '528' },
  { code: 'NCL', name: 'New Caledonia', number: '540' },
  { code: 'NZL', name: 'New Zealand', number: '554' },
  { code: 'NIC', name: 'Nicaragua', number: '558' },
  { code: 'NER', name: 'Niger (the)', number: '562' },
  { code: 'NGA', name: 'Nigeria', number: '566' },
  { code: 'NIU', name: 'Niue', number: '570' },
  { code: 'NFK', name: 'Norfolk Island', number: '574' },
  {
    code: 'MNP',
    name: 'Northern Mariana Islands (the)',
    number: '580',
  },
  { code: 'NOR', name: 'Norway', number: '578' },
  { code: 'OMN', name: 'Oman', number: '512' },
  { code: 'PAK', name: 'Pakistan', number: '586' },
  { code: 'PLW', name: 'Palau', number: '585' },
  { code: 'PSE', name: 'Palestine, State of', number: '275' },
  { code: 'PAN', name: 'Panama', number: '591' },
  { code: 'PNG', name: 'Papua New Guinea', number: '598' },
  { code: 'PRY', name: 'Paraguay', number: '600' },
  { code: 'PER', name: 'Peru', number: '604' },
  { code: 'PHL', name: 'Philippines (the)', number: '608' },
  { code: 'PCN', name: 'Pitcairn', number: '612' },
  { code: 'POL', name: 'Poland', number: '616' },
  { code: 'PRT', name: 'Portugal', number: '620' },
  { code: 'PRI', name: 'Puerto Rico', number: '630' },
  { code: 'QAT', name: 'Qatar', number: '634' },
  {
    code: 'MKD',
    name: 'Republic of North Macedonia',
    number: '807',
  },
  { code: 'ROU', name: 'Romania', number: '642' },
  {
    code: 'RUS',
    name: 'Russian Federation (the)',
    number: '643',
  },
  { code: 'RWA', name: 'Rwanda', number: '646' },
  { code: 'REU', name: 'Réunion', number: '638' },
  { code: 'BLM', name: 'Saint Barthélemy', number: '652' },
  {
    code: 'SHN',
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    number: '654',
  },
  { code: 'KNA', name: 'Saint Kitts and Nevis', number: '659' },
  { code: 'LCA', name: 'Saint Lucia', number: '662' },
  {
    code: 'MAF',
    name: 'Saint Martin (French part)',
    number: '663',
  },
  {
    code: 'SPM',
    name: 'Saint Pierre and Miquelon',
    number: '666',
  },
  {
    code: 'VCT',
    name: 'Saint Vincent and the Grenadines',
    number: '670',
  },
  { code: 'WSM', name: 'Samoa', number: '882' },
  { code: 'SMR', name: 'San Marino', number: '674' },
  { code: 'STP', name: 'Sao Tome and Principe', number: '678' },
  { code: 'SAU', name: 'Saudi Arabia', number: '682' },
  { code: 'SEN', name: 'Senegal', number: '686' },
  { code: 'SRB', name: 'Serbia', number: '688' },
  { code: 'SYC', name: 'Seychelles', number: '690' },
  { code: 'SLE', name: 'Sierra Leone', number: '694' },
  { code: 'SGP', name: 'Singapore', number: '702' },
  {
    code: 'SXM',
    name: 'Sint Maarten (Dutch part)',
    number: '534',
  },
  { code: 'SVK', name: 'Slovakia', number: '703' },
  { code: 'SVN', name: 'Slovenia', number: '705' },
  { code: 'SLB', name: 'Solomon Islands', number: '090' },
  { code: 'SOM', name: 'Somalia', number: '706' },
  { code: 'ZAF', name: 'South Africa', number: '710' },
  {
    code: 'SGS',
    name: 'South Georgia and the South Sandwich Islands',
    number: '239',
  },
  { code: 'SSD', name: 'South Sudan', number: '728' },
  { code: 'ESP', name: 'Spain', number: '724' },
  { code: 'LKA', name: 'Sri Lanka', number: '144' },
  { code: 'SDN', name: 'Sudan (the)', number: '729' },
  { code: 'SUR', name: 'Suriname', number: '740' },
  { code: 'SJM', name: 'Svalbard and Jan Mayen', number: '744' },
  { code: 'SWE', name: 'Sweden', number: '752' },
  { code: 'CHE', name: 'Switzerland', number: '756' },
  { code: 'SYR', name: 'Syrian Arab Republic', number: '760' },
  { code: 'TWN', name: 'Taiwan', number: '158' },
  { code: 'TJK', name: 'Tajikistan', number: '762' },
  {
    code: 'TZA',
    name: 'Tanzania, United Republic of',
    number: '834',
  },
  { code: 'THA', name: 'Thailand', number: '764' },
  { code: 'TLS', name: 'Timor-Leste', number: '626' },
  { code: 'TGO', name: 'Togo', number: '768' },
  { code: 'TKL', name: 'Tokelau', number: '772' },
  { code: 'TON', name: 'Tonga', number: '776' },
  { code: 'TTO', name: 'Trinidad and Tobago', number: '780' },
  { code: 'TUN', name: 'Tunisia', number: '788' },
  { code: 'TUR', name: 'Turkey', number: '792' },
  { code: 'TKM', name: 'Turkmenistan', number: '795' },
  {
    code: 'TCA',
    name: 'Turks and Caicos Islands (the)',
    number: '796',
  },
  { code: 'TUV', name: 'Tuvalu', number: '798' },
  { code: 'UGA', name: 'Uganda', number: '800' },
  { code: 'UKR', name: 'Ukraine', number: '804' },
  {
    code: 'ARE',
    name: 'United Arab Emirates (the)',
    number: '784',
  },
  {
    code: 'GBR',
    name: 'United Kingdom of Great Britain and Northern Ireland (the)',
    number: '826',
  },
  {
    code: 'UMI',
    name: 'United States Minor Outlying Islands (the)',
    number: '581',
  },
  {
    code: 'USA',
    name: 'United States of America (the)',
    number: '840',
  },
  { code: 'URY', name: 'Uruguay', number: '858' },
  { code: 'UZB', name: 'Uzbekistan', number: '860' },
  { code: 'VUT', name: 'Vanuatu', number: '548' },
  {
    code: 'VEN',
    name: 'Venezuela (Bolivarian Republic of)',
    number: '862',
  },
  { code: 'VNM', name: 'Viet Nam', number: '704' },
  {
    code: 'VGB',
    name: 'Virgin Islands (British)',
    number: '092',
  },
  { code: 'VIR', name: 'Virgin Islands (U.S.)', number: '850' },
  { code: 'WLF', name: 'Wallis and Futuna', number: '876' },
  { code: 'ESH', name: 'Western Sahara', number: '732' },
  { code: 'YEM', name: 'Yemen', number: '887' },
  { code: 'ZMB', name: 'Zambia', number: '894' },
  { code: 'ZWE', name: 'Zimbabwe', number: '716' },
  { code: 'ALA', name: 'Åland Islands', number: '248' },
];
