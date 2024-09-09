import Table from 'react-bootstrap/Table';


function TableComponent({ rowData =[],deleteHandler,editHandler}) {






  return (
    <Table striped bordered hover >
      <thead>
        <tr >
          <th>USERNAME</th>
          <th>PASSWORD</th>
          <th>CITY</th>
        </tr>
      </thead>
      <tbody>
        {
          rowData.map((eachRow, index) => ( 
            <tr key={index}>  
              <td>{eachRow.userName}</td>
              <td>{eachRow.password}</td>
              <td>{eachRow.city}</td>
              <td> <button style={{backgroundColor:"skyblue"}} onClick={()=>editHandler(index)}>Edit</button></td>
              <td> <button style={{backgroundColor:"red"}} onClick={()=>deleteHandler(index)}>Delete</button></td>
             
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default TableComponent;
