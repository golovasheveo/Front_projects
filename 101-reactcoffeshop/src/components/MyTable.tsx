import React from 'react';
import {TableBody, TableCell, TableContainer, TableFooter, TableRow} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import {Observable} from "rxjs";
import {Order} from "../service/StorageImp";

type Props = {
    // headers: Map<string, {displayName: string, value: string} >
    heads: {displayName: string, value: string}[]
    rows: Order[],
}

const MyTable: React.FC<Props> = (props: Props) => {

    console.log("ROWS COMPONENT DATA: ", props.rows);


    function getHeaders() {
        const cells: any[] = [];
        props.heads.map(header => {
            cells.push(<TableCell key={Math.random()}>{header.displayName}</TableCell>);
        })
        return cells;
    }
    // const rows = [
    //     {id: 1, nameClient: "John", price: 30, coffetype: "Americano"},
    //     {id: 2, nameClient: "Patrick", price: 50, coffetype: "Americano"},
    //     {id: 3, nameClient: "Elena", price: 15, coffetype: "Americano"},
    // ]

    function  getRows(): JSX.Element[] {
        const keys: string[] = [];
        props.heads.forEach(header => {
            keys.push(header.displayName);
        })
        //keys = ["id", "nameClient", "price", "coffetype"]
        // rowsGetOrders
        // const rows = await props.rowsGetOrders.getAllCoffees();
        return props.rows.map((row: any, index: number) =>
                 getRow(row, index, keys)
        );
    }

    //row =  {id: 1, nameClient: "John", price: 30, coffetype: "Americano"}
    //keys = ["id", "nameClient", "price", "coffetype"]
    function getRow(row: object, index: number, keys: string[]): JSX.Element {
        return <TableRow key={index}>
            {getDataCells(row, keys)}
        </TableRow>
    }

    // TS7053: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'. ' +
    // '  No index signature with a parameter of type 'string' was found on type '{}'.

    //row =  {id: 1, nameClient: "John", price: 30, coffetype: "Americano"}
    //keys = ["id", "nameClient", "price", "coffetype"]
    function getDataCells(row: any, keys: string[]): JSX.Element[] {

        const res = keys.map(k =>
            <TableCell key={k}>
              {/*{JSON.stringify(row)}*/}
              {/*{Object.keys(row).filter(value => value === k)}*/}
              {/*{Object.keys(row).filter(value => value === k)}*/}
                {row[k]}
            </TableCell>)
        return res;
    }


    return <TableContainer>
      <Table >
          <TableHead >
              <TableRow>
                  {getHeaders()}
              </TableRow>
          </TableHead>
          <TableBody>
              {getRows()}
          </TableBody>
          {/*<TableFooter>*/}
          {/*    <TableRow>*/}
          {/*        <TablePagination*/}
          {/*            rowsPerPageOptions={[defaultRowsPerPage, defaultRowsPerPage * 2, defaultRowsPerPage * 3, { label: 'All', value: -1 }]}*/}

          {/*            count={props.rows.length}*/}
          {/*            rowsPerPage={rowsPerPage}*/}
          {/*            page={page}*/}

          {/*            onChangePage={handleChangePage}*/}
          {/*            onChangeRowsPerPage={handleChangeRowsPerPage}*/}

          {/*        />*/}
          {/*    </TableRow>*/}
          {/*</TableFooter>*/}
      </Table>
  </TableContainer>

};

export default MyTable;