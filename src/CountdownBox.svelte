<script lang="ts">
    import { twoDigitNumber } from "./helper/twoDigitNumber";

    export let number: number;
    export let text: string;
    export let textSingular: string;
</script>

<main>
    <div id="number">{twoDigitNumber(number)}</div>
    <div id="text">{number === 1 ? textSingular : text}</div>
</main>

<style>
    main {
        /*border: 1px solid red;*/
        height: 100px;
        width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #number {
        font-size: 45px;
        font-weight: bold;
        color: #c40;
    }

    #text {
        font-size: 20px;
    }
</style>