/**
 * Created by charlie on 4/18/17.
 */

const getData = (url) => {
    switch (url) {
        case './address-list.json':
            return [{
                'firstName': 'Lamar',
                'lastName': 'Alexander',
                'street': '455 Dirksen Senate Office Building',
                'city': 'Washington DC',
                'state': 'TN',
                'zip': ' 20510',
                'phone': '202-224-4944',
                'website': 'https://www.alexander.senate.gov/public',
                'email': '',
                'contact': 'http://www.alexander.senate.gov/public/index.cfm?p=Email'
            },
            {
                'firstName': 'Roger',
                'lastName': 'Wicker',
                'street': '555 Dirksen Senate Office Building',
                'city': 'Washington DC',
                'state': 'MS',
                'zip': ' 20510',
                'phone': '202-224-6253',
                'website': 'https://www.wicker.senate.gov',
                'email': '',
                'contact': 'https://www.wicker.senate.gov/public/index.cfm/contact'
            },
            {
                'firstName': 'Timothy',
                'lastName': 'Kaine',
                'street': '231 Russell Senate Office Building',
                'city': 'Washington DC',
                'state': 'VA',
                'zip': ' 20510',
                'phone': '202-224-4024',
                'website': 'https://www.kaine.senate.gov',
                'email': '',
                'contact': 'https://www.kaine.senate.gov/contact'
            }];

        default:
            return [];
    }
};

export default getData;