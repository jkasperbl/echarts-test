import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TitleComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from './app.component';
import { ChartComponentModule } from './chart/chart.component';

echarts.use([
  CanvasRenderer,
  GridComponent,
  LegendComponent,
  LineChart,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent
])

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartComponentModule,
    NgxEchartsModule.forRoot({ echarts }),
    //NgxEchartsModule.forRoot({ echarts: () => import('echarts' as const) })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
