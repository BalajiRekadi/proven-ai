import databaseLogo from '../assets/database.png';

const ROUTES = [
    {
        label: 'Master Data',
        logo: databaseLogo,
        children: [{
            label: 'Create',
            name: 'create'
        },
        {
            label: 'Spec Details',
            name: 'spec'
        },
        {
            label: 'Exported',
            name: 'exported'
        }]

    }
];

const THEME = {
        primaryColor: "proven",
        colors: {
          proven: [
            "#f0f1f9",
            "#dedfed",
            "#b9bcdb",
            "#9398cc",
            "#7279be",
            "#5e65b5",
            "#525bb2",
            "#444b9d",
            "#3b428d",
            "#31397d",
          ],
        },
      
};

export {ROUTES, THEME}