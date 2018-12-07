import React from 'react';

import styles from './userSettingsList.sass';

import UserSettingsListItem from './userSettingsListItem/userSettingsListItem';

const UserSettingsList = props => {
    const {nickname, name, role, location, lastLogin} = props;
    return (
        <table className={styles.userSettingsList}>
					<thead>
						<tr>
							<th>(O)</th>
							<th>Username</th>
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
						/>
					</tbody>
        </table>
)};
  
export default UserSettingsList;