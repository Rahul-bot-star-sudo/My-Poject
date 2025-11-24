import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
    <nav style={styles.nav}>
        <h2 style={styles.logo}>My Website</h2>
        <div style={styles.links}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/" style={styles.link}>About</Link>
            <Link to="/" style={styles.link}>Contact</Link>
        </div>
    </nav>
    );
    }
const styles = {
    nav:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"15px 30px",
        backgroundColor:"#222",
        color:"white",
        },
    logo:{
        margin:0
        },
    Links:{display:"flex",gap:"20px"},
    link:{color:"white", textDecoration:"none", fontSize:"18px"},
    };
export default Navbar;