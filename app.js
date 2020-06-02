const app = new Vue({
    el: "#app",

    data: {
        countDisplay: [],
        count: null
    },

    created: function () {
        this.startCounting()
    },
    
    methods: {

        startCounting() {
            var i;
            var multipleOfThree = false;
            var multipleOfFive = false;

            for(i = 1; i <= 100; i++) { 
                
                multipleOfThree = i % 3 === 0;
                multipleOfFive = i % 5 === 0;

                if(multipleOfThree && multipleOfFive) {
                    this.countDisplay.push("FizzBuzz")
                }
                else if(multipleOfThree) {
                    this.countDisplay.push("Fizz") 
                }
                else if(multipleOfFive) {
                    this.countDisplay.push("Buzz")
                }
                else {
                    this.countDisplay.push(i)
                }
            }
       }
       
    }
})