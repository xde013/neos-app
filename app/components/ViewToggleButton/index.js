/**
 *
 * ViewToggleButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from '@material-ui/lab/ToggleButton';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import InsertChartOutlinedOutlinedIcon from '@material-ui/icons/InsertChartOutlinedOutlined';
import Tooltip from '@material-ui/core/Tooltip';

const ViewToggleButton = ({ toggleHandler }) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <Tooltip title={`Toggle to ${selected ? 'Chart' : 'Table'} View`}>
      <ToggleButton
        value={false}
        selected
        onChange={() => {
          setSelected(!selected);
          toggleHandler(!selected);
        }}
        color="primary"
      >
        {selected ? (
          <InsertChartOutlinedOutlinedIcon fontSize="large" />
        ) : (
          <TableChartOutlinedIcon fontSize="large" />
        )}
      </ToggleButton>
    </Tooltip>
  );
};

ViewToggleButton.propTypes = {
  toggleHandler: PropTypes.func.isRequired,
};

export default ViewToggleButton;
