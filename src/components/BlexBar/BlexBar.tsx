import {Component} from "react";
import {Avatar, Dropdown, Navbar} from "flowbite-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSheetPlastic} from "@fortawesome/free-solid-svg-icons";
import "./blexbar.css";

export class BlexBar extends Component {
    render() {
        return (
            <>
                <Navbar fluid={true} rounded={true} className="bg-gray-300">
                    <Navbar.Brand href="https://sifterstudios.no">
                        <FontAwesomeIcon
                            icon={faSheetPlastic}
                            className="mr-3 h-6 sm:h-9"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Blex
            </span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={<Avatar alt="User settings" rounded={true}/>}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">Bonnie Green</span>
                                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>My Collection</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle/>
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link href="#" active={true}>
                            Home
                        </Navbar.Link>
                        <Navbar.Link href="#">Search</Navbar.Link>
                        <Navbar.Link href="#">Top Blex</Navbar.Link>
                        <Navbar.Link href="#">About</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}
