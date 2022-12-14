<table id="vczapi-show-webinars-list-table" class="vczapi-user-meeting-list">
    <thead>
    <tr>
        <th><?php _e( 'Topic', 'speed-dating-with-zoom' ); ?></th>
        <th><?php _e( 'Start Time', 'speed-dating-with-zoom' ); ?></th>
        <th><?php _e( 'Timezone', 'speed-dating-with-zoom' ); ?></th>
        <th><?php _e( 'Actions', 'speed-dating-with-zoom' ); ?></th>
    </tr>
    </thead>
    <tbody>
	<?php
	if ( ! empty( $args ) ) {
		foreach ( $args as $webinar ) {
			$pass = ! empty( $webinar->password ) ? $webinar->password : false;
			?>
            <tr>
                <td><?php echo $webinar->topic; ?></td>
                <td><?php echo vczapi_dateConverter( $webinar->start_time, $webinar->timezone ); ?></td>
                <td><?php echo $webinar->timezone; ?></td>
                <td>
                    <a href="<?php echo $webinar->join_url; ?>"><?php _e( 'Join via App', 'speed-dating-with-zoom' ); ?></a><?php echo vczapi_get_browser_join_shortcode( $webinar->id, $pass, false, ' / ' ); ?>
                </td>
            </tr>
			<?php
		}
	}
	?>
    </tbody>
</table>