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
import { useState } from 'react';

import Password from '../components/password';

const styles = {
    cardf: {
        padding: "10px 5px 10px 5px",
        width: 400
    },
    button: {
        float: "right",
        width: "100%",
        textAlign: "right",
        padding: "10px 5px 10px 5px",
    }
};

function SimpleCard(props) {
    const { classes } = props;

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');

    const handleChangeEmail = event => {
        setEmail(event.target.value);
    };

    const handleChangeNome = event => {
        setNome(event.target.value);
    };

    const handleChangeMatricula = event => {
        setMatricula(event.target.value);
    };

    const handleChangeSenha = event => {
        setSenha(event);
    };

    const handleClickCadastrar = () => {

    };

    const handleClickLogar = () => {

    };

    return (
        <Card>
            <CardHeader title="Cadastro" />
            <CardContent >
                <div className={classes.cardf}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="matricula">
                            Matricula
                        </InputLabel>
                        <Input id="matricula" onChange={handleChangeMatricula} />
                    </FormControl>
                </div>
                <div className={classes.cardf}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="nome">
                            Nome
                        </InputLabel>
                        <Input id="nome" onChange={handleChangeNome} />
                    </FormControl>
                </div>
                <div className={classes.cardf}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="email">
                            Email
                        </InputLabel>
                        <Input id="email" onChange={handleChangeEmail} />
                    </FormControl>
                </div>
                <Password handleChangeSenha={handleChangeSenha}></Password>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" onClick={handleClickCadastrar}>
                    Login
                </Button>
                <div className={classes.button}>
                    <Button variant="contained" color="primary" onClick={handleClickLogar}>
                        Cadastrar
                    </Button>
                </div>
            </CardActions>
        </Card>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);