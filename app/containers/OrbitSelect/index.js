/**
 *
 * OrbitSelect
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { useInjectReducer } from 'utils/injectReducer';
import { makeStyles } from '@material-ui/core/styles';
import { makeSelectNeosOrbits, makeSelectOrbitFilter } from './selectors';
import reducer from './reducer';
import { setFilter as setFilterAction } from './actions';

const useStyles = makeStyles({
  formControl: {
    fullWidth: true,
  },
});
export const OrbitSelect = ({ orbits, setFilter, filter }) => {
  useInjectReducer({ key: 'orbitSelect', reducer });
  const classes = useStyles();
  const handleOrbitChange = e => {
    setFilter(e.target.value);
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
        value={filter}
        onChange={handleOrbitChange}
        displayEmpty
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {orbits.map(orbit => (
          <MenuItem value={orbit} key={orbit}>
            {orbit}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Filter by Orbit</FormHelperText>
    </FormControl>
  );
};

OrbitSelect.propTypes = {
  orbits: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  orbits: makeSelectNeosOrbits(),
  filter: makeSelectOrbitFilter(),
});

export const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilterAction(filter)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(OrbitSelect);
