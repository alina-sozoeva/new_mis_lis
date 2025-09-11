import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

// interface Column {
//   field: string;
//   label: string;
//   render?: (value: any, row: Record<string, any>) => React.ReactNode;
// }

// interface UniversalTableProps {
//   rows: Array<Record<string, any>>;
//   columns: Column[];
// }

export default function UniversalTable({ rows, columns }) {
  if (!rows || rows.length === 0) {
    return <div style={{ padding: "20px" }}>Нет данных для отображения</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.field} style={{ fontWeight: 600 }}>
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col) => (
                <TableCell key={col.field}>
                  {col.render
                    ? col.render(row[col.field], row)
                    : row[col.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
