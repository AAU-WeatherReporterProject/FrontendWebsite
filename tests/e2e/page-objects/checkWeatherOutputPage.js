module.exports = {
    url: '/checkWeather',
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

                searchbox: {
                    selector: 'div.search-box',

                    elements:{
                        searchbar:{
                            selector:'input.search-bar'
                        }
                    }
                },

                weatheroutput: {
                    // the equivalent css selector for the "instructions" sub-section would be:
                    //  '#app div.hello'
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
                        weatherbox: {
                            selector: 'div.weather-box',
                            elements:{
                                showBoxesWeather:{
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
