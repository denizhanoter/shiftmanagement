import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "../styles/ShiftSchedule.module.css";

export default function ShiftSchedule() {
  return (
    <div className={styles.container}>
      <AppBar position='static' sx={{ backgroundColor: "teal" }}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Shift Management App
          </Typography>
          <Button color='inherit' component={Link} to='/vardiya-programi' className={styles.navLink1}>
            Shift Schedule
          </Button>
          <Button color='inherit' component={Link} to='/calisan-yonetimi' className={styles.navLink2}>
            Employee Management
          </Button>
          <Button color='inherit' component={Link} to='/vardiya-ayarlari' className={styles.navLink3}>
            Shift Settings
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
