import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

function createData(name, position) {
	return { name, position };
}

const rows = [
	createData('Frozen yoghurt', 159),
	createData('Ice cream sandwich', 237),
	createData('Eclair', 262),
	createData('Cupcake', 305),
	createData('Cupcaked', 305),
	createData('Cupcakea', 305),
	createData('Cupcakec', 305),
	createData('Cupcakev', 305),
	createData('Cupcakebd', 305)
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: 'rgba(2, 158, 251, 0.03)'
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0
	}
}));

export default function DashboardTable({ title = 'کلمه کلیدی', position, data }) {
	const emptyRows = Math.max(0, 10 - rows.length);

	return (
		<TableContainer>
			<Table sx={{ minWidth: '300px' }} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell align="left">ردیف</TableCell>
						<TableCell align="left">{title}</TableCell>
						{position && <TableCell align="center">{position}</TableCell>}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => (
						<StyledTableRow hover key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="left" sx={{ width: '10%', border: 0 }}>
								{index + 1}
							</TableCell>
							<TableCell component="th" scope="row" sx={{ border: 0 }}>
								{row.name}
							</TableCell>
							{position && (
								<TableCell align="center" sx={{ border: 0 }}>
									{row.position}
								</TableCell>
							)}
						</StyledTableRow>
					))}
					{emptyRows > 0 && (
						<TableRow style={{ height: 35 * emptyRows }}>
							<TableCell colSpan={3} sx={{ border: 0 }} />
						</TableRow>
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
