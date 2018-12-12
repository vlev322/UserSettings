import React, { Component, Fragment } from 'react';

import axios from 'axios'

import styles from './UserSettings.sass';

import UserSettingsList from './userSettingsList/userSettingsList';
import { setTimeout } from 'timers';

let i = 1;
class UserSettings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userList: []
		}
	}

	componentDidMount() {
		this.dates("5c0fbccf463e5e37b4a279c4", this);				
  }	

	dates(userId){
		setTimeout(() => {

			axios
				.get(`http://192.168.10.3:3000/api/v1/user/`)
				.then(function(response) {
					this.setState({
						userList: response.data
					});
				}.bind(this))
				.catch(function(error) {
					console.log(error);
				});
		}, 1000)
	};


	render() {
		// setTimeout(() => {
// console.log('TESSST2', this.state.userList[1].firstName);
			
		// }, 1);
		const { userList } = this.state;
		
    return userList.length ? (
        <div className={styles.userSettings}>
					<UserSettingsList 
						user={userList}
						nickname='User XXX'
						name='Tom Toizer'
						status='Active'
						role='Content Manager'
						location='Vilnus Airport'
						lastLogin='2018-12-31 17:30:36'
					/>
				</div>
		) : null;
	}
}

export default UserSettings;