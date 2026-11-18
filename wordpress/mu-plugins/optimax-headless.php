<?php
/**
 * Plugin Name: Optimax Headless
 * Description: Content model, REST fields, headless lockdown and Next.js revalidation for optimaxstudio.com.
 * Version:     1.0.0
 *
 * Install: copy to wp-content/mu-plugins/optimax-headless.php
 *
 * wp-config.php:
 *   define( 'OPTIMAX_FRONTEND_URL', 'https://optimaxstudio.com' );
 *   define( 'OPTIMAX_REVALIDATE_SECRET', '<same value as WORDPRESS_REVALIDATE_SECRET in Next.js>' );
 *
 * Keep field keys in sync with lib/wordpress/content.ts.
 */

defined( 'ABSPATH' ) || exit;

function optimax_frontend_url() {
	return untrailingslashit( defined( 'OPTIMAX_FRONTEND_URL' ) ? OPTIMAX_FRONTEND_URL : 'https://optimaxstudio.com' );
}

/* ── Content types ────────────────────────────────────────────── */

function optimax_post_types() {
	// type => [ plural, singular, rest_base / frontend path, icon ]
	return array(
		'service'    => array( 'Services', 'Service', 'services', 'dashicons-hammer' ),
		'industry'   => array( 'Industries', 'Industry', 'industries', 'dashicons-building' ),
		'location'   => array( 'Locations', 'Location', 'locations', 'dashicons-location' ),
		'case_study' => array( 'Case Studies', 'Case Study', 'case-studies', 'dashicons-chart-line' ),
		'faq'        => array( 'FAQs', 'FAQ', 'faqs', 'dashicons-editor-help' ),
	);
}

add_action( 'init', function () {
	foreach ( optimax_post_types() as $type => list( $plural, $singular, $base, $icon ) ) {
		register_post_type( $type, array(
			'labels'       => array(
				'name'          => $plural,
				'singular_name' => $singular,
				'add_new_item'  => "Add New $singular",
				'edit_item'     => "Edit $singular",
				'all_items'     => "All $plural",
			),
			'public'       => true,
			'has_archive'  => false,
			'show_in_rest' => true,
			'rest_base'    => $base,
			'menu_icon'    => $icon,
			'rewrite'      => array( 'slug' => $base ),
			'supports'     => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'page-attributes', 'custom-fields' ),
		) );
	}

	foreach ( optimax_fields() as $type => $fields ) {
		foreach ( $fields as $key => $field ) {
			register_post_meta( $type, $key, array(
				'type'              => 'string',
				'single'            => true,
				'default'           => '',
				'show_in_rest'      => true,
				'sanitize_callback' => optimax_sanitizer( $field['type'] ),
				'auth_callback'     => function () {
					return current_user_can( 'edit_posts' );
				},
			) );
		}
	}
} );

add_post_type_support( 'page', 'excerpt' );

/* ── Fields ───────────────────────────────────────────────────── */

const OPTIMAX_LIST_HELP  = 'One item per line.';
const OPTIMAX_FAQ_HELP   = 'One per line: Question | Answer';
const OPTIMAX_PAIRS_HELP = 'One per line: Title | Description';

function optimax_fields() {
	$seo = array(
		'seo_title'       => array( 'label' => 'SEO title', 'type' => 'text', 'help' => 'Shown in Google. "| Optimax Studio" is added automatically. Blank = page title.' ),
		'seo_description' => array( 'label' => 'Meta description', 'type' => 'textarea', 'help' => '140–160 characters. Blank = excerpt.' ),
		'og_image'        => array( 'label' => 'Social share image URL', 'type' => 'url', 'help' => 'Blank = featured image.' ),
	);

	return array(
		'post'       => $seo + array(
			'read_time'   => array( 'label' => 'Read time (minutes)', 'type' => 'text', 'help' => 'Blank = calculated automatically.' ),
			'author_role' => array( 'label' => 'Author role', 'type' => 'text' ),
			'author_bio'  => array( 'label' => 'Author bio', 'type' => 'textarea' ),
		),
		'page'       => $seo,
		'service'    => $seo + array(
			'tagline'    => array( 'label' => 'Tagline', 'type' => 'text' ),
			'icon'       => array( 'label' => 'Icon', 'type' => 'text', 'help' => 'Lucide icon name, e.g. Globe, Megaphone, Search.' ),
			'what_we_do' => array( 'label' => 'What we do', 'type' => 'textarea', 'help' => OPTIMAX_LIST_HELP ),
			'process'    => array( 'label' => 'Process steps', 'type' => 'textarea', 'help' => OPTIMAX_PAIRS_HELP ),
			'stats'      => array( 'label' => 'Headline stat', 'type' => 'text', 'help' => 'Value | Label — only verifiable numbers.' ),
			'faqs'       => array( 'label' => 'FAQs', 'type' => 'textarea', 'help' => OPTIMAX_FAQ_HELP ),
		),
		'industry'   => $seo + array(
			'tagline'           => array( 'label' => 'Tagline', 'type' => 'text' ),
			'icon'              => array( 'label' => 'Icon', 'type' => 'text', 'help' => 'Lucide icon name, e.g. Building2, GraduationCap.' ),
			'images'            => array( 'label' => 'Gallery image URLs', 'type' => 'textarea', 'help' => OPTIMAX_LIST_HELP ),
			'pain_points'       => array( 'label' => 'Pain points', 'type' => 'textarea', 'help' => OPTIMAX_LIST_HELP ),
			'solutions'         => array( 'label' => 'Solutions', 'type' => 'textarea', 'help' => OPTIMAX_PAIRS_HELP ),
			'relevant_services' => array( 'label' => 'Relevant services', 'type' => 'textarea', 'help' => 'Service names as shown on the site, one per line.' ),
			'relevant_products' => array( 'label' => 'Relevant products', 'type' => 'textarea', 'help' => OPTIMAX_LIST_HELP ),
			'faqs'              => array( 'label' => 'FAQs', 'type' => 'textarea', 'help' => OPTIMAX_FAQ_HELP ),
			'case_study'        => array( 'label' => 'Featured case study', 'type' => 'text', 'help' => 'Client label | Result | Metric | Short description | case-study-slug' ),
		),
		'case_study' => $seo + array(
			'client_label'   => array( 'label' => 'Client label (anonymised)', 'type' => 'text', 'help' => 'e.g. "Gurgaon real-estate developer". No client names without written approval.' ),
			'industry'       => array( 'label' => 'Industry', 'type' => 'text' ),
			'city'           => array( 'label' => 'City', 'type' => 'text', 'help' => 'Only where the project genuinely took place.' ),
			'result'         => array( 'label' => 'Headline result', 'type' => 'text', 'help' => 'e.g. 3x' ),
			'metric'         => array( 'label' => 'Headline metric', 'type' => 'text', 'help' => 'e.g. More qualified leads' ),
			'hero_metrics'   => array( 'label' => 'Hero metrics', 'type' => 'textarea', 'help' => 'One per line: Value | Label' ),
			'approach_steps' => array( 'label' => 'Approach steps', 'type' => 'textarea', 'help' => OPTIMAX_PAIRS_HELP ),
			'results'        => array( 'label' => 'Results', 'type' => 'textarea', 'help' => 'One per line: Value | Label | Description' ),
			'testimonial'    => array( 'label' => 'Testimonial', 'type' => 'textarea', 'help' => 'Quote | Name | Role | Company — with client approval only.' ),
		),
		'location'   => $seo + array(
			'city'             => array( 'label' => 'City', 'type' => 'text' ),
			'region'           => array( 'label' => 'State / region', 'type' => 'text', 'help' => 'e.g. Haryana' ),
			'office_status'    => array( 'label' => 'Office status', 'type' => 'select', 'options' => array(
				'remote'      => 'No office — served remotely / visits',
				'branch'      => 'Branch office',
				'head_office' => 'Head office',
			) ),
			'address'          => array( 'label' => 'Street address', 'type' => 'text', 'help' => 'Only for a real, staffed office. Must match Google Business Profile.' ),
			'postal_code'      => array( 'label' => 'PIN code', 'type' => 'text' ),
			'phone'            => array( 'label' => 'Phone', 'type' => 'text' ),
			'hours'            => array( 'label' => 'Opening hours', 'type' => 'text', 'help' => 'e.g. Mon–Sat 10:00–19:00' ),
			'map_url'          => array( 'label' => 'Google Maps URL', 'type' => 'url' ),
			'latitude'         => array( 'label' => 'Latitude', 'type' => 'text' ),
			'longitude'        => array( 'label' => 'Longitude', 'type' => 'text' ),
			'related_services' => array( 'label' => 'Related service slugs', 'type' => 'textarea', 'help' => 'e.g. web-design-development — one per line.' ),
			'faqs'             => array( 'label' => 'Local FAQs', 'type' => 'textarea', 'help' => OPTIMAX_FAQ_HELP ),
		),
		'faq'        => array(
			'faq_group' => array( 'label' => 'Group', 'type' => 'text', 'help' => 'Where it appears, e.g. "home". The answer goes in the main editor.' ),
		),
	);
}

function optimax_sanitizer( $type ) {
	switch ( $type ) {
		case 'textarea':
			return 'sanitize_textarea_field';
		case 'url':
			return 'esc_url_raw';
		default:
			return 'sanitize_text_field';
	}
}

/* ── Meta box UI ──────────────────────────────────────────────── */

add_action( 'add_meta_boxes', function () {
	foreach ( array_keys( optimax_fields() ) as $type ) {
		add_meta_box( 'optimax_fields', 'Optimax fields', 'optimax_render_meta_box', $type, 'normal', 'high' );
	}
} );

function optimax_render_meta_box( $post ) {
	wp_nonce_field( 'optimax_save_fields', 'optimax_fields_nonce' );
	echo '<table class="form-table" role="presentation"><tbody>';
	foreach ( optimax_fields()[ $post->post_type ] as $key => $field ) {
		$value = get_post_meta( $post->ID, $key, true );
		$id    = 'optimax_' . $key;
		printf( '<tr><th scope="row"><label for="%s">%s</label></th><td>', esc_attr( $id ), esc_html( $field['label'] ) );
		if ( 'textarea' === $field['type'] ) {
			printf( '<textarea class="large-text" rows="4" id="%1$s" name="%1$s">%2$s</textarea>', esc_attr( $id ), esc_textarea( $value ) );
		} elseif ( 'select' === $field['type'] ) {
			printf( '<select id="%1$s" name="%1$s">', esc_attr( $id ) );
			foreach ( $field['options'] as $option => $label ) {
				printf( '<option value="%s"%s>%s</option>', esc_attr( $option ), selected( $value, $option, false ), esc_html( $label ) );
			}
			echo '</select>';
		} else {
			printf( '<input class="large-text" type="%1$s" id="%2$s" name="%2$s" value="%3$s" />', 'url' === $field['type'] ? 'url' : 'text', esc_attr( $id ), esc_attr( $value ) );
		}
		if ( ! empty( $field['help'] ) ) {
			printf( '<p class="description">%s</p>', esc_html( $field['help'] ) );
		}
		echo '</td></tr>';
	}
	echo '</tbody></table>';
}

add_action( 'save_post', function ( $post_id, $post ) {
	if ( ! isset( $_POST['optimax_fields_nonce'] )
		|| ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['optimax_fields_nonce'] ) ), 'optimax_save_fields' )
		|| ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
		|| ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}
	foreach ( optimax_fields()[ $post->post_type ] ?? array() as $key => $field ) {
		$name = 'optimax_' . $key;
		if ( isset( $_POST[ $name ] ) ) {
			update_post_meta( $post_id, $key, call_user_func( optimax_sanitizer( $field['type'] ), wp_unslash( $_POST[ $name ] ) ) );
		}
	}
}, 10, 2 );

/* ── REST: featured image, categories, author in one field ───── */

add_action( 'rest_api_init', function () {
	register_rest_field( array_merge( array( 'post', 'page' ), array_keys( optimax_post_types() ) ), 'optimax', array(
		'schema'       => array( 'type' => 'object', 'context' => array( 'view', 'edit' ) ),
		'get_callback' => function ( $data ) {
			$id       = $data['id'];
			$thumb_id = get_post_thumbnail_id( $id );
			$src      = $thumb_id ? wp_get_attachment_image_src( $thumb_id, 'full' ) : null;
			return array(
				'featured_image' => $src ? array(
					'url'    => $src[0],
					'width'  => $src[1],
					'height' => $src[2],
					'alt'    => (string) get_post_meta( $thumb_id, '_wp_attachment_image_alt', true ),
				) : null,
				'categories'     => 'post' === get_post_type( $id ) ? wp_list_pluck( get_the_category( $id ), 'name' ) : array(),
				'author'         => get_the_author_meta( 'display_name', get_post_field( 'post_author', $id ) ),
			);
		},
	) );
} );

// Don't expose usernames to anonymous REST clients.
add_filter( 'rest_endpoints', function ( $endpoints ) {
	if ( ! is_user_logged_in() ) {
		unset( $endpoints['/wp/v2/users'], $endpoints['/wp/v2/users/(?P<id>[\d]+)'] );
	}
	return $endpoints;
} );

/* ── Headless lockdown: optimaxstudio.com is the only public site ── */

add_filter( 'wp_sitemaps_enabled', '__return_false' );

add_action( 'send_headers', function () {
	header( 'X-Robots-Tag: noindex, nofollow', true );
} );

function optimax_frontend_path( $post ) {
	$types = optimax_post_types();
	switch ( $post->post_type ) {
		case 'post':
			return '/blog/' . $post->post_name;
		case 'page':
			return '/' . $post->post_name;
		case 'faq':
			return '/';
		default:
			return isset( $types[ $post->post_type ] ) ? '/' . $types[ $post->post_type ][2] . '/' . $post->post_name : '/';
	}
}

add_action( 'template_redirect', function () {
	if ( is_preview() || wp_doing_ajax() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
		return;
	}
	$path = '/';
	if ( is_singular() ) {
		$path = optimax_frontend_path( get_queried_object() );
	} elseif ( is_home() || is_category() || is_tag() || is_archive() ) {
		$path = '/blog';
	}
	wp_redirect( optimax_frontend_url() . $path, 301, 'Optimax Headless' );
	exit;
} );

/* ── Revalidate Next.js after publish / update / unpublish ───── */

add_action( 'wp_after_insert_post', function ( $post_id, $post, $update, $post_before ) {
	if ( ! defined( 'OPTIMAX_REVALIDATE_SECRET' ) || wp_is_post_revision( $post_id ) || wp_is_post_autosave( $post_id ) ) {
		return;
	}
	if ( ! isset( optimax_fields()[ $post->post_type ] ) ) {
		return;
	}
	$was_public = $post_before && 'publish' === $post_before->post_status;
	if ( 'publish' !== $post->post_status && ! $was_public ) {
		return;
	}
	wp_remote_post( optimax_frontend_url() . '/api/revalidate', array(
		'blocking' => false,
		'timeout'  => 5,
		'headers'  => array(
			'Content-Type'        => 'application/json',
			'x-revalidate-secret' => OPTIMAX_REVALIDATE_SECRET,
		),
		'body'     => wp_json_encode( array(
			'type' => $post->post_type,
			'path' => optimax_frontend_path( $post ),
		) ),
	) );
}, 10, 4 );
