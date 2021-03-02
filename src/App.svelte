<script>
	import Navbar from "./components/Navbar.svelte";
	import Chart from "./components/Chart.svelte";
	import "@carbon/charts/styles-g100.css";
	import "carbon-components-svelte/css/g100.css";
	import {Content} from "carbon-components-svelte";
	let theme="light"
	
	function toggleTheme() {
		if (theme==="light") {
			theme="dark"
		}
		else {
			theme = "light"
		}
	}
</script>
<div>
	<Navbar toggleTheme={toggleTheme} theme={theme}/>
		<Chart/>
</div>