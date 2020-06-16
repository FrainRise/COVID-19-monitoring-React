import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import './Cards.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed) {
        return 'Loading...';
    }
    return (
        <div className="container-card">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className="card infected">
                    <CardContent>
                        <Typography gutterBottom className="infectedHeader">
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp className="peopleAmount" start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card recovered">
                    <CardContent>
                        <Typography  gutterBottom className="recoveredHeader">
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <CountUp className="peopleAmount" start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card deaths">
                    <CardContent>
                        <Typography gutterBottom className="deathsHeader">
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                        <CountUp className="peopleAmount" start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )   
}

export default Cards;