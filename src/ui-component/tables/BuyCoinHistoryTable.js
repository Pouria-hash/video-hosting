import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { format } from 'date-fns-jalali';

function createData(date, qty) {
	return { date, qty };
}

const rows = [
	createData(Date(), 159),
	createData(Date(), 159),
	createData(Date(), 200),
	createData(Date(), 15),
	createData(Date(), 199)
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

export default function BuyCoinHistoryTable({ data }) {
	return (
		<TableContainer>
			<Table sx={{ minWidth: '300px' }} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell align="left">ردیف</TableCell>
						<TableCell align="left">تاریخ خرید</TableCell>
						{<TableCell align="left">تعداد سکه خریداری شده</TableCell>}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => (
						<StyledTableRow hover key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="left" sx={{ width: '10%', border: 0 }}>
								<Typography color="text.secondary" variant="body2">
									{index + 1}
								</Typography>
							</TableCell>
							<TableCell component="th" scope="row" sx={{ border: 0 }}>
								<Typography color="text.secondary" variant="body2">
									{format(new Date(), 'yyyy/MM/dd')}
								</Typography>
							</TableCell>

							<TableCell align="left" sx={{ border: 0 }}>
								<Typography color="text.secondary" variant="body2">
									{row.qty} سکه
								</Typography>
							</TableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
