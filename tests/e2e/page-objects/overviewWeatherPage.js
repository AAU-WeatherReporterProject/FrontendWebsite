module.exports = {
    url: '/overviewWeather',
    commands: [],

    // A page object can have elements
    elements: {
        appContainer: '#app'
    },

    // Or a page objects can also have sections
    sections: {
        app: {
            selector: '#app',


            // - a page object section can also have sub-sections
            // - elements or sub-sections located here are retrieved using the "app" section as the base
            sections: {

                weatheroutput: {

                    selector: 'div.weather-output',

                    elements: {
                        locationbox: {
                            selector: 'div.location-box',
                            elements:{
                                showBoxesLocation:{
                                    selector: 'div',
                                    index:0
                                }
                            }
                        },
                    }
                }
            }
        }
    }
}
