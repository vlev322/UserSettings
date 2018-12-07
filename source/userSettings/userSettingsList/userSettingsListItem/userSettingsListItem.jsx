import React from 'react';

import styles from './userSettingsListItem.sass';

const UserSettingsListItem = props => {
    const {nickname, name, role, location, lastLogin} = props;
    return (
					<tr>
						<td>
							<input type="checkbox" name="" id=""/>
						</td>
						<td>
							<p>{nickname}</p>
							<span>Name: {name}</span>
						</td>
						<td>
							<div className={`${styles.status} ${styles.statusActive}`}></div>
							Active
						</td>
						<td>
							<p>{location}</p>
							<span>( 1 more )</span>
						</td>
						<td>
							<p>{role}</p>
							<span>( 2 more )</span>
						</td>
						<td>
							{lastLogin}
						</td>
						<td>
							<input type="checkbox" name="" id=""/>
						</td>
					</tr>
)};
  
export default UserSettingsListItem;