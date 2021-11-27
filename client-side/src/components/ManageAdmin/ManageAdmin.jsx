import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useContext, useState } from "react";
import appContext from "../../context/context";
import Actions from "./Actions";
import MakeAdmin from "./MakeAdmin";
const columns = [
  { id: "name", align: "center", label: "Name" },
  {
    id: "email",
    label: "Email",
    align: "center",
  },
  {
    id: "password",
    label: "Password",
    align: "center",
  },

  {
    id: "actions",
    label: "Actions",
    align: "center",
  },
];

export default function ManageAdmin() {
  const {
    state: { admins },
  } = useContext(appContext);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <MakeAdmin />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {admins
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((admin) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={admin?._id}
                  >
                    <TableCell align="center">{admin?.name}</TableCell>

                    <TableCell align="center">{admin?.email}</TableCell>
                    <TableCell align="center">
                      {admin?.password || "N/A"}
                    </TableCell>

                    <TableCell align="center">
                      <Actions admin={admin} />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={admins.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
