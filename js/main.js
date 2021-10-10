
let vega_lite_definition = "js/nyc_rideshare.vg.json"

// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
vegaEmbed('#nyc_rideshare', vega_lite_definition).then(result => { }).catch(console.error);
