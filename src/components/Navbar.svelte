<script>
    import {
      AppBar,
      Button,
      Icon,
      NavigationDrawer,
      Overlay,
      List,
      ListItem,
      Menu
    } from 'svelte-materialify';
    import Menu24 from "carbon-icons-svelte/lib/Menu24";
    import Sun16 from "carbon-icons-svelte/lib/Sun16";
    import Moon16 from "carbon-icons-svelte/lib/Moon16";
    import Close24 from "carbon-icons-svelte/lib/Close24";
    import { elasticOut } from 'svelte/easing';
    export let toggleTheme;
    export let theme;
    let active = false;
  function toggleNavigation() {
    active = !active;
  }
  </script>
    <AppBar>
      <div slot="icon">
        <Button on:click={toggleNavigation} fab depressed>
          {#if active}
          <Close24/>
          {:else}
          <Menu24/>
          {/if}
        </Button>
      </div>
      <span slot="title"> Lorem Ipsum </span>
    </AppBar>
    <NavigationDrawer inOpts={{ easing: elasticOut, duration: 500 }} style="position: relative; height:100vh" {active}>
      <Button on:click="{toggleTheme}" depressed block style="text-align:right;">
        {#if theme==="light"}
        <Moon16/> Go Dark
        {:else}
        <Sun16/> Go Light
        {/if}
      </Button>
    </NavigationDrawer>
    <Overlay {active} absolute on:click={toggleNavigation} index={1} />
    <div>TEXT</div>