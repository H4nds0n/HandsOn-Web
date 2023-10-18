<script>
    import {page} from '$app/stores';
    import {DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger} from 'flowbite-svelte';

    $: activeUrl = $page.url.pathname;
</script>

<div class="sticky">
    <Navbar class="border-b">
        <NavBrand href="/">
            <!--<img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />-->
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">HandsOn</span>
        </NavBrand>
        <div class="flex md:order-last">
            <DarkMode/>
        </div>
        <NavHamburger/>
        <NavUl {activeUrl} class="ml-auto">
            <NavLi href="/" active={activeUrl === '/'}>Translator</NavLi>
            <NavLi href="/study-ASL" active={activeUrl === "/study-ASL"}>Learn Sign Language</NavLi>
        </NavUl>
    </Navbar>
</div>