import Titulo from "./Titulo";
import { Paper, makeStyles, Container } from "@material-ui/core";
import AgregarBeneficiarioForm from "./AgregarBeneficiarioForm";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  container: {
    display: "flex",
  },
}));

const Detalles = () => {
  const classes = useStyle();
  return (
    <div>
      <Sidenav />
      <Container>
        <Paper className={classes.pageContent}>
          <Typography variant="h3" component="h2" align="center">
            Detalles
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};
