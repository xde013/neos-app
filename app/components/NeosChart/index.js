/**
 *
 * NeosChart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';
import LoadingIndicator from '../LoadingIndicator';

function NeosChart({ neos }) {
  return (
    <Chart
      width="100%"
      height="65vh"
      chartType="BarChart"
      loader={<LoadingIndicator />}
      data={[
        ['Neo', 'Min Estimated Diameter (km)', 'Max Estimated Diameter (km)'],
        ...neos,
      ]}
      options={{
        title: 'NEOs diameters',
        hAxis: {
          title: 'NEOs diameters',
          gridlines: {
            count: 10,
          },
          viewWindow: { min: 0 },
        },
        vAxis: {
          viewWindowMode: 'pretty',
          title: 'NEOs',
          slantedText: true,
          maxTextLines: 1,
          direction: 1,
          textPosition: 'out',
          textStyle: {
            fontSize: 12,
            bold: true,
          },
        },
        legend: { position: 'top' },
      }}
      // For tests
      rootProps={{ 'data-testid': '1' }}
    />
  );
}

NeosChart.propTypes = {
  neos: PropTypes.array.isRequired,
};

export default NeosChart;
