import React, {  useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const options = ['Agregar evaluación inicial', 'Agregar evaluación final'];

function BotonEvaluaciones(props) {
  const {history, hasEvalInit, hasEvalFin} = props;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [idEval, setIdEval] = React.useState();

  const handleClick = () => {
    setIdEval(selectedIndex+1);
    
    if(selectedIndex == 0) {
      if(hasEvalInit) {
        history.push('/beneficiarios/'+props.idBeneficiario+'?permitirEvaluacionInicio=0');
        window.location.reload();
      } else {
        history.push('/beneficiarios/'+props.idBeneficiario+'/agregarEvaluacionInicio');
      }
    }
    else {
      setIdEval(2);
      if(hasEvalFin) {
        history.push('/beneficiarios/'+props.idBeneficiario+'?permitirEvaluacionFin=0');
        window.location.reload();
      } else {
        history.push('/beneficiarios/'+props.idBeneficiario+'/agregarEvaluacionFin');
      }
    }
    console.log(idEval)
  };
  
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    
  }, []);

  return (
    <Grid container direction="column" alignItems="center">
      {console.log(hasEvalInit)}
      <Grid item xs={12}>
        <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <Button
            color="primary"
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="seleccione tipo de evaluación"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}

export default withRouter(BotonEvaluaciones);