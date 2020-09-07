import React from 'react';
import DB from "../models/DataBaseOperations";
import { Table, TableContainer, TableHead, TableRow, TableBody, TableCell } from "@material-ui/core";

const MyTable = (probs: DB[]) => {


    function getHeaders() : JSX.Element[] {
        const cells: any[] = [];

        probs.forEach((value,key) => {
            cells.push(<TableCell align={value.id ? 'right':'left'} key={key}>{value.data}</TableCell>)
        })
        return cells;
    }

    function getTableBody() {
        return undefined;
    }

    return <React.Fragment>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {getHeaders()}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getTableBody()}
                </TableBody>
            </Table>
        </TableContainer>

    </React.Fragment>
};

export default MyTable;