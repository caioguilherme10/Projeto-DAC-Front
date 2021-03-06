import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
    const [alternativa, setAlternativa] = useState('');
    const [descricaoAlternativa, setDescricaoAlternativa] = useState('');
    const [questonario, setQuestonario] = useState('');

    const handleChangeDescricao = event => {
        setDescricao(event.target.value);
    };

    const handleChangeAlternativa = event => {
        setAlternativa(event.target.value);
    };

    const handleChangeDescricaoAlternativa = event => {
        setDescricaoAlternativa(event.target.value);
    };

    const handleChangeQuestonario = event => {
        setQuestonario(event.target.checked);
    };

    const handleClickSalvar = () => {

    };

    return (
        <div className="Card">
            <div className={classes.card}>
                <Card>
                    <CardHeader title="Cadastrar Questão" />
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
                        <div className={classes.cardf}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="alternativa">
                                    Alternativas Certas
                                </InputLabel>
                                <Input id="alternativa" onChange={handleChangeAlternativa} />
                            </FormControl>
                        </div>
                        <div className={classes.cardf}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={questonario}
                                        onChange={handleChangeQuestonario}
                                        value="questonario"
                                        color="primary"
                                    />
                                }
                                label="Questonario"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={questonario}
                                        onChange={handleChangeQuestonario}
                                        value="questonario"
                                        color="primary"
                                    />
                                }
                                label="Atividade"
                            />
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
                    <CardHeader title="Cadastrar Alternativa" />
                    <CardContent>
                        <div className={classes.cardf}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="alternativa">
                                    Alternativa
                                </InputLabel>
                                <Input id="alternativa" onChange={handleChangeAlternativa} />
                            </FormControl>
                        </div>
                        <div className={classes.cardf}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Descrição Alternativa"
                                multiline
                                rowsMax="5"
                                value={descricaoAlternativa}
                                onChange={handleChangeDescricaoAlternativa}
                                className={classes.textField}
                                margin="normal"
                            />
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
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);