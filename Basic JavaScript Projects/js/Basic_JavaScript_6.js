function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_Point += 1;}
        Plus_one();
        return Starting_point;
    }
}