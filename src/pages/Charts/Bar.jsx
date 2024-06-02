import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DataLabel, ColumnSeries, Category } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis, barChartData } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components'
import { Tooltip } from '@syncfusion/ej2-react-popups';






const Bar = () => {

const { currentMode } = useStateContext();


    return (
<div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
        <ChartsHeader category="Bar" title="Olympic Medal Count - RIO" />
        <div className='w-full'>
    <ChartComponent
    id="charts"
    height="420px"
    primaryXAxis={barPrimaryXAxis}
    primaryYAxis={barPrimaryYAxis}
    chartArea={{ border: { width: 0 } }}
    tooltip={{ enable: true }}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    legendSettings={{ background: 'white' }}
    
    >
        <Inject services={[ ColumnSeries, Tooltip, Category, DataLabel, Legend, ]}/>

        <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
        </SeriesCollectionDirective>
    </ChartComponent>
    </div>
</div>
    )
}

export default Bar