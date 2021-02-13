import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../Components/Buttons';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui-/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const Recipes = ({recipes}) => {
    const history= useHistory();
    const [open,SetOpen] = React.useState(false);

    const handleButton = recipe
}