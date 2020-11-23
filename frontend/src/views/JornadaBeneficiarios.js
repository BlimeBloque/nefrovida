import React, {useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { Divider, makeStyles, Paper, Typography } from '@material-ui/core'
import http from "../http-common"

const useStyle = makeStyles((theme) => ({
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
    container: {
      display: "flex",
      marginTop: "40px",
    },
    divider: {
        marginTop: "20px",
        marginBottom: "20px"
    }
  }));

function JornadaBeneficiarios(props) {
    const classes = useStyle();
    const [valores, setValores] = useState([]);
    useEffect (() => {
        
        http.get('jornadas/'+ props.idJornada+'/beneficiarios')
        .then(res => { 
            setValores(res.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }, []);

    return (
        <Paper className={classes.pageContent}>
            <Typography variant="h4">Beneficiarios de la jornada</Typography>
            <Divider className={classes.divider} />
            {valores.map((e) => (
                <div>
                    <Typography variant="h6">{e.nombreBeneficiario}</Typography><br />
                </div>
            ))}
        </Paper>
    )
}

export default withRouter(JornadaBeneficiarios)
