import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, Typography }from '@material-ui/core'
//import ImportTotal from '../containers/ImportTotal'
//import { MoreVert } from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete'
//import Import from '../containers/Import'

const Import = (props) => {
    // fill out this component

    return (
      <Container maxWidth='lg' className="import-container">
         <Typography component="div" style={{ height: '100vh' }}>
          <br/>
              <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={props.fetchMakes}
                  >Import
              </Button>
          <br/>
          <h2> COUNT: {props.makes.length} </h2>
              {/* <ImportTotal/> */}
          <br/>
            <Table className="import-list" aria-label="simple table">
                <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Make</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                  <TableBody>
                      {props.makes.map((make, index) => (
                          <TableRow key={make.MakeId}>
                              <TableCell>{make["MakeId"]}</TableCell>
                              <TableCell>{make["MakeName"]}</TableCell>
                              <TableCell>
                              <DeleteIcon
                                onClick = {() => props.deleteMake(index)}// add onClick method here
                                className="icon text-red" />
                                

                              </TableCell>
                          </TableRow>
                          ))}
                  </TableBody>
            </Table>
        </Typography>
      </Container>
    )}

export default Import