import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useContext } from "react";
import appContext from "../../../context/context";
import Actions from "./Actions";
import Image from "./Image";

const columns = [
  { id: "img", label: "Image", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 200 },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    align: "left",
  },

  {
    id: "quantity",
    label: "Quantity",
    minWidth: 100,
    align: "center",
  },
  {
    id: "orderid",
    label: "Order ID",
    minWidth: 100,
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
    align: "center",
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 100,
    align: "center",
  },
];

export default function Orders() {
  const {
    state: { userOrders },
    getStatusColor,
  } = useContext(appContext);
  console.log({ userOrders });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
            {userOrders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={order?._id}
                  >
                    <TableCell>
                      <Image img={order?.bicycle?.img} />
                    </TableCell>
                    <TableCell>
                      {order?.bicycle?.name}
                      <Typography variant="subtitle2" color="text.secondary">
                        Model :{" "}
                        <Typography
                          component="span"
                          variant="subtitle2"
                          color="var(--primary)"
                        >
                          {order?.bicycle?.model || "N/A"}
                        </Typography>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" color="text.secondary">
                        Price :{" "}
                        <Typography
                          component="span"
                          variant="subtitle2"
                          color="var(--primary)"
                        >
                          {order?.bicycle?.price || "N/A"}
                          $
                        </Typography>
                      </Typography>

                      <Typography variant="subtitle2" color="text.secondary">
                        Total Price :{" "}
                        <Typography
                          component="span"
                          variant="subtitle2"
                          color="var(--primary)"
                        >
                          {order?.quantity * order?.bicycle?.price || "N/A"}
                          $
                        </Typography>
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      {order?.quantity || "N/A"}
                    </TableCell>
                    <TableCell align="center">{order?._id || "N/A"}</TableCell>
                    <TableCell align="center">
                      <Typography color={getStatusColor(order?.status)}>
                        {order?.status || "N/A"}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Actions order={order} />
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
        count={userOrders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
