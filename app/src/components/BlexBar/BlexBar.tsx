import { Component } from "react";
import { Dropdown, Navbar } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSheetPlastic } from "@fortawesome/free-solid-svg-icons";
import "./blexbar.css";
import { Link } from "react-router-dom";
import { AddButton } from "../AddButton/AddButton";

export class BlexBar extends Component {
    render() {
        return (
            <>
                <Navbar fluid={true} rounded={true} className="dark:bg-slate-800">
                    <Link to="/">
                        <Navbar.Brand >
                            <FontAwesomeIcon
                                icon={faSheetPlastic}
                                className="mr-2 h-6 sm:h-9 dark:text-cyan-600"
                            />
                            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-cyan-600">
                                Blex
                            </span>
                        </Navbar.Brand>
                    </Link>
                    <div className="flex md:order-2">
                    <AddButton />

                        <Dropdown
                            arrowIcon={false}
                            className="dark:text-cyan-100"
                            inline={true}
                            label={<FontAwesomeIcon
                                icon={faCircleUser}
                                className="mr-3 h-6 sm:h-9 dark:text-cyan-800 hover:dark:text-cyan-600"
                            />}
                        >
                            <Dropdown.Header className="dark:bg-slate-800">
                                <span className="block text-sm ">Hello,</span>
                                <span className="block truncate text-sm font-medium">
                                    username!
                                </span>
                            </Dropdown.Header>
                            <Link to="/settings">
                                <Dropdown.Item className="dark:bg-slate-800">Settings</Dropdown.Item>
                            </Link>
                            <Link to="/collection">
                                <Dropdown.Item className="dark:bg-slate-800">My Collection</Dropdown.Item>
                            </Link>
                            <Dropdown.Divider />
                            <Link to="signout">
                                <Dropdown.Item className="dark:bg-slate-800">Sign out</Dropdown.Item>
                            </Link>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Link to="search">
                            <Navbar.Link className="text-lg">Search</Navbar.Link>
                        </Link>
                        <Link to="topblex">
                            <Navbar.Link className="text-lg">Top Blex</Navbar.Link>
                        </Link>
                        <Link to="about">
                            <Navbar.Link className="text-lg">About</Navbar.Link>
                        </Link>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }

}
