<template>
	<div class="cp-fullpage" :style="{'background': containerBg}">
		<div class="center-vertical">
			<div class="middle">
				<div class="real-middle-container">
					<div class="real-middle">
						<appheading line small></appheading>
						<div class="container-fluid">
							<slot name="content"></slot>
						</div>
					</div>
				</div>
			</div>
		</div>
		<slot name="footer"></slot>
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
			display: table-row;
			vertical-align: middle;
			height: 100%;
			& > .middle {
				display: table;
				width: 100%;
				height: 100%;
				& > .alert.app-error {
					margin: 0;
				}
				.real-middle-container {
					display: table-cell;
					width: 100%;
					height: 100%;
					vertical-align: middle;
					.real-middle {
						display: block;
						margin: 30px auto;
						background: white;
						flex: 95% 0 0;
						border: @bg-body solid 5px;
						box-shadow: 0 0 5px @bg-bright;
						max-width: 800px;
						#page-heading {
							margin-bottom: 0 !important;
						}
						.container-fluid {
							padding: 10px;
						}
						@media screen and (max-width: 840px) {
							width: 95%;
						}
					}
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
			backgroundimage: {
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
