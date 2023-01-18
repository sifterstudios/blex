import {Component} from "react";
import {Dropdown, Navbar} from "flowbite-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser, faSheetPlastic} from "@fortawesome/free-solid-svg-icons";
import "./blexbar.css";

export class BlexBar extends Component {
    render() {
        return (
            <>
                <Navbar fluid={true} rounded={true} className="dark:bg-slate-800">
                    <Navbar.Brand href="https://sifterstudios.no">
                        <FontAwesomeIcon
                            icon={faSheetPlastic}
                            className="mr-3 h-6 sm:h-9 dark:text-cyan-600"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-cyan-600">
              Blex
            </span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
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
                                <span className="block text-sm ">Bonnie Green</span>
                                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
                            </Dropdown.Header>
                            <Dropdown.Item className="dark:bg-slate-800">Settings</Dropdown.Item>
                            <Dropdown.Item className="dark:bg-slate-800">My Collection</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item className="dark:bg-slate-800">Sign out</Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle/>
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link href="#/">Search</Navbar.Link>
                        <Navbar.Link href="#">Top Blex</Navbar.Link>
                        <Navbar.Link href="#">About</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}
