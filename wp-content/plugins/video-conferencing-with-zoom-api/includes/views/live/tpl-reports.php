<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$zvc_reports = Zoom_Video_Conferencing_Reports::getInstance();

video_conferencing_zoom_api_show_like_popup(); ?>
<div class="wrap">
    <h1><?php _e( 'Reports', 'speed-dating-with-zoom' ); ?></h1>

    <h2 class="nav-tab-wrapper">
        <a href="?post_type=zoom-meetings&page=zoom-video-conferencing-reports&tab=zoom_daily_report" class="nav-tab <?php echo ! empty( $active_tab ) && $active_tab == 'zoom_daily_report' ? 'nav-tab-active' : ''; ?>"><?php _e( '1. Daily Report', 'speed-dating-with-zoom' ); ?></a>
        <a href="?post_type=zoom-meetings&page=zoom-video-conferencing-reports&tab=zoom_acount_report" class="nav-tab <?php echo ! empty( $active_tab ) && $active_tab == 'zoom_acount_report' ? 'nav-tab-active' : ''; ?>"><?php _e( '2. Account Report', 'speed-dating-with-zoom' ); ?></a>
    </h2>

    <div id="message" class="notice notice-warning">
        <h2><?php _e( 'ATTENTION: Zoom Account & Setting Prerequisites for Reports Section', 'speed-dating-with-zoom' ); ?></h2>

        <ol>
            <li><?php _e( 'Pro, Business, Enterprise, Education, or API Account. Check more', 'speed-dating-with-zoom' ); ?>
                <a target="_blank" href="https://support.zoom.us/hc/en-us/articles/201363173-Account-Types">here</a>.
            </li>
            <li><?php _e( 'Account owner or admin permissions to access Usage Reports for all users.', 'speed-dating-with-zoom' ); ?></li>
            <li><?php _e( 'Account Owner or a user is given the User activities reports.', 'speed-dating-with-zoom' ); ?>
                <a target="_blank" href="https://support.zoom.us/hc/en-us/articles/115001078646">role</a></li>
        </ol>
    </div>

	<?php if ( $active_tab == 'zoom_daily_report' ): ?><?php $result = $zvc_reports->get_daily_report_html();
		if ( isset( $_POST['zoom_check_month_year'] ) ) {
			if ( isset( $result->error ) ) {
				?>
                <div id="message" class="notice notice-error">
                    <p><?php echo $result->error->message; ?></p>
                </div>
				<?php
			}

			if ( isset( $result->message ) ) { ?>
                <div id="message" class="notice notice-error">
                    <p><?php echo $result->message; ?></p>
                </div>
			<?php }
		} ?>
        <div class="zoom_dateinput_field">
            <form action="?post_type=zoom-meetings&page=zoom-video-conferencing-reports" class="zvc_daily_reports_check_form" method="POST">
                <label><?php _e( 'Enter the date to check:', 'speed-dating-with-zoom' ); ?></label>
                <input name="zoom_month_year" id="reports_date"/> <input type="submit" name="zoom_check_month_year" value="<?php _e( 'Check', 'speed-dating-with-zoom' ); ?>">
            </form>
        </div>
        <table class="wp-list-table widefat fixed striped posts">
            <thead>
            <tr>
                <th><span><?php _e( 'Date', 'speed-dating-with-zoom' ); ?></span></th>
                <th><span><?php _e( 'Meetings', 'speed-dating-with-zoom' ); ?></span></th>
                <th><span><?php _e( 'New Users', 'speed-dating-with-zoom' ); ?></span></th>
                <th><span><?php _e( 'Participants', 'speed-dating-with-zoom' ); ?></span></th>
                <th><span><?php _e( 'Meeting Minutes', 'speed-dating-with-zoom' ); ?></span></th>
            </tr>
            </thead>
            <tbody id="the-list">
			<?php
			if ( isset( $result->dates ) ) {
				$count = count( $result->dates );
				foreach ( $result->dates as $date ) { ?>
                    <tr>
                        <td><?php echo date( 'F j, Y', strtotime( $date->date ) ); ?></td>
                        <td><?php echo ( $date->meetings > 0 ) ? '<strong style="color: #4300FF; font-size: 16px;">' . $date->meetings . '</strong>' : '-'; ?></td>
                        <td><?php echo ( $date->new_users > 0 ) ? '<strong style="color:#00A1B5; font-size: 16px;">' . $date->new_users . '</strong>' : '-'; ?></td>
                        <td><?php echo ( $date->participants > 0 ) ? '<strong style="color:#00AF00; font-size: 16px;">' . $date->participants . '</strong>' : '-'; ?></td>
                        <td><?php echo ( $date->meeting_minutes > 0 ) ? '<strong style="color:red; font-size: 16px;">' . $date->meeting_minutes . '</strong>' : '-'; ?></td>
                    </tr>
					<?php
				}
			} else { ?>
                <tr>
                    <td colspan="5"><?php _e( "Select a Date to Check", "speed-dating-with-zoom" ); ?>...</td>
                </tr>
				<?php
			}
			?>
            </tbody>
        </table>
	<?php elseif ( $active_tab == 'zoom_acount_report' ):
		$result = $zvc_reports->get_account_report_html();
		if ( isset( $_POST['zoom_check_account_info'] ) ) {
			if ( empty( $_POST['zoom_account_from'] ) || empty( $_POST['zoom_account_to'] ) ) { ?>
                <div id="message" class="notice notice-error">
					<?php if ( isset( $result->error ) ) { ?>
                        <p><?php echo $result->error->message; ?></p>
					<?php } else { ?>
                        <p><?php echo $result; ?></p>
					<?php } ?>
                </div>
			<?php } else {
				if ( isset( $result->message ) ) { ?>
                    <div id="message" class="notice notice-error">
                        <p><?php echo $result->message; ?></p>
                    </div>
				<?php } ?>

                <div id="message" class="notice notice-success">
                    <ul class="zoom_acount_lists">
                        <li><?php echo isset( $result->from ) ? __( 'Searching From: ', 'speed-dating-with-zoom' ) . $result->from . ' to ' : null; ?><?php echo isset( $result->to ) ? $result->to : null; ?></li>
                        <li><?php echo isset( $result->total_records ) ? __( 'Total Records Found: ', 'speed-dating-with-zoom' ) . $result->total_records : null; ?></li>
                        <li><?php echo isset( $result->total_meetings ) ? __( 'Total Meetings Held: ', 'speed-dating-with-zoom' ) . $result->total_meetings : null; ?></li>
                        <li><?php echo isset( $result->total_participants ) ? __( 'Total Participants Involved: ', 'speed-dating-with-zoom' ) . $result->total_participants : null; ?></li>
                        <li><?php echo isset( $result->total_meeting_minutes ) ? __( 'Total Meeting Minutes Combined: ', 'speed-dating-with-zoom' ) . $result->total_meeting_minutes : null; ?></li>
                    </ul>
                </div>
				<?php
			}
		}
		?>
        <div class="zoom_dateinput_field">
            <p><?php _e( 'Get account report for a specified period.', 'speed-dating-with-zoom' ); ?>
                <a onclick="window.print();" href="javascript:void(0);"><?php _e( 'Print', 'speed-dating-with-zoom' ); ?></a></p>
            <form action="?post_type=zoom-meetings&page=zoom-video-conferencing-reports&tab=zoom_acount_report" class="zvc_accounts_reports_check_form" method="POST">
                <label><?php _e( 'From', 'speed-dating-with-zoom' ); ?></label>
                <input name="zoom_account_from" class="zoom_account_datepicker"/>
                <label><?php _e( 'To', 'speed-dating-with-zoom' ); ?></label>
                <input name="zoom_account_to" class="zoom_account_datepicker"/> <input type="submit" name="zoom_check_account_info" value="Check">
            </form>
        </div>
        <table class="wp-list-table widefat fixed striped posts">
            <thead>
            <tr>
                <th><span><?php _e( 'By', 'speed-dating-with-zoom' ); ?></span></th>
                <th><span><?php _e( 'Meetings Held', 'speed-dating-with-zoom' ); ?></span></th>
                <th><span><?php _e( 'Total Participants', 'speed-dating-with-zoom' ); ?></span></th>
                <th><span><?php _e( 'Total Meeting Minutes', 'speed-dating-with-zoom' ); ?></span></th>
                <th><span><?php _e( 'Last Login Time', 'speed-dating-with-zoom' ); ?></span></th>
            </tr>
            </thead>
            <tbody id="the-list">
			<?php
			if ( isset( $result->users ) ) {
				$count = count( $result->users );
				if ( $count == 0 ) {
					echo '<tr colspan="5"><td>' . __( 'No Records Found..', 'speed-dating-with-zoom' ) . '</td></tr>';
				} else {
					foreach ( $result->users as $user ) { ?>
                        <tr>
                            <td><?php echo $user->email; ?></td>
                            <td><?php echo $user->meetings; ?></td>
                            <td><?php echo $user->participants; ?></td>
                            <td><?php echo $user->meeting_minutes; ?></td>
                            <td><?php echo date( 'F j, Y g:i a', strtotime( $user->last_login_time ) ); ?></td>
                        </tr>
						<?php
					}
				}
			} else { ?>
                <tr>
                    <td colspan="5"><?php _e( "Enter a value to Check...", "speed-dating-with-zoom" ); ?></td>
                </tr>
				<?php
			}
			?>
            </tbody>
        </table>
	<?php endif; ?>
</div>