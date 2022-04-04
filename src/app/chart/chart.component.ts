import { Component, ElementRef, Input, NgModule, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { registerTheme } from 'echarts/core';
import { EChartsOption } from 'echarts/types/dist/echarts';

type ChartInitOptions = {
    renderer?: string
};

export interface ChartRenderingOptions {
    height?: number;
}

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit, OnChanges {
    @ViewChild('chart') chartElement!: ElementRef<HTMLDivElement>;

    @Input() data?: EChartsOption;
    @Input() rendering?: ChartRenderingOptions;

    theme = 'TestTheme';

    initOptions: ChartInitOptions = { renderer: 'canvas' };

    height?: string;

    static initialized = false;
    static colorPalette = [
        '#119FF7',
        '#FF6A33',
        '#6666FF',
        '#D6F025',
        '#2286E6',
        '#FFC14C',
        '#B0DFFC',
        '#FF875C',
        '#A9A8FF',
        '#E5F679',
        '#63AAED',
        '#F0C474'
    ];

    static negativeBackgroundColor = '#fee5e5';
    static negativeLineColor = '#f84c4c';
    static positiveBackgroundColor = '#F8FCD9';
    static positiveLineColor = '#B8D20F';

    ngOnInit(): void {
        if (!ChartComponent.initialized) {
            ChartComponent.initialized = true;

            this.registerTheme();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setStyles();
    }

    private setStyles(): void {
        if (!this.rendering)
            return;

        const height = this.rendering?.height ?? 500;

        if (typeof height == 'number')
            this.height = `${height}px`;
        else
            this.height = height;
    }

    private registerTheme(): void {
        registerTheme('TestTheme', {
            color: ChartComponent.colorPalette,
            backgroundColor: 'rgba(255, 255, 255,0)',
            textStyle: { fontFamily: 'Source Sans Pro' },
            title: {
                textStyle: { color: '#152637' },
                subtextStyle: { color: '#434751' }
            },
            line: {
                itemStyle: { borderWidth: 1 },
                lineStyle: { width: 3 },
                symbolSize: 6,
                symbol: 'emptyCircle',
                smooth: false
            },
            radar: {
                itemStyle: { borderWidth: 0 },
                lineStyle: { width: 3 },
                symbolSize: 6,
                symbol: 'emptyCircle',
                smooth: false
            },
            bar: {
                itemStyle: {
                    barBorderWidth: 0,
                    barBorderColor: '#bec2d0'
                }
            },
            pie: {
                itemStyle: {
                    borderWidth: 0,
                    borderColor: '#bec2d0'
                }
            },
            scatter: {
                itemStyle: {
                    borderWidth: 0,
                    borderColor: '#bec2d0'
                }
            },
            boxplot: {
                itemStyle: {
                    borderWidth: 0,
                    borderColor: '#bec2d0'
                }
            },
            parallel: {
                itemStyle: {
                    borderWidth: 0,
                    borderColor: '#bec2d0'
                }
            },
            sankey: {
                itemStyle: {
                    borderWidth: 0,
                    borderColor: '#bec2d0'
                }
            },
            funnel: {
                itemStyle: {
                    borderWidth: 0,
                    borderColor: '#bec2d0'
                }
            },
            gauge: {
                itemStyle: {
                    borderWidth: 0,
                    borderColor: '#bec2d0'
                }
            },
            candlestick: {
                itemStyle: {
                    color: '#e5f9e8',
                    color0: '#47b262',
                    borderColor: '#4cd763',
                    borderColor0: '#f84c4c',
                    borderWidth: 1
                }
            },
            graph: {
                itemStyle: {
                    borderWidth: 0,
                    borderColor: '#bec2d0'
                },
                lineStyle: {
                    width: 3,
                    color: '#bec2d0'
                },
                symbolSize: 6,
                symbol: 'emptyCircle',
                smooth: false,
                color: ['#119ff7', '#bec2d0', '#6666ff', '#ffc14c', '#b0dffc', '#ebf7fe'],
                label: { color: '#ffffff' }
            },
            map: {
                itemStyle: {
                    normal: {
                        areaColor: '#eee',
                        borderColor: '#444',
                        borderWidth: 0.5
                    },
                    emphasis: {
                        areaColor: 'rgba(255,215,0,0.8)',
                        borderColor: '#444',
                        borderWidth: 1
                    }
                },
                label: {
                    normal: { textStyle: { color: '#000' } },
                    emphasis: { textStyle: { color: 'rgb(100,0,0)' } }
                }
            },
            geo: {
                itemStyle: {
                    normal: {
                        areaColor: '#eee',
                        borderColor: '#444',
                        borderWidth: 0.5
                    },
                    emphasis: {
                        areaColor: 'rgba(255,215,0,0.8)',
                        borderColor: '#444',
                        borderWidth: 1
                    }
                },
                label: {
                    normal: { textStyle: { color: '#000' } },
                    emphasis: { textStyle: { color: 'rgb(100,0,0)' } }
                }
            },
            categoryAxis: {
                axisLine: {
                    show: true,
                    lineStyle: { color: '#bec2d0' }
                },
                axisTick: {
                    show: true,
                    lineStyle: { color: '#bec2d0' }
                },
                axisLabel: {
                    show: true,
                    textStyle: { color: '#737783' }
                },
                splitLine: {
                    show: false,
                    lineStyle: { color: ['#00ff00'] }
                },
                splitArea: {
                    show: false,
                    areaStyle: { color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'] }
                }
            },
            valueAxis: {
                axisLine: {
                    show: false,
                    lineStyle: { color: '#6E7079' }
                },
                axisTick: {
                    show: false,
                    lineStyle: { color: '#6E7079' }
                },
                axisLabel: {
                    show: true,
                    textStyle: { color: '#737783' }
                },
                splitLine: {
                    show: true,
                    lineStyle: { color: ['#f5f7fa'] }
                },
                splitArea: {
                    show: false,
                    areaStyle: { color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'] }
                }
            },
            logAxis: {
                axisLine: {
                    show: false,
                    lineStyle: { color: '#6E7079' }
                },
                axisTick: {
                    show: false,
                    lineStyle: { color: '#6E7079' }
                },
                axisLabel: {
                    show: true,
                    textStyle: { color: '#737783' }
                },
                splitLine: {
                    show: true,
                    lineStyle: { color: ['#f5f7fa'] }
                },
                splitArea: {
                    show: false,
                    areaStyle: { color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'] }
                }
            },
            timeAxis: {
                axisLine: {
                    show: true,
                    lineStyle: { color: '#bec2d0' }
                },
                axisTick: {
                    show: true,
                    lineStyle: { color: '#bec2d0' }
                },
                axisLabel: {
                    show: true,
                    textStyle: { color: '#737783' }
                },
                splitLine: {
                    show: false,
                    lineStyle: { color: ['#E0E6F1'] }
                },
                splitArea: {
                    show: false,
                    areaStyle: { color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'] }
                }
            },
            toolbox: {
                iconStyle: {
                    normal: { borderColor: '#737783' },
                    emphasis: { borderColor: '#119ff7' }
                }
            },
            legend: { textStyle: { color: '#434751' } },
            tooltip: {
                axisPointer: {
                    lineStyle: {
                        color: '#119ff7',
                        width: 1
                    },
                    crossStyle: {
                        color: '#119ff7',
                        width: 1
                    }
                },
                confine: true,
                padding: 12,
                textStyle: {
                    fontFamily: '\'Source Sans Pro\', sans-serif',
                    fontSize: 14
                }
            },
            timeline: {
                lineStyle: {
                    color: '#bec2d0',
                    width: 2
                },
                itemStyle: {
                    normal: {
                        color: '#bec2d0',
                        borderWidth: 1
                    },
                    emphasis: { color: '#119ff7' }
                },
                controlStyle: {
                    normal: {
                        color: '#bec2d0',
                        borderColor: '#bec2d0',
                        borderWidth: 1
                    },
                    emphasis: {
                        color: '#bec2d0',
                        borderColor: '#bec2d0',
                        borderWidth: 1
                    }
                },
                checkpointStyle: {
                    color: '#119ff7',
                    borderColor: '#ffffff'
                },
                label: {
                    normal: { textStyle: { color: '#737783' } },
                    emphasis: { textStyle: { color: '#737783' } }
                }
            },
            visualMap: { color: ['#4cd763', '#ffc14c', '#f84c4c'] },
            dataZoom: {
                handleSize: 'undefined%',
                textStyle: {}
            },
            markPoint: {
                label: { color: '#ffffff' },
                emphasis: { label: { color: '#ffffff' } }
            }
        });
    }
}

@NgModule({
    imports: [
        CommonModule,
        NgxEchartsModule.forChild()
    ],
    declarations: [ChartComponent],
    exports: [ChartComponent]
})
export class ChartComponentModule { }
