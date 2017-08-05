# Installation

You dont have to add any Component to your root Vue instance, because Fullpage is a global Component. Just include the plugin with Vue.use.
You should also include the Event Bus to call Events on the page.
```
import Event from 'vue-events';
Vue.use(Event);

import fullpage from 'z-fullpage';
Vue.use(fullpage);
```

After installation, you should refer to the style.less file, which includes all the styles for the fullpage. 

For Laravel Mix, add the following to your webpack.mix.js
```
mix.webpackConfig({
	resolve: {
		alias: {
			'fullpageStyle.less': path.resolve(__dirname, 'node_modules/z-fullpage/style.less')
		}
	}
});
```

# Example template:
```
<fullpage>
	<div slot="content">
		<statusbar layout="october"></statusbar>
		<!-- Your content here -->
	</div>
	<div slot="footer">
		<fullpagefooter (dark|bright)>
			<!-- Your footer content here -->
		</fullpagefooter>
	</div>
</fullpage>
```

The footer slot is optional. If you dont like a footer - just remove that part. The footer will be a sticky footer that is always 
on the bottom of the page.  
Also the statusbar is optional.

# Props:
### backgroundcolor
Set the Background Color of the body:
```
<fullpage backgroundcolor="#00ff00">
```

# Add a Heading
You should install "z-ui" and include the heading component.
```
npm install z-ui
```
```
import {heading} from 'z-ui';
Vue.use(heading);
```
Then, you can apply a heading to your fullpage:
```
<fullpage>
    <heading title="Login"></heading>
</fullpage>
```
