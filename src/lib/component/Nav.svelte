<script>
    import {DarkMode, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from 'flowbite-svelte';
</script>

<Navbar class="border-b">
    <NavBrand href="/">
        <DarkMode/>
        <!--<img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />-->
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">HandsOn</span>
    </NavBrand>
    <NavHamburger/>
    <NavUl>
        <NavLi href="/">Translator</NavLi>
        <NavLi href="/about">Learn Sign Language</NavLi>
    </NavUl>
</Navbar>