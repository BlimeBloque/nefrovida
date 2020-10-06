import React, { Component } from 'react'
import BeneficiariosDataService from '../services/beneficiarios.service';
import TablaBeneficiarios from './TablaBeneficiarios';

export default class BuscarBeneficiarios extends Component
{
    constructor(props)
    {
        super(props);
        this.retrieveBeneficiarios = this.retrieveBeneficiarios.bind(this);

        this.state = {
        beneficiarios: [],
        };
    }

    componentDidMount()
    {
        this.retrieveBeneficiarios();
    }


    retrieveBeneficiarios()
    {
        BeneficiariosDataService.getAll()
            .then(beneficiarios => {
                this.setState({beneficiarios: beneficiarios.data.data});
            })
            .catch((e) => {
                console.log(e);
            })
    }
    render()
    {
        const {
            beneficiarios,
        } = this.state;
        return (
            <div>
                <TablaBeneficiarios data={beneficiarios}/>
            </div>
        );

    }
}