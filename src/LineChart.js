import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Line,
    mixins: [reactiveProp],
    props: {
        chartdata: {
            type: Object,
            default: null
        },
        options: {
            tooltips: {
                mode: "label"
            }
        }
    },
    mounted () {
        this.renderChart(this.chartData, this.options)
    }
}