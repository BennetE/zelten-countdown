<script lang="ts">
    import CountdownBox from "./CountdownBox.svelte";
    import { getTimeInterval } from "./helper/getTimeInterval"

    const zeltenDates = [
        new Date(2022, 6 - 1, 24, 12),
        new Date(2023, 6 - 1, 30, 12),
        new Date(2024, 6 - 1, 28, 12),
        new Date(2025, 6 - 1, 27, 12),
        new Date(2026, 6 - 1, 26, 12),
        new Date(2027, 6 - 1, 25, 12)
    ];

    const getNextEvent = zeltenDates.find(date => new Date().getTime() < date.getTime());
    let timeInterval = getNextEvent ? getTimeInterval(getNextEvent) : null;

    setInterval(() => {
        timeInterval = getNextEvent ? getTimeInterval(getNextEvent) : null;
    }, 1000);
</script>

<main>
    <h1>Nächstes Zelten in:</h1>
    <div id="countdown">
        <CountdownBox number={timeInterval?.days || 0} text="Tage" textSingular="Tag"/>
        <CountdownBox number={timeInterval?.hours || 0} text="Stunden" textSingular="Stunde"/>
        <CountdownBox number={timeInterval?.minutes || 0} text="Minuten" textSingular="Minute"/>
        <CountdownBox number={timeInterval?.seconds || 0} text="Sekunden" textSingular="Sekunde"/>
    </div>
</main>

<style>
    main {
        /*border: 1px solid red;*/
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