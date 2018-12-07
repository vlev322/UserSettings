import React, { Component, Fragment } from 'react';

import axios from 'axios'

import styles from './UserSettings.sass';

import UserSettingsList from './userSettingsList/userSettingsList';



class UserSettings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userList: ''
		}
	}

	dates(userId) {
		axios.get(`http://192.168.10.3:3000/api/v1/user/${userId}`)
		.then(function (response) {
			this.setState({
				userList: response
			})
		}.bind(this))
		.catch(function (error) {
			console.log(error);
		})
	
	}


	componentDidMount(){
		this.dates('5c07a52ce1b46502d89b3a00');	
	}
	
	render() {
		console.log('Our Answer: ', this.state.userList.data);
		
    return (
        <div className={styles.userSettings}>
					<UserSettingsList user={this.state.userList}/>
				</div>
		)
	}
}

export default UserSettings;