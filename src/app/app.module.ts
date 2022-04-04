import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from './app.component';
import { ChartComponentModule } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts' as const) }),
    ChartComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
