<script>
	import {MaterialApp,Button} from 'svelte-materialify';
	import Sun32 from "carbon-icons-svelte/lib/Sun32";
	import Moon32 from "carbon-icons-svelte/lib/Moon32";
	import Navbar from "./components/Navbar.svelte";
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
<MaterialApp {theme}>
	<Navbar toggleTheme={toggleTheme} theme={theme}/>
	<div>Text</div>
  </MaterialApp>