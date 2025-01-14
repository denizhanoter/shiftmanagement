import { Link, Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from '../styles/Homepage.module.css';
import Box from '@mui/material/Box';

export default function Homepage() {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			<AppBar
				position='static'
				sx={{ backgroundColor: 'teal' }}>
				<Toolbar>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1 }}>
						Shift Management App
					</Typography>
					<Button
						color='inherit'
						component={Link}
						to='/Shift-Schedule'
						className={styles.navLink1}>
						Shift Schedule
					</Button>
					<Button
						color='inherit'
						component={Link}
						to='/Employee-Management'
						className={styles.navLink2}>
						Employee Management
					</Button>
					<Button
						color='inherit'
						component={Link}
						to='/Shift-Settings'
						className={styles.navLink3}>
						Shift Settings
					</Button>
				</Toolbar>
			</AppBar>
			<Box sx={{ flexGrow: 1, padding: 2 }}>
				<Outlet />
			</Box>
		</Box>
	);
}
