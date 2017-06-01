<template>
	<div class="cp-fullpage" :style="{'background': containerBg}">
		<div class="center-vertical">
			<div class="middle">
				<app-heading line small></app-heading>
				<div class="container-fluid">
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less">
	@import "~fullpageStyle";

	html, body {
		height: 100%;
	}
	#app, .cp-fullpage {
		height: 100%;
	}
	.cp-fullpage {
		display: table;
		width: 100%;
		& >  .center-vertical {
			display: table-cell;
			vertical-align: middle;
			& > .middle {
				display: block;
				background: white;
				flex: 95% 0 0;
				border: @bg-body solid 5px;
				box-shadow: 0 0 5px @bg-bright;
				max-width: 800px;
				padding-bottom: 15px;
				margin: 0 auto;
				& > .alert.app-error {
					margin: 0;
				}
				@media screen and (max-width: 840px) {
					width: 95%;
				}
			}
		}
	}
</style>

<script>
	export default {
		props: {
			backgroundcolor: {
				type: String,
				required: false
			},
			bacckgroundimage: {
				type: String,
				required: false
			}
		},
		computed: {
			containerBg: function() {
				if (this.backgroundcolor) {
					return this.backgroundcolor;
				}
				if (this.backgroundimage) {
					return 'url(' + this.backgroundimage + ')';
				}
			}
		}
	}
</script>
