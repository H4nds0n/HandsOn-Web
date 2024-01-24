<!--
The user has the possibility to save his texts in the TextArea.
The saved Texts will be shown here.
-->
<script>
    import {
        Drawer,
        CloseButton,
        Table,
        TableBody,
        TableBodyRow, TableBodyCell
    } from 'flowbite-svelte';
    import {InfoCircleSolid} from 'flowbite-svelte-icons';
    import {sineIn} from 'svelte/easing';
    import {hideHistory, textHistory} from "$lib/scripts/stores.js";

    let transitionParamsRight = {
        x: 320,
        duration: 200,
        easing: sineIn
    };
</script>

<Drawer placement="right" transitionType="fly" transitionParams={transitionParamsRight} bind:hidden={$hideHistory}
        id="sidebar6" class="w-1/3">
    <div class="flex items-center">
        <h5 id="drawer-label"
            class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
            <InfoCircleSolid class="w-4 h-4 me-2.5"/>
            Text History
        </h5>
        <CloseButton on:click={() => hideHistory.set(true)} class="mb-4 dark:text-white"/>
    </div>
    <Table class="max-w-full">
        <TableBody>
            {#each $textHistory as item}
                <TableBodyRow>
                    <TableBodyCell class="whitespace-normal break-all">{item}</TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
</Drawer>