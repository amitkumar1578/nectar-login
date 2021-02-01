import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table'
class Dashboard extends React.Component {
    logOut = () => {
        window.sessionStorage.removeItem('NectarLogin');
        window.location = '/login';
    }

    render() {
        return (
            <>
                <Navbar expand="lg" variant="light" bg="dark" variant="dark">
                    <Navbar.Brand href="#">Nectar Dashboard</Navbar.Brand>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <button className="btn btn-primary" type="submit"

                                onClick={() => this.logOut()}>
                                Logout
                                    </button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>ContactNo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.users.map(user => {
                            return <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.phoneNo}</td>
                            </tr>
                        })}

                    </tbody>
                </Table>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        users: state
    }
}
export default connect(mapStateToProps)(Dashboard);
