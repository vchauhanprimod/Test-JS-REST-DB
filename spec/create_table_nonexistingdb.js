describe("When we want to create a new table in a database that does not exist", function() {
    // test case for creation of lead
    it("Should be able to perform a successful ajax request on resource :database/table", function() {
        var asyncCallComplete, result,
        _this = this;
        // asyncCallComplete is set to true when the ajax call is complete
        asyncCallComplete = false;

        // result stores the result of the successful ajax call
        result = null;

        // SECTION 1 - call asynchronous function
        runs(function() {
            return $.ajax({
                url: window.base_url+"no_db/table",
                type: "POST",
                data:{
                    "table_name":"users", 
                    "primary_key":"id", 
                    "columns":{
                        "id":"int",
                        "salary":"varchar(20)",
                        "first_name":"varchar(20)"
                    }
                },
                success: function(data,status,xhr) {
                    asyncCallComplete = true;
                    result = data;
                //   console.log(xhr.getResponseHeader('X-Sql-Error-Code'));
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
            console.log(result);
            return expect(result['X-Sql-Error-Code']).toEqual('1049');
        });
    });
});