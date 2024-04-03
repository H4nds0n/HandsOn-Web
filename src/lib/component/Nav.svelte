<!--
Navbar - switch between Translator and Study session
-->
<script>
    import {page} from '$app/stores';
    import {DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Label} from 'flowbite-svelte';
    import {ArrowRightOutline, BarsSolid} from "flowbite-svelte-icons";
    import {hideHistory} from "$lib/scripts/stores.js";

    let activeClass = "text-accent-200 font-bold dark:text-accent-50"

    $: activeUrl = $page.url.pathname;
</script>

<div class="sticky">
    <Navbar let:hidden class="border-b">
        <NavBrand href="/homepage">
            <!--<img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />-->
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">HandsOn</span>
        </NavBrand>
        <div class="flex md:order-last">
            <DarkMode/>
            <Button outline={false} color="alternative" class="!p-2 border-0" size="xl" on:click={()=>hideHistory.set(false)}>
                <BarsSolid class="w-4 h-4"/>
            </Button>
        </div>
        <NavHamburger/>
        <NavUl {hidden} {activeUrl} {activeClass} class="ml-auto">
            <NavLi href="/homepage" active={activeUrl === '/homepage'}>Homepage</NavLi>
            <NavLi href="/" active={activeUrl === '/'}>Translator</NavLi>
            <NavLi href="/study-ASL" active={activeUrl === "/study-ASL"}>Learn Sign Language</NavLi>
            <NavLi href="/login" active={activeUrl === "/login"}>Login</NavLi>
            <NavLi href="/register" active={activeUrl === "/register"}>Register</NavLi>
        </NavUl>

    </Navbar>
</div>