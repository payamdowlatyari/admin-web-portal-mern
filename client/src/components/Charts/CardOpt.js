import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleUp,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxHeight: 180,

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <div>
      <Row>
        <Col md="3">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
                Rate of Demand for Chargers
            </Typography>
              <Typography variant="h5" component="h2">
                125K
            </Typography>
              <Typography className={classes.pos} color="textSecondary">
                demanded per hour
            </Typography>
              <Typography className="widget-description text-danger" variant="body2" component="p">
                <FontAwesomeIcon icon={faAngleDown} />
                20.3%
            </Typography>
            </CardContent>
          </Card>
        </Col>
        <Col md="3">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
                Avg rate of Abandoned Chargers
        </Typography>
              <Typography variant="h5" component="h2">
                25K
        </Typography>
              <Typography className={classes.pos} color="textSecondary">
                per hour
        </Typography>
              <Typography className="widget-description text-success" variant="body2" component="p">
                <FontAwesomeIcon icon={faAngleUp} />
                15.3%
        </Typography>
            </CardContent>
          </Card>
        </Col>
        <Col md="3">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
                Reduction in CO2 emissions
        </Typography>
              <Typography variant="h5" component="h2">
                0.177
        </Typography>
              <Typography className={classes.pos} color="textSecondary">
                difference
        </Typography>
              <Typography className="widget-description text-success" variant="body2" component="p">
                <FontAwesomeIcon icon={faAngleUp} />
                24.6%
        </Typography>
            </CardContent>
          </Card>
        </Col>
        <Col md="3">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
                Current C02 emission rate
        </Typography>
              <Typography variant="h5" component="h2">
                1.177
        </Typography>
              <Typography className={classes.pos} color="textSecondary">
                mTCO2/MWh
        </Typography>
              <Typography className="widget-description text-danger" variant="body2" component="p">
                <FontAwesomeIcon icon={faAngleDown} />
                14.6%
        </Typography>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </div>
  );
}