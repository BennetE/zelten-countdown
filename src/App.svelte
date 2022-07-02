<script lang="ts">
    import CountdownBox from "./CountdownBox.svelte";
    import { getTimeInterval } from "./helper/getTimeInterval"

    const endDate = new Date(2022, 7 - 1, 3, 0, 6);
    let timeInterval = getTimeInterval(endDate);

    setInterval(() => {
        timeInterval = getTimeInterval(endDate)
    }, 1000);
</script>

<main>
    <h1>Nächstes Zelten in:</h1>
    <div id="countdown">
        <CountdownBox number={timeInterval.days} text="Tage" textSingular="Tag"/>
        <CountdownBox number={timeInterval.hours} text="Stunden" textSingular="Stunde"/>
        <CountdownBox number={timeInterval.minutes} text="Minuten" textSingular="Minute"/>
        <CountdownBox number={timeInterval.seconds} text="Sekunden" textSingular="Sekunde"/>
    </div>
</main>

<style>
    main {
        border: 1px solid red;
        height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 40px;
        font-weight: 400;
        color: #086;
        margin: 0;
    }

    #countdown {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 800px) {
        h1 {
            font-size: 6vw;
        }
    }
</style>