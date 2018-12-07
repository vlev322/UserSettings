import React from 'react';

import styles from './userSettingsList.sass';

import UserSettingsListItem from './userSettingsListItem/userSettingsListItem';

const UserSettingsList = props => {
    const {nickname, status, name, role, location, lastLogin} = props;
    return (
        <table className={styles.userSettingsList}>
					<thead>
						<tr className={styles.tableHead}>
							<th>
								<div className={`${styles.status} `}></div>
							</th>
							<th><img src="../../styles/img/caret.jpg" alt=""/>Username</th>
							<th>Status</th>
							<th>Groups</th>
							<th>Roles</th>
							<th>Last Login</th>
						</tr>
					</thead>
					<tbody>
						<UserSettingsListItem
							nickname={nickname}
							name={name}
							role={role}
							location={location}
							lastLogin={lastLogin}
							status={status}
						/>
						<UserSettingsListItem
							nickname={nickname}
							name={name}
							role={role}
							location={location}
							lastLogin={lastLogin}
							status={status}
						/>
					</tbody>
        </table>
)};
  
export default UserSettingsList;