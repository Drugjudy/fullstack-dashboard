import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "state/api";
import Header from "components/Header";
import { DataGrid, } from "@mui/x-data-grid";

const Candidates = () => {
  const theme = useTheme();
  const { data } = useGetCustomersQuery();
  console.log("data", data);


  const columns= [
    {
      field: "EmId",
      headerName: "ID"
     
    },
       { field: 'Name', headerName: 'Name', width: 150 },
          { field: 'DOJ', headerName: 'Date of joining', width: 150 },
             { field: 'ActivationStatus', headerName: 'Active/deactive', width: 150 },
                { field: 'Division', headerName: 'Division', width: 150 },
                   { field: 'Designation', headerName: 'Designation', width: 150 },
                      { field: 'Zone', headerName: 'Zone', width: 150 },
                         { field: 'State', headerName: 'State', width: 150 },
                            { field: 'City', headerName: 'City', width: 150 },
                               { field: 'Location', headerName: 'Location', width: 150 },
                                  { field: 'CityZone', headerName: 'CityZone', width: 150 },
                                     { field: 'Head', headerName: 'Head', width: 150 },
                                        { field: 'Company', headerName: 'Company', width: 150 },
                                           { field: 'Salary', headerName: 'Salary', width: 150 },
                                              { field: 'MDay', headerName: 'MDay', width: 150 },
                                                 { field: 'PaidDays', headerName: 'PaidDays', width: 150 },
                                                    { field: 'Basic', headerName: 'Basic', width: 150 },
                                                       { field: 'DA', headerName: 'DA', width: 150 },
                                                          { field: 'HRA', headerName: 'HRA', width: 150 },
                                                             { field: 'CON', headerName: 'CON', width: 150 },
                                                                { field: 'SpeicalAllowence', headerName: 'SpeicalAllowence', width: 150 },
                                                                   { field: 'OtherAllowence', headerName: 'OtherAllowence', width: 150 },
                                                                      { field: 'Gross', headerName: 'Gross', width: 150 },
                                                                         { field: 'Empesic', headerName: 'Empesic', width: 150 },
                                                                            { field: 'Emppf', headerName: 'Emppf', width: 150 },
                                                                               { field: 'Emplwf', headerName: 'Emplwf', width: 150 },
                                                                                  { field: 'ProfessionalTax', headerName: 'ProfessionalTax', width: 150 },
                                                                                     { field: 'ETD', headerName: 'ETD', width: 150 },
      
      { field: 'AmountPaid', headerName: 'AmountPaid', width: 150 },
          { field: 'Admin1', headerName: 'Admin1', width: 150 },
             { field: 'PetrolAllowence', headerName: 'PetrolAllowence', width: 150 },
                { field: 'MoblieAllowence', headerName: 'MoblieAllowence', width: 150 },
                 { field: 'OtherExp', headerName: 'OtherExp', width: 150 },
          { field: 'NetTakeHome', headerName: 'NetTakeHome', width: 150 },
             { field: 'Incentive', headerName: 'Incentive', width: 150 },
                { field: 'Amount', headerName: 'Amount', width: 150 },
                 { field: 'DeductionInAdvance', headerName: 'DeductionInAdvance', width: 150 },
          { field: 'NetAmountPaid', headerName: 'NetAmountPaid', width: 150 },
             { field: 'Remarks', headerName: 'Remarks', width: 150 },
                { field: 'AccountNo', headerName: 'AccountNo', width: 150 }, { field: 'DeductionInAdvance', headerName: 'DeductionInAdvance', width: 150 },
          { field: 'IfscCode', headerName: 'IfscCode', width: 150 },
             { field: 'BankName', headerName: 'BankName', width: 150 },
                { field: 'AccountName', headerName: 'AccountName', width: 150 },];
    // 


  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CANDIDATES" subtitle="List of Candidates" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {

            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backkkkgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
    
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
          
        />
      </Box>
    </Box>
  );
};

export default Candidates;

