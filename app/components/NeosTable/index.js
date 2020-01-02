/* eslint-disable react/jsx-props-no-spreading */
/**
 *
 * NeosTable
 *
 */

import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import SaveAlt from '@material-ui/icons/SaveAlt';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

/**
 * Load only Icons the table needs
 */
const tableIcons = {
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};

export function NeosTable({ neos }) {
  const downloadLinkRef = React.createRef();
  const neosData = useMemo(() => {
    if (neos.length > 0) {
      return neos.map(neo => ({
        name: neo[0],
        estimated_diameter_min: neo[1],
        estimated_diameter_max: neo[2],
      }));
    }
    return [];
  }, [neos]);

  return (
    <div data-testid="table">
      <MaterialTable
        icons={tableIcons}
        title="NEOs Diameters"
        columns={[
          { title: 'Name', field: 'name' },
          {
            title: 'Min Estimated Diameter (km)',
            field: 'estimated_diameter_min',
            type: 'numeric',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Max Estimated Diameter (km)',
            field: 'estimated_diameter_max',
            type: 'numeric',
            cellStyle: {
              textAlign: 'center',
            },
          },
        ]}
        data={neosData}
        options={{
          exportButton: true,
          exportCsv: columns => {
            const header = `${columns.map(e => e.title).join(',')}\n`;
            const csvString = `${header}${neos
              .map(e => e.join(','))
              .join('\n')}`;
            const blob = new Blob([csvString], {
              type: 'text/csv;charset=utf8;',
            });

            downloadLinkRef.current.setAttribute(
              'href',
              window.URL.createObjectURL(blob),
            );
            downloadLinkRef.current.click();
          },

          headerStyle: {
            backgroundColor: '#0b3d91',
            color: '#FFF',
          },
        }}
      />
      {/* Nicely named download */}
      <a hidden href="#!" download="my_neos_data.csv" ref={downloadLinkRef}>
        Export
      </a>
    </div>
  );
}

NeosTable.propTypes = {
  neos: PropTypes.array.isRequired,
};

export default NeosTable;
