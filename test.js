


// Functions for onclick event








    function test5() {
        const res = lengthSort(strArray2);
        console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
    }

// Function for implementation


    function displayOccurrences(array) {
        //TODO implement here
    }



    function lengthSort(array) {
        //TODO implement here
    }

const names = ["whale", "squid", "turtle", "coral", "starfish"];
const NamesList =  () => (
    <div>
        <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
    </div>
);