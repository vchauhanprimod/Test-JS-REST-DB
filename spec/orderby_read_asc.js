describe("Get a particular number of rows from a particular table of desired database ordered by a given field", function() {
    // test case to logout via rest call
    it("Should be able to perform a successful ajax request on resource "+window.base_url+"/users?limit=50&by=salary&order=asc to Get 5 rows from the users table ordered by the first_name field", function() {
        var asyncCallComplete, result,
        _this = this;
        // asyncCallComplete is set to true when the ajax call is complete
        asyncCallComplete = false;

        // result stores the result of the successful ajax call
        result = null;

        // SECTION 1 - call asynchronous function
        runs(function() {
            $.ajax({
                url: window.base_url+"/users?limit=5&by=salary&order=asc",
                type: "GET",
                success: function(data) {
                    asyncCallComplete = true;
                    result = data;
                // console.log(data)
                }
            }); 

        });

        // SECTION 2 - wait for the asynchronous call to complete
        waitsFor(function() {
            return asyncCallComplete !== false;
        });

        // SECTION 3 - perform tests
        return runs(function() {
            var limit = expect(result['data']).toBeLessThan(6);
            if(limit){
                return expect (result['data'].isSorted()).toEqual(1);
            }
            else{
                return false;
            }
        });
    });
});
