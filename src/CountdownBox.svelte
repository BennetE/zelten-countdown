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
        /*color: #c40;*/
        color: #226e93;
    }

    #text {
        font-size: 20px;
    }

    @media only screen and (max-width: 800px) {
        main {
            height: 70px;
            width: 80px;
        }
        #number {
            font-size: 30px;
        }
        #text {
            font-size: 16px;
        }
    }
</style>