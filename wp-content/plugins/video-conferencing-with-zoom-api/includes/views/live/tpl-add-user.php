<div class="wrap">
    <h1><?php _e( 'Add a User', 'speed-dating-with-zoom' ); ?></h1>
    <div class="message">
		<?php
		$message = self::get_message();
		if ( isset( $message ) && ! empty( $message ) ) {
			echo $message;
		}
		?>
    </div>
    <div class="notice">
        <p style="color:red;font-size:20px;"><?php _e( 'What does this do ? Check out', 'speed-dating-with-zoom' ); ?>
            <a href="https://support.zoom.us/hc/en-us/articles/201363183-Managing-users">Zoom <?php _e( 'website', 'speed-dating-with-zoom' ); ?></a>. <?php _e( 'Please note this requires a PRO Zoom account or Higher.', 'speed-dating-with-zoom' ); ?>
        </p>
    </div>
    <form action="?post_type=zoom-meetings&page=zoom-video-conferencing-add-users" method="POST">
		<?php wp_nonce_field( '_zoom_add_user_nonce_action', '_zoom_add_user_nonce' ); ?>
        <table class="form-table">
            <tbody>
            <tr>
                <th scope="row"><label for="action"><?php _e( 'Action (Required).', 'speed-dating-with-zoom' ); ?></label></th>
                <td>
                    <select name="action" id="action">
                        <option value="create"><?php _e( 'Create', 'speed-dating-with-zoom' ); ?></option>
                        <option value="autoCreate"><?php _e( 'Auto Create', 'speed-dating-with-zoom' ); ?></option>
                        <option value="custCreate"><?php _e( 'Cust Create', 'speed-dating-with-zoom' ); ?></option>
                        <option value="ssoCreate"><?php _e( 'SSO Create', 'speed-dating-with-zoom' ); ?></option>
                    </select>
                    <div id="type-description">
                        <p class="description"><?php _e( 'Type of User (Required)', 'speed-dating-with-zoom' ); ?></p>
                        <p class="description">1.
                            <strong>"<?php _e( 'Create', 'speed-dating-with-zoom' ); ?>"</strong> - <?php _e( 'User will get an email sent from Zoom. There is a confirmation link in this email. User will then need to click this link to activate their account to the Zoom service. The user can set or change their password in Zoom.', 'speed-dating-with-zoom' ); ?>
                        </p>

                        <p class="description">2.
                            <strong>"<?php _e( 'Auto Create', 'speed-dating-with-zoom' ); ?>"</strong> - <?php _e( 'This action is provided for enterprise customer who has a managed domain. This feature is disabled by default because of the security risk involved in creating a user who does not belong to your domain without notifying the user.', 'speed-dating-with-zoom' ); ?>
                        </p>

                        <p class="description">3.
                            <strong>"<?php _e( 'Cust Create', 'speed-dating-with-zoom' ); ?>"</strong> - <?php _e( 'This action is provided for API partner only. User created in this way has no password and is not able to log into the Zoom web site or client.', 'speed-dating-with-zoom' ); ?>
                        </p>

                        <p class="description">4.
                            <strong>"<?php _e( 'SSO Create', 'speed-dating-with-zoom' ); ?>"</strong> - <?php _e( 'This action is provided for enabled ???Pre-provisioning SSO User??? option. User created in this way has no password. If it is not a basic user, will generate a Personal Vanity URL using user name (no domain) of the provisioning email. If user name or pmi is invalid or occupied, will use random number/random personal vanity URL.', 'speed-dating-with-zoom' ); ?>
                        </p></div>
                </td>
            </tr>
            <tr>
                <th scope="row"><label for="email"><?php _e( 'Email Address', 'speed-dating-with-zoom' ); ?></label></th>
                <td><input name="email" type="email" required placeholder="john@doe.com" class="regular-text ltr">
                    <p class="description" id="email-description"><?php _e( 'This address is used for zoom (Required).', 'speed-dating-with-zoom' ); ?></p>
                </td>
            </tr>
            <tr>
                <th scope="row"><label for="first_name"><?php _e( 'First Name', 'speed-dating-with-zoom' ); ?></label></th>
                <td>
                    <input type="text" name="first_name" id="first_name" class="regular-text">
                    <p class="description" id="first_name-description"><?php _e( 'First Name of the User (Required).', 'speed-dating-with-zoom' ); ?></p>
                </td>
            </tr>
            <tr>
                <th scope="row"><label for="last_name"><?php _e( 'Last Name', 'speed-dating-with-zoom' ); ?></label></th>
                <td><input type="text" name="last_name" id="last_name" class="regular-text">
                    <p class="description" id="last_name-description"><?php _e( 'Last Name of the User (Required).', 'speed-dating-with-zoom' ); ?></p>
                </td>
            </tr>
            <tr>
                <th scope="row"><label for="type"><?php _e( 'User Type (Required).', 'speed-dating-with-zoom' ); ?></label></th>
                <td>
                    <select name="type" id="type">
                        <option value="1"><?php _e( 'Basic User', 'speed-dating-with-zoom' ); ?></option>
                        <option value="2"><?php _e( 'Pro User', 'speed-dating-with-zoom' ); ?></option>
                    </select>
                    <p class="description" id="type-description"><?php _e( 'Type of User (Required)', 'speed-dating-with-zoom' ); ?></p>
                </td>
            </tr>
			<?php if ( vczapi_pro_version_active() ) { ?>
                <tr>
                    <th scope="row"><label for="type"><?php _e( 'Assign Zoom user to WordPress User', 'speed-dating-with-zoom' ); ?></label>
                    </th>
                    <td>
                        <select name="user_id" id="vczapi-select-wp-user-for-host"></select>
                        <p class="description"><?php _e( 'Select which WordPress user to assign. This will be only usable when the user approves your Zoom Invitation.', 'speed-dating-with-zoom' ); ?></p>
                    </td>
                </tr>
			<?php } ?>
            </tbody>
        </table>
        <p class="submit"><input type="submit" name="add_zoom_user" class="button button-primary" value="<?php _e( 'Create User', 'speed-dating-with-zoom' ); ?>"></p>
    </form>
</div>