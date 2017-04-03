module.exports = [
    { path: '/', component: require('./components/pages/HomeComponent.vue') },
    { path: '/get-to-know-us', component: require('./components/pages/GetToKnowUsComponent.vue') },
    { path: '/call-email-us', component: require('./components/pages/CallEmailUsComponent.vue') },
    { path: '/faq', component: require('./components/pages/FAQComponent.vue') },

    { path: '/the-best-technology', component: require('./components/pages/TheBestTechnologyComponent.vue') },
    { path: '/the-best-technology/operating-microscope', component: require('./components/pages/TheBestTechnology/OperatingMicroscopeComponent.vue') },
    { path: '/the-best-technology/intraoral-camera', component: require('./components/pages/TheBestTechnology/IntraoralCameraComponent.vue') },
    { path: '/the-best-technology/digital-opg-and-cone-beam-ct', component: require('./components/pages/TheBestTechnology/DigitalOPGAndConeBeamCTComponent.vue') },
    { path: '/the-best-technology/digital-intra-oral-x-rays', component: require('./components/pages/TheBestTechnology/DigitalIntraOralXraysComponent.vue') },
    { path: '/the-best-technology/ozone', component: require('./components/pages/TheBestTechnology/OzoneComponent.vue') },
    { path: '/the-best-technology/air-abrasion', component: require('./components/pages/TheBestTechnology/AirAbrasionComponent.vue') },
    { path: '/the-best-technology/sterilization-and-infection-control', component: require('./components/pages/TheBestTechnology/Sterilization&InfectionControlComponent.vue') },
    { path: '/the-best-technology/laser', component: require('./components/pages/TheBestTechnology/LaserComponent.vue') },
    { path: '/the-best-technology/duwls', component: require('./components/pages/TheBestTechnology/DUWLsComponent.vue') },


    { path: '/you-are-the-boss', component: require('./components/pages/YouAreTheBossComponent.vue') },
    { path: '/how-can-we-help-you', component: require('./components/pages/HowCanWeHelpYouComponent.vue') },
    { path: '/tips-demos-explanations', component: require('./components/pages/TipsDemosExplanationsComponent.vue') },
];