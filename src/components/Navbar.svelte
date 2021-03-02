<script>
     import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SideNavDivider,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
    import Menu24 from "carbon-icons-svelte/lib/Menu24";
    import Sun16 from "carbon-icons-svelte/lib/Sun16";
    import Moon16 from "carbon-icons-svelte/lib/Moon16";
    export let toggleTheme;
    export let theme;
    let isSideNavOpen=false;
  </script>
    <Header company="Lorem" platformName="Ipsum" bind:isSideNavOpen>
      <div slot="skip-to-content">
        <SkipToContent/>
      </div>
      <HeaderNav>
        <HeaderNavItem href="/" text="Link 1" />
        <HeaderNavItem href="/" text="Link 2" />
        <HeaderNavItem href="/" text="Link 3" />
        <HeaderNavMenu text="Menu">
          <HeaderNavItem href="/" text="Link 1" />
          <HeaderNavItem href="/" text="Link 2" />
          <HeaderNavItem href="/" text="Link 3" />
        </HeaderNavMenu>
        <HeaderNavItem href="/" text="Link 4" />
      </HeaderNav>
    </Header>
    <SideNav bind:isOpen={isSideNavOpen}>
      <SideNavItems>
        <SideNavLink text="Link 1" />
        <SideNavLink text="Link 2" />
        <SideNavLink text="Link 3" />
        <SideNavMenu text="Menu">
          <SideNavMenuItem href="/" text="Link 1" />
          <SideNavMenuItem href="/" text="Link 2" />
          <SideNavMenuItem href="/" text="Link 3" />
        </SideNavMenu>
        <SideNavDivider />
        <SideNavLink text="Link 4" />
      </SideNavItems>
    </SideNav>