<?php
// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$users = json_decode( zoom_conference()->listUsers( 1, array( 'status' => 'pending' ) ) );
?>
<div class="wrap">
    <h2><?php _e( "Pending Approval Users", "speed-dating-with-zoom" ); ?></h2>
    <a href="?post_type=zoom-meetings&page=zoom-video-conferencing-list-users"><?php _e( 'Check Available Users', 'speed-dating-with-zoom' ); ?></a>
    <div class="zvc_listing_table">
        <table id="zvc_users_list_table" class="display" width="100%">
            <thead>
            <tr>
                <th class="zvc-text-left"><?php _e( 'SN', 'speed-dating-with-zoom' ); ?></th>
                <th class="zvc-text-left"><?php _e( 'User ID', 'speed-dating-with-zoom' ); ?></th>
                <th class="zvc-text-left"><?php _e( 'Email', 'speed-dating-with-zoom' ); ?></th>
                <th class="zvc-text-left"><?php _e( 'Created On', 'speed-dating-with-zoom' ); ?></th>
            </tr>
            </thead>
            <tbody>
			<?php
			$count = 1;
			if ( empty( $users->code ) && ! empty( $users->users ) ) {
				foreach ( $users->users as $user ) {
					?>
                    <tr>
                        <td><?php echo $count ++; ?></td>
                        <td><?php echo $user->id; ?></td>
                        <td><?php echo $user->email; ?></td>
                        <td><?php echo ! empty( $user->created_at ) ? date( 'F j, Y, g:i a', strtotime( $user->created_at ) ) : "N/A"; ?></td>
                    </tr>
					<?php
				}
			}
			?>
            </tbody>
        </table>
    </div>
</div>
