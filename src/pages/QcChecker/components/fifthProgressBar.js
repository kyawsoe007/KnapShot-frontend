import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from '@material-ui/core/Tooltip';

const BorderLinearProgress = withStyles({
    root: {
        width:"100%",
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ED7C30'
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#00B0F1',
    },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
    root: {
        margin: '5px 0',
        width: '100%'
    }
}));

export default function FifthProgressBar(props) {

    const classes = useStyles();

    const { value, tooltip,  } = props;
    return (
        <Tooltip title={tooltip || value}>
            <BorderLinearProgress
                className={classes}
                variant="determinate"
                color="primary"
                value={value}
            />
        </Tooltip>
    );
}

FifthProgressBar.defaultProps = {
    value: 0,
    tooltip: ""
}

FifthProgressBar.propType = {
    value: PropTypes.number.isRequired,
    tooltip: PropTypes.string
}