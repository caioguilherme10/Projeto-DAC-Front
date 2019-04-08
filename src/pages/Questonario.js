import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

import { useState } from 'react';
import '../App.css';


const styles = {
    card: {
        padding: "5px 10px 5px 10px",
        maxHeight: 500,
        position: 'relative',
        overflow: 'auto',
    },
    cardf: {
        padding: "10px 5px 10px 5px",
        width: 400
    },
    button: {
        float: "right",
        width: "100%",
        //textAlign: "right",
        padding: "10px 5px 10px 5px",
    },
    textField: {
        width: "100%",
    },
    fab: {
        textAlign: "right",
    }
};

function SimpleCard(props) {
    const { classes } = props;

    const [descricao, setDescricao] = useState('');
    const [checked, setChecked] = useState([0]);

    const handleChangeDescricao = event => {
        setDescricao(event.target.value);
    };

    const handleClickSalvar = () => {

    };

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
    };

    return (
        <div className="Card">
            <div className={classes.card}>
                <Card>
                    <CardHeader title="Realizar Questonario" />
                    <CardContent>
                        <div className={classes.cardf}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Descrição"
                                multiline
                                rowsMax="5"
                                value={descricao}
                                onChange={handleChangeDescricao}
                                className={classes.textField}
                                margin="normal"
                            />
                        </div>
                        <div className={classes.cardf}>
                            <List component="nav">
                                <ListItem button>
                                    <ListItemText primary="Trash" />
                                    <ListItemSecondaryAction>
                                        <IconButton aria-label="Delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Trash" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Trash" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Trash" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Trash" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Trash" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Trash" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Trash" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Trash" />
                                </ListItem>
                            </List>
                        </div>
                    </CardContent>
                    <CardActions>
                        <div className={classes.button}>
                            <Button variant="contained" color="primary" onClick={handleClickSalvar}>
                                Salvar
                            </Button>
                        </div>
                    </CardActions>
                </Card>
            </div>
            <div className={classes.card}>
                <Card>
                    <CardHeader title="Questões" />
                    <CardContent>
                        <div className={classes.cardf}>
                            <List className={classes.root}>
                                {[0, 1, 2, 3].map(value => (
                                    <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                        <Checkbox
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                        />
                                        <ListItemText primary={`Line item ${value + 1}`} />
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </CardContent>
                    <CardActions>
                        <div className={classes.button}>
                            <Button variant="contained" color="primary" onClick={handleClickSalvar}>
                                Adicionar ao Questonario
                            </Button>
                        </div>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);