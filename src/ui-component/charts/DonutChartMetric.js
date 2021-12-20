// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const DonutChart = ({ data /* see data tab */ }) => (
	<Box sx={{ height: '100%', position: 'relative', textAlign: 'center' }}>
		<ResponsivePie
			data={data}
			margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
			innerRadius={0.8}
			cornerRadius={3}
			isInteractive={false}
			activeOuterRadiusOffset={8}
			colors={[ data[0].color, data[1].color ]}
			borderWidth={1}
			borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
			enableArcLinkLabels={false}
			arcLinkLabelsSkipAngle={10}
			arcLinkLabelsTextColor="#333333"
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: 'color' }}
			enableArcLabels={false}
			arcLabelsSkipAngle={10}
			arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
			legends={[]}
		/>
		<Box
			sx={{
				position: 'absolute',
				top: 0,
				right: 200,
				bottom: 0,
				left: 60,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				// background: "#FFFFFF33",
				textAlign: 'center',
				// This is important to preserve the chart interactivity
				pointerEvents: 'none'
			}}
		>
			<Typography variant="h4" color="text.primary">
				{data[0].value}
			</Typography>
		</Box>
	</Box>
);
export default DonutChart;
