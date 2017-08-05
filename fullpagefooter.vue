<template>
	<div id="footer" :class="{'footer-bright': bright, 'footer-dark': dark}">
		<slot></slot>
	</div>
</template>

<style lang="less">
	@import "~fullpageStyle";

	#footer {
		text-align: center;
		background: @footer-bg;
		padding: @footer-padding;
		margin-top: 0;
		box-shadow: 0 0 5px @bg-bright;
		&.footer-bright {
			color: #222222;
		}
		&.footer-dark {
			color: white;
		}
	}
</style>


<script>
	export default {
		props: {
			dark: {
				type: Boolean
			},
			bright: {
				type: Boolean
			}
		}
	}
</script>
