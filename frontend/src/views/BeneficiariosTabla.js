import React, { Component } from 'react'
import BeneficiariosDataService from '../services/beneficiarios.service';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

export default class BeneficiariosTabla extends Component
{
    constructor(props)
    {
        super(props);
        this.retrieveBeneficiarios = this.retrieveBeneficiarios.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);

        this.state = {
        beneficiarios: [],
        currentIndex: -1,
        meta: [],

        page: 1,
        count: 0,
        };
    }

    componentDidMount()
    {
        this.retrieveBeneficiarios();
    }


    getRequestParams(page)
    {
        let params = {};

        if(page)
        {
            params["page"] = page;
        }

        return params;
    }

    retrieveBeneficiarios()
    {
        const {page} = this.state;
        const params = this.getRequestParams(page);
        console.log(params);

        BeneficiariosDataService.getAll(params)
            .then(beneficiarios => {
                this.setState({beneficiarios: beneficiarios.data.data, meta: beneficiarios.data.meta});
            })
            .catch((e) => {
                console.log(e);
            })
    }
    handlePageChange(event, value) {
        this.setState(
        {
            page: value,
        },
        () => {
            this.retrieveBeneficiarios();
        }
        );
    }

    render()
    {
        const {
            beneficiarios,
            meta,
            page,
        } = this.state;
        return (
            <div>
                <Typography variant="h4">Lista beneficiarios</Typography>
                <div>
                    <Pagination
                        className="my-3"
                        count={meta.last_page}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={this.handlePageChange}
                    />
                    <ul className="list-group">
                        {beneficiarios && beneficiarios.map(beneficiario =>(
                            <li
                                className={"list-group-item "}
                                key={beneficiario.idBeneficiario}
                            >
                                {beneficiario.nombreBeneficiario}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );

    }
}