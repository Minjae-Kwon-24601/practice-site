import { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import githubIcon from "../assets/img/github.svg"
import linkedinIcon from "../assets/img/linkedin.svg"
import { HashLink } from "react-router-hash-link"

export default function NavBar() {
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 45) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <HashLink smooth to="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</HashLink>
                            <HashLink smooth to="#about" className={activeLink === "about" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("about")}>About</HashLink>
                            <HashLink smooth to="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</HashLink>
                            <HashLink smooth to="#contact" className={activeLink === "contact" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("contact")}>Contact</HashLink>
                        </Nav>
                        <div className="icons">
                            <a href="https://www.linkedin.com/in/minjae-kwon-24601" target="_blank" rel="noreferrer"><img src={linkedinIcon} /></a>
                            <a href="https://github.com/minjaekwon9" target="_blank" rel="noreferrer"><img src={githubIcon} /></a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}