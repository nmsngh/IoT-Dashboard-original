'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type Props = {
  series: ApexAxisChartSeries;
};

export default function ChartEnergyConsumption({ series }: Props) {
  const [zoomRage, setZoomRage] = useState<
    undefined | { min: number; max: number }
  >(undefined);

  const onZoom = (chartContext: any, { xaxis }: any) => {
    setZoomRage({ min: xaxis.min, max: xaxis.max });
  };

  return (
    <div className="rounded-2xl border p-4 shadow-lg">
      <div className="text-[20px] font-bold">Energy consumption</div>
      <Chart
        type="line"
        height={227}
        series={series}
        options={{
          chart: {
            id: 'realtime',
            type: 'line',
            animations: {
              enabled: true,
              dynamicAnimation: {
                speed: 800,
                enabled: true,
              },
            },
            toolbar: {
              show: false,
            },
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true,
            },
            events: {
              zoomed: onZoom,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth',
          },
          xaxis: {
            min: zoomRage?.min,
            max: zoomRage?.max,
            type: 'datetime',
            labels: {
              datetimeFormatter: {
                year: 'yyyy',
                month: "MMM 'yy",
                day: 'dd MMM',
                hour: 'HH:mm',
                minute: 'HH:mm:ss',
                second: 'hh:mm:ss',
              },
              datetimeUTC: false,
            },
            tooltip: {
              enabled: true,
              formatter: (datetime: string) => {
                return dayjs(datetime).format('HH:mm:ss');
              },
            },
          },
          yaxis: {
            // min,
            // max,
            title: {
              text: 'Energy Consumption (kWh)',
            },
            tooltip: {
              enabled: true,
            },
          },
          tooltip: {
            enabled: true,
            x: {
              show: true,
              formatter: (datetime) => {
                return dayjs(datetime).format('HH:mm:ss');
              },
            },
          },
          legend: {
            show: true,
            onItemClick: {
              toggleDataSeries: true,
            },
          },
        }}
      />
      <div className="mt-6 flex flex-col">
        {series.map((s) => (
          <div key={s.name} className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-4">
              <div
                className={clsx('h-3 w-3 rounded-full', `bg-[${s.color}]`)}
              ></div>
              <div>{s.name}</div>
            </div>
            <div>
              {
                (s.data[s.data.length - 1] as { x: string; y: string | number })
                  ?.y
              }
              kWh
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
