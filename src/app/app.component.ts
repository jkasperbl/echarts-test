import { Component } from '@angular/core';
import { EChartsOption } from 'echarts/types/dist/echarts';
import { ChartComponent } from './chart/chart.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    chartData: EChartsOption = {
        xAxis: {
            type: 'time',
            boundaryGap: false,
            show: false
        },
        yAxis: {
            type: 'value',
            boundaryGap: false,
            show: false
        },
        dataset: {
            source: [
                { date: '2020-01-24', visits: 36 },
                { date: '2020-01-25', visits: 30 },
                { date: '2020-01-26', visits: 27 },
                { date: '2020-01-27', visits: 32 },
                { date: '2020-01-28', visits: 26 },
                { date: '2020-01-29', visits: 37 },
                { date: '2020-01-30', visits: 26 },
                { date: '2020-01-31', visits: 19 },
                { date: '2020-02-01', visits: 24 },
                { date: '2020-02-03', visits: 31 },
                { date: '2020-02-04', visits: 28 },
                { date: '2020-02-05', visits: 33 }
            ]
        },
        series: {
            type: 'line',
            symbol: 'none',
            color: ChartComponent.positiveLineColor,
            areaStyle: {
                color: ChartComponent.positiveBackgroundColor,
                opacity: 1
            },
            silent: true
        },
        grid: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        animation: false
    };
}
